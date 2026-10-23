import { existsSync } from "node:fs";
import { join } from "node:path";
import * as C from "@/content/issue";
import type { Article, ArticleSummary, Block } from "./types";

/** Drops a card photo whose file hasn't been added to public/ yet, so the card shows clean text instead of a placeholder. */
const hasFile = (src?: string) => !!src && existsSync(join(process.cwd(), "public", src));
const thumbOf = (src: string) => src.replace(/\/images\/([^/]+)$/, "/images/thumbs/$1");
const ready = (a: Article): Article => {
  if (!hasFile(a.image)) return { ...a, image: undefined };
  const t = thumbOf(a.image!);
  return { ...a, thumb: t !== a.image && hasFile(t) ? t : a.image };
};

export const main = ready(C.main);
export const side = C.side.map(ready);
export const columns = C.columns.map(ready);
export const hotTake = ready(C.hotTake);

export const ALL: Article[] = [main, ...side, ...columns, hotTake];

/** Sections that get their own listing page at /section/[slug]. */
export const SECTIONS: Record<string, { title: string; blurb: string; articles: Article[] }> = {
  opinion: { title: "Opinion", blurb: "Opinion, commentary and the occasional bit of satire.", articles: columns },
  features: { title: "Features", blurb: "The main story and the stories around it.", articles: [main, ...side] },
};

export const getArticle = (slug: string) => ALL.find(a => a.slug === slug);
export const href = (a: Article) => `/stories/${a.slug}/`;

/** Which section page an article belongs to, for breadcrumbs. */
export const sectionOf = (a: Article) =>
  a.section === "Column" || a.section === "Op-Ed" ? { title: "Opinion", href: "/section/opinion/" }
  : a.section === "Hot Take" ? { title: "Entertainment", href: "/entertainment/" }
  : { title: "Features", href: "/section/features/" };

/** Strips the paragraph markup (*em*, **strong**, > quote) for search and excerpts. */
export const plain = (s: string) => s.replace(/^> /, "").replace(/\*\*?([^*]+)\*\*?/g, "$1");
const paragraphs = (body: Block[]) => body.filter((b): b is string => typeof b === "string");
export const words = (a: Article) => [a.title, a.dek ?? "", ...paragraphs(a.body)].join(" ").split(/\s+/).length;
export const readTime = (a: Article) => `${Math.max(1, Math.round(words(a) / 220))} min read`;

/** The dek, or for articles without one, the opening of the first paragraph. */
export function excerpt(a: Article, n = 32) {
  if (a.dek) return a.dek;
  const w = plain(paragraphs(a.body)[0] ?? "").split(/\s+/);
  return w.length > n ? w.slice(0, n).join(" ") + "…" : w.join(" ");
}

/** Other stories, starting with the ones after this one so "more" never repeats the previous page. */
export const related = (a: Article, n = 4) => {
  const i = ALL.indexOf(a);
  return [...ALL.slice(i + 1), ...ALL.slice(0, i)].slice(0, n);
};

export const summary = (a: Article): ArticleSummary => ({
  slug: a.slug, section: a.section, title: a.title, dek: excerpt(a), author: a.author, image: a.thumb, readTime: readTime(a),
  text: [a.title, a.dek, a.author, a.section, ...paragraphs(a.body).map(plain)].join(" ").toLowerCase(),
});

export const initial = (n: string) => (n.replace(/[^A-Za-z]/g, "")[0] || "N").toUpperCase();
export const monoColors = ["var(--burgundy)", "var(--orange)", "var(--olive)"];
