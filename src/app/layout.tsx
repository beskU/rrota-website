import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Gluten, Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import ScrollToTop from "./utils/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gluten = Gluten({
  variable: "--font-gluten",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const OFFICIAL_DOMAIN = "https://rrota.xyz";
const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

// IDs for entity linking (strong anti-phishing signal)
const ORG_ID = `${OFFICIAL_DOMAIN}#organization`;
const WEBSITE_ID = `${OFFICIAL_DOMAIN}#website`;
const HOMEPAGE_ID = `${OFFICIAL_DOMAIN}/#webpage`;

// ✅ Viewport (Next 15 best practice)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1220",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(OFFICIAL_DOMAIN),

  title: {
    default: "RROTA Coin (RTA) – Official Solana Token | rrota.xyz",
    template: "%s | RROTA Coin (RTA)",
  },

  description:
    `RROTA coin (RTA token) is the official Solana SPL token focused on real utility development and transparent execution. ` +
    `Official contract: ${TOKEN_ADDRESS}. Verify authenticity and official links only at ${OFFICIAL_DOMAIN}.`,

  applicationName: "RROTA",
  category: "cryptocurrency",

  alternates: {
    canonical: `${OFFICIAL_DOMAIN}/`,
  },

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

  verification: {
    google: "fTDZlE_L9Qw-pp0Ojr45vyyCoxix2X0w0GCl2l60udE",
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "RROTA Coin (RTA) – Official Solana Token | rrota.xyz",
    description:
      `Official RROTA coin (RTA token) website. Verify contract ${TOKEN_ADDRESS}, track status, roadmap, tokenomics, and official links only at ${OFFICIAL_DOMAIN}.`,
    url: OFFICIAL_DOMAIN,
    siteName: "RROTA",
    type: "website",
    images: [
      {
        url: "/rrota-og.jpg",
        width: 1200,
        height: 630,
        alt: "RROTA Coin (RTA) – Official Website",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RROTA Coin (RTA) – Official Solana Token | rrota.xyz",
    description:
      `Official RROTA coin (RTA token) website. Verify contract ${TOKEN_ADDRESS}. Avoid fake domains and verify only at ${OFFICIAL_DOMAIN}.`,
    images: ["/rrota-og.jpg"],
    site: "@rrotacoin",
    creator: "@rrotacoin",
  },

  keywords: [
    "RROTA coin",
    "RROTA token",
    "RTA token",
    "RROTA crypto",
    "Solana token",
    "SPL token",
    TOKEN_ADDRESS,
  ],
};

// ✅ Organization schema (improved + linked)
const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: "RROTA",
  url: OFFICIAL_DOMAIN,
  logo: {
    "@type": "ImageObject",
    url: `${OFFICIAL_DOMAIN}/favicon.ico`,
  },
  sameAs: [
    "https://t.me/rrotaOfficial",
    "https://x.com/rrotacoin",
    `https://jup.ag/tokens/${TOKEN_ADDRESS}`,
    `https://solscan.io/token/${TOKEN_ADDRESS}`,
  ],
};

// ✅ WebSite schema (SearchAction fixed + linked)
const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "RROTA",
  url: OFFICIAL_DOMAIN,
  publisher: { "@id": ORG_ID },
  potentialAction: {
    "@type": "SearchAction",
    // Safer: you have /blog already (even if no search UI yet)
    target: `${OFFICIAL_DOMAIN}/blog?query={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// ✅ Homepage WebPage schema (extra authority + entity tying)
const HOMEPAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": HOMEPAGE_ID,
  url: `${OFFICIAL_DOMAIN}/`,
  name: "RROTA Coin (RTA) – Official Solana Token",
  isPartOf: { "@id": WEBSITE_ID },
  about: [
    { "@type": "Thing", name: "RROTA coin", sameAs: OFFICIAL_DOMAIN },
    {
      "@type": "Thing",
      name: "RTA token (Solana SPL)",
      description: `Official contract: ${TOKEN_ADDRESS}`,
    },
  ],
};

// ✅ Cryptocurrency schema (entity reinforcement)
const CRYPTO_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Cryptocurrency",
  name: "RROTA",
  alternateName: ["RROTA coin", "RROTA token", "RTA token"],
  tickerSymbol: "RTA",
  url: OFFICIAL_DOMAIN,
  description:
    `RROTA coin (RTA token) is a Solana SPL token. Official contract: ${TOKEN_ADDRESS}. Verify authenticity only at ${OFFICIAL_DOMAIN}.`,
  additionalProperty: [
    { "@type": "PropertyValue", name: "Blockchain", value: "Solana" },
    { "@type": "PropertyValue", name: "Contract Address", value: TOKEN_ADDRESS },
  ],
};

// ✅ FAQ schema (anti-phishing rich snippet weapon)
const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is RROTA coin?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          `RROTA coin (RTA token) is a Solana-based SPL token focused on real utility development and transparent execution. ` +
          `The official contract address is ${TOKEN_ADDRESS}.`,
      },
    },
    {
      "@type": "Question",
      name: "What is the official RROTA website?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          `The only official website for RROTA coin is ${OFFICIAL_DOMAIN}. ` +
          `Beware of look-alike domains such as rr0ta.xyz (zero instead of letter “o”).`,
      },
    },
    {
      "@type": "Question",
      name: "How do I verify I am on the real RROTA site?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          `Always verify the domain is exactly ${OFFICIAL_DOMAIN} and confirm the token contract address is ${TOKEN_ADDRESS} before connecting any wallet.`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Canonical hard-set (extra redundancy; fine alongside metadata.alternates) */}
        <link rel="canonical" href={`${OFFICIAL_DOMAIN}/`} />

        {/* ✅ Referrer policy (minor security hardening) */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* ✅ JSON-LD bundles */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(HOMEPAGE_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(CRYPTO_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gluten.variable} ${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
