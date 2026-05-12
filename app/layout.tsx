import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.name,
  description: "DaniniNet multilingual product site.",
  metadataBase: new URL(site.url)
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
