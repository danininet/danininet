import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";
import { SystemMap } from "@/components/visual/SystemMap";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "DaniniNet proizvodi",
    title: "Digitalni proizvodi, vodiči i radni materijali za stvarne projekte.",
    text: "Ovo nije običan katalog. Svaki proizvod mora imati jasan problem, kome je namenjen, šta pomaže da se izgradi, gde su granice i koji je sledeći praktičan korak.",
    featured: "Aktuelni proizvod",
    dplTitle: "Digitalna prodaja lokacije",
    dplText: "Vodič za pretvaranje lokacije, parcele, stana, kuće ili projekta u ozbiljniji digitalni prodajni tok: javna stranica, zatvoreni brief, vizuelni argument, lead forma i email tok.",
    dplCta: "Otvori prodajnu stranicu",
    upcoming: "Sledeće u planu",
    cards: [
      ["AI dijalog za digitalne projekte", "Radni okvir za metodu Pitaj AI — AI pita tebe, namenjen boljem definisanju proizvoda, sadržaja i prodajnog toka."],
      ["Affiliate editorial sistem", "Model za organizaciju affiliate preporuka kroz poverenje, SEO, disclosure i stvarnu upotrebu, ne kroz agresivnu prodaju."],
      ["Health / Water linija", "Placeholder za budući poddomen o vodi, rutinama, starim znanjima i zdravom stilu života. Biće definisano kasnije."],
    ],
  },
  de: {
    eyebrow: "DaniniNet Produkte",
    title: "Digitale Produkte, Leitfäden und Arbeitsmaterialien für reale Projekte.",
    text: "Das ist kein gewöhnlicher Katalog. Jedes Produkt braucht ein klares Problem, Zielgruppe, Nutzen, Grenzen und einen praktischen nächsten Schritt.",
    featured: "Aktuelles Produkt",
    dplTitle: "Digitaler Verkauf von Standorten",
    dplText: "Ein Leitfaden, wie Standort, Grundstück, Immobilie oder Projekt in einen seriöseren digitalen Verkaufsfluss übersetzt werden: öffentliche Seite, geschlossener Brief, visuelles Argument, Lead-Formular und E-Mail-Fluss.",
    dplCta: "Verkaufsseite öffnen",
    upcoming: "Nächste Planung",
    cards: [
      ["KI-Dialog für digitale Projekte", "Arbeitsrahmen für die Methode Frag die KI — die KI fragt dich, um Produkt, Inhalt und Verkaufsfluss klarer zu definieren."],
      ["Affiliate Editorial System", "Modell für Affiliate-Empfehlungen durch Vertrauen, SEO, Disclosure und reale Anwendung statt aggressivem Verkauf."],
      ["Health / Water Linie", "Placeholder für die spätere Subdomain zu Wasser, Routinen, altem Wissen und gesundem Lebensstil. Wird später definiert."],
    ],
  },
  en: {
    eyebrow: "DaniniNet products",
    title: "Digital products, guides and working materials for real projects.",
    text: "This is not a simple catalog. Every product needs a clear problem, audience, outcome, boundaries and a practical next step.",
    featured: "Current product",
    dplTitle: "Digital Location Sales",
    dplText: "A guide for turning a location, land plot, property or project into a stronger digital sales flow: public page, closed brief, visual argument, lead form and email flow.",
    dplCta: "Open sales page",
    upcoming: "Coming next",
    cards: [
      ["AI dialogue for digital projects", "Working frame for the Ask AI — AI asks you method, focused on product, content and sales flow clarity."],
      ["Affiliate editorial system", "A model for affiliate recommendations through trust, SEO, disclosure and real use instead of aggressive selling."],
      ["Health / Water line", "Placeholder for the future subdomain about water, routines, old knowledge and healthy lifestyle. To be defined later."],
    ],
  },
} as const;

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang} currentPath={`/${lang}/proizvodi`}>
      <SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} />

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <article className="grid gap-8 rounded-[2.5rem] bg-[#07142b] p-8 text-white lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[#b9d7f0]">{t.featured}</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">{t.dplTitle}</h2>
            <p className="mt-5 leading-8 text-slate-300">{t.dplText}</p>
            <Link href={`/${lang}/proizvodi/digitalna-prodaja-lokacije`} className="mt-8 inline-flex rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">
              {t.dplCta}
            </Link>
          </div>
          <SystemMap />
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">{t.upcoming}</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {t.cards.map(([title, text]) => (
            <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="mt-4 leading-8 text-[#706a5d]">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
