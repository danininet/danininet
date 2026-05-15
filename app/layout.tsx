import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://danininet.daninihub.com";

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
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "DaniniNet",
    title: "DaniniNet — digitalni sistem za ideje koje zaslužuju tržište",
    description:
      "Digitalni, affiliate, content i SEO marketing kroz DaniniHub OS, AI dijalog, proizvode i dokazne projekte.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DaniniNet — digitalni sistem za ideje koje zaslužuju tržište",
    description:
      "Affiliate marketing, SEO, AI dijalog, digitalni proizvodi i realni case study projekti.",
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
      <body>{children}</body>
    </html>
  );
}
