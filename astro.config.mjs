import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://gianeering.github.io',
  // Altre opzioni di configurazione
  integrations: [
    react(), mdx()
  ],
  vite: {
    server: {
      // Configurazioni specifiche del server, se necessarie
    },
    build: {
      // Opzioni di build
    },
  },
});