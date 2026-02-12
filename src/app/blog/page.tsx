import Link from "next/link";
import { getAllArticles } from "@/app/lib/articles";

export const metadata = {
  title: "Blog | RROTA ($RTA)",
  description: "Updates, deep dives, and documentation for RROTA ($RTA).",
};

export default function BlogIndexPage() {
  const articles = getAllArticles();

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">RROTA Blog</h1>
        <p className="mt-2 text-sm opacity-80">
          Long-form updates, explainers, and ecosystem documentation.
        </p>
      </div>

      {articles.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm opacity-80">
            No articles yet. Add markdown files in{" "}
            <code className="rounded bg-black/30 px-2 py-1">
              src/content/articles
            </code>
            .
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold">{a.meta.title}</h2>
                <span className="text-xs opacity-70">{a.meta.date}</span>
              </div>

              <p className="mt-2 text-sm opacity-80">{a.meta.description}</p>

              {a.meta.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {a.meta.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-full border border-white/10 bg-black/20 px-2 py-1 opacity-90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}

