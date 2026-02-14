import type { Metadata } from "next";
import Link from "next/link";

const OFFICIAL_DOMAIN = "https://rrota.xyz";
const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

export const metadata: Metadata = {
  title: "RROTA Tokenomics",
  description:
    "RROTA tokenomics overview: verification, transparency and on-chain checks. Official contract and links at rrota.xyz.",
  alternates: { canonical: `${OFFICIAL_DOMAIN}/tokenomics` },
};

export default function TokenomicsPage() {
  return (
    <main className="relative w-full text-white pt-[110px] pb-16">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Tokenomics
          </h1>

          <p className="mt-4 text-white/75 leading-7 max-w-[80ch]">
            Tokenomics info should be verifiable. Use the contract address and
            on-chain explorers to confirm any number you see.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h2 className="text-xl font-semibold">Verification</h2>
              <p className="mt-2 text-white/75 leading-6">
                Always verify the mint address and token details on Solscan /
                explorers before swapping.
              </p>
              <p className="mt-3 text-sm text-white/80 break-all">
                Contract: <span className="font-mono">{TOKEN_ADDRESS}</span>
              </p>
              <a
                className="inline-block mt-4 text-[#7dd9ff] font-semibold hover:underline"
                href={`https://solscan.io/token/${TOKEN_ADDRESS}`}
                target="_blank"
                rel="noreferrer"
              >
                Verify on Solscan →
              </a>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h2 className="text-xl font-semibold">Official sources</h2>
              <p className="mt-2 text-white/75 leading-6">
                Official domain + links live here. Beware clones and fake claim
                pages.
              </p>
              <a
                className="inline-block mt-4 text-[#7dd9ff] font-semibold hover:underline"
                href={OFFICIAL_DOMAIN}
                target="_blank"
                rel="noreferrer"
              >
                {OFFICIAL_DOMAIN} →
              </a>
            </div>
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
            <Link
              className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 font-semibold hover:bg-white/15 transition"
              href="/links"
            >
              Official Links →
            </Link>
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
