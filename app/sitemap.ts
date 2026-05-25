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
  "/legal/refund-policy",
] as const;

const routesByLocale = {
  sr: [
    "",
    "/daninihub-metod",
    "/proizvodi",
    "/proizvodi/digitalna-prodaja-lokacije",
    "/proizvodi/digitalna-prodaja-lokacije/uspeh",
    "/usluge/mini-audit",
    "/blog",
    "/newsletter",
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
    "/produkte/digitaler-verkauf-von-standorten/uspeh",
    "/services/mini-audit",
    "/blog",
    "/newsletter",
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
    "/products/digital-location-sales/uspeh",
    "/services/mini-audit",
    "/blog",
    "/newsletter",
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
    route.includes("digitalna-prodaja-lokacije") ||
    route.includes("digital-location-sales") ||
    route.includes("digitaler-verkauf-von-standorten")
  ) {
    return 0.95;
  }

  if (
    route.includes("produkte") ||
    route.includes("products") ||
    route.includes("proizvodi") ||
    route.includes("mini-audit") ||
    route.includes("newsletter")
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
      changeFrequency:
        route === "" || route === "/blog" || route === "/newsletter" ? "weekly" : "monthly",
      priority: routePriority(route),
    })),
  );
}
