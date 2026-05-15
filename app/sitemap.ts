import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://danininet.daninihub.com";

const locales = ["sr", "de", "en"];
const routes = [
  "",
  "/daninihub-metod",
  "/proizvodi",
  "/proizvodi/digitalna-prodaja-lokacije",
  "/blog",
  "/knjiga-utisaka",
  "/support",
  "/legal",
  "/zdrav-stil-zivota",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified: now,
      changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
      priority: route === "" ? 1 : route === "/proizvodi" ? 0.9 : 0.7,
    })),
  );
}
