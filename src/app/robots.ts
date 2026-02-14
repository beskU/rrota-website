import type { MetadataRoute } from "next";

const baseUrl = "https://rrota.xyz";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/draft/",
        ],
      },
      // Explicitly allow Next.js static assets for rendering
      {
        userAgent: "*",
        allow: ["/_next/static/", "/static/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
