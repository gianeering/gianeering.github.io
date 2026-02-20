import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

const SERVER_PORT = Number(process.env.SERVER_PORT || 4321);

const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = "https://gianeering.github.io";

const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");

const BASE_URL = isBuild ? LIVE_URL : LOCALHOST_URL;

export default defineConfig({
  server: { port: SERVER_PORT },
  site: BASE_URL,
  integrations: [react(), mdx()],
});