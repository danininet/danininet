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
        "DaniniNet povezuje digitalne proizvode, DPL metodologiju, AI-assisted dijalog, DaniniHub OS, Čalije Case Study i DaniniLans ekosistem.",
      sameAs: [
        "https://daninihub.com",
        "https://daninilans.daninihub.com",
        "https://calije.daninihub.com",
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
    default: "DaniniNet — digitalni proizvodi, DPL i AI-assisted sistemi",
    template: "%s · DaniniNet",
  },
  description:
    "DaniniNet je digitalni i edukativni sloj za DPL metodologiju, AI-assisted dijalog, digitalne proizvode, affiliate projekte i dokazne case study sisteme.",
  applicationName: "DaniniNet",
  creator: "DaniniNet",
  publisher: "DaniniNet",
  keywords: [
    "DaniniNet",
    "digitalni proizvodi",
    "Digitalna prodaja lokacije",
    "DPL",
    "AI-assisted",
    "DaniniHub OS",
    "DaniniLans",
    "Čalije Case Study",
    "affiliate marketing",
    "SEO",
    "DACH marketing",
    "content strategy"
  ],
  category: "business",
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
      "DPL metodologija, AI-assisted dijalog, digitalni proizvodi i dokazni case study projekti kroz DaniniHub OS.",
    locale: "sr_RS",
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
      "DPL metodologija, AI-assisted dijalog, digitalni proizvodi i dokazni case study projekti.",
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
