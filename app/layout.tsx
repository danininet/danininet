import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DaniniNet — od ideje do digitalnog artifacta",
  description:
    "Affiliate marketing, SEO, digitalni proizvodi, AI dijalog i realni case study projekti zasnovani na DaniniHub metodu.",
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
