import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // This option allows you to build a standalone Next.js application that can be deployed without the need for a Node.js server. 
  // It includes all necessary files and dependencies in the output directory, making it easier to deploy to various environments.
  output: "standalone", 
  // Dev-only tracing. Makes the terminal show every server-side fetch with its
  // full URL, and mirrors browser console output into the same terminal so
  // server-side and client-side API calls can be read side by side.
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
    browserToTerminal: true,
  },
};

export default nextConfig;