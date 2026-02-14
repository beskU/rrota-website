import { MetadataRoute } from "next";
import { getArticleSlugs, getArticleBySlug } from "./lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rrota.xyz";

  const now = new Date();

  // 🔹 Core static pages (strong SEO structure)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/roadmap`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tokenomics`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/links`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  // 🔹 Blog articles (real lastModified from frontmatter date)
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
