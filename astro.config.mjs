// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mrentals.al',
  integrations: [sitemap()],
  // URL-të pa "/" në fund, si te faqja live (/makina/audi-a5) — ruan indeksimin në Google
  trailingSlash: 'never',
  build: {
    format: 'file',
    // CSS-ja futet direkt në HTML: asnjë kërkesë që bllokon shfaqjen e faqes
    inlineStylesheets: 'always',
  },
  // Faqet e tjera shkarkohen në heshtje kur linku duket në ekran → hapen menjëherë
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
