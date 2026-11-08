import React, { useState } from 'react';
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
  Send,
  CheckCircle2,
} from 'lucide-react';
import { PROFILE } from '../data/profile';
import { notifyHighValueAction, submitContactForm } from '../utils/notifyAction';

export default function FooterContact({ lang, onOpenCvModal }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus('sending');
    setErrorMsg('');

    const result = await submitContactForm({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    if (result.ok) {
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('error');
      setErrorMsg(
        result.error ||
          (lang === 'fr'
            ? "Une erreur s'est produite. Veuillez réessayer."
            : 'Something went wrong. Please try again.')
      );
    }
  };

  return (
    <footer id="contact" className="py-16 sm:py-20 bg-[#0b0f17]/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left: Direct 3-Field Contact Form */}
          <div className="md:col-span-7 space-y-5">
            <div className="space-y-2">
              <div className="section-label">Contact</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-50">
                {lang === 'fr'
                  ? 'Discutons de vos projets IA, Data ou Backend'
                  : "Let's discuss your AI, Data, or Backend needs"}
              </h2>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                {lang === 'fr'
                  ? "Envoyez-moi directement un message via ce formulaire — je vous réponds rapidement sur votre adresse e-mail."
                  : 'Send me a message directly from this form — I will reply promptly to your email address.'}
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="clean-card rounded-xl p-5 sm:p-6 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Field 1: Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-slate-300"
                  >
                    {lang === 'fr' ? 'Votre nom' : 'Your name'}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={
                      lang === 'fr' ? 'Ex: Jean Dupont' : 'e.g. Jane Doe'
                    }
                    className="w-full rounded-lg bg-slate-900 border border-slate-800 px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>

                {/* Field 2: Sender Email */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-slate-300"
                  >
                    {lang === 'fr' ? 'Votre adresse e-mail' : 'Your email address'}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={
                      lang === 'fr'
                        ? 'vous@entreprise.com'
                        : 'you@company.com'
                    }
                    className="w-full rounded-lg bg-slate-900 border border-slate-800 px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>
              </div>

              {/* Field 3: Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-slate-300"
                >
                  {lang === 'fr' ? 'Votre message' : 'Your message'}
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    lang === 'fr'
                      ? 'Bonjour Mohamed, je souhaiterais échanger avec vous concernant une opportunité ou un projet...'
                      : "Hi Mohamed, I'd love to connect regarding an engineering role or project..."
                  }
                  className="w-full rounded-lg bg-slate-900 border border-slate-800 px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors resize-y"
                />
              </div>

              {/* Submit Button & Feedback */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-sky-500 hover:bg-sky-400 disabled:opacity-60 text-slate-950 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {status === 'sending'
                      ? lang === 'fr'
                        ? 'Envoi en cours...'
                        : 'Sending...'
                      : lang === 'fr'
                      ? 'Envoyer le message'
                      : 'Send message'}
                  </span>
                </button>

                {status === 'sent' && (
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-emerald-500">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>
                      {lang === 'fr'
                        ? 'Message envoyé ! Je vous répondrai très vite.'
                        : 'Message sent! I will reply to you shortly.'}
                    </span>
                  </span>
                )}

                {status === 'error' && (
                  <span className="text-xs sm:text-sm font-medium text-red-400">
                    {errorMsg}
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* Right: Clean Contact Details & CV Actions */}
          <div className="md:col-span-5 space-y-4">
            <div className="clean-card rounded-xl p-5 sm:p-6 space-y-3.5 text-sm">
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
                  onClick={() =>
                    notifyHighValueAction({
                      actionType: 'contact_click',
                      actionLabel: 'Clic sur Téléphone (Footer)',
                      details: PROFILE.phoneDisplay,
                    })
                  }
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
                  onClick={() =>
                    notifyHighValueAction({
                      actionType: 'contact_click',
                      actionLabel: 'Clic sur LinkedIn (Footer)',
                      details: PROFILE.linkedin,
                    })
                  }
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

              {/* CV Quick Buttons */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={onOpenCvModal}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 transition-colors"
                >
                  <FileText className="w-4 h-4 text-sky-400" />
                  <span>{lang === 'fr' ? 'Consulter le CV' : 'View CV'}</span>
                </button>

                <a
                  href={PROFILE.cvUrl}
                  download="CV_Nchourupouo_mohamed.pdf"
                  onClick={() =>
                    notifyHighValueAction({
                      actionType: 'cv_download',
                      actionLabel: 'Téléchargement du CV PDF (Footer Contact)',
                      details: 'CV_Nchourupouo_mohamed.pdf',
                    })
                  }
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>PDF</span>
                </a>
              </div>
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
