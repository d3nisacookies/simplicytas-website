import type { ReactNode } from 'react';
import { renderToString } from 'react-dom/server';
import Home from './pages/Home';
import Products from './pages/Products';
import Results from './pages/Results';
import About from './pages/About';
import Insights from './pages/Insights';
import InsightArticle from './pages/InsightArticle';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import { insights, insightUrl } from './content/insights';
import { articleSeo, orgSchema, pageSeo, SITE_URL, type PageSeo } from './seo';

// Server-side entry, built by `vite build --ssr` and run by scripts/prerender.mjs
// after the normal client build. It renders every page to an HTML string so the
// built files contain the real text, headings and links - not an empty <div>.

export { SITE_URL };

export interface PrerenderedPage extends PageSeo {
  /** Public URL path, e.g. /about/ */
  url: string;
  /** File inside dist/ that this page lives in. */
  file: string;
  ogType: 'website' | 'article';
  jsonLd?: object;
  /** Rendered markup that goes inside <div id="root">. */
  html: string;
}

const fileFor = (url: string) => (url.endsWith('/') ? `${url.slice(1)}index.html` : url.slice(1));

export function prerenderPages(): PrerenderedPage[] {
  const page = (url: string, seo: PageSeo, el: ReactNode, extra: Partial<PrerenderedPage> = {}): PrerenderedPage => ({
    url,
    file: fileFor(url),
    ogType: 'website',
    ...seo,
    html: renderToString(el),
    ...extra,
  });

  return [
    page('/', pageSeo['/'], <Home />, { jsonLd: orgSchema }),
    page('/how-we-help/', pageSeo['/how-we-help/'], <Products />),
    page('/results/', pageSeo['/results/'], <Results />),
    page('/insights/', pageSeo['/insights/'], <Insights />),
    page('/about/', pageSeo['/about/'], <About />),
    page('/privacy.html', pageSeo['/privacy.html'], <Privacy />),
    page('/terms.html', pageSeo['/terms.html'], <Terms />),
    page('/cookies.html', pageSeo['/cookies.html'], <Cookies />),
    ...insights.map((a) =>
      page(insightUrl(a), articleSeo(a), <InsightArticle slug={a.slug} />, { ogType: 'article' }),
    ),
  ];
}
