import { notFound } from "next/navigation";
import { getDictionary } from "@/content/dictionary";
import { isLocale, type Locale } from "@/lib/locales";
import { site } from "@/lib/site";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale as Locale);

  return (
    <main className="px-5 py-16">
      <section className="mx-auto max-w-4xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">{dict.nav.contact}</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">{dict.contact.title}</h1>
        <p className="mt-6 text-lg leading-8 text-slate-700">{dict.contact.text}</p>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-bold text-slate-500">Email</p>
          <a className="mt-2 block text-2xl font-black text-slate-950" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </section>
    </main>
  );
}
