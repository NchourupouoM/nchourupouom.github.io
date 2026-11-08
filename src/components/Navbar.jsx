import React, { useState, useEffect, useRef } from 'react';
import { FileText, Download, Menu, X, Sun, Moon } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { notifyHighValueAction } from '../utils/notifyAction';

export default function Navbar({ lang, setLang, theme, setTheme, onOpenCvModal }) {
  const [isShrunk, setIsShrunk] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setAtTop(currentY < 20);

      if (currentY <= 35) {
        // Always expanded near top of page
        setIsShrunk(false);
      } else if (currentY > lastScrollY.current + 6 && currentY > 60) {
        // Scrolling down -> shrink into compact pill (like cleeroute.com)
        setIsShrunk(true);
      } else if (currentY < lastScrollY.current - 6) {
        // Scrolling up -> expand back to full size
        setIsShrunk(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: lang === 'fr' ? 'À propos' : 'About' },
    { href: '#experience', label: lang === 'fr' ? 'Expérience' : 'Experience' },
    { href: '#projects', label: lang === 'fr' ? 'Projets' : 'Projects' },
    { href: '#skills', label: lang === 'fr' ? 'Compétences' : 'Skills' },
    { href: '#education', label: lang === 'fr' ? 'Formation' : 'Education' },
    { href: '#contact', label: lang === 'fr' ? 'Contact' : 'Contact' },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="sticky top-0 z-40 px-3 sm:px-6 pt-2 transition-all duration-300 pointer-events-none">
      <div
        className={`pointer-events-auto mx-auto transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center justify-between ${
          isShrunk
            ? 'max-w-3xl h-11 px-4 rounded-full bg-[#0b0f17]/90 backdrop-blur-xl border border-slate-700/80 shadow-xl'
            : atTop
            ? 'max-w-5xl h-16 px-4 sm:px-5 rounded-2xl bg-[#0b0f17]/60 backdrop-blur-md border border-transparent'
            : 'max-w-5xl h-15 px-5 rounded-2xl bg-[#0b0f17]/88 backdrop-blur-xl border border-slate-800/90 shadow-md'
        }`}
      >
        {/* Name / Logo (shrinks smoothly when compact) */}
        <a
          href="#top"
          className={`font-semibold text-slate-100 hover:text-sky-400 transition-all tracking-tight shrink-0 ${
            isShrunk ? 'text-xs sm:text-sm' : 'text-base'
          }`}
        >
          {isShrunk ? PROFILE.shortName : PROFILE.name}
        </a>

        {/* Desktop Nav Links */}
        <nav
          className={`hidden md:flex items-center transition-all duration-300 ${
            isShrunk ? 'gap-3.5 text-xs' : 'gap-6 text-sm'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-400 hover:text-slate-100 transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Theme Switcher + Language Toggle + CV */}
        <div
          className={`hidden md:flex items-center transition-all duration-300 ${
            isShrunk ? 'gap-1.5' : 'gap-2.5'
          }`}
        >
          {/* Dual Theme Switcher (Light / Dark) */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === 'dark' ? 'Activer le thème clair' : 'Activer le thème sombre'
            }
            title={
              theme === 'dark'
                ? lang === 'fr'
                  ? 'Passer au thème clair'
                  : 'Switch to light theme'
                : lang === 'fr'
                ? 'Passer au thème sombre'
                : 'Switch to dark theme'
            }
            className={`inline-flex items-center gap-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-medium transition-all ${
              isShrunk ? 'px-2 py-1 text-[11px]' : 'px-2.5 py-1.5 text-xs'
            }`}
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                {!isShrunk && <span>{lang === 'fr' ? 'Clair' : 'Light'}</span>}
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-sky-400" />
                {!isShrunk && <span>{lang === 'fr' ? 'Sombre' : 'Dark'}</span>}
              </>
            )}
          </button>

          {/* Language Switcher */}
          <div
            role="group"
            aria-label="Language switcher"
            className="inline-flex items-center rounded-full bg-slate-900 border border-slate-800 p-0.5 text-xs font-medium"
          >
            <button
              type="button"
              onClick={() => setLang('fr')}
              className={`rounded-full transition-colors ${
                isShrunk ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs'
              } ${
                lang === 'fr'
                  ? 'bg-sky-500 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`rounded-full transition-colors ${
                isShrunk ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs'
              } ${
                lang === 'en'
                  ? 'bg-sky-500 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={onOpenCvModal}
            className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all ${
              isShrunk ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5 text-xs'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>CV</span>
          </button>

          {!isShrunk && (
            <a
              href={PROFILE.cvUrl}
              download="CV_Nchourupouo_mohamed.pdf"
              onClick={() =>
                notifyHighValueAction({
                  actionType: 'cv_download',
                  actionLabel: 'Téléchargement du CV PDF (Navbar)',
                  details: 'CV_Nchourupouo_mohamed.pdf',
                })
              }
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF</span>
            </a>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-1.5 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-200"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-sky-400" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200"
          >
            {lang.toUpperCase()}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            className="p-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-200"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="pointer-events-auto md:hidden mt-2 mx-auto max-w-md rounded-2xl bg-[#0b0f17] border border-slate-800 px-4 pt-2 pb-5 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-slate-100 hover:bg-slate-900"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-800 flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenCvModal();
              }}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-slate-900 text-slate-200 border border-slate-700"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>{lang === 'fr' ? 'Aperçu CV' : 'View CV'}</span>
            </button>
            <a
              href={PROFILE.cvUrl}
              download="CV_Nchourupouo_mohamed.pdf"
              onClick={() =>
                notifyHighValueAction({
                  actionType: 'cv_download',
                  actionLabel: 'Téléchargement du CV PDF (Menu Mobile)',
                  details: 'CV_Nchourupouo_mohamed.pdf',
                })
              }
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-sky-500 text-slate-950"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === 'fr' ? 'Télécharger CV' : 'Download CV'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
