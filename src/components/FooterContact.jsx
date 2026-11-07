import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Youtube,
  FileText,
  Download,
  ExternalLink,
} from 'lucide-react';
import { PROFILE } from '../data/profile';

export default function FooterContact({ lang, onOpenCvModal }) {
  return (
    <footer id="contact" className="py-16 sm:py-20 bg-[#0b0f17]/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Callout */}
          <div className="md:col-span-7 space-y-4">
            <div className="section-label">Contact</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-50">
              {lang === 'fr'
                ? 'Discutons de vos projets IA, Data ou Backend'
                : "Let's discuss your AI, Data, or Backend needs"}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-lg leading-relaxed">
              {lang === 'fr'
                ? "Basé à Yaoundé, Cameroun. Ouvert aux opportunités d'AI/ML Engineer, Data Scientist et Python Developer ainsi qu'aux collaborations techniques."
                : 'Based in Yaoundé, Cameroon. Open to AI/ML Engineer, Data Scientist, and Python Developer opportunities and technical collaborations.'}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{PROFILE.email}</span>
              </a>

              <button
                type="button"
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>{lang === 'fr' ? 'Consulter le CV' : 'View CV'}</span>
              </button>

              <a
                href={PROFILE.cvUrl}
                download="CV_Nchourupouo_mohamed.pdf"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-sm font-medium bg-slate-900/70 hover:bg-slate-900 text-slate-300 border border-slate-800 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>PDF</span>
              </a>
            </div>
          </div>

          {/* Right: Clean Contact Details */}
          <div className="md:col-span-5 clean-card rounded-xl p-5 sm:p-6 space-y-3.5 text-sm">
            <div className="flex items-center justify-between gap-3">
              <span className="text-slate-400 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>{lang === 'fr' ? 'Localisation' : 'Location'}</span>
              </span>
              <span className="text-slate-200 font-medium">
                {PROFILE.location[lang]}
              </span>
            </div>

            <div className="flex items-center justify-between gap-3">
              <span className="text-slate-400 flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400" />
                <span>{lang === 'fr' ? 'Téléphone' : 'Phone'}</span>
              </span>
              <a
                href="tel:+237698919105"
                className="text-slate-200 hover:text-sky-400 font-medium"
              >
                {PROFILE.phoneDisplay}
              </a>
            </div>

            <div className="flex items-center justify-between gap-3">
              <span className="text-slate-400 flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </span>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 font-medium"
              >
                <span>mohamed-nchourupouo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex items-center justify-between gap-3">
              <span className="text-slate-400 flex items-center gap-2">
                <Github className="w-4 h-4 text-sky-400" />
                <span>GitHub</span>
              </span>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 font-medium"
              >
                <span>NchourupouoM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex items-center justify-between gap-3">
              <span className="text-slate-400 flex items-center gap-2">
                <Youtube className="w-4 h-4 text-red-500" />
                <span>YouTube</span>
              </span>
              <a
                href="https://www.youtube.com/@espacelatent"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 font-medium"
              >
                <span>@espacelatent</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {PROFILE.name} ·{' '}
            {PROFILE.role[lang]}
          </div>
          <div>
            {lang === 'fr'
              ? 'Français (Natif) · Anglais (Professionnel)'
              : 'French (Native) · English (Professional)'}
          </div>
        </div>
      </div>
    </footer>
  );
}
