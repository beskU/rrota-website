export const runtime = "nodejs";

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import ShareButtons from "@/app/components/blog/share-buttons";
import {
  getAllArticles,
  getArticleBySlug,
  getArticleSlugs,
} from "../../lib/articles";

type RouteParams = {
  slug: string;
};

type PageProps = {
  params: Promise<RouteParams>;
};

const SITE_URL = "https://rrota.xyz";
const SITE_NAME = "RROTA";
const BLOG_URL = `${SITE_URL}/blog`;
const DEFAULT_OG = `${SITE_URL}/rrota-og-solidproof.jpg`;

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^\w\s$-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function stripDuplicateLeadingH1(
  markdown: string,
  title: string
): string {
  const lines = markdown.split("\n");

  while (lines.length && !lines[0].trim()) {
    lines.shift();
  }

  const firstLine = lines[0]?.trim();

  if (!firstLine?.startsWith("# ")) {
    return markdown;
  }

  const markdownTitle = firstLine
    .replace(/^#\s+/, "")
    .trim();

  if (
    normalizeText(markdownTitle) ===
    normalizeText(title)
  ) {
    return lines.slice(1).join("\n").trimStart();
  }

  return markdown;
}

function safeLinkHref(value: string): string | null {
  const href = value.trim();

  if (!href) return null;

  if (
    href.startsWith("/") ||
    href.startsWith("#") ||
    href.startsWith("mailto:")
  ) {
    return href;
  }

  try {
    const parsed = new URL(href);

    if (
      parsed.protocol === "https:" ||
      parsed.protocol === "http:"
    ) {
      return parsed.toString();
    }
  } catch {
    return null;
  }

  return null;
}

function formatInline(value: string): string {
  const placeholders: string[] = [];

  const createPlaceholder = (html: string): string => {
    const token = `\u0000${placeholders.length}\u0000`;
    placeholders.push(html);
    return token;
  };

  let output = value.replace(
    /`([^`\n]+)`/g,
    (_match, code: string) =>
      createPlaceholder(
        `<code>${escapeHtml(code)}</code>`
      )
  );

  output = output.replace(
    /\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g,
    (
      _match,
      label: string,
      rawHref: string
    ) => {
      const href = safeLinkHref(rawHref);

      if (!href) {
        return escapeHtml(label);
      }

      const isExternal =
        href.startsWith("http://") ||
        href.startsWith("https://");

      const attributes = isExternal
        ? ' target="_blank" rel="noopener noreferrer"'
        : "";

      return createPlaceholder(
        `<a href="${escapeHtml(href)}"${attributes}>${escapeHtml(label)}</a>`
      );
    }
  );

  output = escapeHtml(output)
    .replace(
      /\*\*([^*\n]+)\*\*/g,
      "<strong>$1</strong>"
    )
    .replace(
      /__([^_\n]+)__/g,
      "<strong>$1</strong>"
    )
    .replace(
      /(^|[^*])\*([^*\n]+)\*/g,
      "$1<em>$2</em>"
    )
    .replace(
      /(^|[^_])_([^_\n]+)_/g,
      "$1<em>$2</em>"
    );

  return output.replace(
    /\u0000(\d+)\u0000/g,
    (_match, index: string) =>
      placeholders[Number(index)] ?? ""
  );
}

function markdownToHtml(markdown: string): string {
  const lines = markdown.split("\n");
  const html: string[] = [];

  let paragraph: string[] = [];
  let unorderedItems: string[] = [];
  let orderedItems: string[] = [];
  let blockquoteLines: string[] = [];
  let codeLines: string[] = [];
  let codeLanguage = "";
  let inCode = false;

  const flushParagraph = () => {
    if (!paragraph.length) return;

    html.push(
      `<p>${formatInline(paragraph.join(" "))}</p>`
    );
    paragraph = [];
  };

  const flushUnorderedList = () => {
    if (!unorderedItems.length) return;

    html.push(
      `<ul>${unorderedItems
        .map(
          (item) =>
            `<li>${formatInline(item)}</li>`
        )
        .join("")}</ul>`
    );
    unorderedItems = [];
  };

  const flushOrderedList = () => {
    if (!orderedItems.length) return;

    html.push(
      `<ol>${orderedItems
        .map(
          (item) =>
            `<li>${formatInline(item)}</li>`
        )
        .join("")}</ol>`
    );
    orderedItems = [];
  };

  const flushBlockquote = () => {
    if (!blockquoteLines.length) return;

    html.push(
      `<blockquote><p>${formatInline(
        blockquoteLines.join(" ")
      )}</p></blockquote>`
    );
    blockquoteLines = [];
  };

  const flushTextBlocks = () => {
    flushParagraph();
    flushUnorderedList();
    flushOrderedList();
    flushBlockquote();
  };

  const renderTable = (
    headerLine: string,
    dividerLine: string,
    bodyLines: string[]
  ): string | null => {
    const dividerPattern =
      /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/;

    if (!dividerPattern.test(dividerLine)) {
      return null;
    }

    const parseRow = (line: string): string[] =>
      line
        .trim()
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((cell) => cell.trim());

    const headers = parseRow(headerLine);

    if (!headers.length) return null;

    const rows = bodyLines.map(parseRow);

    return [
      "<div class=\"article-table-wrap\">",
      "<table>",
      "<thead><tr>",
      ...headers.map(
        (header) =>
          `<th>${formatInline(header)}</th>`
      ),
      "</tr></thead>",
      "<tbody>",
      ...rows.map(
        (row) =>
          `<tr>${headers
            .map(
              (_header, index) =>
                `<td>${formatInline(
                  row[index] ?? ""
                )}</td>`
            )
            .join("")}</tr>`
      ),
      "</tbody>",
      "</table>",
      "</div>",
    ].join("");
  };

  for (let index = 0; index < lines.length; index++) {
    const rawLine = lines[index].replace(/\r$/, "");
    const trimmed = rawLine.trim();

    if (trimmed.startsWith("```")) {
      flushTextBlocks();

      if (!inCode) {
        inCode = true;
        codeLanguage = trimmed
          .slice(3)
          .trim()
          .replace(/[^\w+-]/g, "");
        codeLines = [];
      } else {
        const languageClass = codeLanguage
          ? ` class="language-${escapeHtml(
              codeLanguage
            )}"`
          : "";

        html.push(
          `<pre><code${languageClass}>${escapeHtml(
            codeLines.join("\n")
          )}</code></pre>`
        );

        inCode = false;
        codeLanguage = "";
        codeLines = [];
      }

      continue;
    }

    if (inCode) {
      codeLines.push(rawLine);
      continue;
    }

    if (!trimmed) {
      flushTextBlocks();
      continue;
    }

    if (
      /^(\*{3,}|-{3,}|_{3,})$/.test(trimmed)
    ) {
      flushTextBlocks();
      html.push("<hr />");
      continue;
    }

    if (
      trimmed.includes("|") &&
      lines[index + 1]?.includes("|")
    ) {
      const bodyLines: string[] = [];
      let cursor = index + 2;

      while (
        cursor < lines.length &&
        lines[cursor].trim().includes("|")
      ) {
        bodyLines.push(lines[cursor]);
        cursor++;
      }

      const table = renderTable(
        rawLine,
        lines[index + 1],
        bodyLines
      );

      if (table) {
        flushTextBlocks();
        html.push(table);
        index = cursor - 1;
        continue;
      }
    }

    const headingMatch = trimmed.match(
      /^(#{1,6})\s+(.+)$/
    );

    if (headingMatch) {
      flushTextBlocks();

      const level = Math.min(
        6,
        Math.max(2, headingMatch[1].length)
      );

      html.push(
        `<h${level}>${formatInline(
          headingMatch[2]
        )}</h${level}>`
      );
      continue;
    }

    if (trimmed.startsWith(">")) {
      flushParagraph();
      flushUnorderedList();
      flushOrderedList();

      blockquoteLines.push(
        trimmed.replace(/^>\s?/, "")
      );
      continue;
    }

    if (/^[-*+]\s+/.test(trimmed)) {
      flushParagraph();
      flushOrderedList();
      flushBlockquote();

      unorderedItems.push(
        trimmed.replace(/^[-*+]\s+/, "")
      );
      continue;
    }

    if (/^\d+[.)]\s+/.test(trimmed)) {
      flushParagraph();
      flushUnorderedList();
      flushBlockquote();

      orderedItems.push(
        trimmed.replace(/^\d+[.)]\s+/, "")
      );
      continue;
    }

    flushUnorderedList();
    flushOrderedList();
    flushBlockquote();
    paragraph.push(trimmed);
  }

  flushTextBlocks();

  if (inCode) {
    const languageClass = codeLanguage
      ? ` class="language-${escapeHtml(
          codeLanguage
        )}"`
      : "";

    html.push(
      `<pre><code${languageClass}>${escapeHtml(
        codeLines.join("\n")
      )}</code></pre>`
    );
  }

  return html.join("\n");
}

