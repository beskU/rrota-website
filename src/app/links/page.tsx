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
  spin: "https://spin.rrota.xyz",
  cmcVerification: "https://x.com/rrotacoin/status/2054219354422510035",
  contactEmail: "mailto:info@rrota.xyz",
};

export const metadata: Metadata = {
  title: "Official RROTA Links | Verified $RTA Resources",
  description:
    "Official RROTA links: website, whitepaper, contract verification, social channels, audit, Spin-to-Win utility, trackers and contact details. Avoid fake domains and verify only at rrota.xyz.",
  alternates: { canonical: `${OFFICIAL_DOMAIN}/links` },
};

export default function LinksPage() {
  const items = [
    { name: "Official Website", href: OFFICIAL_DOMAIN, note: "Main RROTA ecosystem website" },
    { name: "Whitepaper", href: `${OFFICIAL_DOMAIN}/whitepaper`, note: "RROTA project overview and ecosystem documentation" },
    { name: "RROTA Spin-to-Win", href: LINKS.spin, note: "Live RROTA utility experience" },
    { name: "CMC Verification Post", href: LINKS.cmcVerification, note: "Official X confirmation for CoinMarketCap review" },
    { name: "Token Contract (Solscan)", href: LINKS.solscan, note: "Official Solana token verification" },
    { name: "Buy on Jupiter", href: LINKS.jupiter, note: "Official Jupiter trading link" },
    { name: "Telegram", href: LINKS.telegram, note: "Official RROTA Telegram community" },
    { name: "Twitter / X", href: LINKS.twitter, note: "Official RROTA X account" },
    { name: "DexScreener", href: LINKS.dexscreener, note: "Live DEX chart and market data" },
    { name: "BirdEye", href: LINKS.birdeye, note: "Solana token market tracker" },
    { name: "GeckoTerminal", href: LINKS.geckoterminal, note: "Pool and market tracker" },
    { name: "Audit (FreshCoins)", href: LINKS.audit, note: "Public audit reference" },
    { name: "Privacy Policy", href: `${OFFICIAL_DOMAIN}/privacy`, note: "Privacy and data handling information" },
    { name: "Terms of Service", href: `${OFFICIAL_DOMAIN}/terms`, note: "Website and platform terms" },
    { name: "Contact Email", href: LINKS.contactEmail, note: "Official contact: info@rrota.xyz" },
  ];

  return (
    <main className="relative w-full text-white pt-[110px] pb-16">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-10">
          <div className="inline-flex items-center rounded-full border border-[#7dd9ff]/25 bg-[#7dd9ff]/10 px-4 py-2 text-sm font-semibold text-[#7dd9ff]">
            Verified RROTA Resources
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight">
            Official RROTA Links
          </h1>

          <p className="mt-4 text-white/75 leading-7 max-w-[80ch]">
            Use this page to verify you’re on the real RROTA site and to access
            the official website, contract, trading links, utility products,
            community channels, audit reference and contact information.
          </p>

          <div className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
            <p className="text-amber-50 font-semibold">Anti-phishing Notice</p>
            <p className="mt-2 text-amber-50/90 text-sm leading-6">
              Only trust <strong>{OFFICIAL_DOMAIN}</strong>. Beware{" "}
              <strong>rr0ta.xyz</strong> and other look-alike domains. Always
              confirm the official contract before connecting a wallet or trading.
            </p>
            <p className="mt-3 text-sm text-amber-50/90 break-all">
              Official $RTA mint: <span className="font-mono">{TOKEN_ADDRESS}</span>
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="text-white font-semibold">Official Contact</p>
            <p className="mt-2 text-white/70 text-sm leading-6">
              For listing reviews, exchange communication, partnership requests,
              security reports or official verification, contact RROTA only through:
            </p>
            <a
              href={LINKS.contactEmail}
              className="mt-2 inline-block text-[#7dd9ff] font-semibold hover:underline"
            >
              info@rrota.xyz
            </a>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-3">
            {items.map((i) => (
              <a
                key={i.name}
                href={i.href}
                target={i.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={i.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="block rounded-xl border border-white/10 bg-black/20 p-4 hover:bg-black/30 transition"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-semibold">{i.name}</span>
                  <span className="text-[#7dd9ff]">
                    {i.href.startsWith("mailto:") ? "Email →" : "Open →"}
                  </span>
                </div>
                <div className="mt-2 text-sm text-white/60 leading-6">{i.note}</div>
                <div className="mt-2 text-xs text-white/40 break-all">{i.href}</div>
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="font-semibold text-white">Risk Disclaimer</p>
            <p className="mt-2 text-sm leading-6 text-white/65">
              RROTA ($RTA) is a crypto asset on Solana. Crypto assets are volatile
              and involve risk. Nothing on this website or official pages should be
              considered financial advice. Always verify official links and make your
              own decisions.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
            <Link
              className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 font-semibold hover:bg-white/15 transition"
              href="/"
            >
              Back to Home
            </Link>
            <Link
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/90 font-semibold hover:bg-white/10 transition"
              href="/whitepaper"
            >
              Whitepaper →
            </Link>
            <Link
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/90 font-semibold hover:bg-white/10 transition"
              href="/privacy"
            >
              Privacy Policy →
            </Link>
            <Link
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/90 font-semibold hover:bg-white/10 transition"
              href="/terms"
            >
              Terms →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
