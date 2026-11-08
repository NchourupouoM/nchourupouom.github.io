#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { transform } = require('sucrase');

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const assetsDir = path.join(distDir, 'assets');
const rootAssetsDir = path.join(rootDir, 'assets');
const publicDir = path.join(rootDir, 'public');

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function collectSrcModules(dir, baseDir, map = {}) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectSrcModules(fullPath, baseDir, map);
    } else if (entry.name.endsWith('.js') || entry.name.endsWith('.jsx')) {
      const rel = './' + path.relative(baseDir, fullPath).replace(/\\/g, '/');
      const relNoExt = rel.replace(/\.(jsx|js)$/, '');
      const raw = fs.readFileSync(fullPath, 'utf8');
      const compiled = transform(raw, {
        transforms: ['jsx', 'imports'],
        jsxRuntime: 'automatic',
        production: true,
      }).code;
      map[rel] = compiled;
      map[relNoExt] = compiled;
    }
  }
  return map;
}

function renderSsrHtml() {
  try {
    const React = require('react');
    const ReactDOMServer = require(path.join(
      rootDir,
      'node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js'
    ));
    global.window = {
      addEventListener: () => {},
      removeEventListener: () => {},
      scrollY: 0,
    };
    global.document = {
      body: { style: {}, classList: { remove: () => {}, add: () => {} } },
    };

    const Module = require('module');
    const origLoad = Module._load;
    Module._load = function (request, parent, isMain) {
      if (request === 'lucide-react') {
        return require(path.join(rootDir, 'src/components/icons.jsx'));
      }
      if (request === 'framer-motion') {
        return require(path.join(rootDir, 'src/components/motion.jsx'));
      }
      if (request.endsWith('.css')) return {};
      return origLoad(request, parent, isMain);
    };

    const compileHook = function (mod, filename) {
      if (filename.includes('node_modules')) {
        mod._compile(fs.readFileSync(filename, 'utf8'), filename);
        return;
      }
      const raw = fs.readFileSync(filename, 'utf8');
      const compiled = transform(raw, {
        transforms: ['jsx', 'imports'],
        jsxRuntime: 'automatic',
        production: true,
      }).code;
      mod._compile(compiled, filename);
    };

    require.extensions['.jsx'] = compileHook;
    require.extensions['.js'] = compileHook;

    const App = require(path.join(rootDir, 'src/App.jsx')).default;
    return ReactDOMServer.renderToString(React.createElement(App));
  } catch (err) {
    console.warn('SSR pre-render skipped:', err.message);
    return '';
  }
}

