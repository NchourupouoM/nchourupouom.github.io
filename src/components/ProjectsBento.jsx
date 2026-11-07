import React, { useState } from 'react';
import { ExternalLink, Github, Maximize2 } from 'lucide-react';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projects';

function CleanArchitectureDiagram({ project, lang }) {
  return (
    <div className="w-full h-48 sm:h-52 bg-slate-950/90 border-b border-slate-800/80 p-5 flex flex-col justify-between">
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span className="font-medium text-sky-400">
          {project.context[lang]}
        </span>
        <span className="text-[11px] text-slate-500">
          {lang === 'fr' ? 'Architecture Système' : 'System Architecture'}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-auto">
        {project.nodes.map((node, i) => (
          <div
            key={node}
            className="rounded-lg bg-slate-900/90 border border-slate-800 p-2.5 flex flex-col justify-between"
          >
            <span className="text-[10px] font-medium text-sky-400">
              0{i + 1}
            </span>
            <span className="text-xs font-medium text-slate-100 mt-1 leading-snug">
              {node}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-400">
        <span>{project.techStack.slice(0, 3).join(' · ')}</span>
        <span className="text-sky-400">
          {lang === 'fr' ? 'Détails →' : 'Details →'}
        </span>
      </div>
    </div>
  );
}

function ProjectMediaCard({ project, lang, onSelectProject }) {
  const [imgSrc, setImgSrc] = useState(project.simulationMedia);
  const [hasError, setHasError] = useState(false);

  const handleImgError = () => {
    if (project.fallbackMedia && imgSrc !== project.fallbackMedia) {
      setImgSrc(project.fallbackMedia);
    } else {
      setHasError(true);
    }
  };

  if (!project.simulationMedia || hasError) {
    return (
      <div
        onClick={() => onSelectProject(project)}
        className="cursor-pointer group"
      >
        <CleanArchitectureDiagram project={project} lang={lang} />
      </div>
    );
  }

  return (
    <div
      onClick={() => onSelectProject(project)}
      className="relative h-48 sm:h-52 bg-slate-950 border-b border-slate-800/80 overflow-hidden cursor-pointer group"
    >
      <img
        src={imgSrc}
        alt={project.title[lang]}
        onError={handleImgError}
        loading="lazy"
        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/45 transition-colors flex items-end justify-end p-3">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/95 border border-slate-700 text-xs font-medium text-slate-100 opacity-0 group-hover:opacity-100 transition-opacity shadow">
          <Maximize2 className="w-3.5 h-3.5 text-sky-400" />
          <span>{lang === 'fr' ? 'Agrandir' : 'Expand'}</span>
        </span>
      </div>
    </div>
  );
}

export default function ProjectsBento({ lang, onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 border-b border-slate-800/70"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Section Header + Clean Filter Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <div className="section-label">
              {lang === 'fr' ? 'Projets & Réalisations' : 'Selected Projects'}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-50">
              {lang === 'fr'
                ? 'Systèmes IA, Deep Learning & Data Analytics'
                : 'AI Systems, Deep Learning & Data Analytics'}
            </h2>
          </div>

          <div
            role="tablist"
            className="flex flex-wrap items-center gap-1.5 bg-slate-900/90 p-1 rounded-lg border border-slate-800 self-start sm:self-auto"
          >
            {PROJECT_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-sky-500 text-slate-950 font-semibold'
                      : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {cat.label[lang]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Scroll Hint Bar */}
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span>
            {lang === 'fr'
              ? `${filteredProjects.length} projets affichés`
              : `Showing ${filteredProjects.length} projects`}
          </span>
          <span className="font-medium text-sky-400">
            {lang === 'fr'
              ? 'Conteneur déroulant · Faites défiler pour voir plus ↓'
              : 'Scrollable container · Scroll inside to explore ↓'}
          </span>
        </div>

        {/* Bounded Scrollable 2-Column Project Container */}
        <div className="max-h-[640px] overflow-y-auto pr-2 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="clean-card rounded-xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <ProjectMediaCard
                    project={project}
                    lang={lang}
                    onSelectProject={onSelectProject}
                  />

                  <div className="p-5 sm:p-6 space-y-2.5">
                    <div className="text-xs font-medium text-sky-400">
                      {project.context[lang]}
                    </div>

                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-lg font-semibold text-slate-100 hover:text-sky-400 transition-colors cursor-pointer leading-snug"
                    >
                      {project.title[lang]}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {project.description[lang]}
                    </p>
                  </div>
                </div>

                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 space-y-4">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Clean Action Links */}
                  <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-medium">
                    <div className="flex items-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors"
                        >
                          <span>{project.liveLabel[lang]}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1.5 text-slate-300 hover:text-slate-100 transition-colors"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-sky-400" />
                        <span>
                          {lang === 'fr' ? "Voir l'aperçu" : 'Inspect preview'}
                        </span>
                      </button>
                    </div>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-200 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export { CleanArchitectureDiagram };
