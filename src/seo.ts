import type { Insight } from './content/insights';

// Single source of truth for what search engines, AI crawlers and link
// previews see: browser-tab title, meta description, canonical URL and the
// homepage's organisation schema. scripts/prerender.mjs writes these into
// every built HTML file, and the pages reuse the titles for document.title so
// the two never disagree.

export const SITE_URL = 'https://www.simplicytas.com';

export interface PageSeo {
  title: string;
  description: string;
}

// Keyed by the page's public URL path.
export const pageSeo = {
  '/': {
    title: "Simplicytas | Consultancy for data that doesn't reconcile",
    description:
      'Simplicytas is a consultancy and a solution for organisations whose numbers do not agree. We put a confidence score on every number and name an owner for the answer.',
  },
  '/how-we-help/': {
    title: 'How We Help | Data360 and Enterprise360',
    description:
      'Start with Data360: find where your data disagrees with itself, score confidence in every number, and name an owner. Add Procure360 and more as you need them.',
  },
  '/results/': {
    title: 'Results | Reporting, shared services and transformation',
    description:
      'Three cases across the Americas, APAC and Europe: reporting rebuilt for $6B in assets, 25% lower accounting costs, and 10%+ capacity reduction.',
  },
  '/insights/': {
    title: 'Insights | Private credit, real estate and private markets',
    description:
      'Short reads on the structural shifts in private credit, real estate and private markets, and what they mean for the data behind your book.',
  },
  '/about/': {
    title: 'About | The team behind every engagement',
    description: 'Who runs every Simplicytas engagement, and what they have done before.',
  },
  '/privacy.html': {
    title: 'Simplicytas | Privacy Policy',
    description:
      'How Simplicytas Consulting Pte. Ltd. collects, uses, shares and protects personal information, and how to access or correct it.',
  },
  '/terms.html': {
    title: 'Simplicytas | Terms Of Use',
    description:
      'The terms that apply to your use of the Simplicytas website, including use of content, intellectual property and governing law.',
  },
  '/cookies.html': {
    title: 'Simplicytas | Cookie Policy',
    description:
      'How the Simplicytas website uses cookies, what each one does, and how to change or block them.',
  },
} satisfies Record<string, PageSeo>;

// Articles: title keeps the existing "Simplicytas | {headline}" pattern; the
// description is the teaser plus the article's opening sentence.
export function articleSeo(a: Insight): PageSeo {
  const firstPara = a.body.find((b) => b.type === 'p');
  const lead = firstPara && firstPara.type === 'p' ? firstPara.text.split(/(?<=[.!?])\s/)[0] : '';
  return {
    title: `Simplicytas | ${a.title}`,
    description: [a.heroSub, lead].filter(Boolean).join(' '),
  };
}

// Organisation schema (homepage only). Keep it in step with what visitors can
// see on the page: the footer address and the About paragraph.
export const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Simplicytas',
  legalName: 'Simplicytas Consulting Pte. Ltd.',
  url: `${SITE_URL}/`,
  slogan: 'See What Others Miss',
  description:
    'Simplicytas is a consultancy and a solution for organisations whose numbers do not agree. We help customers build trust in their data by building a confidence level for every number, as high as the evidence allows. Software, method and people together.',
  foundingDate: '2024',
  founder: { '@type': 'Person', name: 'John Culleton', jobTitle: 'CEO, Global Head of Strategy' },
  email: 'contact@simplicytas.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '138 Market Street, #24-01 CapitaGreen',
    addressLocality: 'Singapore',
    postalCode: '048946',
    addressCountry: 'SG',
  },
  sameAs: ['https://www.linkedin.com/company/simplicytas/'],
  knowsAbout: [
    'Data reconciliation',
    'Data confidence scoring',
    'Multi-entity reporting',
    'Post-acquisition reporting',
  ],
};
