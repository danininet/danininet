import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBlock } from "@/components/CtaBlock";
import { CheckoutButton } from "@/components/CheckoutButton";
import { DisclaimerBlock } from "@/components/DisclaimerBlock";
import { getDictionary } from "@/content/dictionary";
import { isLocale, type Locale } from "@/lib/locales";
import { site } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale = isLocale(locale) ? locale : "sr";
  const dict = getDictionary(safeLocale);

  return {
    title: `${site.name} — ${safeLocale === "de" ? site.productDe : safeLocale === "en" ? site.productEn : site.productSr}`,
    description: dict.hero.subtitle
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const dict = getDictionary(currentLocale);

  return (
    <main>
      <section className="bg-slate-950 px-5 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-200">{dict.hero.eyebrow}</p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-none tracking-tight md:text-7xl">
            {dict.hero.titleA} <span className="text-sky-400">{dict.hero.titleB}</span>
          </h1>

          <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-300">{dict.hero.subtitle}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <CheckoutButton
              locale={currentLocale}
              label={dict.hero.primaryCta}
              className="rounded-full bg-white px-6 py-4 text-sm font-black text-slate-950 hover:bg-slate-100 disabled:opacity-60"
            />
            <a href="#sadrzaj" className="rounded-full border border-white/20 px-6 py-4 text-sm font-bold text-white hover:border-white/40">
              {dict.hero.secondaryCta}
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/15 px-4 py-2">Launch: {site.launchPrice}</span>
            <span className="rounded-full border border-white/15 px-4 py-2">Regular: {site.regularPrice}</span>
            <span className="rounded-full border border-white/15 px-4 py-2">{site.slogan}</span>
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">Problem</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{dict.sections.problemTitle}</h2>
          </div>
          <div className="text-lg leading-9 text-slate-700">
            <p>{dict.sections.problemText1}</p>
            <p className="mt-5">{dict.sections.problemText2}</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">Gateway</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{dict.sections.solutionTitle}</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {dict.sections.solutionItems.map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="font-black text-slate-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sadrzaj" className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">Package</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{dict.sections.includedTitle}</h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-black">{dict.sections.pdfTitle}</h3>
              <ul className="mt-6 grid gap-3 text-slate-700">
                {dict.sections.pdfItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
              <h3 className="text-2xl font-black">{dict.sections.bonusTitle}</h3>
              <div className="mt-6 grid gap-3">
                {dict.bonus.map((bonus) => (
                  <p key={bonus} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">{bonus}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">Audience</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{dict.sections.audienceTitle}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {dict.audiences.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">Case study</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{dict.sections.caseTitle}</h2>
          </div>
          <div className="text-lg leading-9 text-slate-700">
            <p>{dict.sections.caseText1}</p>
            <p className="mt-5">{dict.sections.caseText2}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={site.calijeUrl} target="_blank" rel="noreferrer" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white">
                {dict.sections.calijeCta}
              </a>
              <Link href={`/${currentLocale}/clanci/digitalni-gateway-calije-case-study`} className="rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-950">
                {dict.sections.articleCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16">
        <div className="mx-auto max-w-7xl">
          <DisclaimerBlock text={dict.disclaimers.main} />
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="mx-auto max-w-7xl">
          <CtaBlock locale={currentLocale} />
        </div>
      </section>
    </main>
  );
}
