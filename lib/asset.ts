/** Prefixes a file in public/ with the site's base path, e.g. /Pakistan-Namaa on GitHub Pages. Links get this from Next.js; plain <img> tags need it here. */
export const asset = (src: string) => (src.startsWith("/") ? (process.env.NEXT_PUBLIC_BASE_PATH ?? "") + src : src);
