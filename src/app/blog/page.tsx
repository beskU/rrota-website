export const runtime = "nodejs";

import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { getAllArticles } from "../lib/articles";

const SITE_URL = "https://rrota.xyz";
const PAGE_URL = `${SITE_URL}/blog`;

const SPIN_URL = "https://spin.rrota.xyz";

export const metadata: Metadata = {
  title: "RROTA Blog",
  description:
    "Read official RROTA product updates, Spin-to-Win news, roadmap progress, token education, security guidance, leaderboard announcements, and ecosystem documentation.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "RROTA Blog",
    description:
      "Official RROTA updates covering products, Spin-to-Win, leaderboards, token education, roadmap progress, security, and ecosystem development.",
    url: PAGE_URL,
    siteName: "RROTA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RROTA Blog",
    description:
      "Follow official RROTA product updates, leaderboard news, token education, security guidance, and ecosystem progress.",
  },
};

const editorialTopics = [
  {
    title: "Product updates",
    text:
      "Development notes, feature releases, maintenance information, and progress across live RROTA products.",
  },
  {
    title: "Spin-to-Win and leaderboards",
    text:
      "Weekly, monthly, yearly, and all-time competition updates, winner communication, and game guidance.",
  },
  {
    title: "Token education",
    text:
      "Clear explanations of $RTA verification, tokenomics, utility status, market references, and wallet safety.",
  },
  {
    title: "Security and transparency",
    text:
      "Official-link verification, scam warnings, audit references, fair-play rules, and public proof initiatives.",
  },
];

function formatArticleDate(value: string): string {
  const parsed = new Date(`${value}T00:00:00Z`);

  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(parsed);
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h5" />
    </svg>
  );
}

