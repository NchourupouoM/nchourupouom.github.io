import React, { useEffect, useRef, useState } from 'react';
import { Youtube, ExternalLink, Sparkles } from 'lucide-react';

/**
 * Full-page subtle Latent Space manifold background canvas (works in both Dark and Light themes).
 * Renders semantic embedding clusters and nearest-neighbor cosine-similarity edges ("toile de l'espace latent").
 */
export function LatentSpaceBackground({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const mouse = { x: -9999, y: -9999 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Semantic labels for anchor vectors in the latent space
    const anchorLabels = [
      'z₁ · LangGraph',
      'z₂ · PyTorch',
      'z₃ · LLM Embeddings',
      'z₄ · Time Series',
      'z₅ · @espacelatent',
      'z₆ · Computer Vision',
      'z₇ · Power BI & DAX',
      'z₈ · FastAPI',
      'z₉ · Unsloth QLoRA',
    ];

    const nodeCount = Math.min(54, Math.max(32, Math.floor((width * height) / 28000)));
    const nodes = Array.from({ length: nodeCount }, (_, i) => {
      const isAnchor = i < anchorLabels.length;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        radius: isAnchor ? 2.6 : 1.5,
        label: isAnchor ? anchorLabels[i] : null,
      };
    });

    const maxDist = 175;
    const mouseRadius = 210;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isLight = theme === 'light';
      const baseRgb = isLight ? '2, 132, 199' : '56, 189, 248';
      const secondaryRgb = isLight ? '15, 23, 42' : '148, 163, 184';

      // Update positions
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      // Draw manifold edges (latent space nearest-neighbor web)
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (isLight ? 0.14 : 0.16);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${baseRgb}, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }

        // Connect to mouse query vector q(x,y)
        const mdx = a.x - mouse.x;
        const mdy = a.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < mouseRadius) {
          const mAlpha = (1 - mDist / mouseRadius) * (isLight ? 0.28 : 0.32);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(${baseRgb}, ${mAlpha.toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Draw embedding nodes & subtle anchor coordinates
      ctx.font = '500 10px Inter, system-ui, sans-serif';
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.label
          ? `rgba(${baseRgb}, ${isLight ? 0.55 : 0.65})`
          : `rgba(${secondaryRgb}, ${isLight ? 0.25 : 0.32})`;
        ctx.fill();

        if (n.label) {
          ctx.fillStyle = `rgba(${secondaryRgb}, ${isLight ? 0.42 : 0.42})`;
          ctx.fillText(n.label, n.x + 6, n.y + 3);
        }
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 w-full h-full"
    />
  );
}

/**
 * Interactive Latent Space Explainer & @espacelatent YouTube Channel Card
 */
export function LatentSpaceExplainer({ lang }) {
  const [activeCluster, setActiveCluster] = useState(0);

  const clusters = [
    {
      id: 'c-llm',
      coords: 'z₁ = [0.84, -0.19, 0.92]',
      label: { fr: 'Agents IA & LLMs', en: 'AI Agents & LLMs' },
      neighbors: ['Transformers', 'LangGraph', 'RAG', 'Unsloth QLoRA', 'Attention'],
      desc: {
        fr: "Dans l'espace latent d'un LLM, les phrases et concepts partageant le même sens se regroupent géométriquement sous forme de vecteurs proches (embeddings).",
        en: 'Inside an LLM latent space, sentences and concepts sharing semantic meaning cluster together geometrically as nearby embedding vectors.',
      },
    },
    {
      id: 'c-vision',
      coords: 'z₂ = [-0.41, 0.77, 0.63]',
      label: { fr: 'Vision & Anomalies', en: 'Vision & Anomalies' },
      neighbors: ['PyTorch CNN', 'Signatures', 'Actes Authentiques', 'Score Anomalie'],
      desc: {
        fr: "Pour la détection de fraude (BUNEC), les documents authentiques forment une variété dense dans l'espace latent, tandis qu'une falsification apparaît comme un point isolé hors du maillage.",
        en: 'In document fraud detection (BUNEC), authentic records form a dense manifold in latent space, while a forgery projects as an outlier vector away from the web.',
      },
    },
    {
      id: 'c-ts',
      coords: 'z₃ = [0.29, 0.68, -0.54]',
      label: { fr: 'Séries Temporelles', en: 'Time Series' },
      neighbors: ['États Cachés LSTM', 'NeuralProphet', 'Saisonnalité', 'TSLA & Hydro'],
      desc: {
        fr: "Les réseaux récurrents (LSTM) compressent la dynamique temporelle passée dans un vecteur d'état caché hₜ qui résume la tendance et la saisonnalité future.",
        en: 'Recurrent networks (LSTM) compress historical dynamics into a latent hidden state vector hₜ that captures momentum and seasonality.',
      },
    },
  ];

  const current = clusters[activeCluster];

  return (
    <div className="clean-card rounded-2xl p-6 sm:p-7 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Explanation of Latent Space + @espacelatent YouTube Channel */}
        <div className="lg:col-span-7 space-y-3.5">
          <div className="inline-flex flex-wrap items-center gap-2">
            <span className="section-label">
              {lang === 'fr'
                ? "Concept Clé · L'Espace Latent"
                : 'Core Concept · The Latent Space'}
            </span>
            <span className="text-slate-500">·</span>
            <a
              href="https://www.youtube.com/@espacelatent"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/25 hover:bg-red-500/20 transition-colors"
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>@espacelatent</span>
            </a>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-100 leading-snug">
            {lang === 'fr'
              ? "Espace Latent"
              : 'Latent Space'}
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {lang === 'fr'
              ? "En Intelligence Artificielle et en Deep Learning, l'espace latent est la représentation géométrique interne où un modèle projette des données complexes (textes, images, séries temporelles) sous forme de vecteurs reliés par leur proximité sémantique — semblable au maillage qui anime l'arrière-plan de ce portfolio. C'est également le nom de ma chaîne YouTube "
              : 'In Artificial Intelligence and Deep Learning, the latent space is the internal geometric manifold where a model maps complex data (text, images, time series) as vectors connected by semantic proximity—mirrored by the interactive web in the background of this site. It is also the name of my YouTube channel '}
            <a
              href="https://www.youtube.com/@espacelatent"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 font-semibold hover:underline"
            >
              @espacelatent
            </a>
            {lang === 'fr'
              ? ", dédiée à la vulgarisation de l'IA, du Machine Learning et de la Data Science."
              : ', dedicated to explaining AI, Machine Learning, and Data Science.'}
          </p>

          <div className="pt-1 flex flex-wrap items-center gap-3">
            <a
              href="https://www.youtube.com/@espacelatent"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-red-600 hover:bg-red-500 text-white transition-colors shadow-sm"
            >
              <Youtube className="w-4 h-4" />
              <span>
                {lang === 'fr'
                  ? 'Découvrir ma chaîne YouTube @espacelatent'
                  : 'Visit my YouTube channel @espacelatent'}
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right: Interactive Latent Cluster Inspector */}
        <div className="lg:col-span-5 rounded-xl bg-slate-950/90 border border-slate-800 p-4 sm:p-5 space-y-4">
          <div className="flex items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-slate-200">
              {lang === 'fr'
                ? 'Explorateur de Clusters Latents'
                : 'Latent Cluster Inspector'}
            </span>
            <span className="font-mono text-[11px] text-sky-400">
              {current.coords}
            </span>
          </div>

          {/* Cluster Selector Tabs */}
          <div className="grid grid-cols-3 gap-1.5 bg-slate-900 p-1 rounded-lg border border-slate-800">
            {clusters.map((c, idx) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCluster(idx)}
                className={`px-2 py-1.5 rounded-md text-[11px] font-medium transition-colors truncate ${
                  activeCluster === idx
                    ? 'bg-sky-500 text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {c.label[lang]}
              </button>
            ))}
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            {current.desc[lang]}
          </p>

          {/* Nearest Neighbor Vectors */}
          <div className="space-y-1.5 pt-1 border-t border-slate-800/80">
            <div className="text-[11px] text-slate-400">
              {lang === 'fr'
                ? 'Vecteurs voisins dans le maillage :'
                : 'Nearest neighbor vectors in manifold:'}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {current.neighbors.map((n) => (
                <span
                  key={n}
                  className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-900 text-sky-400 border border-slate-800"
                >
                  ◦ {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

