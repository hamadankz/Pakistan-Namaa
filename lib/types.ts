export type ImageBlock = { type: "image"; src: string; alt: string; caption?: string; align?: "left" | "right" | "full" | "tweet" };
export type VerseBlock = { type: "verse"; lines: string[]; lang?: string; translit?: string };
/** A sentence repeated from the article, set large as a magazine pull quote. */
export type PullBlock = { type: "pull"; text: string };
export type Block = string | ImageBlock | VerseBlock | PullBlock;

/** Headline figures and progress meters shown with a story, taken from its own text. */
export type Facts = {
  title: string;
  stats: { value: string; label: string }[];
  meters: { label: string; value: number; max: number; valueText: string; maxText: string }[];
  source: string;
};

export type Article = {
  slug: string;
  section: string;
  title: string;
  dek?: string;
  author?: string;
  image?: string;
  imageAlt?: string;
  /** Small copy of the photo for cards; filled in from public/images/thumbs when one exists. */
  thumb?: string;
  body: Block[];
  facts?: Facts;
};

export type Issue = {
  name: string;
  urdu: string;
  tagline: string;
  edition: string;
  logo: string;
  instagram: string;
  x: string;
  facebook: string;
  credit: string;
  intro: string[];
};

/** The small slice of an article that client components (search, book) need. */
export type ArticleSummary = { slug: string; section: string; title: string; dek: string; author?: string; image?: string; readTime: string; text: string };
