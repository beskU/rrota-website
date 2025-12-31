import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rrota.xyz",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
