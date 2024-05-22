import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://gregfc95.github.io/',
  base: '/gregfc95.github.io',
  prefetch: true,
  integrations: [tailwind()],
});
