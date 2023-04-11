import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), svelte()],
  base: "/res/sites/news-projects/astro-aunty-test/main/"
});
