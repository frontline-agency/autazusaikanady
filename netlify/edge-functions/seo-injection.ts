// netlify/edge-functions/seo-injection.ts

import { Context } from "https://edge.netlify.com/";

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const pathname = url.pathname;

  if (
    pathname.startsWith('/assets/') ||
    pathname.match(/\.(js|css|jpg|jpeg|png|gif|svg|ico|woff|woff2|ttf|eot)$/i)
  ) {
    return;
  }

  const response = await context.next();
  const originalHtml = await response.text();

  const seoConfig = getSeoConfig(pathname, url.origin);

  if (!seoConfig) {
    return new Response(originalHtml, response);
  }

  const metaTags = generateMetaTags(seoConfig);

  let cleanedHtml = originalHtml
    .replace(/<title>.*?<\/title>/gi, '')
    .replace(/<meta\s+name=["']description["'].*?>/gi, '');

  const enhancedHtml = cleanedHtml.replace('</head>', `${metaTags}</head>`);

  return new Response(enhancedHtml, {
    headers: response.headers,
  });
};

// --------------------------------------------------
// SEO CONFIGURATION — Auta z Ameryki USA
// --------------------------------------------------

function getSeoConfig(pathname: string, origin: string) {
  const path = pathname.replace(/\/$/, '') || '/';

  const configs = {

    '/': {
      title: 'Import aut z USA – Auta z Ameryki USA',
      description:
        'Import aut z USA – kompleksowa obsługa zakupu, transportu i rejestracji samochodów z Ameryki.',
      image: `${origin}/og-home.jpg`,
      type: 'website'
    },

    '/o-nas': {
      title: 'O nas – Specjaliści od importu aut z USA',
      description:
        'Poznaj firmę Auta z Ameryki USA i sprawdź, dlaczego warto nam powierzyć import aut z USA.',
      image: `${origin}/og-o-nas.jpg`,
      type: 'website'
    },

    '/pojazdy': {
      title: 'Pojazdy z USA – Aukcje i oferty',
      description:
        'Samochody z USA z aukcji Copart i IAAI. Sprawdzone oferty i pełna obsługa importu.',
      image: `${origin}/og-pojazdy.jpg`,
      type: 'website'
    },

    '/oplaty': {
      title: 'Opłaty – Import samochodu z USA',
      description:
        'Sprawdź wszystkie koszty importu aut z USA: transport, cło, akcyza i rejestracja.',
      image: `${origin}/og-oplaty.jpg`,
      type: 'website'
    },

    '/oszczednosci': {
      title: 'Oszczędności – Czy import aut z USA się opłaca?',
      description:
        'Zobacz, ile możesz zaoszczędzić wybierając import aut z USA zamiast zakupu w Polsce.',
      image: `${origin}/og-oszczednosci.jpg`,
      type: 'website'
    },

    '/blog': {
      title: 'Blog – Import aut z USA poradniki',
      description:
        'Poradniki i analizy dotyczące importu aut z USA, kosztów, aukcji i formalności.',
      image: `${origin}/og-blog.jpg`,
      type: 'website'
    },

    '/kontakt': {
      title: 'Kontakt – Import aut z USA',
      description:
        'Skontaktuj się z nami i rozpocznij bezpieczny import aut z USA.',
      image: `${origin}/og-kontakt.jpg`,
      type: 'website'
    },

    // BLOG ARTYKUŁY

    '/blog/import-samochodow-z-usa-czy-warto-analiza-kosztow-2026': {
      title: 'Import samochodów z USA – analiza kosztów 2026',
      description:
        'Czy import aut z USA w 2026 się opłaca? Szczegółowa analiza kosztów i opłat.',
      image: `${origin}/og-blog1.jpg`,
      type: 'article'
    },

    '/blog/jak-wyglada-aukcja-samochodowa-copart-iaa-poradnik': {
      title: 'Jak wygląda aukcja Copart i IAAI?',
      description:
        'Sprawdź, jak przebiega aukcja samochodowa Copart i IAAI przy imporcie aut z USA.',
      image: `${origin}/og-blog2.jpg`,
      type: 'article'
    },

    '/blog/ile-czasu-trwa-sprowadzenie-auta-z-usa-do-polski': {
      title: 'Ile trwa sprowadzenie auta z USA?',
      description:
        'Dowiedz się, ile trwa import aut z USA i jakie etapy obejmuje transport do Polski.',
      image: `${origin}/og-blog3.jpg`,
      type: 'article'
    },

    '/blog/najpopularniejsze-samochody-z-usa-top-modele-2026': {
      title: 'Najpopularniejsze samochody z USA – Top 2026',
      description:
        'Poznaj najczęściej importowane modele aut z USA w 2026 roku.',
      image: `${origin}/og-blog4.jpg`,
      type: 'article'
    },

    '/blog/jak-sprawdzic-historie-pojazdu-z-usa-vin-carfax': {
      title: 'Jak sprawdzić historię auta z USA – VIN i Carfax',
      description:
        'Sprawdź, jak zweryfikować historię pojazdu z USA przed zakupem.',
      image: `${origin}/og-blog5.jpg`,
      type: 'article'
    },

    '/blog/odprawa-celna-samochodu-z-usa-dokumenty-procedury': {
      title: 'Odprawa celna auta z USA – dokumenty i procedury',
      description:
        'Jak wygląda odprawa celna przy imporcie aut z USA? Wymagane dokumenty i koszty.',
      image: `${origin}/og-blog6.jpg`,
      type: 'article'
    },

    '/blog/import-samochodu-z-kanady-roznice-vs-usa': {
      title: 'Import samochodu z Kanady vs USA – różnice',
      description:
        'Porównanie importu auta z Kanady i USA – koszty, formalności i procedury.',
      image: `${origin}/og-blog7.jpg`,
      type: 'article'
    },

    '/blog/przeglad-techniczny-auta-z-usa-homologacja-polska': {
      title: 'Przegląd techniczny auta z USA – homologacja',
      description:
        'Jak przygotować auto z USA do przeglądu i rejestracji w Polsce?',
      image: `${origin}/og-blog8.jpg`,
      type: 'article'
    },

    '/blog/transport-samochodu-z-usa-do-polski-metody-koszty': {
      title: 'Transport auta z USA do Polski – koszty i metody',
      description:
        'Poznaj metody transportu samochodu z USA oraz aktualne koszty.',
      image: `${origin}/og-blog9.jpg`,
      type: 'article'
    },

  };

  const config = configs[path];
  if (config) {
    return { ...config, url: `${origin}${pathname}`, origin };
  }

  return null;
}

// --------------------------------------------------

function generateMetaTags(config: any): string {
  const escapedTitle = escapeHtml(config.title);
  const escapedDescription = escapeHtml(config.description);

  return `
    <title>${escapedTitle}</title>
    <meta name="description" content="${escapedDescription}">
    <link rel="canonical" href="${config.url}">
    
    <meta property="og:type" content="${config.type}">
    <meta property="og:url" content="${config.url}">
    <meta property="og:title" content="${escapedTitle}">
    <meta property="og:description" content="${escapedDescription}">
    <meta property="og:image" content="/og.webp">
    
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapedTitle}">
    <meta name="twitter:description" content="${escapedDescription}">
    <meta name="twitter:image" content="/og.webp">
    
    <meta name="robots" content="index, follow">
  `.trim();
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
