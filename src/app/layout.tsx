import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Gluten, Inter, Poppins } from "next/font/google";
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

// ✅ Viewport (Next 15 best practice)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1220",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rrota.xyz"),

  title: {
    default: "RROTA ($RTA) Official Website | Verified Solana SPL Token",
    template: "%s | RROTA ($RTA)",
  },

  description:
    "RROTA ($RTA) is the official Solana SPL token focused on real utility development. Contract: 3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a. Explore roadmap, tokenomics, official links, and verify authenticity only at rrota.xyz.",

  applicationName: "RROTA",
  category: "cryptocurrency",

  alternates: {
    canonical: "/",
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
    title: "RROTA ($RTA) Official Website | Verified Solana SPL Token",
    description:
      "RROTA is building on-chain utilities with transparent execution. Official contract: 3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a. Verify all official links at rrota.xyz.",
    url: "https://rrota.xyz",
    siteName: "RROTA",
    type: "website",
    images: [
      {
        url: "/rrota-og.jpg",
        width: 1200,
        height: 630,
        alt: "RROTA ($RTA) Official Website",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RROTA ($RTA) Official Website | Verified Solana SPL Token",
    description:
      "Official RROTA ($RTA) website. Solana SPL token with real utility roadmap. Verify links only at rrota.xyz.",
    images: ["/rrota-og.jpg"],
    site: "@rrotacoin",
    creator: "@rrotacoin",
  },
};

// ✅ Organization schema (strong anti-phishing signal)
const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RROTA",
  url: "https://rrota.xyz",
  logo: "https://rrota.xyz/favicon.ico",
  sameAs: [
    "https://t.me/rrotaOfficial",
    "https://x.com/rrotacoin",
    "https://jup.ag/tokens/3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gluten.variable} ${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
