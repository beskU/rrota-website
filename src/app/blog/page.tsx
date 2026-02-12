export const runtime = "nodejs";

import Link from "next/link";
import BlogShell from "@/app/components/blog/blog-shell";
import { getAllArticles } from "../lib/articles";

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <BlogShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Blog" },
      ]}
      title="RROTA Blog"
      subtitle="Long-form updates, explainers, and ecosystem documentation."
    >
      <div className="space-y-6">
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/blog/${a.slug}`}
            className="block p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-2xl font-semibold">{a.meta.title}</h2>
              <span className="text-sm text-white/60 whitespace-nowrap">
                {a.meta.date}
              </span>
            </div>

            <p className="mt-3 text-white/70">{a.meta.description}</p>

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

            <div className="mt-5 text-sm text-[#7dd9ff]">Read →</div>
          </Link>
        ))}
      </div>
    </BlogShell>
  );
}
