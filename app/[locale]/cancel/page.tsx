import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/locales";
import { getDictionary } from "@/content/dictionary";

export default async function CancelPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale as Locale);

  return (
    <main className="px-5 py-20">
      <section className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">
          Checkout cancelled
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Kupovina nije završena.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-700">
          Checkout je prekinut ili zatvoren pre završetka plaćanja.
        </p>
        <Link
          href={`/${locale}`}
          className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-4 text-sm font-black text-white"
        >
          {dict.nav.product}
        </Link>
      </section>
    </main>
  );
}
