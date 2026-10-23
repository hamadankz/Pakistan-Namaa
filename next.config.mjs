/** Static export: `npm run build` writes a plain website to /out that any host can serve.
    On GitHub Pages the site lives under /<repo-name>; the deploy workflow passes that in as NEXT_PUBLIC_BASE_PATH. */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: { unoptimized: true },
};

export default nextConfig;
