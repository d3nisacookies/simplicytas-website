// Runs after `vite build` and `vite build --ssr`: fills each built HTML file with
// the page's server-rendered markup and its <head> tags (description, canonical,
// social preview, organisation schema). See src/prerender.tsx and src/seo.ts.
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = path.join(root, 'dist');
const { prerenderPages, SITE_URL } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'prerender.js')).href);

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const visibleText = (html) => html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

const pages = prerenderPages();
const problems = [];

for (const page of pages) {
  const file = path.join(dist, page.file);
  let html = await readFile(file, 'utf8');
  const marker = '<div id="root"></div>';
  if (!html.includes(marker)) throw new Error(`${page.file}: expected an empty ${marker} to fill`);

  const canonical = SITE_URL + page.url;
  const tags = [
    `<meta name="description" content="${esc(page.description)}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:site_name" content="Simplicytas" />`,
    `<meta property="og:type" content="${page.ogType}" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${esc(page.title)}" />`,
    `<meta name="twitter:description" content="${esc(page.description)}" />`,
  ];
  if (page.jsonLd) {
    tags.push(`<script type="application/ld+json">${JSON.stringify(page.jsonLd).replace(/</g, '\\u003c')}</script>`);
  }

  // Function replacers: the page text contains "$" (e.g. "$6B"), which a plain
  // replacement string would treat as a special pattern.
  html = html.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${esc(page.title)}</title>`);
  html = html.replace('</head>', () => `    ${tags.join('\n    ')}\n  </head>`);
  html = html.replace(marker, () => `<div id="root">${page.html}</div>`);
  await writeFile(file, html);

  const h1 = (page.html.match(/<h1[\s>]/g) || []).length;
  const chars = visibleText(page.html).length;
  if (h1 !== 1) problems.push(`${page.file}: ${h1} <h1> tags (expected 1)`);
  if (chars < 200) problems.push(`${page.file}: only ${chars} characters of text`);
  console.log(`prerendered ${page.url.padEnd(78)} ${String(chars).padStart(6)} chars  h1:${h1}`);
}

if (problems.length) {
  console.error('\nPre-render check failed:\n  ' + problems.join('\n  '));
  process.exit(1);
}
console.log(`\nPre-rendered ${pages.length} pages.`);
