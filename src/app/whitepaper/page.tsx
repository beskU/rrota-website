export const runtime = "nodejs";

import Link from "next/link";

const OFFICIAL_DOMAIN = "https://rrota.xyz";
const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function WhitepaperPage() {
  const canonical = `${OFFICIAL_DOMAIN}/whitepaper`;

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "RROTA Whitepaper",
    about: ["RROTA coin", "RTA token", "Solana SPL token"],
    url: canonical,
    author: { "@type": "Organization", name: "RROTA" },
    publisher: { "@type": "Organization", name: "RROTA" },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
  };

  return (
    <main className="container mx-auto px-4 py-10 text-white">
      <JsonLd data={pageSchema} />

      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-[#7dd9ff]">RROTA Whitepaper</h1>
        <p className="mt-3 text-white/75 leading-relaxed">
          This page is the canonical location for RROTA documentation and verification info.
          Always verify the domain is exactly{" "}
          <a
            className="text-[#7dd9ff] font-semibold hover:underline"
            href={OFFICIAL_DOMAIN}
            target="_blank"
            rel="noreferrer"
          >
            {OFFICIAL_DOMAIN}
          </a>{" "}
          and confirm the token contract before connecting any wallet.
        </p>

        <div className="mt-6 p-5 rounded-2xl border border-white/10 bg-white/5">
          <div className="text-lg font-semibold">Official contract</div>
          <div className="mt-2 text-sm text-white/70">
            Solana SPL contract address:
          </div>
          <div className="mt-2 font-mono text-sm break-all text-white">
            {TOKEN_ADDRESS}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={`https://solscan.io/token/${TOKEN_ADDRESS}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition"
            >
              Verify on Solscan →
            </a>
            <a
              href={`https://jup.ag/tokens/${TOKEN_ADDRESS}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition"
            >
              Buy on Jupiter →
            </a>
          </div>
        </div>

        <div className="mt-6 p-5 rounded-2xl border border-amber-500/30 bg-amber-500/10">
          <div className="font-semibold text-amber-50">Anti-phishing warning</div>
          <p className="mt-2 text-amber-50/90 text-sm leading-relaxed">
            Beware of look-alike domains such as <strong>rr0ta.xyz</strong> (zero instead of “o”).
            The only official domain is <strong>{OFFICIAL_DOMAIN}</strong>.
          </p>
        </div>

        <div className="mt-8 p-5 rounded-2xl border border-white/10 bg-white/5">
          <div className="text-lg font-semibold">Whitepaper content</div>
          <p className="mt-2 text-white/70 text-sm leading-relaxed">
            Add your long-form documentation here (token purpose, utilities, roadmap, safety,
            verification steps). If you already publish posts in the Blog, you can link them here.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition"
            >
              Read Blog →
            </Link>
            <Link
              href="/roadmap"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition"
            >
              Roadmap →
            </Link>
            <Link
              href="/tokenomics"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition"
            >
              Tokenomics →
            </Link>
            <Link
              href="/links"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition"
            >
              Official Links →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
