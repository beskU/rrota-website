export const runtime = "nodejs";

import type { Metadata } from "next";
import Link from "next/link";
import BlogShell from "@/app/components/blog/blog-shell";
import { getAllArticles } from "../lib/articles";

const SITE_URL = "https://rrota.xyz";
const SITE_NAME = "RROTA";
const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";
const DEFAULT_OG = `${SITE_URL}/rrota-og.jpg`;
const PUBLISHER_LOGO = `${SITE_URL}/favicon.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "RROTA Blog — Official $RTA Updates, Roadmap, Tokenomics and Utility",
  description:
    "Official RROTA blog for $RTA on Solana. Read RROTA coin updates, tokenomics, roadmap progress, Spin-to-Win public beta news, security notes, and ecosystem documentation.",
  keywords: [
    "RROTA blog",
    "RROTA coin",
    "RROTA token",
    "RTA token",
    "RROTA Solana",
    "RROTA Spin-to-Win",
    "RROTA tokenomics",
    "RROTA roadmap",
    "RROTA crypto gaming",
  ],
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "RROTA Blog — Official $RTA Updates and Ecosystem Documentation",
    description:
      "Read official RROTA updates, $RTA token documentation, roadmap progress, Spin-to-Win news, and Solana ecosystem notes.",
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: DEFAULT_OG,
        width: 1200,
        height: 630,
        alt: "RROTA Blog — Official $RTA Updates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RROTA Blog — Official $RTA Updates",
    description:
      "Official RROTA blog for $RTA on Solana: tokenomics, roadmap, Spin-to-Win public beta, security notes, and ecosystem updates.",
    images: [DEFAULT_OG],
    site: "@rrotacoin",
    creator: "@rrotacoin",
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

export default function BlogPage() {
  const articles = getAllArticles();

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: `${SITE_NAME} Blog`,
    url: `${SITE_URL}/blog`,
    description:
      "Official RROTA blog for $RTA on Solana. Includes RROTA coin updates, tokenomics, roadmap progress, Spin-to-Win public beta news, security notes, and ecosystem documentation.",
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: PUBLISHER_LOGO,
      },
      sameAs: [
        "https://t.me/rrotaOfficial",
        "https://x.com/rrotacoin",
        `https://jup.ag/tokens/${TOKEN_ADDRESS}`,
        `https://solscan.io/token/${TOKEN_ADDRESS}`,
      ],
    },
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/blog#itemlist`,
    name: "RROTA Blog Articles",
    itemListElement: articles.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/blog/${a.slug}`,
      name: a.meta.title,
      description: a.meta.description,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/blog#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={blogJsonLd} />
      <JsonLd data={itemListJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <BlogShell
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
        title="RROTA Blog"
        subtitle="Official RROTA updates, explainers, tokenomics notes, roadmap progress, Spin-to-Win public beta news, and ecosystem documentation."
      >
        <section className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
          <p className="text-white/75 leading-7">
            The RROTA Blog is the official content hub for{" "}
            <strong className="text-white">RROTA coin</strong>, also known as{" "}
            <strong className="text-white">$RTA</strong>. Here you can follow
            project updates, Solana token verification notes, tokenomics,
            roadmap progress, Spin-to-Win public beta news, crypto gaming
            development, security reminders, and long-form ecosystem
            documentation.
          </p>

          <p className="mt-4 text-white/70 leading-7">
            Always verify RROTA through the official domain{" "}
            <strong className="text-white">rrota.xyz</strong> and confirm the
            official Solana mint before using any trading, chart, game, or
            community link.
          </p>

          <p className="mt-4 break-all font-mono text-sm text-white/80">
            Official $RTA mint: {TOKEN_ADDRESS}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
            <Link
              href="/tokenomics"
              className="px-5 py-3 rounded-xl bg-[#1cc2fc] text-black font-semibold hover:opacity-90 transition"
            >
              Tokenomics
            </Link>

            <Link
              href="/roadmap"
              className="px-5 py-3 rounded-xl bg-white/10 border border-white/10 font-semibold hover:bg-white/15 transition"
            >
              Roadmap
            </Link>

            <a
              href="https://spin.rrota.xyz"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 font-semibold hover:bg-white/10 transition"
            >
              Spin-to-Win
            </a>

            <a
              href={`https://solscan.io/token/${TOKEN_ADDRESS}`}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 font-semibold hover:bg-white/10 transition"
            >
              Verify on Solscan
            </a>
          </div>
        </section>

        {articles.length ? (
          <section className="space-y-6">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="block p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <h2 className="text-2xl font-semibold text-white leading-tight">
                    {a.meta.title}
                  </h2>

                  <span className="text-sm text-white/60 whitespace-nowrap">
                    {a.meta.date}
                  </span>
                </div>

                <p className="mt-3 text-white/70 leading-7">
                  {a.meta.description}
                </p>

                {a.meta.tags?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {a.meta.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="mt-5 text-sm text-[#7dd9ff] font-semibold">
                  Read article →
                </div>
              </Link>
            ))}
          </section>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">
              No articles published yet
            </h2>
            <p className="mt-3 text-white/70">
              Official RROTA updates and documentation will appear here.
            </p>
          </div>
        )}
      </BlogShell>
    </>
  );
}
