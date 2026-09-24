import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        products: 'products.html',
        about: 'about.html',
        privacy: 'privacy.html',
        terms: 'terms.html',
        cookies: 'cookies.html',
        insights: 'insights.html',
        'insights/875-billion-comes-due-this-year': 'insights/875-billion-comes-due-this-year.html',
        'insights/6-9-billion-requested-4-9-billion-raised': 'insights/6-9-billion-requested-4-9-billion-raised.html',
        'insights/ilpa-voluntary-not-optional': 'insights/ilpa-voluntary-not-optional.html',
        'insights/ownership-changes-overnight-one-view-takes-years': 'insights/ownership-changes-overnight-one-view-takes-years.html',
      },
    },
  },
});
