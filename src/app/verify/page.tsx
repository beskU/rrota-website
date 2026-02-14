export const runtime = "nodejs";

import type { Metadata } from "next";
import Link from "next/link";

const OFFICIAL_DOMAIN = "https://rrota.xyz";
const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

const LINKS = {
  home: "/",
  blog: "/blog",
  verify: "/verify",
  jupiter: `https://jup.ag/tokens/${TOKEN_ADDRESS}`,
  solscan: `https://solscan.io/token/${TOKEN_ADDRESS}`,
  dexscreener: `https://dexscreener.com/solana/${TOKEN_ADDRESS}`,
  birdeye: `https://birdeye.so/token/${TOKEN_ADDRESS}?chain=solana`,
  telegram: "https://t.me/rrotaOfficial",
  twitter: "https://x.com/rrotacoin",
};

export const metadata: Metadata = {
  title: "Verify RROTA Coin (RTA) – Official Website & Contract",
  description:
    `Official verification page for RROTA coin (RTA token). Confirm the real domain ${OFFICIAL_DOMAIN} and contract ${TOKEN_ADDRESS}. Avoid rr0ta.xyz and fake claim/airdrop pages.`,
  alternates: { canonical: `${OFFICIAL_DOMAIN}/verify` },
  openGraph: {
    title: "Verify RROTA Coin (RTA) – Official Website & Contract",
    description:
      `Verify the official domain and contract for RROTA coin (RTA). Avoid fake claim/airdrop sites like rr0ta.xyz.`,
    url: `${OFFICIAL_DOMAIN}/verify`,
    type: "website",
    images: [{ url: "/rrota-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Verify RROTA Coin (RTA) – Official Website & Contract",
    description:
      `Verify rrota.xyz + official contract. Avoid rr0ta.xyz and fake claim/airdrop pages.`,
    images: ["/rrota-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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

export default function VerifyPage() {
  const canonical = `${OFFICIAL_DOMAIN}/verify`;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the official RROTA website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `The only official website is ${OFFICIAL_DOMAIN}. Beware of look-alike domains such as rr0ta.xyz (zero instead of letter “o”).`,
        },
      },
      {
        "@type": "Question",
        name: "What is the official RROTA contract address?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `The official Solana token contract address is ${TOKEN_ADDRESS}. Verify it on Solscan before connecting any wallet.`,
        },
      },
      {
        "@type": "Question",
        name: "Is rr0ta.xyz the official RROTA website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `No. rr0ta.xyz is not the official RROTA website. The official domain is ${OFFICIAL_DOMAIN}. Do not connect your wallet to look-alike “claim” websites.`,
        },
      },
      {
        "@type": "Question",
        name: "Does RROTA have an official claim or airdrop?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "RROTA does not require you to connect a wallet to unknown ‘claim’ pages. Always verify the domain is rrota.xyz and confirm the contract address before interacting.",
        },
      },
      {
        "@type": "Question",
        name: "How do I verify I’m buying the real RROTA (RTA)?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            `Use the contract address ${TOKEN_ADDRESS}. Verify on Solscan and use official links from ${OFFICIAL_DOMAIN}.`,
        },
      },
    ],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: OFFICIAL_DOMAIN },
      { "@type": "ListItem", position: 2, name: "Verify", item: canonical },
    ],
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Verify RROTA Coin (RTA)
            </h1>
            <p className="mt-3 text-white/70 leading-relaxed max-w-2xl">
              This page exists to help users verify the <strong>official</strong>{" "}
              RROTA website and contract and avoid fake “claim/airdrop” pages.
              If you searched for <strong>rr0ta.xyz</strong> or “RROTA claim”, read this first.
            </p>
          </div>

          <Link
            href={LINKS.home}
            className="text-sm px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white/80"
          >
            ← Back to rrota.xyz
          </Link>
        </div>

        <div className="mt-8 grid gap-4">
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-5">
            <p className="text-emerald-50 font-semibold">Official domain</p>
            <p className="mt-2 text-emerald-50/90">
              ✅ <span className="font-semibold">{OFFICIAL_DOMAIN}</span>
            </p>
          </div>

          <div className="rounded-2xl border border-amber-400/20 bg-amber-500/10 p-5">
            <p className="text-amber-50 font-semibold">Warning: look-alike domain</p>
            <p className="mt-2 text-amber-50/90 leading-relaxed">
              ⚠ <strong>rr0ta.xyz</strong> is <strong>NOT</strong> the official website
              (it uses a <strong>zero “0”</strong> instead of letter “o”).  
              Do not connect your wallet to “claim” popups on look-alike domains.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-white font-semibold">Official contract address (Solana)</p>

            <div className="mt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="text-white/80 font-mono break-all">{TOKEN_ADDRESS}</div>

              <div className="flex flex-wrap gap-2">
                <a
                  href={LINKS.solscan}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white/80"
                >
                  Verify on Solscan →
                </a>
                <a
                  href={LINKS.jupiter}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm px-4 py-2 rounded-full bg-[#1cc2fc]/15 hover:bg-[#1cc2fc]/25 border border-[#1cc2fc]/25 text-[#bfefff]"
                >
                  Buy on Jupiter →
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-bold text-white">How to verify safely</h2>
            <ol className="mt-3 space-y-2 text-white/70 list-decimal pl-6">
              <li>
                Confirm the domain is exactly <strong>rrota.xyz</strong>.
              </li>
              <li>
                Confirm the contract address matches:{" "}
                <span className="font-mono text-white/85">{TOKEN_ADDRESS}</span>.
              </li>
              <li>
                Verify it on Solscan and only use links posted on the official site.
              </li>
              <li>
                Avoid “claim” pages that force wallet connection on unknown domains.
              </li>
            </ol>

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={LINKS.dexscreener}
                target="_blank"
                rel="noreferrer"
                className="text-sm px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white/80"
              >
                DexScreener →
              </a>
              <a
                href={LINKS.birdeye}
                target="_blank"
                rel="noreferrer"
                className="text-sm px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white/80"
              >
                BirdEye →
              </a>
              <a
                href={LINKS.telegram}
                target="_blank"
                rel="noreferrer"
                className="text-sm px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white/80"
              >
                Telegram →
              </a>
              <a
                href={LINKS.twitter}
                target="_blank"
                rel="noreferrer"
                className="text-sm px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white/80"
              >
                X (Twitter) →
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-bold text-white">If you found a fake page</h2>
            <p className="mt-2 text-white/70 leading-relaxed">
              If you searched “RROTA claim” or clicked a look-alike domain, do not connect your wallet.
              Always cross-check the official contract address and use the links above.
            </p>
            <p className="mt-3 text-white/60 text-sm">
              Tip: Bookmark <strong>{OFFICIAL_DOMAIN}</strong> and always start from the official site.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href={LINKS.blog}
                className="text-sm px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white/80"
              >
                Read official updates →
              </Link>
              <Link
                href={LINKS.home}
                className="text-sm px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white/80"
              >
                Go to homepage →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-white/50 text-sm">
        Official verification page:{" "}
        <span className="text-white/70">{canonical}</span>
      </div>
    </main>
  );
}
