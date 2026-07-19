# Project setup

This is a Vite + React 19 + TypeScript multi-page site (no longer Expo/React Native).

- Entry pages: `index.html` (Home), `products.html`, `about.html` — each mounts a page from `src/pages/` via `src/main-*.tsx`.
- `npm run dev` — dev server, `npm run build` — type-check + production build to `dist/`, `npm run preview` — serve the build.
- Deployed on Vercel via `vercel.json` (`npm run build`, output `dist`).
\