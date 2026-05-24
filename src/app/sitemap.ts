import type { MetadataRoute } from "next";
import { getArticleSlugs, getArticleBySlug } from "./lib/articles";

const BASE_URL = "https://rrota.xyz";

function safeDate(value?: string) {
  if (!value) return new Date();

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date() : date;
}

function getSafeBlogRoutes(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  try {
    const slugs = getArticleSlugs();

    for (const slug of slugs) {
      try {
        const article = getArticleBySlug(slug);

        routes.push({
          url: `${BASE_URL}/blog/${slug}`,
          lastModified: safeDate(article?.meta?.date),
          changeFrequency: "weekly",
          priority: 0.8,
        });
      } catch (error) {
        console.error(`Failed to add blog article to sitemap: ${slug}`, error);
      }
    }
  } catch (error) {
    console.error("Failed to load blog routes for sitemap:", error);
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: buildDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/how-to-buy-rrota`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.98,
    },
    {
      url: `${BASE_URL}/rrota-spin-to-win`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.96,
    },
    {
      url: `${BASE_URL}/links`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/whitepaper`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/tokenomics`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/roadmap`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: buildDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ai`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.86,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/risk-disclaimer`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
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

  return [...staticRoutes, ...getSafeBlogRoutes()];
}
