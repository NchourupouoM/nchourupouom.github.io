/**
 * High-Value Action Email Notification via Web3Forms (https://web3forms.com)
 *
 * Triggers a clean email alert to Mohamed (nchourupouom@gmail.com) ONLY when a
 * visitor performs a high-intent action (CV download, CV modal view, direct
 * contact click, or flagship project inspection), with per-session deduplication
 * so the inbox is never spammed.
 */

// ---------------------------------------------------------------------------
// Collez votre clé d'accès publique Web3Forms ici (obtenue gratuitement sur
// https://web3forms.com en entrant nchourupouom@gmail.com) ou définissez
// VITE_WEB3FORMS_ACCESS_KEY dans votre fichier .env avant `npm run build`.
// ---------------------------------------------------------------------------
export const WEB3FORMS_ACCESS_KEY =
  (typeof window !== 'undefined' &&
    window.__PORTFOLIO_ENV__ &&
    window.__PORTFOLIO_ENV__.VITE_WEB3FORMS_ACCESS_KEY) ||
  'YOUR_WEB3FORMS_ACCESS_KEY';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

function isBotOrAutomated() {
  if (typeof navigator === 'undefined') return true;
  if (navigator.webdriver) return true;
  const ua = (navigator.userAgent || '').toLowerCase();
  return /bot|crawl|spider|slurp|lighthouse|headless|facebookexternalhit|preview/i.test(
    ua
  );
}

function isLocalhost() {
  if (typeof window === 'undefined') return true;
  const host = window.location.hostname;
  return host === 'localhost' || host === '127.0.0.1' || host === '0.0.0.0';
}

async function fetchGeoContext() {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 1800);
    const res = await fetch('https://ipapi.co/json/', {
      signal: controller.signal,
    });
    clearTimeout(timer);
    if (!res.ok) return null;
    const data = await res.json();
    return {
      city: data.city || 'Unknown',
      region: data.region || '',
      country: data.country_name || data.country || 'Unknown',
      org: data.org || '',
    };
  } catch {
    return null;
  }
}

/**
 * Send a high-value action notification email via Web3Forms.
 *
 * @param {Object} params
 * @param {'cv_download' | 'cv_view' | 'contact_click' | 'project_inspect'} params.actionType
 * @param {string} params.actionLabel - Human-readable description of the action
 * @param {string} [params.details] - Optional extra context (e.g., project title or link clicked)
 */
export async function notifyHighValueAction({
  actionType,
  actionLabel,
  details = '',
}) {
  try {
    if (typeof window === 'undefined') return;
    if (isBotOrAutomated()) return;

    // Skip if key is not configured yet
    if (
      !WEB3FORMS_ACCESS_KEY ||
      WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY'
    ) {
      return;
    }

    // Ignore localhost unless explicitly testing with ?debug_notify=1
    const allowLocal =
      window.location.search &&
      window.location.search.includes('debug_notify=1');
    if (isLocalhost() && !allowLocal) {
      return;
    }

    // Deduplicate per session so the same visitor doesn't trigger multiple emails for the same action
    const dedupeKey = `portfolio_hv_notified_${actionType}_${details || 'default'}`;
    try {
      if (window.sessionStorage.getItem(dedupeKey)) {
        return;
      }
      window.sessionStorage.setItem(dedupeKey, String(Date.now()));
    } catch {
      // Ignore sessionStorage restrictions
    }

    const geo = await fetchGeoContext();
    const locationStr = geo
      ? `${geo.city}${geo.region ? `, ${geo.region}` : ''} — ${geo.country}${
          geo.org ? ` (${geo.org})` : ''
        }`
      : 'Non déterminée (Protection IP active)';

    const referrer =
      (typeof document !== 'undefined' && document.referrer) ||
      'Accès direct (URL ou favori)';
    const timeZone =
      (typeof Intl !== 'undefined' &&
        Intl.DateTimeFormat().resolvedOptions().timeZone) ||
      'UTC';
    const screenRes = `${window.innerWidth}x${window.innerHeight}`;
    const browserLang = navigator.language || 'en';
    const timestamp = new Date().toISOString();

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `🎯 [Portfolio Mohamed] ${actionLabel}${
        geo?.country ? ` (${geo.city}, ${geo.country})` : ''
      }`,
      from_name: 'Portfolio Nchourupouo Mohamed',
      Action: actionLabel,
      Détails: details || actionType,
      Localisation: locationStr,
      Provenance_Referrer: referrer,
      Fuseau_Horaire: timeZone,
      Langue_Navigateur: browserLang,
      Ecran: screenRes,
      Appareil_UserAgent: navigator.userAgent,
      Date_UTC: timestamp,
    };

    await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
      keepalive: true,
    });
  } catch {
    // Fail silently so visitor UX is never interrupted
  }
}

/**
 * Submit the 3-field Contact Form directly via Web3Forms.
 *
 * @param {Object} form
 * @param {string} form.name
 * @param {string} form.email
 * @param {string} form.message
 * @returns {Promise<{ ok: boolean, error?: string }>}
 */
export async function submitContactForm({ name, email, message }) {
  try {
    if (
      !WEB3FORMS_ACCESS_KEY ||
      WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY'
    ) {
      return {
        ok: false,
        error: 'Clé Web3Forms non configurée.',
      };
    }

    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `✉️ [Contact Portfolio] Nouveau message de ${name}`,
        from_name: name,
        email,
        replyto: email,
        message,
      }),
    });

    const data = await res.json();
    if (res.ok && data.success !== false) {
      return { ok: true };
    }
    return {
      ok: false,
      error: data.message || 'Erreur lors de l’envoi.',
    };
  } catch {
    return {
      ok: false,
      error: 'Erreur réseau lors de l’envoi du message.',
    };
  }
}


