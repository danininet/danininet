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
        "DaniniNet gradi digitalne proizvode, affiliate tokove, SEO sadržaj i AI-assisted poslovne sisteme kroz metod Pitaj AI — AI pita tebe.",
      sameAs: [],
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
    default: "DaniniNet — digitalni proizvodi, affiliate i SEO sistemi",
    template: "%s · DaniniNet",
  },
  description:
    "DaniniNet gradi digitalne proizvode, affiliate tokove, SEO sadržaj i AI-assisted poslovne sisteme kroz metod Pitaj AI — AI pita tebe.",
  applicationName: "DaniniNet",
  creator: "DaniniNet",
  publisher: "DaniniNet",
  category: "Digital marketing, affiliate marketing, SEO, digital products",
  keywords: [
    "DaniniNet",
    "DaniniHub",
    "digitalni proizvodi",
    "affiliate marketing",
    "SEO marketing",
    "content marketing",
    "digitalna prodaja lokacije",
    "AI dijalog",
    "Pitaj AI AI pita tebe",
    "DACH digital marketing",
  ],
  icons: {
    icon: [{ url: "/brand/danininet-mark.svg", type: "image/svg+xml" }],
    shortcut: ["/brand/danininet-mark.svg"],
    apple: [{ url: "/brand/danininet-mark.svg" }],
  },
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
    locale: "sr_RS",
    alternateLocale: ["de_DE", "en_US"],
    title: "DaniniNet — digitalni proizvodi, affiliate i SEO sistemi",
    description:
      "Digitalni proizvodi, affiliate marketing, SEO sadržaj i AI-assisted poslovni sistemi sa jasnim trust slojem.",
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
    title: "DaniniNet — digitalni proizvodi, affiliate i SEO sistemi",
    description:
      "Affiliate marketing, SEO, AI dijalog, digitalni proizvodi i realni case study projekti.",
    images: ["/brand/danininet-mark.svg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
