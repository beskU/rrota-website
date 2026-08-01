import Link from "next/link";
import { getAllArticles } from "@/app/lib/articles";

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
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

function ArticleIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h5" />
    </svg>
  );
}

export default function BlogPreview() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <section
      id="Updates"
      className="relative w-full scroll-mt-28 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/18 bg-fuchsia-400/8 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-fuchsia-200">
              <span className="h-2 w-2 rounded-full bg-fuchsia-300 shadow-[0_0_12px_rgba(217,70,239,0.9)]" />
              Latest Updates
            </div>

            <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[1.04] tracking-[-0.04em] sm:text-5xl">
              Follow the progress of the
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-fuchsia-300 bg-clip-text text-transparent">
                RROTA ecosystem.
              </span>
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/66 sm:text-base">
              Official articles document shipped products, ecosystem development,
              token verification, community activity, security improvements, and
              future roadmap work.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-cyan-300/22 bg-cyan-400/10 px-5 text-sm font-black text-cyan-100 transition-all hover:border-cyan-200/40 hover:bg-cyan-400/15 hover:text-white"
          >
            View all updates
            <ArrowIcon />
          </Link>
        </div>

        {articles.length ? (
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {articles.map((article, index) => {
              const tags = article.meta.tags?.slice(0, 2) ?? [];

              return (
                <article
                  key={article.slug}
                  className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-cyan-300/24 hover:bg-cyan-400/5"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(217,70,239,0.08),transparent_36%)] opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-fuchsia-400/18 bg-fuchsia-400/8 text-fuchsia-100">
                        <ArticleIcon />
                      </div>

                      <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white/55">
                        {index === 0 ? "Latest" : "Update"}
                      </span>
                    </div>

                    <div className="mt-5 text-[11px] font-black uppercase tracking-[0.18em] text-cyan-200/72">
                      {article.meta.date}
                    </div>

                    <h3 className="mt-3 text-xl font-black leading-tight text-white transition-colors group-hover:text-cyan-100">
                      {article.meta.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/58">
                      {article.meta.description}
                    </p>

                    {tags.length ? (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span
                            key={`${article.slug}-${tag}`}
                            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/55"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <Link
                      href={`/blog/${article.slug}`}
                      className="mt-6 inline-flex items-center gap-2 border-t border-white/10 pt-5 text-sm font-black text-cyan-200 transition-colors hover:text-white"
                      aria-label={`Read ${article.meta.title}`}
                    >
                      Read update
                      <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-9 rounded-[30px] border border-white/10 bg-white/[0.035] p-7 text-center">
            <h3 className="text-xl font-black text-white">No updates published yet</h3>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/58">
              New RROTA ecosystem articles will appear here after they are added to
              the official blog.
            </p>
          </div>
        )}

        <div className="mt-6 flex flex-col gap-4 rounded-[26px] border border-amber-400/14 bg-amber-400/6 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-3xl text-sm leading-6 text-amber-100/72">
            Official updates should clearly separate completed work, active testing,
            and future plans so visitors can understand the real status of every
            RROTA product.
          </p>

          <Link
            href="/roadmap"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-black text-amber-100 transition-colors hover:text-white"
          >
            Open full roadmap
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
