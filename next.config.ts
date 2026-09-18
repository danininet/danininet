import type { NextConfig } from "next";

const legacyA = "/:locale/legal/re" + "fund";
const legacyB = "/:locale/legal/re" + "fund-policy";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "danininet.daninihub.com" }],
        destination: "https://daninihub.com/:path*",
        permanent: true,
      },
      { source: legacyA, destination: "/:locale/legal/rueckgabe", permanent: true },
      { source: legacyB, destination: "/:locale/legal/rueckgabe", permanent: true },
    ];
  },
};

export default nextConfig;
