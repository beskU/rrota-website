import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ArticleMeta = {
  title: string;
  description: string;
  date: string;
  author?: string;
  tags?: string[];
  coverImage?: string;
};

export type Article = {
  slug: string;
  meta: ArticleMeta;
  content: string;
};

const ARTICLES_DIRECTORY = path.join(
  process.cwd(),
  "src",
  "content",
  "articles"
);

const SAFE_SLUG_PATTERN = /^[a-zA-Z0-9][a-zA-Z0-9_-]*$/;
const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function assertSafeSlug(slug: string): void {
  if (!SAFE_SLUG_PATTERN.test(slug)) {
    throw new Error(`Invalid article slug: ${slug}`);
  }
}

function resolveArticlePath(slug: string): string {
  assertSafeSlug(slug);

  const mdxPath = path.join(ARTICLES_DIRECTORY, `${slug}.mdx`);
  const mdPath = path.join(ARTICLES_DIRECTORY, `${slug}.md`);

  if (fs.existsSync(mdxPath)) return mdxPath;
  if (fs.existsSync(mdPath)) return mdPath;

  throw new Error(`Article not found: ${slug}`);
}

function normalizeRequiredString(
  value: unknown,
  field: string,
  slug: string
): string {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(
      `Missing or invalid "${field}" frontmatter in article: ${slug}`
    );
  }

  return value.trim();
}

function normalizeOptionalString(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;

  const normalized = value.trim();
  return normalized || undefined;
}

function normalizeDate(value: unknown, slug: string): string {
  const raw =
    value instanceof Date
      ? value.toISOString().slice(0, 10)
      : normalizeRequiredString(value, "date", slug);

  if (!ISO_DATE_PATTERN.test(raw)) {
    throw new Error(
      `Invalid "date" frontmatter in article "${slug}". Use YYYY-MM-DD.`
    );
  }

  const [year, month, day] = raw.split("-").map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));

  const isValid =
    parsed.getUTCFullYear() === year &&
    parsed.getUTCMonth() === month - 1 &&
    parsed.getUTCDate() === day;

  if (!isValid) {
    throw new Error(
      `Invalid calendar date in article "${slug}": ${raw}`
    );
  }

  return raw;
}

function normalizeTags(value: unknown): string[] | undefined {
  const rawTags = Array.isArray(value)
    ? value
    : typeof value === "string"
      ? value.split(",")
      : [];

  const tags = Array.from(
    new Set(
      rawTags
        .filter((tag): tag is string => typeof tag === "string")
        .map((tag) => tag.trim())
        .filter(Boolean)
    )
  );

  return tags.length ? tags : undefined;
}

function normalizeMeta(
  data: Record<string, unknown>,
  slug: string
): ArticleMeta {
  return {
    title: normalizeRequiredString(data.title, "title", slug),
    description: normalizeRequiredString(
      data.description,
      "description",
      slug
    ),
    date: normalizeDate(data.date, slug),
    author: normalizeOptionalString(data.author),
    tags: normalizeTags(data.tags),
    coverImage: normalizeOptionalString(data.coverImage),
  };
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIRECTORY)) return [];

  const slugs = new Set<string>();

  for (const entry of fs.readdirSync(ARTICLES_DIRECTORY, {
    withFileTypes: true,
  })) {
    if (!entry.isFile()) continue;
    if (!/\.mdx?$/.test(entry.name)) continue;

    const slug = entry.name.replace(/\.mdx?$/, "");

    if (!SAFE_SLUG_PATTERN.test(slug)) {
      console.warn(`Skipping article with unsafe filename: ${entry.name}`);
      continue;
    }

    slugs.add(slug);
  }

  return Array.from(slugs).sort((a, b) => a.localeCompare(b));
}

export function getArticleBySlug(slug: string): Article {
  const fullPath = resolveArticlePath(slug);
  const source = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(source);

  return {
    slug,
    meta: normalizeMeta(data as Record<string, unknown>, slug),
    content: content.trim(),
  };
}

export function getAllArticles(): Article[] {
  const articles: Article[] = [];

  for (const slug of getArticleSlugs()) {
    try {
      articles.push(getArticleBySlug(slug));
    } catch (error) {
      console.error(`Failed to load article "${slug}":`, error);
    }
  }

  return articles.sort((a, b) => {
    const dateDifference =
      Date.parse(`${b.meta.date}T00:00:00Z`) -
      Date.parse(`${a.meta.date}T00:00:00Z`);

    return dateDifference || a.slug.localeCompare(b.slug);
  });
}
