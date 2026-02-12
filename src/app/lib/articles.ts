import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ArticleMeta = {
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  author?: string;
  tags?: string[];
  coverImage?: string;
};

export type Article = {
  slug: string;
  meta: ArticleMeta;
  content: string;
};

const articlesDir = path.join(process.cwd(), "src", "content", "articles");

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDir)) return [];
  return fs
    .readdirSync(articlesDir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getArticleBySlug(slug: string): Article {
  const mdxPath = path.join(articlesDir, `${slug}.mdx`);
  const mdPath = path.join(articlesDir, `${slug}.md`);

  const fullPath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Article not found: ${slug}`);
  }

  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);

  const meta = data as Partial<ArticleMeta>;

  if (!meta.title || !meta.description || !meta.date) {
    throw new Error(
      `Missing required frontmatter (title/description/date) in article: ${slug}`
    );
  }

  return {
    slug,
    meta: meta as ArticleMeta,
    content,
  };
}

export function getAllArticles(): Article[] {
  return getArticleSlugs()
    .map(getArticleBySlug)
    .sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
}

