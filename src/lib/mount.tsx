import { StrictMode, type ReactNode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

// Built pages arrive with their full text already inside #root (see
// scripts/prerender.mjs), so React hydrates what is there. Under `npm run dev`
// #root is empty and the page is rendered from scratch.
export function mount(app: ReactNode) {
  const el = document.getElementById('root')!;
  const tree = <StrictMode>{app}</StrictMode>;
  if (el.hasChildNodes()) hydrateRoot(el, tree);
  else createRoot(el).render(tree);
}
