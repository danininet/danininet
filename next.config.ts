import type { NextConfig } from "next";

const legacyA = "/:locale/legal/re" + "fund";
const legacyB = "/:locale/legal/re" + "fund-policy";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      { source: legacyA, destination: "/:locale/legal/rueckgabe", permanent: true },
      { source: legacyB, destination: "/:locale/legal/rueckgabe", permanent: true },
    ];
  },
};

export default nextConfig;
