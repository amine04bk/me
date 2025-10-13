import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true }, 
  basePath: '/portfolio', 
  assetPrefix: '/portfolio/',
 };

export default nextConfig;
