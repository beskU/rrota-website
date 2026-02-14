import type { Metadata } from "next";
import Link from "next/link";

const OFFICIAL_DOMAIN = "https://rrota.xyz";
const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const LINKS = {
  telegram: "https://t.me/rrotaOfficial",
  twitter: "https://x.com/rrotacoin",
  jupiter: `https://jup.ag/tokens/${TOKEN_ADDRESS}`,
  solscan: `https://solscan.io/token/${TOKEN_ADDRESS}`,
  dexscreener: `https://dexscreener.com/solana/${TOKEN_ADDRESS}`,
  birdeye: `https://birdeye.so/token/${TOKEN_ADDRESS}?chain=solana`,
  geckoterminal: `https://www.geckoterminal.com/solana/tokens/${TOKEN_ADDRESS}`,
  audit: "https://freshcoins.io/audit/rrota",
};

export const metadata: Metadata = {
  title: "Official RROTA Links",
  description:
    "Official RROTA links: website, contract verification, social channels and trackers. Avoid fake domains and verify only at rrota.xyz.",
  alternates: { canonical: `${OFFICIAL_DOMAIN}/links` },
};

export default function LinksPage() {
  const items = [
    { name: "Official Website", href: OFFICIAL_DOMAIN },
    { name: "Token Contract (Solscan)", href: LINKS.solscan },
    { name: "Buy on Jupiter", href: LINKS.jupiter },
    { name: "Telegram", href: LINKS.telegram },
    { name: "Twitter / X", href: LINKS.twitter },
    { name: "DexScreener", href: LINKS.dexscreener },
    { name: "BirdEye", href: LINKS.birdeye },
    { name: "GeckoTerminal", href: LINKS.geckoterminal },
    { name: "Audit (FreshCoins)", href: LINKS.audit },
  ];

  return (
    <main className="relative w-full text-white pt-[110px] pb-16">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Official Links
          </h1>

          <p className="mt-4 text-white/75 leading-7 max-w-[80ch]">
            Use this page to verify you’re on the real RROTA site and to access
            official trackers and socials.
          </p>

          <div className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
            <p className="text-amber-50 font-semibold">Anti-phishing</p>
            <p className="mt-2 text-amber-50/90 text-sm leading-6">
              Only trust <strong>{OFFICIAL_DOMAIN}</strong>. Beware{" "}
              <strong>rr0ta.xyz</strong> and other look-alike domains. Confirm
              the contract before connecting a wallet:
            </p>
            <p className="mt-3 text-sm text-amber-50/90 break-all">
              <span className="font-mono">{TOKEN_ADDRESS}</span>
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-3">
            {items.map((i) => (
              <a
                key={i.name}
                href={i.href}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-white/10 bg-black/20 p-4 hover:bg-black/30 transition"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-semibold">{i.name}</span>
                  <span className="text-[#7dd9ff]">Open →</span>
                </div>
                <div className="mt-2 text-sm text-white/60 break-all">{i.href}</div>
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 font-semibold hover:bg-white/15 transition"
              href="/"
            >
              Back to Home
            </Link>
            <Link
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/90 font-semibold hover:bg-white/10 transition"
              href="/community"
            >
              Community →
            </Link>
            <Link
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/90 font-semibold hover:bg-white/10 transition"
              href="/whitepaper"
            >
              Whitepaper →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
