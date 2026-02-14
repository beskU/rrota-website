// src/app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://rrota.xyz";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/", "/static/"],
        disallow: ["/api/", "/admin/", "/private/", "/draft/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
