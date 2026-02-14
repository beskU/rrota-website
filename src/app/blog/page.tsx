export const runtime = "nodejs";

import type { Metadata } from "next";
import Link from "next/link";
import BlogShell from "@/app/components/blog/blog-shell";
import { getAllArticles } from "../lib/articles";

const SITE_URL = "https://rrota.xyz";
const SITE_NAME = "RROTA";

// ✅ Metadata (very important for SEO + anti-phishing dominance)
export const metadata: Metadata = {
  title: "RROTA Blog – Official Updates & Documentation",
  description:
    "Official RROTA blog. Long-form updates, ecosystem documentation, roadmap insights, and security verification. Verify authenticity only at rrota.xyz.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "RROTA Blog – Official Updates & Documentation",
    description:
      "Official RROTA blog. Updates, documentation, and verification resources.",
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function BlogPage() {
  const articles = getAllArticles();

  // ✅ Blog structured data
  const BLOG_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} Blog`,
    url: `${SITE_URL}/blog`,
    description:
      "Official RROTA blog. Updates, verification notes, and ecosystem documentation.",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.ico`,
      },
    },
  };

  // ✅ ItemList structured data (helps Google understand post hierarchy)
  const ITEMLIST_JSON_LD = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: articles.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/blog/${a.slug}`,
      name: a.meta.title,
    })),
  };

  return (
    <>
      {/* Structured Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BLOG_JSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ITEMLIST_JSON_LD) }}
      />

      <BlogShell
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
        title="RROTA Blog"
        subtitle="Long-form updates, explainers, and ecosystem documentation. Verify authenticity only at rrota.xyz."
      >
        <div className="space-y-6">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="block p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-semibold text-white">
                  {a.meta.title}
                </h2>
                <span className="text-sm text-white/60 whitespace-nowrap">
                  {a.meta.date}
                </span>
              </div>

              <p className="mt-3 text-white/70">
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
                Read →
              </div>
            </Link>
          ))}
        </div>
      </BlogShell>
    </>
  );
}
