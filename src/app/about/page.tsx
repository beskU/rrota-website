import type { Metadata } from "next";
import Link from "next/link";

const OFFICIAL_DOMAIN = "https://rrota.xyz";
const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

export const metadata: Metadata = {
  title: "About RROTA Coin (RTA)",
  description:
    `About RROTA coin (RTA token) — a Solana SPL token focused on utility-first development and transparent execution. ` +
    `Verify contract ${TOKEN_ADDRESS} and official links only at ${OFFICIAL_DOMAIN}.`,
  alternates: { canonical: `${OFFICIAL_DOMAIN}/about` },
  openGraph: {
    title: "About RROTA Coin (RTA)",
    description:
      `RROTA coin (RTA token) on Solana. Verify contract ${TOKEN_ADDRESS} and official links only at ${OFFICIAL_DOMAIN}.`,
    url: `${OFFICIAL_DOMAIN}/about`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "About RROTA Coin (RTA)",
    description:
      `RROTA coin (RTA token) on Solana. Verify contract ${TOKEN_ADDRESS} and official links only at ${OFFICIAL_DOMAIN}.`,
  },
};

export default function AboutPage() {
  return (
    <main className="relative w-full text-white pt-[110px] pb-16">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            About RROTA
          </h1>

          <p className="mt-4 text-white/75 leading-7 max-w-[80ch]">
            <strong>RROTA coin (RTA token)</strong> is a Solana SPL token built
            with a <strong>utility-first</strong> approach: ship real features,
            verify on-chain facts, and avoid fake hype cycles. The only official
            domain is{" "}
            <a
              href={OFFICIAL_DOMAIN}
              className="text-[#7dd9ff] font-semibold hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {OFFICIAL_DOMAIN}
            </a>
            .
          </p>

          <div className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
            <p className="text-amber-50 font-semibold">Anti-phishing warning</p>
            <p className="mt-2 text-amber-50/90 text-sm leading-6">
              Beware of look-alike domains such as <strong>rr0ta.xyz</strong>{" "}
              (zero instead of letter “o”). Always verify the token contract
              address before connecting a wallet.
            </p>
            <p className="mt-3 text-sm text-amber-50/90 break-all">
              Official contract: <span className="font-mono">{TOKEN_ADDRESS}</span>
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              className="px-5 py-3 rounded-xl bg-[#1cc2fc] text-black font-semibold hover:opacity-90 transition"
              href={`https://jup.ag/tokens/${TOKEN_ADDRESS}`}
              target="_blank"
              rel="noreferrer"
            >
              Buy on Jupiter
            </a>
            <a
              className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 text-white font-semibold hover:bg-white/15 transition"
              href={`https://solscan.io/token/${TOKEN_ADDRESS}`}
              target="_blank"
              rel="noreferrer"
            >
              Verify on Solscan →
            </a>
            <Link
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/90 font-semibold hover:bg-white/10 transition"
              href="/"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
