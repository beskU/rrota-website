import type { MetadataRoute } from "next";
import { getArticleSlugs, getArticleBySlug } from "./lib/articles";

const BASE_URL = "https://rrota.xyz";

function safeDate(value?: string) {
  if (!value) return new Date();

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date() : date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: buildDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: buildDate,
      changeFrequency: "daily",
      priority: 0.9,
    },

    // Keep these only if the pages really exist.
    {
      url: `${BASE_URL}/privacy`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = getArticleSlugs().map((slug) => {
    const article = getArticleBySlug(slug);

    return {
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: safeDate(article.meta.date),
      changeFrequency: "weekly",
      priority: 0.8,
    };
  });

  return [...staticRoutes, ...blogRoutes];
}