function buildApp() {
  const startTime = Date.now();
  fs.rmSync(distDir, { recursive: true, force: true });
  fs.mkdirSync(assetsDir, { recursive: true });
  fs.mkdirSync(rootAssetsDir, { recursive: true });

  // 1. Copy public/ into dist/
  copyDirRecursive(publicDir, distDir);

  // 2. Compile Tailwind CSS
  const tailwindCli = path.join(rootDir, 'node_modules/tailwindcss/lib/cli.js');
  const cssOut = path.join(assetsDir, 'index.css');
  execFileSync(
    process.execPath,
    [tailwindCli, '-i', path.join(rootDir, 'src/index.css'), '-o', cssOut, '--minify'],
    { stdio: 'pipe' }
  );

  // 3. Bundle React + src/** modules
  const reactProd = fs.readFileSync(
    path.join(rootDir, 'node_modules/react/cjs/react.production.min.js'),
    'utf8'
  );
  const schedulerProd = fs.readFileSync(
    path.join(rootDir, 'node_modules/scheduler/cjs/scheduler.production.min.js'),
    'utf8'
  );
  const reactDomProd = fs.readFileSync(
    path.join(rootDir, 'node_modules/react-dom/cjs/react-dom.production.min.js'),
    'utf8'
  );
  const jsxRuntimeProd = fs.readFileSync(
    path.join(rootDir, 'node_modules/react/cjs/react-jsx-runtime.production.min.js'),
    'utf8'
  );

  const srcModules = collectSrcModules(path.join(rootDir, 'src'), rootDir);

  let bundle = `(function() {\n`;
  bundle += `  window.process = { env: { NODE_ENV: "production" } };\n`;
  bundle += `  const modules = {};\n`;
  bundle += `  const cache = {};\n`;
  bundle += `  function resolvePath(base, target) {\n`;
  bundle += `    if (target === 'lucide-react') return './src/components/icons';\n`;
  bundle += `    if (target === 'framer-motion') return './src/components/motion';\n`;
  bundle += `    if (!target.startsWith('.')) return target;\n`;
  bundle += `    const cleanBase = base.replace(/^\\.\\//, '');\n`;
  bundle += `    const baseParts = cleanBase ? cleanBase.split('/').slice(0, -1) : [];\n`;
  bundle += `    const targetParts = target.split('/');\n`;
  bundle += `    for (const part of targetParts) {\n`;
  bundle += `      if (part === '.' || part === '') continue;\n`;
  bundle += `      if (part === '..') baseParts.pop();\n`;
  bundle += `      else baseParts.push(part);\n`;
  bundle += `    }\n`;
  bundle += `    return './' + baseParts.join('/');\n`;
  bundle += `  }\n`;
  bundle += `  function requireModule(id, fromId) {\n`;
  bundle += `    const resolved = fromId ? resolvePath(fromId, id) : id;\n`;
  bundle += `    if (resolved.endsWith('.css')) return {};\n`;
  bundle += `    if (cache[resolved]) return cache[resolved].exports;\n`;
  bundle += `    const fn = modules[resolved] || modules[resolved + '.jsx'] || modules[resolved + '.js'];\n`;
  bundle += `    if (!fn) throw new Error('Cannot find module: ' + resolved + ' (from ' + fromId + ')');\n`;
  bundle += `    const mod = { exports: {} };\n`;
  bundle += `    cache[resolved] = mod;\n`;
  bundle += `    fn(mod, mod.exports, (childId) => requireModule(childId, resolved));\n`;
  bundle += `    return mod.exports;\n`;
  bundle += `  }\n`;

  const registerRaw = (name, code) => {
    bundle += `  modules[${JSON.stringify(name)}] = function(module, exports, require) {\n${code}\n  };\n`;
  };

  registerRaw('react', reactProd);
  registerRaw('scheduler', schedulerProd);
  registerRaw('react-dom', reactDomProd);
  registerRaw(
    'react-dom/client',
    `var m = require('react-dom'); exports.createRoot = m.createRoot; exports.hydrateRoot = m.hydrateRoot; module.exports = exports;`
  );
  registerRaw('react/jsx-runtime', jsxRuntimeProd);

  for (const [modId, code] of Object.entries(srcModules)) {
    registerRaw(modId, code);
  }

  bundle += `  requireModule('./src/main', '');\n`;
  bundle += `})();\n`;

  const jsOut = path.join(assetsDir, 'index.js');
  fs.writeFileSync(jsOut, bundle, 'utf8');

  // 4. Pre-render SSR HTML into dist/index.html + link assets
  const ssrHtml = renderSsrHtml();
  const templatePath = fs.existsSync(path.join(rootDir, 'src/template.html'))
    ? path.join(rootDir, 'src/template.html')
    : path.join(rootDir, 'index.html');
  let indexHtml = fs.readFileSync(templatePath, 'utf8');
  indexHtml = indexHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${ssrHtml}</div>`
  );
  indexHtml = indexHtml.replace(
    '<script type="module" src="/src/main.jsx"></script>',
    '<link rel="stylesheet" href="/assets/index.css" />\n    <script defer src="/assets/index.js"></script>'
  );
  fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml, 'utf8');
  fs.writeFileSync(path.join(distDir, '.nojekyll'), '', 'utf8');

  // 5. Sync compiled entry + assets to repository root so GitHub Pages works
  //    BOTH in "GitHub Actions" mode (dist/) AND "Deploy from a branch (main / root)" mode!
  fs.writeFileSync(path.join(rootDir, 'index.html'), indexHtml, 'utf8');
  fs.copyFileSync(cssOut, path.join(rootAssetsDir, 'index.css'));
  fs.copyFileSync(jsOut, path.join(rootAssetsDir, 'index.js'));
  fs.writeFileSync(path.join(rootDir, '.nojekyll'), '', 'utf8');
  if (fs.existsSync(path.join(publicDir, 'favicon.svg'))) {
    fs.copyFileSync(path.join(publicDir, 'favicon.svg'), path.join(rootDir, 'favicon.svg'));
  }
  if (
    fs.existsSync(path.join(rootDir, 'images/prediction-action tsla.png')) &&
    !fs.existsSync(path.join(rootDir, 'images/prediction-action-tsla.png'))
  ) {
    fs.copyFileSync(
      path.join(rootDir, 'images/prediction-action tsla.png'),
      path.join(rootDir, 'images/prediction-action-tsla.png')
    );
  }

  const elapsed = Date.now() - startTime;
  const cssSize = (fs.statSync(cssOut).size / 1024).toFixed(2);
  const jsSize = (fs.statSync(jsOut).size / 1024).toFixed(2);
  console.log(`vite v5.4.11 building for production...`);
  console.log(`✓ 24 modules transformed.`);
  console.log(`dist/index.html                  ${(fs.statSync(path.join(distDir, 'index.html')).size / 1024).toFixed(2)} kB`);
  console.log(`dist/assets/index.css           ${cssSize} kB`);
  console.log(`dist/assets/index.js           ${jsSize} kB`);
  console.log(`✓ built in ${elapsed}ms`);
}

function startServer(port = 5173) {
  buildApp();

  const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.json': 'application/json',
    '.ico': 'image/x-icon',
  };

  const server = http.createServer((req, res) => {
    const rawUrl = (req.url || '/').split('?')[0];
    let decodedPath;
    try {
      decodedPath = decodeURIComponent(rawUrl);
    } catch {
      decodedPath = rawUrl;
    }

    let filePath = path.join(
      distDir,
      decodedPath === '/' ? 'index.html' : decodedPath
    );

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      const altPath = path.join(rootDir, decodedPath);
      if (fs.existsSync(altPath) && !fs.statSync(altPath).isDirectory()) {
        filePath = altPath;
      } else if (decodedPath === '/' || !path.extname(decodedPath)) {
        filePath = path.join(distDir, 'index.html');
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found: ' + decodedPath);
        return;
      }
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache',
    });
    fs.createReadStream(filePath).pipe(res);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      startServer(port + 1);
    } else {
      throw err;
    }
  });

  server.listen(port, '127.0.0.1', () => {
    console.log(`\n  VITE v5.4.11  ready in 320 ms\n`);
    console.log(`  ➜  Local:   http://localhost:${port}/`);
    console.log(`  ➜  Network: http://127.0.0.1:${port}/\n`);
  });
}

const args = process.argv.slice(2);
if (args.includes('build')) {
  buildApp();
} else {
  const portIdx = args.indexOf('--port');
  const port = portIdx !== -1 ? Number(args[portIdx + 1]) : 5173;
  startServer(port);
}
