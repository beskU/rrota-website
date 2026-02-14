export const runtime = "nodejs";

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
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function CommunityPage() {
  const baseUrl = OFFICIAL_DOMAIN;
  const canonical = `${baseUrl}/community`;

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "RROTA Community",
    url: canonical,
    isPartOf: {
      "@type": "WebSite",
      name: "RROTA",
      url: baseUrl,
    },
    about: {
      "@type": "Thing",
      name: "RROTA coin (RTA token)",
    },
  };

  return (
    <main className="container mx-auto px-4 py-10 text-white">
      <JsonLd data={pageSchema} />

      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-[#7dd9ff]">RROTA Community</h1>
        <p className="mt-3 text-white/75 leading-relaxed">
          Official community and social links for <strong>RROTA coin (RTA token)</strong>.
          For safety: verify the domain is exactly{" "}
          <a
            className="text-[#7dd9ff] font-semibold hover:underline"
            href={OFFICIAL_DOMAIN}
            target="_blank"
            rel="noreferrer"
          >
            {OFFICIAL_DOMAIN}
          </a>{" "}
          before connecting any wallet.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a
            href={LINKS.telegram}
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <div className="text-lg font-semibold">Telegram</div>
            <div className="mt-1 text-white/70 text-sm">{LINKS.telegram}</div>
            <div className="mt-3 text-sm text-[#7dd9ff]">Join →</div>
          </a>

          <a
            href={LINKS.twitter}
            target="_blank"
            rel="noreferrer"
            className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <div className="text-lg font-semibold">X (Twitter)</div>
            <div className="mt-1 text-white/70 text-sm">{LINKS.twitter}</div>
            <div className="mt-3 text-sm text-[#7dd9ff]">Follow →</div>
          </a>
        </div>

        <div className="mt-8 p-5 rounded-2xl border border-amber-500/30 bg-amber-500/10">
          <div className="font-semibold text-amber-50">Security notice</div>
          <p className="mt-2 text-amber-50/90 text-sm leading-relaxed">
            Beware of look-alike domains such as <strong>rr0ta.xyz</strong> (zero instead of letter “o”).
            Always verify the Solana token contract address before connecting:
          </p>
          <div className="mt-3 flex flex-col gap-2">
            <div className="text-sm text-amber-50/90">
              Contract: <span className="font-mono text-amber-50">{TOKEN_ADDRESS}</span>
            </div>
            <a
              href={LINKS.solscan}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-amber-100 font-semibold hover:underline"
            >
              Verify on Solscan →
            </a>
          </div>
        </div>

        <div className="mt-8 p-5 rounded-2xl border border-white/10 bg-white/5">
          <div className="text-lg font-semibold">Track RROTA</div>
          <p className="mt-2 text-white/70 text-sm">
            Official tracking links. Always cross-check contract address.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition" href={LINKS.jupiter} target="_blank" rel="noreferrer">
              Buy on Jupiter →
            </a>
            <a className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition" href={LINKS.dexscreener} target="_blank" rel="noreferrer">
              DexScreener →
            </a>
            <a className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition" href={LINKS.birdeye} target="_blank" rel="noreferrer">
              BirdEye →
            </a>
            <a className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition" href={LINKS.geckoterminal} target="_blank" rel="noreferrer">
              GeckoTerminal →
            </a>
          </div>

          <div className="mt-5 text-white/60 text-sm">
            Want more? Visit <Link className="text-[#7dd9ff] hover:underline" href="/links">Links</Link>.
          </div>
        </div>
      </div>
    </main>
  );
}
