import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://danininet.daninihub.com";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "DaniniNet",
      url: siteUrl,
      logo: `${siteUrl}/brand/danininet-mark.svg`,
      description:
        "DaniniNet je platforma za digitalne proizvode, affiliate marketing, SEO sadržaj, AI dijalog i odgovoran health/water pravac.",
      sameAs: [
        "https://www.youtube.com/@NutriLansDigiVerdienst",
        "https://www.facebook.com/Affiligaga",
        "https://www.linkedin.com/in/dragan-zdravkovic/",
        "https://www.instagram.com/dragangaganet/",
        "https://de.pinterest.com/dragangaganet/",
        "https://www.tiktok.com/@danininet0803",
        "https://x.com/zdravkovicgaga"
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "DaniniNet",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: ["sr", "de", "en"],
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/sr/blog?search={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DaniniNet — digitalni, affiliate, content i SEO marketing",
    template: "%s · DaniniNet",
  },
  description:
    "DaniniNet je krovna platforma za digitalni marketing, affiliate marketing, SEO, AI dijalog, digitalne proizvode, case study projekte i budući health/water pravac.",
  applicationName: "DaniniNet",
  creator: "DaniniNet",
  publisher: "DaniniNet",
  alternates: {
    canonical: "/",
    languages: {
      sr: "/sr",
      de: "/de",
      en: "/en",
      "x-default": "/sr",
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "DaniniNet",
    title: "DaniniNet — digitalni sistem za ideje koje zaslužuju tržište",
    description:
      "Digitalni, affiliate, content i SEO marketing kroz DaniniHub OS, AI dijalog, proizvode i dokazne projekte.",
    images: [
      {
        url: "/brand/danininet-mark.svg",
        width: 512,
        height: 512,
        alt: "DaniniNet brand mark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DaniniNet — digitalni sistem za ideje koje zaslužuju tržište",
    description:
      "Affiliate marketing, SEO, AI dijalog, digitalni proizvodi i realni case study projekti.",
    images: ["/brand/danininet-mark.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