export default function BlogPage() {
  const articles = getAllArticles();
  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1);

  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${PAGE_URL}#blog`,
        name: "RROTA Blog",
        url: PAGE_URL,
        description:
          "The official RROTA editorial hub for product updates, leaderboards, token education, security guidance, and ecosystem documentation.",
        inLanguage: "en",
        publisher: {
          "@type": "Organization",
          name: "RROTA",
          url: SITE_URL,
          sameAs: [
            "https://t.me/rrotaOfficial",
            "https://x.com/rrotacoin",
          ],
        },
        blogPost: articles.map((article) => ({
          "@type": "BlogPosting",
          headline: article.meta.title,
          description: article.meta.description,
          datePublished: article.meta.date,
          url: `${SITE_URL}/blog/${article.slug}`,
          inLanguage: "en",
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
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
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#050711] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogSchema),
          }}
        />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_5%,rgba(34,211,238,0.14),transparent_29%),radial-gradient(circle_at_88%_4%,rgba(217,70,239,0.11),transparent_29%),linear-gradient(180deg,#050711_0%,#07101d_52%,#050711_100%)]" />
          <div className="absolute inset-0 opacity-[0.065] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
        </div>

        <section className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-cyan-200">
                Official RROTA publication
              </div>

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Product updates,
                <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                  explanations, and public progress.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
                Follow RROTA development through official articles covering
                Spin-to-Win, leaderboards, token education, security, roadmap
                progress, ecosystem products, and important community updates.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/roadmap"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-400/[0.09] px-6 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.15] hover:text-white"
                >
                  View current roadmap
                </Link>

                <Link
                  href="/links"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.045] px-6 text-sm font-black text-white/82 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Verify official links
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-cyan-400/16 bg-white/[0.04] p-6 shadow-[0_0_65px_rgba(34,211,238,0.10)] backdrop-blur-xl">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300/68">
                Published archive
              </div>

              <div className="mt-3 text-5xl font-black tracking-[-0.05em]">
                {articles.length}
              </div>

              <p className="mt-3 text-sm leading-7 text-white/56">
                {articles.length === 1
                  ? "Official article currently available."
                  : "Official articles currently available."}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ["Products", "Updates"],
                  ["Leaderboards", "Competition"],
                  ["Token", "Education"],
                  ["Security", "Guidance"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="text-[9px] font-black uppercase tracking-[0.17em] text-white/38">
                      {label}
                    </div>
                    <div className="mt-1 text-sm font-black text-white">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-fuchsia-300/72">
              Editorial coverage
            </div>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              What the RROTA Blog documents.
            </h2>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {editorialTopics.map((topic, index) => (
              <article
                key={topic.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl"
              >
                <div className="font-mono text-xs font-black text-fuchsia-300/50">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-4 text-lg font-black text-white">
                  {topic.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/56">
                  {topic.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {featuredArticle ? (
          <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
            <div className="text-[11px] font-black uppercase tracking-[0.24em] text-cyan-300/72">
              Latest article
            </div>

            <Link
              href={`/blog/${featuredArticle.slug}`}
              className="group mt-5 block overflow-hidden rounded-[36px] border border-cyan-400/16 bg-[linear-gradient(135deg,rgba(34,211,238,0.07),rgba(217,70,239,0.055))] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-[linear-gradient(135deg,rgba(34,211,238,0.10),rgba(217,70,239,0.08))] sm:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <time
                    dateTime={featuredArticle.meta.date}
                    className="text-[10px] font-black uppercase tracking-[0.18em] text-white/42"
                  >
                    {formatArticleDate(featuredArticle.meta.date)}
                  </time>

                  <h2 className="mt-4 max-w-4xl text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                    {featuredArticle.meta.title}
                  </h2>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-white/62 sm:text-base">
                    {featuredArticle.meta.description}
                  </p>

                  {featuredArticle.meta.tags?.length ? (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {featuredArticle.meta.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-black/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.13em] text-white/54"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <span className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-cyan-400/18 bg-cyan-400/[0.09] px-5 text-sm font-black text-cyan-100 transition group-hover:bg-cyan-400/[0.15] group-hover:text-white">
                  Read latest
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          </section>
        ) : null}

        <section className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.24em] text-emerald-300/72">
                Article archive
              </div>

              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                All official articles.
              </h2>
            </div>

            {articles.length ? (
              <div className="text-sm font-black text-white/42">
                Newest first
              </div>
            ) : null}
          </div>

          {articles.length ? (
            <div className="mt-9 grid gap-4 md:grid-cols-2">
              {(featuredArticle ? remainingArticles : articles).map(
                (article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group flex h-full flex-col rounded-[30px] border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/24 hover:bg-white/[0.055]"
                  >
                    <time
                      dateTime={article.meta.date}
                      className="text-[10px] font-black uppercase tracking-[0.17em] text-white/40"
                    >
                      {formatArticleDate(article.meta.date)}
                    </time>

                    <h3 className="mt-4 text-2xl font-black tracking-[-0.03em] text-white">
                      {article.meta.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-white/58">
                      {article.meta.description}
                    </p>

                    {article.meta.tags?.length ? (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {article.meta.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-black/15 px-3 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-white/48"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-cyan-200 transition group-hover:text-white">
                      Read article
                      <ArrowIcon />
                    </span>
                  </Link>
                )
              )}

              {featuredArticle && remainingArticles.length === 0 ? (
                <div className="rounded-[30px] border border-dashed border-white/12 bg-white/[0.02] p-6">
                  <div className="text-[10px] font-black uppercase tracking-[0.18em] text-white/36">
                    Archive status
                  </div>
                  <h3 className="mt-3 text-xl font-black text-white">
                    More articles will appear here.
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/52">
                    The latest published article is featured above. Future
                    official updates will automatically join this archive.
                  </p>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="mt-9 rounded-[34px] border border-dashed border-white/12 bg-white/[0.025] p-7 sm:p-9">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300/56">
                No published articles
              </div>

              <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white">
                The editorial archive is currently empty.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/56">
                Official product updates, leaderboard announcements, security
                notes, and ecosystem documentation will appear here after a valid
                Markdown or MDX article is published.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/roadmap"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Review roadmap
                </Link>

                <Link
                  href="/whitepaper"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/74 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Read whitepaper
                </Link>
              </div>
            </div>
          )}
        </section>

        <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
          <div className="rounded-[38px] border border-cyan-400/16 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(217,70,239,0.08))] p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  Follow the live product while development continues.
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">
                  Use the blog for detailed updates and the live game for current
                  race deadlines, leaderboard status, product availability, and
                  account-specific information.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={SPIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-cyan-300/25 bg-cyan-400/[0.10] px-5 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.16] hover:text-white"
                >
                  Open Spin-to-Win
                  <ExternalIcon />
                </a>

                <Link
                  href="/rrota-spin-to-win"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05] px-5 text-sm font-black text-white/82 transition hover:bg-white/[0.08] hover:text-white"
                >
                  Read product guide
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
