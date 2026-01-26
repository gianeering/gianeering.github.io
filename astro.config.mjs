import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

const LOCALHOST_URL = 'http://localhost:${SERVER_PORT}';
const LIVE_URL = 'https://gianeering.github.io';
const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;

if(isBuild){
  BASE_URL = LIVE_URL
}

// https://astro.build/config
export default defineConfig({
  server: {port: SERVER_PORT},
  site: BASE_URL,
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