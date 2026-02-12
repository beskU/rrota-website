import Link from "next/link";
import { getAllArticles } from "@/app/lib/articles";

export default function BlogPreview() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <section className="w-full mb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Latest Articles
            </h2>
            <p className="mt-2 text-white/70 text-sm">
              Documentation, updates, and explanations — no fluff.
            </p>
          </div>

          <Link
            href="/blog"
            className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs text-white/60">{a.meta.date}</span>
              </div>

              <h3 className="mt-2 text-lg font-semibold text-white">
                {a.meta.title}
              </h3>

              <p className="mt-2 text-sm text-white/70 line-clamp-3">
                {a.meta.description}
              </p>

              {a.meta.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {a.meta.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-full border border-white/10 bg-black/20 px-2 py-1 text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-5 text-sm text-[#7dd9ff]">
                Read →
              </div>
            </Link>
          ))}
        </div>

        <div className="sm:hidden mt-6">
          <Link
            href="/blog"
            className="inline-flex px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            View all →
          </Link>
        </div>
      </div>
    </section>
  );
}
