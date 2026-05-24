import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://danininet.daninihub.com";

const legalRoutes = [
  "/legal/impressum",
  "/legal/privacy",
  "/legal/cookies",
  "/legal/terms",
  "/legal/disclaimer",
  "/legal/affiliate-disclosure",
  "/legal/ai-transparentnost",
  "/legal/health-disclaimer",
] as const;

const routesByLocale = {
  sr: [
    "",
    "/daninihub-metod",
    "/proizvodi",
    "/proizvodi/digitalna-prodaja-lokacije",
    "/usluge/mini-audit",
    "/blog",
    "/knjiga-utisaka",
    "/support",
    "/legal",
    ...legalRoutes,
    "/zdrav-stil-zivota",
  ],
  de: [
    "",
    "/methode",
    "/produkte",
    "/produkte/digitaler-verkauf-von-standorten",
    "/services/mini-audit",
    "/blog",
    "/gaestebuch",
    "/support",
    "/legal",
    ...legalRoutes,
    "/gesund-leben-wasser",
  ],
  en: [
    "",
    "/method",
    "/products",
    "/products/digital-location-sales",
    "/services/mini-audit",
    "/blog",
    "/guestbook",
    "/support",
    "/legal",
    ...legalRoutes,
    "/healthy-lifestyle-water",
  ],
} as const;

function routePriority(route: string) {
  if (route === "") return 1;
  if (
    route.includes("produkte") ||
    route.includes("products") ||
    route.includes("proizvodi") ||
    route.includes("mini-audit")
  ) {
    return 0.9;
  }
  if (route.startsWith("/legal/")) return 0.65;
  return 0.7;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return Object.entries(routesByLocale).flatMap(([locale, routes]) =>
    routes.map((route) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified: now,
      changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
      priority: routePriority(route),
    })),
  );
}
