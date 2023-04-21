import { loadEnv } from "vite";
import { defineConfig } from "astro/config";

const { NODE_ENV } = loadEnv(import.meta.env.MODE, process.cwd(), "");

const isProduction = NODE_ENV === "production";

// Integrations
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), svelte()],
  base: isProduction ? "/res/sites/news-projects/astro-aunty-test/main/" : "/"
});
