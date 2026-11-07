import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { CleanArchitectureDiagram } from './ProjectsBento';

export default function StudioModal({ project, lang, onClose }) {
  const [imgSrc, setImgSrc] = useState(project?.simulationMedia || null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (project) {
      setImgSrc(project.simulationMedia);
      setImgError(false);
    }
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleImgError = () => {
    if (project.fallbackMedia && imgSrc !== project.fallbackMedia) {
      setImgSrc(project.fallbackMedia);
    } else {
      setImgError(true);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={project.title[lang]}
        className="w-full max-w-4xl bg-[#111827] border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="px-5 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
          <div>
            <div className="text-xs font-medium text-sky-400">
              {project.context[lang]}
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-100">
              {project.title[lang]}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="max-h-[80vh] overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* Media or Diagram */}
          <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex items-center justify-center">
            {project.simulationMedia && !imgError ? (
              <img
                src={imgSrc}
                alt={project.title[lang]}
                onError={handleImgError}
                className="w-full h-auto max-h-[54vh] object-contain"
              />
            ) : (
              <CleanArchitectureDiagram project={project} lang={lang} />
            )}
          </div>

          {/* Description & Key Points */}
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.description[lang]}
            </p>

            {project.architectureDetails && (
              <ul className="space-y-2">
                {project.architectureDetails[lang].map((step, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-medium bg-slate-900 text-slate-200 border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors"
              >
                <span>{project.liveLabel[lang]}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
