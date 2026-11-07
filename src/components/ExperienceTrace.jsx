import React from 'react';
import { EXPERIENCES } from '../data/profile';

export default function ExperienceTrace({ lang }) {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 border-b border-slate-800/70"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Section Heading + Scroll Indicator */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="section-label">
              {lang === 'fr'
                ? 'Expériences Professionnelles'
                : 'Professional Experience'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-50">
              {lang === 'fr'
                ? 'Parcours en entreprise et sur le terrain'
                : 'Industry & Applied Engineering Experience'}
            </h2>
          </div>

          <span className="text-xs font-medium text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
            {lang === 'fr'
              ? `${EXPERIENCES.length} postes · Défiler ↓`
              : `${EXPERIENCES.length} roles · Scrollable ↓`}
          </span>
        </div>

        {/* Scrollable Experience Container */}
        <div className="max-h-[480px] overflow-y-auto pr-2 space-y-4 rounded-xl">
          {EXPERIENCES.map((exp) => (
            <article
              key={exp.id}
              className="clean-card rounded-xl p-5 sm:p-6 space-y-3.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-100">
                    {exp.role[lang]}{' '}
                    <span className="text-sky-400 font-medium">
                      · {exp.company}
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    {exp.location}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 shrink-0">
                  {exp.current && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  )}
                  <span className="text-xs sm:text-sm font-medium text-slate-300 bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
                    {exp.period[lang]}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-[15px] text-slate-200 leading-relaxed">
                {exp.summary[lang]}
              </p>

              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-400">
                {exp.highlights[lang].map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400/80 mt-2 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
