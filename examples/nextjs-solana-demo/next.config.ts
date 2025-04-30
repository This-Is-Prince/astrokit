import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: [
    'astrokit',
    '@astrokit/wallet-solana',
    '@astrokit/plugin-solana-adrena'
  ],
};

export default nextConfig;
