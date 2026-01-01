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
  title: "Rrota: Decentralized Community Token on Solana Blockchain | RROTA",
  description:
    "Discover Rrota, a decentralized community token on the Solana blockchain. Experience speed, security, and innovation tailored for the new generation of crypto users. Join our community and explore our tokenomics and roadmap. Rrota is live on Solana mainnet and accessible via Solana wallets.",

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
    title: "RROTA — The Wheel That Builds Portfolios",
    description:
      "RROTA = REAL MONEY. Built by the community, for the community. Be Early • Be Community • Be Real Money",
    images: [
      {
        url: "/rrota-og.jpg",
        width: 1200,
        height: 630,
        alt: "RROTA Token - The Wheel That Builds Portfolios",
      },
    ],
    type: "website",
    siteName: "RROTA",
  },

  twitter: {
    card: "summary_large_image",
    title: "RROTA — The Wheel That Builds Portfolios",
    description:
      "RROTA = REAL MONEY. Built by the community, for the community. Be Early • Be Community • Be Real Money",
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
