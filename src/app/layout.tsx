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
const SPIN_TO_WIN_URL = "https://spin.rrota.xyz";
const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";
const OG_IMAGE = "/rrota-og-solidproof.jpg";

const ORG_ID = `${OFFICIAL_DOMAIN}#organization`;
const WEBSITE_ID = `${OFFICIAL_DOMAIN}#website`;
const HOMEPAGE_ID = `${OFFICIAL_DOMAIN}/#webpage`;
const GAME_ID = `${SPIN_TO_WIN_URL}#spin-to-win`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070A12",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(OFFICIAL_DOMAIN),

  title: {
    default: "RROTA ($RTA) — Utility-First Solana Ecosystem",
    template: "%s | RROTA ($RTA)",
  },

  description:
    `RROTA ($RTA) is a utility-first Solana ecosystem building crypto gaming, ` +
    `digital rewards, community tools, and future public transportation utility. ` +
    `Spin-to-Win is the first live RROTA product. Official contract: ${TOKEN_ADDRESS}.`,

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
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  openGraph: {
    title: "RROTA ($RTA) — Utility-First Solana Ecosystem",
    description:
      `Official RROTA website. Explore the $RTA Solana token, ecosystem roadmap, ` +
      `Spin-to-Win live utility, SolidProof audit milestone, crypto gaming direction, public transportation utility vision, ` +
      `tokenomics, official links, and contract verification. Contract: ${TOKEN_ADDRESS}.`,
    url: OFFICIAL_DOMAIN,
    siteName: "RROTA",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: "RROTA ($RTA) — Utility-First Solana Ecosystem with SolidProof Audit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RROTA ($RTA) — Utility-First Solana Ecosystem",
    description:
      `RROTA is a Solana-based utility ecosystem with live Spin-to-Win gameplay, ` +
      `digital rewards, SolidProof audit verification, official links, Phantom wallet support, and future ecosystem tools.`,
    images: [OG_IMAGE],
    site: "@rrotacoin",
    creator: "@rrotacoin",
  },

  keywords: [
    "RROTA",
    "RROTA coin",
    "RROTA token",
    "$RTA",
    "RTA token",
    "RROTA crypto",
    "RROTA ecosystem",
    "RROTA Solana ecosystem",
    "Solana token",
    "SPL token",
    "utility token Solana",
    "Solana utility ecosystem",
    "RROTA Spin-to-Win",
    "Spin-to-Win crypto game",
    "Solana game token",
    "crypto gaming Solana",
    "RROTA Crypto Shooter",
    "RROTA public transportation utility",
    "RROTA digital rewards",
    TOKEN_ADDRESS,
  ],
};

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: "RROTA",
  alternateName: ["RROTA Coin", "RROTA Token", "$RTA", "RTA Token"],
  url: OFFICIAL_DOMAIN,
  logo: {
    "@type": "ImageObject",
    url: `${OFFICIAL_DOMAIN}/apple-touch-icon.png`,
    width: 180,
    height: 180,
  },
  sameAs: [
    "https://t.me/rrotaOfficial",
    "https://x.com/rrotacoin",
    SPIN_TO_WIN_URL,
    `https://jup.ag/tokens/${TOKEN_ADDRESS}`,
    `https://solscan.io/token/${TOKEN_ADDRESS}`,
    "https://www.dextools.io/app/token/rrota",
    "https://freshcoins.io/audit/rrota",
    "https://app.solidproof.io/",
  ],
};

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "RROTA",
  alternateName: "RROTA ($RTA) Solana Ecosystem",
  url: OFFICIAL_DOMAIN,
  publisher: { "@id": ORG_ID },
  potentialAction: {
    "@type": "SearchAction",
    target: `${OFFICIAL_DOMAIN}/blog?query={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const HOMEPAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": HOMEPAGE_ID,
  url: `${OFFICIAL_DOMAIN}/`,
  name: "RROTA ($RTA) — Utility-First Solana Ecosystem",
  description:
    `Official RROTA website for the $RTA Solana token, ecosystem roadmap, ` +
    `Spin-to-Win live utility, crypto gaming products, future public transportation utility, ` +
    `tokenomics, official links, and contract verification.`,
  isPartOf: { "@id": WEBSITE_ID },
  about: [
    { "@type": "Thing", name: "RROTA", sameAs: OFFICIAL_DOMAIN },
    {
      "@type": "Thing",
      name: "RTA token on Solana",
      description: `Official contract: ${TOKEN_ADDRESS}`,
    },
    {
      "@type": "Thing",
      name: "RROTA ecosystem",
      description:
        "A Solana-based ecosystem focused on digital rewards, crypto gaming, community tools, and future public transportation utility.",
    },
    {
      "@type": "Thing",
      name: "RROTA Spin-to-Win",
      sameAs: SPIN_TO_WIN_URL,
    },
    {
      "@type": "Thing",
      name: "RROTA Crypto Shooter",
      description: "Planned RROTA gaming utility expansion.",
    },
    {
      "@type": "Thing",
      name: "RROTA public transportation utility",
      description:
        "Future RROTA direction for real-world transport-related tools and user-facing utility.",
    },
  ],
};

const TOKEN_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  name: "RROTA",
  alternateName: ["RROTA coin", "RROTA token", "RTA token", "$RTA"],
  url: OFFICIAL_DOMAIN,
  description:
    `RROTA ($RTA) is a Solana SPL token connected to a growing utility ecosystem, ` +
    `including digital rewards, crypto gaming, community tools, future transport utility, and the official RROTA Spin-to-Win product. ` +
    `Official contract: ${TOKEN_ADDRESS}.`,
  additionalProperty: [
    { "@type": "PropertyValue", name: "Blockchain", value: "Solana" },
    { "@type": "PropertyValue", name: "Ticker", value: "RTA" },
    {
      "@type": "PropertyValue",
      name: "Contract Address",
      value: TOKEN_ADDRESS,
    },
    { "@type": "PropertyValue", name: "Official Game", value: SPIN_TO_WIN_URL },
    {
      "@type": "PropertyValue",
      name: "Ecosystem Focus",
      value:
        "Crypto gaming, digital rewards, community tools, and future public transportation utility",
    },
  ],
};

const GAME_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": GAME_ID,
  name: "RROTA Spin-to-Win",
  applicationCategory: "GameApplication",
  operatingSystem: "Web",
  url: SPIN_TO_WIN_URL,
  publisher: { "@id": ORG_ID },
  description:
    "RROTA Spin-to-Win is the first live RROTA utility product with account login, daily bonuses, free spins, Boost Credits, Phantom wallet support, and eligible RTA reward features.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

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
          `RROTA ($RTA) is a Solana-based token focused on utility development, transparent execution, and ecosystem growth. ` +
          `The official contract address is ${TOKEN_ADDRESS}.`,
      },
    },
    {
      "@type": "Question",
      name: "What is the RROTA ecosystem?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "The RROTA ecosystem is planned around the $RTA Solana token, digital rewards, crypto gaming, community tools, Spin-to-Win, Crypto Shooter development, and future public transportation utility.",
      },
    },
    {
      "@type": "Question",
      name: "What is RROTA Spin-to-Win?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          `RROTA Spin-to-Win is the first live RROTA utility product. It includes login, free spins, daily bonuses, Boost Credits, ` +
          `Phantom wallet connection, deposit features, and eligible RTA reward withdrawals.`,
      },
    },
    {
      "@type": "Question",
      name: "Where can I play RROTA Spin-to-Win?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `The official RROTA Spin-to-Win app is available at ${SPIN_TO_WIN_URL}.`,
      },
    },
    {
      "@type": "Question",
      name: "What is the official RROTA website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `The official website for RROTA is ${OFFICIAL_DOMAIN}.`,
      },
    },
    {
      "@type": "Question",
      name: "How do I verify the RROTA token?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          `You can verify RROTA by confirming the official Solana contract address: ${TOKEN_ADDRESS}. ` +
          `Always use official links from ${OFFICIAL_DOMAIN}.`,
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
        <link rel="canonical" href={`${OFFICIAL_DOMAIN}/`} />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="theme-color" content="#070A12" />

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(TOKEN_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(GAME_JSON_LD) }}
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
