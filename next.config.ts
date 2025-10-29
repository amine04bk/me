import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

// If deploying to GitHub Pages under the repository name (e.g. https://username.github.io/repo),
// set NEXT_PUBLIC_GITHUB_PAGES to "/repo" in the GitHub Actions environment (or leave empty for root).
const repoBase = process.env.NEXT_PUBLIC_GITHUB_PAGES || '';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // When exporting static files, Next can be served from a subpath. basePath and assetPrefix
  // ensure generated URLs are correct when hosted under a repo path.
  basePath: repoBase || undefined,
  assetPrefix: repoBase || undefined,
};

export default nextConfig;
