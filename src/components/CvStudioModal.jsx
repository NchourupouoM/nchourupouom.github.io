import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { PROFILE } from '../data/profile';

export default function CvStudioModal({ isOpen, lang, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Curriculum Vitae Nchourupouo Mohamed"
        className="w-full max-w-4xl h-[86vh] bg-[#111827] border border-slate-700 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
      >
        <div className="px-4 sm:px-6 py-3.5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
            <FileText className="w-4 h-4 text-sky-400" />
            <span>CV_Nchourupouo_mohamed.pdf</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PROFILE.cvUrl}
              download="CV_Nchourupouo_mohamed.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-sky-500 text-slate-950 hover:bg-sky-400 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === 'fr' ? 'Télécharger' : 'Download'}</span>
            </a>

            <a
              href={PROFILE.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-slate-900 border border-slate-700 hover:bg-slate-800 transition-colors"
            >
              <span>{lang === 'fr' ? 'Nouvel onglet' : 'New tab'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-slate-950">
          <iframe
            src={PROFILE.cvUrl}
            title="CV Nchourupouo Mohamed"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
}
