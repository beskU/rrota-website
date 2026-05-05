import Link from "next/link";
import { getAllArticles } from "@/app/lib/articles";

const focusItems = [
  "Spin-to-Win updates",
  "RROTA utility progress",
  "Solana token education",
];

export default function BlogPreview() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[110px]" />
        <div className="absolute right-[-140px] top-20 h-[360px] w-[360px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
        <div className="absolute bottom-[-160px] left-[-120px] h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:54px_54px] opacity-25" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-fuchsia-300/20 bg-fuchsia-300/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.28em] text-fuchsia-200 shadow-[0_0_30px_rgba(217,70,239,0.12)]">
              <span className="h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_18px_rgba(217,70,239,0.95)]" />
              RROTA Intelligence
            </div>

            <h2 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Latest updates from the{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-fuchsia-200 to-yellow-200 bg-clip-text text-transparent">
                RROTA utility stack.
              </span>
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
              Read official RROTA articles covering Spin-to-Win, token
              verification, ecosystem progress, and the move from simple token
              visibility to live utility.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-yellow-200 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.18)] transition hover:scale-[1.02]"
            >
              View All Articles
              <span className="ml-2">→</span>
            </Link>

            <Link
              href="https://spin.rrota.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-300/15"
            >
              Play Spin-to-Win
              <span className="ml-2">↗</span>
            </Link>
          </div>
        </div>

        {/* Focus strip */}
        <div className="mb-6 grid gap-3 md:grid-cols-3">
          {focusItems.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/[0.04] px-5 py-4 shadow-xl shadow-black/20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  ◆
                </span>
                <p className="text-sm font-bold text-white">{item}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Articles */}
        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((article, index) => {
            const isFeatured = index === 0;

            return (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#070A12]/90 p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.06]"
              >
                {/* Card glow */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent opacity-70" />
                  <div className="absolute right-[-80px] top-[-80px] h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/15" />
                  <div className="absolute bottom-[-90px] left-[-90px] h-48 w-48 rounded-full bg-fuchsia-500/10 blur-3xl transition group-hover:bg-fuchsia-500/15" />
                </div>

                <div className="relative z-10">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-slate-300">
                      {article.meta.date}
                    </span>

                    {isFeatured ? (
                      <span className="rounded-full border border-yellow-300/20 bg-yellow-300/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-yellow-100">
                        Featured
                      </span>
                    ) : (
                      <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-100">
                        Update
                      </span>
                    )}
                  </div>

                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-fuchsia-300/20 bg-fuchsia-300/10 text-fuchsia-100 shadow-[0_0_30px_rgba(217,70,239,0.12)]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 4v6h6M8 13h8M8 17h5"
                      />
                    </svg>
                  </div>

                  <h3 className="text-xl font-black leading-tight text-white transition group-hover:text-cyan-100">
                    {article.meta.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
                    {article.meta.description}
                  </p>

                  {article.meta.tags?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {article.meta.tags.slice(0, 3).map((tag) => (
                        <span
                          key={`${article.slug}-${tag}`}
                          className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[11px] font-bold text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                    <span className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                      Read Article
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-100 transition group-hover:translate-x-1 group-hover:border-cyan-200/40 group-hover:bg-cyan-300/15">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Empty state safety */}
        {!articles.length ? (
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 text-center shadow-xl shadow-black/20 backdrop-blur-xl">
            <p className="text-sm text-slate-300">
              No articles are published yet. RROTA updates will appear here once
              they are added to the blog.
            </p>
          </div>
        ) : null}

        {/* Bottom note */}
        <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/20 backdrop-blur-xl">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">
                Official RROTA Updates
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                RROTA articles are designed to explain the project clearly:
                what is live, what is being rolled out, and how users can verify
                official links before interacting with $RTA.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:border-fuchsia-300/30 hover:bg-white/[0.09]"
            >
              Open Blog
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
