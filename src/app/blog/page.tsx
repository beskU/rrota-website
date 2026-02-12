export const runtime = "nodejs";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/rrota-logo2.png";
import { getAllArticles } from "../lib/articles";

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <main className="min-h-screen bg-[#0c0f14] text-white">
      {/* Top Navigation */}
      <div className="border-b border-white/10 bg-[#0c0f14]/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src={logo} alt="RROTA" width={36} height={36} />
            <span className="text-xl font-semibold tracking-wide">
              RROTA
            </span>
          </Link>

          <Link
            href="/"
            className="text-sm text-white/70 hover:text-white transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Blog Header */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold tracking-tight">
          RROTA Blog
        </h1>
        <p className="mt-3 text-white/60 text-lg">
          Long-form updates, explainers, and ecosystem documentation.
        </p>
      </div>

      {/* Articles */}
      <div className="max-w-6xl mx-auto px-6 pb-20 space-y-6">
        {articles.map((a) => (
          <Link
            key={a.slug}
            href={`/blog/${a.slug}`}
            className="block p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                {a.meta.title}
              </h2>
              <span className="text-sm text-white/50">
                {a.meta.date}
              </span>
            </div>

            <p className="mt-3 text-white/70">
              {a.meta.description}
            </p>

            {a.meta.tags?.length && (
              <div className="mt-4 flex flex-wrap gap-2">
                {a.meta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}
