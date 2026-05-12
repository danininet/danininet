import { notFound } from "next/navigation";
import { CtaBlock } from "@/components/CtaBlock";
import { DisclaimerBlock } from "@/components/DisclaimerBlock";
import { getDictionary } from "@/content/dictionary";
import { isLocale, type Locale } from "@/lib/locales";
import { site } from "@/lib/site";

export default async function ArticlePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const dict = getDictionary(currentLocale);

  return (
    <main className="px-5 py-16">
      <article className="mx-auto max-w-4xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">{dict.article.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">{dict.article.title}</h1>
        <p className="mt-6 text-xl leading-9 text-slate-600">{dict.article.intro}</p>

        <div className="mt-10 grid gap-9 text-lg leading-9 text-slate-700">
          {dict.article.sections.map(([title, text]) => (
            <section key={title}>
              <h2 className="text-2xl font-black tracking-tight text-slate-950">{title}</h2>
              <p className="mt-3">{text}</p>
            </section>
          ))}

          <p>
            <a className="font-black text-slate-950 underline" href={site.calijeUrl} target="_blank" rel="noreferrer">
              {site.calijeUrl}
            </a>
          </p>
        </div>

        <div className="mt-10 grid gap-5">
          <DisclaimerBlock title="Visual / AI disclaimer" text={dict.disclaimers.visual} />
          <DisclaimerBlock text={dict.disclaimers.main} />
          <CtaBlock locale={currentLocale} />
        </div>
      </article>
    </main>
  );
}
