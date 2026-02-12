export const runtime = "nodejs";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getArticleBySlug,
  getArticleSlugs,
  type Article,
} from "@/app/lib/articles";

function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// Simple markdown -> HTML (headings, paragraphs, bullets, links, code blocks).
function simpleMarkdownToHtml(md: string) {
  const lines = md.split("\n");

  let html = "";
  let inList = false;
  let inCode = false;

  for (const rawLine of lines) {
    const line = rawLine.replace(/\r$/, "");
    const l = line.trim();

    // Code fences
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

    // Headings
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

    // Lists
    if (l.startsWith("- ") || l.startsWith("• ")) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${escapeHtml(l.slice(2))}</li>`;
      continue;
    }

    // Links [text](url)
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

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const a = getArticleBySlug(params.slug);
    return {
      title: `${a.meta.title} | RROTA ($RTA)`,
      description: a.meta.description,
      openGraph: {
        title: a.meta.title,
        description: a.meta.description,
        url: `https://rrota.xyz/blog/${a.slug}`,
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

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  let article: Article;

  try {
    article = getArticleBySlug(params.slug);
  } catch {
    return notFound();
  }

  const html = simpleMarkdownToHtml(article.content);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link href="/blog" className="text-sm opacity-80 hover:opacity-100">
        ← Back to Blog
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-bold">{article.meta.title}</h1>
        <p className="mt-2 text-sm opacity-80">{article.meta.description}</p>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs opacity-70">
          <span>{article.meta.date}</span>
          {article.meta.author ? <span>• {article.meta.author}</span> : null}
          {article.meta.tags?.length ? (
            <>
              <span>•</span>
              <span>{article.meta.tags.join(", ")}</span>
            </>
          ) : null}
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
          <div className="flex flex-col gap-1">
            <a
              href="https://rrota.xyz"
              target="_blank"
              rel="noreferrer"
              className="opacity-90 hover:opacity-100 underline underline-offset-4"
            >
              Website: https://rrota.xyz
            </a>
            <a
              href="https://t.me/rrotaOfficial"
              target="_blank"
              rel="noreferrer"
              className="opacity-90 hover:opacity-100 underline underline-offset-4"
            >
              Telegram: https://t.me/rrotaOfficial
            </a>
            <a
              href="https://x.com/rrotacoin"
              target="_blank"
              rel="noreferrer"
              className="opacity-90 hover:opacity-100 underline underline-offset-4"
            >
              X: https://x.com/rrotacoin
            </a>
          </div>
        </div>
      </header>

      <article
        className="prose prose-invert mt-8 max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}

