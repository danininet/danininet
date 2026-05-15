import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "DaniniNet Blog",
    title: "Sadržaj koji gradi poverenje pre prodaje.",
    text: "Blog je SEO i editorial centar za digitalni marketing, affiliate marketing, AI dijalog, digitalne proizvode, case study projekte i budući health/water pravac.",
    items: [
      ["Digitalni marketing", "Landing stranice, SEO, email tokovi, lead forme i prodajni levci."],
      ["Affiliate marketing", "Preporuke sa kontekstom, jasnim ograničenjima i affiliate disclosure napomenom."],
      ["AI u praksi", "Pitaj AI — AI pita tebe: pitanja, dokazi, rizici i sledeći korak."],
      ["Case studies", "Calije Park Residence i Digitalna prodaja lokacije kao dokazni artifacti."],
      ["Health / Water", "Placeholder za budući poddomen o vodi, rutinama i zdravom stilu života."],
    ],
    cta: "Pogledaj prvi proizvod",
  },
  de: {
    eyebrow: "DaniniNet Blog",
    title: "Inhalte, die Vertrauen vor dem Verkauf aufbauen.",
    text: "Der Blog ist das SEO- und Editorial-Zentrum für digitales Marketing, Affiliate Marketing, KI-Dialog, digitale Produkte, Case Studies und den späteren Health/Water-Bereich.",
    items: [
      ["Digitales Marketing", "Landing Pages, SEO, E-Mail-Flüsse, Lead-Formulare und Sales Funnel."],
      ["Affiliate Marketing", "Empfehlungen mit Kontext, klaren Grenzen und Affiliate-Hinweis."],
      ["KI in der Praxis", "Frag die KI — die KI fragt dich: Fragen, Belege, Risiken und nächster Schritt."],
      ["Case Studies", "Calije Park Residence und Digitaler Verkauf von Standorten als Proof Artifacts."],
      ["Health / Water", "Placeholder für spätere Inhalte zu Wasser, Routinen und gesundem Lebensstil."],
    ],
    cta: "Erstes Produkt ansehen",
  },
  en: {
    eyebrow: "DaniniNet Blog",
    title: "Content that builds trust before the sale.",
    text: "The blog is the SEO and editorial center for digital marketing, affiliate marketing, AI dialogue, digital products, case studies and the future health/water direction.",
    items: [
      ["Digital marketing", "Landing pages, SEO, email flows, lead forms and sales funnels."],
      ["Affiliate marketing", "Recommendations with context, clear limits and affiliate disclosure."],
      ["AI in practice", "Ask AI — AI asks you: questions, evidence, risks and next step."],
      ["Case studies", "Calije Park Residence and Digital Location Sales as proof artifacts."],
      ["Health / Water", "Placeholder for future content on water, routines and healthy lifestyle."],
    ],
    cta: "View first product",
  },
} as const;

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang}>
      <SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2 lg:grid-cols-3">
        {t.items.map(([title, text]) => (
          <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-4 leading-8 text-[#706a5d]">{text}</p>
          </article>
        ))}
      </section>
      <section className="bg-[#07142b] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-sm uppercase tracking-[0.22em] text-[#b9d7f0]">Editorial funnel</p>
          <h2 className="mt-4 text-4xl font-semibold">DaniniNet blog vodi ka proizvodu, poverenju i sledećem koraku.</h2>
          <Link href={`/${lang}/proizvodi/digitalna-prodaja-lokacije`} className="mt-8 inline-flex rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">
            {t.cta}
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
