import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/locales";
import { getDictionary } from "@/content/dictionary";
import { site } from "@/lib/site";

export default async function SuccessPage({
  params,
  searchParams
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { locale } = await params;
  const { session_id } = await searchParams;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale as Locale);

  return (
    <main className="px-5 py-20">
      <section className="mx-auto max-w-3xl rounded-[2rem] border border-emerald-200 bg-emerald-50 p-8 md:p-12">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">
          Payment completed
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Hvala na kupovini.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-700">
          Stripe je evidentirao kupovinu. DaniniNet delivery sistem automatski šalje email
          sa linkom za preuzimanje na email adresu kupca.
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          Session: {session_id || "not available"}
        </p>
        <p className="mt-6 text-sm leading-7 text-slate-600">
          Ako email ne stigne kroz nekoliko minuta, kontakt:{" "}
          <a className="font-black text-slate-950" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
        <div className="mt-8 rounded-2xl bg-white p-5 text-sm leading-7 text-slate-700">
          {dict.disclaimers.main}
        </div>
      </section>
    </main>
  );
}
