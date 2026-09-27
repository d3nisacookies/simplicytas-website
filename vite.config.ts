import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        'how-we-help': 'how-we-help/index.html',
        results: 'results/index.html',
        about: 'about/index.html',
        privacy: 'privacy.html',
        terms: 'terms.html',
        cookies: 'cookies.html',
        insights: 'insights/index.html',
        'insights/ground-truth/6-9-billion-requested-4-9-billion-raised': 'insights/ground-truth/6-9-billion-requested-4-9-billion-raised/index.html',
        'insights/ground-truth/875-billion-comes-due-this-year': 'insights/ground-truth/875-billion-comes-due-this-year/index.html',
        'insights/ground-truth/ilpa-voluntary-not-optional': 'insights/ground-truth/ilpa-voluntary-not-optional/index.html',
        'insights/ground-truth/ownership-changes-overnight-one-view-takes-years': 'insights/ground-truth/ownership-changes-overnight-one-view-takes-years/index.html',
      },
    },
  },
});
