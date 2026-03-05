import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

const site =
  process.env.PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://techoscorporativos.vercel.app";

export default defineConfig({
  site,
  integrations: [sitemap()],
  adapter: vercel()
});
