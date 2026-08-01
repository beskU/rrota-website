import type { MetadataRoute } from "next";
import { getArticleBySlug, getArticleSlugs } from "./lib/articles";

const BASE_URL = "https://rrota.xyz";

function parseArticleDate(value?: string): Date | undefined {
  if (!value) return undefined;

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

function getBlogRoutes(): MetadataRoute.Sitemap {
  try {
    return getArticleSlugs().flatMap((slug) => {
      try {
        const article = getArticleBySlug(slug);
        const lastModified = parseArticleDate(article?.meta?.date);

        return [
          {
            url: `${BASE_URL}/blog/${slug}`,
            ...(lastModified ? { lastModified } : {}),
            changeFrequency: "monthly" as const,
            priority: 0.72,
          },
        ];
      } catch (error) {
        console.error(`Failed to add blog article to sitemap: ${slug}`, error);
        return [];
      }
    });
  } catch (error) {
    console.error("Failed to load blog routes for sitemap:", error);
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/ai`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tokenomics`,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/roadmap`,
      changeFrequency: "monthly",
      priority: 0.86,
    },
    {
      url: `${BASE_URL}/rrota-spin-to-win`,
      changeFrequency: "weekly",
      priority: 0.84,
    },
    {
      url: `${BASE_URL}/how-to-buy-rrota`,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${BASE_URL}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/whitepaper`,
      changeFrequency: "monthly",
      priority: 0.78,
    },
    {
      url: `${BASE_URL}/links`,
      changeFrequency: "monthly",
      priority: 0.76,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      changeFrequency: "yearly",
      priority: 0.55,
    },
    {
      url: `${BASE_URL}/risk-disclaimer`,
      changeFrequency: "yearly",
      priority: 0.45,
    },
    {
      url: `${BASE_URL}/privacy`,
      changeFrequency: "yearly",
      priority: 0.35,
    },
    {
      url: `${BASE_URL}/terms`,
      changeFrequency: "yearly",
      priority: 0.35,
    },
  ];

  const routesByUrl = new Map<string, MetadataRoute.Sitemap[number]>();

  for (const route of [...staticRoutes, ...getBlogRoutes()]) {
    routesByUrl.set(route.url, route);
  }

  return Array.from(routesByUrl.values());
}
