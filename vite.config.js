import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/',
  esbuild: {
    jsx: 'automatic',
  },
  resolve: {
    alias: {
      'lucide-react': path.resolve('./src/components/icons.jsx'),
      'framer-motion': path.resolve('./src/components/motion.jsx'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
});
