import { MetadataRoute } from "next";
import { getArticleSlugs, getArticleBySlug } from "./lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rrota.xyz";

  // Use build time once (not regenerated per entry)
  const buildDate = new Date();

  // 🔹 Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: buildDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/verify`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/claim`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/roadmap`,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tokenomics`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/links`,
      lastModified: buildDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: buildDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  // 🔹 Blog articles (real date from frontmatter)
  const blogRoutes: MetadataRoute.Sitemap = getArticleSlugs().map((slug) => {
    const article = getArticleBySlug(slug);

    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(article.meta.date),
      changeFrequency: "weekly",
      priority: 0.8,
    };
  });

  return [...staticRoutes, ...blogRoutes];
}
