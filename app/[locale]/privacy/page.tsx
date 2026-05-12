import { notFound } from "next/navigation";
import { LegalTextPage } from "@/components/LegalTextPage";
import { isLocale, type Locale } from "@/lib/locales";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <LegalTextPage locale={locale as Locale} pageKey="privacy" />;
}
