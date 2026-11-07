import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import {
  TECH_STACK_GROUPS,
  EDUCATION,
  CERTIFICATIONS,
} from '../data/profile';

export default function TechStackNodes({ lang }) {
  return (
    <>
      {/* SKILLS & TECH STACK SECTION */}
      <section
        id="skills"
        className="py-16 sm:py-20 border-b border-slate-800/70"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="space-y-2 max-w-2xl">
            <div className="section-label">
              {lang === 'fr' ? 'Compétences & Stack' : 'Skills & Stack'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-50">
              {lang === 'fr'
                ? 'Outils, frameworks et technologies'
                : 'Tools, Frameworks & Technologies'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TECH_STACK_GROUPS.map((group) => (
              <div
                key={group.id}
                className="clean-card rounded-xl p-5 sm:p-6 space-y-3.5"
              >
                <h3 className="text-base font-semibold text-slate-100">
                  {group.title[lang]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-md text-xs font-medium bg-slate-900 text-slate-200 border border-slate-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS SECTION (Scrollable containers) */}
      <section
        id="education"
        className="py-16 sm:py-20 border-b border-slate-800/70"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="space-y-2 max-w-2xl">
            <div className="section-label">
              {lang === 'fr'
                ? 'Formation & Certifications'
                : 'Education & Certifications'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-50">
              {lang === 'fr'
                ? 'Cursus académique et validations techniques'
                : 'Academic Background & Technical Credentials'}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Academic Education (7 cols, scrollable) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  {lang === 'fr' ? 'Formation Académique' : 'Education'}
                </h3>
              </div>

              <div className="max-h-[380px] overflow-y-auto pr-1.5 space-y-4">
                {EDUCATION.map((edu) => (
                  <div
                    key={edu.id}
                    className="clean-card rounded-xl p-5 sm:p-6 space-y-2"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="text-xs font-medium text-sky-400">
                        {edu.institution}
                      </span>
                      <span className="text-xs text-slate-400">
                        {edu.period}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-semibold text-slate-100">
                      {edu.degree[lang]}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {edu.details[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications (5 cols, scrollable, DataCamp items kept without portfolio link) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  {lang === 'fr' ? 'Certifications' : 'Certifications'}
                </h3>
                <span className="text-xs text-slate-400">
                  {lang === 'fr'
                    ? `${CERTIFICATIONS.length} titres · Défiler ↓`
                    : `${CERTIFICATIONS.length} items · Scroll ↓`}
                </span>
              </div>

              <div className="clean-card rounded-xl max-h-[380px] overflow-y-auto divide-y divide-slate-800/80">
                {CERTIFICATIONS.map((cert) =>
                  cert.url ? (
                    <a
                      key={cert.id}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 flex items-center justify-between gap-3 hover:bg-slate-900/60 transition-colors group"
                    >
                      <div>
                        <div className="text-xs font-medium text-sky-400">
                          {cert.issuer}
                        </div>
                        <div className="text-sm font-medium text-slate-200 group-hover:text-slate-50">
                          {cert.title}
                        </div>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 shrink-0 transition-colors" />
                    </a>
                  ) : (
                    <div
                      key={cert.id}
                      className="p-4 flex items-center justify-between gap-3"
                    >
                      <div>
                        <div className="text-xs font-medium text-sky-400">
                          {cert.issuer}
                        </div>
                        <div className="text-sm font-medium text-slate-200">
                          {cert.title}
                        </div>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
