import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RROTA — Solana Utility Ecosystem",
    short_name: "RROTA",
    description:
      "Explore the RROTA ecosystem, live Spin-to-Win product, race competition, verification resources, and $RTA on Solana.",
    start_url: "/",
    display: "standalone",
    background_color: "#050711",
    theme_color: "#050711",
    categories: ["games", "finance", "entertainment"],
    icons: [
      {
        src: "/rrota-app-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/rrota-app-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
