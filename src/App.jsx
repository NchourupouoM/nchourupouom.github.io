import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExperienceTrace from './components/ExperienceTrace';
import ProjectsBento from './components/ProjectsBento';
import TechStackNodes from './components/TechStackNodes';
import FooterContact from './components/FooterContact';
import StudioModal from './components/StudioModal';
import CvStudioModal from './components/CvStudioModal';
import { LatentSpaceBackground } from './components/LatentSpaceCanvas';
import { notifyHighValueAction } from './utils/notifyAction';

export default function App() {
  // Default language = English ('en'), Default theme = Light ('light')
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('light');
  const [activeStudioProject, setActiveStudioProject] = useState(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const handleOpenCvModal = () => {
    setCvModalOpen(true);
    notifyHighValueAction({
      actionType: 'cv_view',
      actionLabel: 'Consultation du CV en ligne (Modale)',
      details: 'CV_Nchourupouo_mohamed.pdf',
    });
  };

  const handleSelectProject = (project) => {
    setActiveStudioProject(project);
    if (project) {
      notifyHighValueAction({
        actionType: 'project_inspect',
        actionLabel: `Inspection du projet : ${project.title.fr}`,
        details: project.id,
      });
    }
  };

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('portfolio-theme-v4');
      if (saved === 'light' || saved === 'dark') {
        setTheme(saved);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem('portfolio-theme-v4', theme);
    } catch {
      // ignore storage errors
    }
    if (typeof document !== 'undefined') {
      document.body.classList.remove('theme-light', 'theme-dark');
      document.body.classList.add(theme === 'light' ? 'theme-light' : 'theme-dark');
    }
  }, [theme]);

  return (
    <div
      data-theme={theme}
      className={`relative min-h-screen transition-colors duration-200 ${
        theme === 'light' ? 'theme-light' : 'theme-dark'
      }`}
    >
      {/* Subtle Latent Space Manifold Web (visible in both Light and Dark themes) */}
      <LatentSpaceBackground theme={theme} />

      <div className="relative z-10">
        <Navbar
          lang={lang}
          setLang={setLang}
          theme={theme}
          setTheme={setTheme}
          onOpenCvModal={handleOpenCvModal}
        />

        <main>
          <HeroSection
            lang={lang}
            onOpenCvModal={handleOpenCvModal}
          />

          <ExperienceTrace lang={lang} />

          <ProjectsBento
            lang={lang}
            onSelectProject={handleSelectProject}
          />

          <TechStackNodes lang={lang} />
        </main>

        <FooterContact
          lang={lang}
          onOpenCvModal={handleOpenCvModal}
        />
      </div>

      <StudioModal
        project={activeStudioProject}
        lang={lang}
        onClose={() => setActiveStudioProject(null)}
      />

      <CvStudioModal
        isOpen={cvModalOpen}
        lang={lang}
        onClose={() => setCvModalOpen(false)}
      />
    </div>
  );
}
