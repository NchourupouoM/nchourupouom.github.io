import React, { useState } from 'react';
import {
  MapPin,
  Mail,
  Github,
  Linkedin,
  Youtube,
  FileText,
  Download,
  ArrowRight,
} from 'lucide-react';
import { PROFILE } from '../data/profile';
import { LatentSpaceExplainer } from './LatentSpaceCanvas';
import { notifyHighValueAction } from '../utils/notifyAction';

export default function HeroSection({ lang, onOpenCvModal }) {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <>
      {/* HERO SECTION — Clean, Editorial, Focused */}
      <section id="top" className="pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-slate-800/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-5 max-w-2xl">
              {/* Location & Status */}
              <div className="inline-flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
                <span className="inline-flex items-center gap-1.5 text-emerald-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  {lang === 'fr' ? 'Disponible' : 'Available'}
                </span>
                <span>·</span>
                <span className="inline-flex items-center gap-1 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  {PROFILE.location[lang]}
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50 tracking-tight leading-tight">
                  {PROFILE.name}
                </h1>
                <p className="text-lg sm:text-xl font-medium text-sky-400">
                  {PROFILE.role[lang]}
                </p>
              </div>

              {/* Tagline + Clear Bio */}
              <div className="space-y-3 text-slate-300 text-base leading-relaxed">
                <p className="font-medium text-slate-100">
                  {PROFILE.tagline[lang]}
                </p>
                <p className="text-slate-400 text-[15px] sm:text-base leading-relaxed">
                  {PROFILE.bio[lang]}
                </p>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors"
                >
                  <span>
                    {lang === 'fr' ? 'Voir mes projets' : 'View my projects'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={onOpenCvModal}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-700 transition-colors"
                >
                  <FileText className="w-4 h-4 text-sky-400" />
                  <span>
                    {lang === 'fr' ? 'Consulter mon CV' : 'View Resume'}
                  </span>
                </button>

                <a
                  href={PROFILE.cvUrl}
                  download="CV_Nchourupouo_mohamed.pdf"
                  onClick={() =>
                    notifyHighValueAction({
                      actionType: 'cv_download',
                      actionLabel: 'Téléchargement du CV PDF (Hero)',
                      details: 'CV_Nchourupouo_mohamed.pdf',
                    })
                  }
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-slate-100 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 transition-colors"
                >
                  <Download className="w-4 h-4 text-slate-400" />
                  <span>PDF</span>
                </a>
              </div>

              {/* Clean Social Links Row */}
              <div className="pt-2 flex flex-wrap items-center gap-5 text-xs sm:text-sm text-slate-400">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-slate-100 transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    notifyHighValueAction({
                      actionType: 'contact_click',
                      actionLabel: 'Clic sur le profil LinkedIn (Hero)',
                      details: PROFILE.linkedin,
                    })
                  }
                  className="inline-flex items-center gap-1.5 hover:text-slate-100 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.youtube.com/@espacelatent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-slate-100 transition-colors"
                >
                  <Youtube className="w-4 h-4 text-red-500" />
                  <span>@espacelatent</span>
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  onClick={() =>
                    notifyHighValueAction({
                      actionType: 'contact_click',
                      actionLabel: 'Clic sur E-mail Direct (Hero)',
                      details: PROFILE.email,
                    })
                  }
                  className="inline-flex items-center gap-1.5 hover:text-slate-100 transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-300" />
                  <span>{PROFILE.email}</span>
                </a>
              </div>
            </div>

            {/* Clean Portrait Card */}
            <div className="shrink-0 self-start md:self-center">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl">
                {!avatarError ? (
                  <img
                    src={PROFILE.avatarUrl}
                    alt={PROFILE.name}
                    onError={() => setAvatarError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-sky-400">
                    MN
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT, SPECIALIZATIONS & LATENT SPACE (@espacelatent) */}
      <section id="about" className="py-16 sm:py-20 border-b border-slate-800/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="max-w-3xl space-y-2">
            <div className="section-label">
              {lang === 'fr' ? 'À propos · Parcours' : 'About · Journey'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-50">
              {PROFILE.aboutIntro.title[lang]}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              {PROFILE.aboutIntro.subtitle[lang]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PROFILE.specializations.map((spec) => (
              <div
                key={spec.id}
                className="clean-card rounded-xl p-6 flex flex-col justify-between gap-5"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-100 leading-snug">
                    {spec.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-sky-400">
                    {spec.lead[lang]}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {spec.body[lang]}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  {spec.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Latent Space Explainer & @espacelatent YouTube Channel */}
          <LatentSpaceExplainer lang={lang} />
        </div>
      </section>
    </>
  );
}
