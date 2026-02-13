check this code and make the changes need,   
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "RROTA ($RTA) — Utility-First Solana Token | rrota.xyz",
  description:
    "RROTA ($RTA) is a utility-first token on Solana. Token is live with a transparent build roadmap and staged utility releases (Spin-to-Win, WebApp integration, and more). Explore token details, roadmap, and official links.",

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
    title: "RROTA ($RTA) — Utility-First Token on Solana",
    description:
      "RROTA is building on-chain utilities with transparent execution and staged releases. Token is live on Solana. Track progress, roadmap, and official links on rrota.xyz.",
    images: [
      {
        url: "/rrota-og.jpg",
        width: 1200,
        height: 630,
        alt: "RROTA ($RTA) — Utility-First Token on Solana",
      },
    ],
    type: "website",
    siteName: "RROTA",
  },

  twitter: {
    card: "summary_large_image",
    title: "RROTA ($RTA) — Utility-First Token on Solana",
    description:
      "RROTA is building on-chain utilities with transparent execution and staged releases. Token is live on Solana. See roadmap + official links on rrota.xyz.",
    images: ["/rrota-og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gluten.variable} ${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
