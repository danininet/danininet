import { notFound } from "next/navigation";
import { DisclaimerBlock } from "@/components/DisclaimerBlock";
import { GuestbookForm } from "@/components/GuestbookForm";
import { getDictionary } from "@/content/dictionary";
import { isLocale, type Locale } from "@/lib/locales";

export default async function GuestbookPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const dict = getDictionary(currentLocale);

  return (
    <main className="bg-slate-50 px-5 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.9fr_1.1fr]">
        <section>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">Guestbook</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">{dict.guestbook.title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">{dict.guestbook.intro}</p>
          <p className="mt-5 text-lg leading-8 text-slate-700">{dict.guestbook.note}</p>
          <div className="mt-8">
            <DisclaimerBlock text={dict.disclaimers.guestbook} />
          </div>
        </section>

        <GuestbookForm locale={currentLocale} labels={dict.guestbook} />
      </div>
    </main>
  );
}