function readingTime(text: string): {
  words: number;
  minutes: number;
} {
  const plainText = text
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`|[\]()!-]/g, " ");

  const words = plainText
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return {
    words,
    minutes: Math.max(1, Math.ceil(words / 220)),
  };
}

function parseDate(value: string): Date | null {
  const normalized = /^\d{4}-\d{2}-\d{2}$/.test(
    value
  )
    ? `${value}T00:00:00Z`
    : value;

  const parsed = new Date(normalized);

  return Number.isNaN(parsed.getTime())
    ? null
    : parsed;
}

function toIsoDate(value: string): string | undefined {
  return parseDate(value)?.toISOString();
}

function formatDate(value: string): string {
  const parsed = parseDate(value);

  if (!parsed) return value;

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(parsed);
}

function resolveImageUrl(
  value: string | undefined
): string {
  if (!value) return DEFAULT_OG;

  if (
    value.startsWith("http://") ||
    value.startsWith("https://")
  ) {
    return value;
  }

  return `${SITE_URL}${
    value.startsWith("/") ? value : `/${value}`
  }`;
}

function ArrowIcon({
  direction = "right",
}: {
  direction?: "left" | "right";
}) {
  return (
    <svg
      className={`h-4 w-4 ${
        direction === "left" ? "rotate-180" : ""
      }`}
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

export async function generateStaticParams(): Promise<
  RouteParams[]
> {
  return getArticleSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const article = getArticleBySlug(slug);
    const canonical = `${BLOG_URL}/${article.slug}`;
    const image = resolveImageUrl(
      article.meta.coverImage
    );
    const publishedTime = toIsoDate(
      article.meta.date
    );

    return {
      title: article.meta.title,
      description: article.meta.description,
      alternates: {
        canonical,
      },
      openGraph: {
        title: article.meta.title,
        description: article.meta.description,
        url: canonical,
        type: "article",
        siteName: SITE_NAME,
        ...(publishedTime
          ? { publishedTime }
          : {}),
        authors: [
          article.meta.author ?? "RROTA Team",
        ],
        tags: article.meta.tags ?? [],
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: article.meta.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: article.meta.title,
        description: article.meta.description,
        images: [image],
      },
    };
  } catch {
    return {
      title: "Article not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

export default async function BlogPostPage({
  params,
}: PageProps) {
  const { slug } = await params;

  let article;

  try {
    article = getArticleBySlug(slug);
  } catch {
    notFound();
  }

  const allArticles = getAllArticles();
  const articleIndex = allArticles.findIndex(
    (item) => item.slug === article.slug
  );

  const newerArticle =
    articleIndex > 0
      ? allArticles[articleIndex - 1]
      : null;

  const olderArticle =
    articleIndex >= 0 &&
    articleIndex < allArticles.length - 1
      ? allArticles[articleIndex + 1]
      : null;

  const cleanContent = stripDuplicateLeadingH1(
    article.content,
    article.meta.title
  );

  const articleHtml = markdownToHtml(cleanContent);
  const stats = readingTime(cleanContent);
  const canonicalUrl = `${BLOG_URL}/${article.slug}`;
  const publishedIso = toIsoDate(
    article.meta.date
  );
  const authorName =
    article.meta.author ?? "RROTA Team";
  const tags = article.meta.tags ?? [];
  const coverImage = article.meta.coverImage
    ? resolveImageUrl(article.meta.coverImage)
    : null;
  const schemaImage = resolveImageUrl(
    article.meta.coverImage
  );

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#blogposting`,
    headline: article.meta.title,
    description: article.meta.description,
    image: [schemaImage],
    ...(publishedIso
      ? { datePublished: publishedIso }
      : {}),
    inLanguage: "en",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    url: canonicalUrl,
    author: {
      "@type": "Organization",
      name: authorName,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      sameAs: [
        "https://t.me/rrotaOfficial",
        "https://x.com/rrotacoin",
      ],
    },
    isPartOf: {
      "@type": "Blog",
      "@id": `${BLOG_URL}#blog`,
      name: "RROTA Blog",
      url: BLOG_URL,
    },
    articleSection: "RROTA Blog",
    keywords: tags,
    wordCount: stats.words,
  };

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
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-[#050711] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbSchema
            ),
          }}
        />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_4%,rgba(34,211,238,0.13),transparent_29%),radial-gradient(circle_at_88%_3%,rgba(217,70,239,0.10),transparent_29%),linear-gradient(180deg,#050711_0%,#07101d_50%,#050711_100%)]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:58px_58px]" />
        </div>

        <header className="relative mx-auto max-w-5xl px-4 pb-12 pt-32 sm:px-6 sm:pb-16 sm:pt-36 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white/42"
          >
            <Link
              href="/"
              className="transition hover:text-white"
            >
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href="/blog"
              className="transition hover:text-white"
            >
              Blog
            </Link>
            <span aria-hidden="true">/</span>
            <span
              className="max-w-[18rem] truncate text-white/62 sm:max-w-xl"
              aria-current="page"
            >
              {article.meta.title}
            </span>
          </nav>

          <div className="mt-8 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200">
            RROTA Blog
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            {article.meta.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/66 sm:text-lg">
            {article.meta.description}
          </p>

          <div className="mt-7 flex flex-col gap-5 border-y border-white/10 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/50">
              <time dateTime={article.meta.date}>
                {formatDate(article.meta.date)}
              </time>
              <span aria-hidden="true">•</span>
              <span>{authorName}</span>
              <span aria-hidden="true">•</span>
              <span>{stats.minutes} min read</span>
              <span aria-hidden="true">•</span>
              <span>{stats.words} words</span>
            </div>

            <ShareButtons
              title={`${article.meta.title} — RROTA Blog`}
            />
          </div>

          {tags.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-white/52"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </header>

        {coverImage ? (
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] shadow-[0_0_60px_rgba(34,211,238,0.08)]">
              <img
                src={coverImage}
                alt={article.meta.title}
                className="aspect-[16/9] h-auto w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        ) : null}

        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-[minmax(0,1fr)_220px] lg:px-8">
          <article
            className="rrota-article min-w-0 rounded-[34px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8 lg:p-10"
            dangerouslySetInnerHTML={{
              __html: articleHtml,
            }}
          />

          <aside className="h-fit space-y-4 lg:sticky lg:top-28">
            <div className="rounded-[26px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl">
              <div className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300/62">
                Article details
              </div>

              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-white/36">
                    Published
                  </dt>
                  <dd className="mt-1 font-bold text-white/76">
                    {formatDate(article.meta.date)}
                  </dd>
                </div>

                <div>
                  <dt className="text-white/36">
                    Author
                  </dt>
                  <dd className="mt-1 font-bold text-white/76">
                    {authorName}
                  </dd>
                </div>

                <div>
                  <dt className="text-white/36">
                    Reading time
                  </dt>
                  <dd className="mt-1 font-bold text-white/76">
                    {stats.minutes} minutes
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-[26px] border border-cyan-400/14 bg-cyan-400/[0.045] p-5">
              <div className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300/62">
                Official source
              </div>

              <p className="mt-3 text-sm leading-6 text-white/56">
                Verify project links, token references, products,
                audits, and community channels through the official
                resource hub.
              </p>

              <Link
                href="/links"
                className="mt-4 inline-flex items-center gap-2 text-sm font-black text-cyan-200 transition hover:text-white"
              >
                Open official links
                <ArrowIcon />
              </Link>
            </div>

            <Link
              href="/blog"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/72 transition hover:bg-white/[0.07] hover:text-white"
            >
              <ArrowIcon direction="left" />
              All articles
            </Link>
          </aside>
        </div>

        {(newerArticle || olderArticle) ? (
          <nav
            aria-label="Article navigation"
            className="relative mx-auto grid max-w-6xl gap-4 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:px-8"
          >
            {newerArticle ? (
              <Link
                href={`/blog/${newerArticle.slug}`}
                className="group rounded-[28px] border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-cyan-300/22 hover:bg-white/[0.055]"
              >
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-300/56">
                  <ArrowIcon direction="left" />
                  Newer article
                </div>

                <div className="mt-3 text-lg font-black leading-7 text-white">
                  {newerArticle.meta.title}
                </div>
              </Link>
            ) : (
              <div />
            )}

            {olderArticle ? (
              <Link
                href={`/blog/${olderArticle.slug}`}
                className="group rounded-[28px] border border-white/10 bg-white/[0.035] p-5 text-left transition hover:-translate-y-1 hover:border-cyan-300/22 hover:bg-white/[0.055] md:text-right"
              >
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-300/56 md:justify-end">
                  Older article
                  <ArrowIcon />
                </div>

                <div className="mt-3 text-lg font-black leading-7 text-white">
                  {olderArticle.meta.title}
                </div>
              </Link>
            ) : null}
          </nav>
        ) : null}

        <section className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="rounded-[36px] border border-cyan-400/16 bg-[linear-gradient(135deg,rgba(34,211,238,0.08),rgba(217,70,239,0.07))] p-7 sm:p-9">
            <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-black tracking-[-0.04em] text-white">
                  Continue with the current RROTA status.
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-white/58">
                  Use the roadmap for development status and the live
                  product for current race deadlines, leaderboards,
                  reward information, and account-specific activity.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/roadmap"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-black text-white/76 transition hover:bg-white/[0.07] hover:text-white"
                >
                  Review roadmap
                </Link>

                <a
                  href="https://spin.rrota.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-cyan-400/18 bg-cyan-400/[0.09] px-4 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/[0.15] hover:text-white"
                >
                  Open Spin-to-Win
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
