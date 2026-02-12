export const runtime = "nodejs";

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogShell from "@/app/components/blog/blog-shell";
import ShareButtons from "@/app/components/blog/share-buttons";
import { getArticleBySlug, getArticleSlugs } from "../../lib/articles";

type RouteParams = { slug: string };
type PageProps = { params: Promise<RouteParams> };

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function markdownToHtml(md: string) {
  const lines = md.split("\n");

  let html = "";
  let inList = false;
  let inCode = false;

  for (const rawLine of lines) {
    const line = rawLine.replace(/\r$/, "");
    const l = line.trim();

    if (l.startsWith("```")) {
      if (!inCode) {
        if (inList) {
          html += "</ul>";
          inList = false;
        }
        inCode = true;
        html += "<pre><code>";
      } else {
        inCode = false;
        html += "</code></pre>";
      }
      continue;
    }

    if (inCode) {
      html += `${escapeHtml(line)}\n`;
      continue;
    }

    if (!l) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      continue;
    }

    if (l.startsWith("# ")) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      html += `<h1>${escapeHtml(l.slice(2))}</h1>`;
      continue;
    }
    if (l.startsWith("## ")) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      html += `<h2>${escapeHtml(l.slice(3))}</h2>`;
      continue;
    }
    if (l.startsWith("### ")) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      html += `<h3>${escapeHtml(l.slice(4))}</h3>`;
      continue;
    }

    if (l.startsWith("- ") || l.startsWith("• ")) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${escapeHtml(l.slice(2))}</li>`;
      continue;
    }

    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const withLinks = escapeHtml(l).replace(
      linkRegex,
      (_m, text, url) =>
        `<a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(
          text
        )}</a>`
    );

    if (inList) {
      html += "</ul>";
      inList = false;
    }

    html += `<p>${withLinks}</p>`;
  }

  if (inList) html += "</ul>";
  if (inCode) html += "</code></pre>";

  return html;
}

function readingTimeMinutes(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return { words, minutes };
}

export async function generateStaticParams(): Promise<RouteParams[]> {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const a = getArticleBySlug(slug);
    const canonical = `https://rrota.xyz/blog/${a.slug}`;
    return {
      title: `${a.meta.title} | RROTA Blog`,
      description: a.meta.description,
      alternates: { canonical },
      openGraph: {
        title: a.meta.title,
        description: a.meta.description,
        url: canonical,
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: a.meta.title,
        description: a.meta.description,
      },
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  let article;
  try {
    article = getArticleBySlug(slug);
  } catch {
    return notFound();
  }

  const html = markdownToHtml(article.content);
  const rt = readingTimeMinutes(article.content);

  const baseUrl = "https://rrota.xyz";
  const canonicalUrl = `${baseUrl}/blog/${article.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.meta.title,
    description: article.meta.description,
    datePublished: article.meta.date,
    dateModified: article.meta.date,
    author: {
      "@type": "Organization",
      name: article.meta.author ?? "RROTA Team",
    },
    publisher: {
      "@type": "Organization",
      name: "RROTA",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/rrota-og.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    url: canonicalUrl,
    keywords: (article.meta.tags ?? []).join(", "),
    wordCount: rt.words,
  };

  return (
    <BlogShell
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: article.meta.title },
      ]}
      title={article.meta.title}
      subtitle={article.meta.description}
    >
      <JsonLd data={articleSchema} />

      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="text-sm text-white/60">
          <span>{article.meta.date}</span>
          {article.meta.author ? <span> • {article.meta.author}</span> : null}
          <span> • {rt.minutes} min read</span>
          <span> • {rt.words} words</span>
        </div>

        <ShareButtons title={`${article.meta.title} — RROTA Blog`} />
      </div>

      {article.meta.tags?.length ? (
        <div className="mb-8 flex flex-wrap gap-2">
          {article.meta.tags.map((t: string) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70 border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}

      <article
        className="prose prose-invert prose-lg max-w-none
                   prose-headings:tracking-tight
                   prose-h2:mt-10 prose-h2:mb-3
                   prose-h3:mt-8 prose-h3:mb-2
                   prose-p:leading-relaxed
                   prose-a:text-[#7dd9ff] prose-a:no-underline hover:prose-a:underline
                   prose-strong:text-white
                   prose-pre:bg-black/40 prose-pre:border prose-pre:border-white/10
                   prose-code:text-white/90"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </BlogShell>
  );
}
