import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://danininet.daninihub.com";

const routesByLocale = {
  sr: [
    "",
    "/daninihub-metod",
    "/proizvodi",
    "/proizvodi/digitalna-prodaja-lokacije",
    "/blog",
    "/knjiga-utisaka",
    "/support",
    "/legal",
    "/zdrav-stil-zivota",
  ],
  de: [
    "",
    "/methode",
    "/produkte",
    "/produkte/digitaler-verkauf-von-standorten",
    "/blog",
    "/gaestebuch",
    "/support",
    "/legal",
    "/gesund-leben-wasser",
  ],
  en: [
    "",
    "/method",
    "/products",
    "/products/digital-location-sales",
    "/blog",
    "/guestbook",
    "/support",
    "/legal",
    "/healthy-lifestyle-water",
  ],
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return Object.entries(routesByLocale).flatMap(([locale, routes]) =>
    routes.map((route) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified: now,
      changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
      priority: route === "" ? 1 : route.includes("produkte") || route.includes("products") || route.includes("proizvodi") ? 0.9 : 0.7,
    })),
  );
}
