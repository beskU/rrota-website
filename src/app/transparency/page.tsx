import type { Metadata } from "next";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import TransparencyDashboard from "../components/transparency-dashboard";
import { getTransparencyData, RROTA_MINT } from "../lib/transparency-data";

const SITE_URL = "https://rrota.xyz";
const PAGE_URL = `${SITE_URL}/transparency`;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Transparency Center — Live RROTA Metrics & Verification",
  description:
    "Track RROTA market metrics, holders, Spin-to-Win activity, community signals, token authority status, supply, audits, and weekly/monthly/yearly competition data with clear source provenance.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "RROTA Transparency Center — Live Metrics & Verification",
    description:
      "A public source-first dashboard for RROTA market health, product activity, on-chain security, community metrics, and live competition windows.",
    url: PAGE_URL,
    siteName: "RROTA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RROTA Transparency Center — Live Metrics & Verification",
    description:
      "Live RROTA metrics with source status, on-chain verification, game activity, and competition data.",
  },
};

export default async function TransparencyPage() {
  const initialData = await getTransparencyData();

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "RROTA Transparency Center",
    url: PAGE_URL,
    description:
      "Public RROTA ecosystem metrics and verification dashboard covering market data, holders, product activity, community signals, token security and competition windows.",
    about: {
      "@type": "Thing",
      name: "RROTA ($RTA)",
      identifier: RROTA_MINT,
    },
    isPartOf: {
      "@type": "WebSite",
      name: "RROTA",
      url: SITE_URL,
    },
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <TransparencyDashboard initialData={initialData} />
      <Footer />
    </>
  );
}
