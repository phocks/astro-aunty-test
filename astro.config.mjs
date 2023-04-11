import { defineConfig } from "astro/config";
import relativeLinks from 'astro-relative-links';

// Integrations
import react from "@astrojs/react";
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [relativeLinks(), react(), svelte()],
  base: "/res/sites/news-projects/astro-aunty-test/main/"
});
