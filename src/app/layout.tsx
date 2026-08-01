import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Gluten, Inter, Poppins } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./utils/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const gluten = Gluten({
  variable: "--font-gluten",
  subsets: ["latin"],
  display: "swap",
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
const SOCIAL_IMAGE = "/rrota-og-solidproof.jpg";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050711",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(OFFICIAL_DOMAIN),

  title: {
    default: "RROTA ($RTA) — Utility Ecosystem on Solana",
    template: "%s | RROTA",
  },

  description:
    "RROTA is a Solana ecosystem built around the $RTA token, live digital products, community rewards, crypto gaming, RROTA AI, and long-term practical utility.",

  applicationName: "RROTA",
  category: "cryptocurrency",
  creator: "RROTA",
  publisher: "RROTA",

  authors: [
    {
      name: "RROTA",
      url: OFFICIAL_DOMAIN,
    },
  ],

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
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    title: "RROTA ($RTA) — Utility Ecosystem on Solana",
    description:
      "Explore the official RROTA ecosystem: the $RTA token, Spin-to-Win, RROTA AI, community rewards, crypto gaming, roadmap progress, and verified project resources.",
    siteName: "RROTA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: SOCIAL_IMAGE,
        width: 1200,
        height: 675,
        alt: "RROTA utility ecosystem on Solana",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RROTA ($RTA) — Utility Ecosystem on Solana",
    description:
      "The official RROTA ecosystem: $RTA on Solana, live products, RROTA AI, rewards, gaming, verified links, and roadmap progress.",
    images: [SOCIAL_IMAGE],
    site: "@rrotacoin",
    creator: "@rrotacoin",
  },

  keywords: [
    "RROTA",
    "RROTA coin",
    "RROTA token",
    "$RTA",
    "RTA token",
    "RROTA ecosystem",
    "Solana utility token",
    "Solana ecosystem",
    "RROTA Spin-to-Win",
    "RROTA AI",
    "Solana gaming",
    "digital rewards",
    TOKEN_ADDRESS,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gluten.variable} ${inter.variable} ${poppins.variable} min-h-screen bg-[#050711] text-white antialiased`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
