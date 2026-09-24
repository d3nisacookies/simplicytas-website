# Project setup

This is a Vite + React 19 + TypeScript multi-page site (no longer Expo/React Native).

- Entry pages: `index.html` (Home), `products.html`, `about.html`, plus legal pages `privacy.html`, `terms.html`, `cookies.html` — each mounts a page from `src/pages/` via `src/main-*.tsx`. The legal pages share `src/pages/LegalLayout.tsx` + `Legal.css` and are linked from page footers, not the navbar.
- Shared look: `src/styles/site.css` (reset, colour + type-scale tokens, nav, footer, and the inner-page shell: `.page-hero`, `.page-body`, `.page-lede`, `.page-cta`) is imported first by every `src/main-*.tsx`; page CSS files hold only page-specific rules. Use only the five `--text-*` sizes and the colour tokens, and the shared breakpoints (1579px / 1119px / 760px).
- Shared components in `src/components/`: `SiteNav` (pass `active` to highlight a link), `SiteFooter`, and `PageLayout` + `PageHero` + `PageCta`. A new page = `newpage.html` + `src/main-newpage.tsx` + a Vite input in `vite.config.ts` + a page in `src/pages/` wrapped in `<PageLayout>`.
- Insights: `insights.html` (index, `src/pages/Insights.tsx`) lists every article in `src/content/insights.ts`; each article is `insights/<slug>.html`, all mounting `src/main-insight-article.tsx` → `src/pages/InsightArticle.tsx`, which picks the article by the URL slug. To add an article: append an entry to `insights.ts`, copy an existing `insights/*.html` (update its `<title>`), and add its input to `vite.config.ts`.
- `npm run dev` — dev server, `npm run build` — type-check + production build to `dist/`, `npm run preview` — serve the build.
- Deployed on Vercel via `vercel.json` (`npm run build`, output `dist`).
\