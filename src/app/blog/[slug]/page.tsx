export const runtime = "nodejs";

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogShell from "@/app/components/blog/blog-shell";
import ShareButtons from "@/app/components/blog/share-buttons";
import { getArticleBySlug, getArticleSlugs } from "../../lib/articles";

type RouteParams = { slug: string };
type PageProps = { params: Promise<RouteParams> };

const SITE_URL = "https://rrota.xyz";
const SITE_NAME = "RROTA";
const BLOG_URL = `${SITE_URL}/blog`;
const TOKEN_ADDRESS = "3yeWYPG3BvGBFrwjar9e28GBYZgYmHT79d7FBVS6xL1a";
const DEFAULT_OG = `${SITE_URL}/rrota-og.jpg`;
const PUBLISHER_LOGO = `${SITE_URL}/favicon.ico`;

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

function toISODate(dateStr: string) {
  // expects YYYY-MM-DD
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return new Date().toISOString();
  return d.toISOString();
}

export async function generateStaticParams(): Promise<RouteParams[]> {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const a = getArticleBySlug(slug);

    const canonical = `${SITE_URL}/blog/${a.slug}`;
    const ogImage = a.meta.coverImage
      ? a.meta.coverImage.startsWith("http")
        ? a.meta.coverImage
        : `${SITE_URL}${a.meta.coverImage}`
      : DEFAULT_OG;

    return {
      metadataBase: new URL(SITE_URL),
      title: `${a.meta.title} | RROTA Blog`,
      description: a.meta.description,
      alternates: { canonical },
      openGraph: {
        title: a.meta.title,
        description: a.meta.description,
        url: canonical,
        type: "article",
        siteName: SITE_NAME,
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: a.meta.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: a.meta.title,
        description: a.meta.description,
        images: [ogImage],
        site: "@rrotacoin",
        creator: "@rrotacoin",
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

  const canonicalUrl = `${SITE_URL}/blog/${article.slug}`;

  const publishedISO = toISODate(article.meta.date);
  const modifiedISO = toISODate(article.meta.date); // upgrade later if you add updatedAt

  const ogImage = article.meta.coverImage
    ? article.meta.coverImage.startsWith("http")
      ? article.meta.coverImage
      : `${SITE_URL}${article.meta.coverImage}`
    : DEFAULT_OG;

  const authorName = article.meta.author ?? "RROTA Team";
  const tags = article.meta.tags ?? [];

  // ✅ BlogPosting schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#blogposting`,
    headline: article.meta.title,
    description: article.meta.description,
    image: [ogImage],
    datePublished: publishedISO,
    dateModified: modifiedISO,
    inLanguage: "en",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    url: canonicalUrl,
    author: {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: authorName,
      url: SITE_URL,
    },
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
    isPartOf: {
      "@type": "Blog",
      "@id": `${BLOG_URL}#blog`,
      name: `${SITE_NAME} Blog`,
      url: BLOG_URL,
    },
    about: [
      { "@type": "Thing", name: "RROTA coin", sameAs: SITE_URL },
      {
        "@type": "Thing",
        name: "RROTA token / RTA token",
        description: `Official Solana token contract: ${TOKEN_ADDRESS}`,
      },
      {
        "@type": "Thing",
        name: "Official domain",
        description: `Verify authenticity only at ${SITE_URL}`,
      },
    ],
    articleSection: "Blog",
    keywords: [
      ...tags,
      "RROTA coin",
      "RROTA token",
      "RTA token",
      "Solana SPL",
      TOKEN_ADDRESS,
      "rrota.xyz",
    ],
    wordCount: rt.words,
  };

  // ✅ BreadcrumbList schema (adds breadcrumb rich results + hierarchy signal)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        item: BLOG_URL,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.meta.title,
        item: canonicalUrl,
      },
    ],
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
      <JsonLd data={breadcrumbSchema} />

      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="text-sm text-white/60">
          <span>{article.meta.date}</span>
          {article.meta.author ? <span> • {article.meta.author}</span> : null}
          <span> • {rt.minutes} min read</span>
          <span> • {rt.words} words</span>
        </div>

        <ShareButtons title={`${article.meta.title} — RROTA Blog`} />
      </div>

      {tags.length ? (
        <div className="mb-8 flex flex-wrap gap-2">
          {tags.map((t: string) => (
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

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="text-sm text-white/75">
          Official site:{" "}
          <a
            href={SITE_URL}
            className="text-[#7dd9ff] font-semibold hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {SITE_URL}
          </a>{" "}
          • Official contract:{" "}
          <span className="font-mono text-white/90">{TOKEN_ADDRESS}</span>
        </div>
      </div>
    </BlogShell>
  );
}
