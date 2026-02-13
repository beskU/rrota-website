export const metadata: Metadata = {
  metadataBase: new URL("https://rrota.xyz"),

  // ✅ SEO TITLE: must include "RROTA Coin"
  title: {
    default: "RROTA Coin ($RTA) – Official Solana Utility Token | rrota.xyz",
    template: "%s | rrota.xyz",
  },

  // ✅ SEO DESCRIPTION: must include "RROTA coin" + "official website" + anti-phishing hint
  description:
    "RROTA Coin ($RTA) is a Solana-based utility token in transparent build phase. Official RROTA coin website: rrota.xyz. Track roadmap, token details, and verified links. Avoid typosquatting/phishing sites—verify before connecting a wallet.",

  // Helps Google understand topic relevance
  keywords: [
    "RROTA coin",
    "RROTA",
    "RROTA token",
    "$RTA",
    "RTA coin",
    "Solana token",
    "Solana coin",
    "RROTA official website",
    "buy RROTA",
    "Jupiter Solana",
  ],

  // ✅ Canonical URL (critical for "official")
  alternates: {
    canonical: "/",
  },

  // ✅ Indexing guidance
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // ✅ GOOGLE SEARCH CONSOLE VERIFICATION
  verification: {
    google: "fTDZlE_L9Qw-pp0Ojr45vyyCoxix2X0w0GCl2l60udE",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "RROTA Coin ($RTA) – Official Solana Utility Token",
    description:
      "RROTA Coin ($RTA) is a Solana utility token building real on-chain utilities with transparent execution. Official website: rrota.xyz. Verify links before connecting a wallet.",
    url: "https://rrota.xyz/",
    siteName: "RROTA Coin",
    images: [
      {
        url: "/rrota-og.jpg",
        width: 1200,
        height: 630,
        alt: "RROTA Coin ($RTA) – Official Solana Utility Token",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "RROTA Coin ($RTA) – Official Solana Utility Token",
    description:
      "Official RROTA Coin ($RTA) website: rrota.xyz. Track roadmap, token details, verified links. Avoid phishing/typosquatting—verify before connecting a wallet.",
    images: ["/rrota-og.jpg"],
    creator: "@rrotacoin",
    site: "@rrotacoin",
  },
};
