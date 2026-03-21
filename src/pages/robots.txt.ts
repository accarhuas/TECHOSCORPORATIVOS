import type { APIRoute } from "astro";
import { siteConfig } from "../data/site";

export const GET: APIRoute = ({ site }) => {
  const siteOrigin = site ?? new URL(siteConfig.siteUrl);
  const sitemapUrl = new URL("sitemap-index.xml", siteOrigin).toString();
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};
