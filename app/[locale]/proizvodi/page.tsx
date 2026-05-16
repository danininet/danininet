import Image from "next/image";
import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "DaniniNet proizvodi",
    title: "Digitalni proizvodi za stvarne projekte, ne katalog bez pravca.",
    text: "DaniniNet proizvodi povezuju vodiče, radne liste, case study logiku, Gumroad isporuku i legal/trust granice. Svaki proizvod mora imati jasan problem, realnu primenu i poštenu granicu onoga što ne obećava.",
    featured: "Aktuelni proizvod",
    dplTitle: "Digitalna prodaja lokacije",
    dplText: "PDF vodič + Bonus Pack za pretvaranje lokacije, parcele, stana, kuće ili projekta u ozbiljniji digitalni prodajni tok: javna stranica, zatvoreni brief, vizuelni argument, lead forma, email tok i Gumroad delivery.",
    dplCta: "Otvori prodajnu stranicu",
    price: "29 € launch · 49 € regular",
    systemTitle: "Kako je proizvod strukturisan",
    system: ["Problem", "Gateway", "Brief", "Delivery", "Trust", "Signal"],
    nextTitle: "Roadmap posle prvog launch-a",
    cards: [
      ["DE lokalizacija za DACH", "Nemački proizvod i prodajna stranica prilagođeni DACH tonu, pravnim očekivanjima i affiliate komunikaciji."],
      ["Template Pack", "Radne strukture za homepage, brief, email isporuku, checklist-e i disclaimer blokove."],
      ["Affiliate pilot", "Partner model tek posle validacije prodaje i jasnih pravila šta partner sme i ne sme da obećava."],
      ["Health / Water linija", "Budući pravac za vodu, rutine i zdrav stil života, odvojen od medicinskih tvrdnji i sa jasnim disclaimerom."],
    ],
  },
  de: {
    eyebrow: "DaniniNet Produkte",
    title: "Digitale Produkte für reale Projekte, kein Katalog ohne Richtung.",
    text: "DaniniNet Produkte verbinden Leitfäden, Arbeitslisten, Case-Study-Logik, Gumroad-Auslieferung und Legal/Trust-Grenzen. Jedes Produkt braucht Problem, Anwendung und klare Grenzen.",
    featured: "Aktuelles Produkt",
    dplTitle: "Digitaler Verkauf von Standorten",
    dplText: "PDF-Leitfaden + Bonus Pack, um Standort, Grundstück, Immobilie oder Projekt in einen seriöseren digitalen Verkaufsfluss zu übersetzen: öffentliche Seite, geschlossener Brief, visuelles Argument, Lead-Formular, E-Mail-Fluss und Gumroad Delivery.",
    dplCta: "Verkaufsseite öffnen",
    price: "29 € Launch · 49 € regulär",
    systemTitle: "Wie das Produkt strukturiert ist",
    system: ["Problem", "Gateway", "Brief", "Delivery", "Trust", "Signal"],
    nextTitle: "Roadmap nach dem ersten Launch",
    cards: [
      ["DE-Lokalisierung für DACH", "Deutsches Produkt und Verkaufsseite mit DACH-Ton, rechtlichen Erwartungen und Affiliate-Kommunikation."],
      ["Template Pack", "Arbeitsstrukturen für Homepage, Brief, E-Mail-Lieferung, Checklisten und Disclaimer-Blöcke."],
      ["Affiliate Pilot", "Partnermodell erst nach Verkaufssignal und klaren Regeln zu erlaubten Aussagen."],
      ["Health / Water Linie", "Künftiger Bereich zu Wasser, Routinen und gesundem Lebensstil ohne medizinische Behauptungen."],
    ],
  },
  en: {
    eyebrow: "DaniniNet products",
    title: "Digital products for real projects, not a catalog without direction.",
    text: "DaniniNet products connect guides, worksheets, case-study logic, Gumroad delivery and legal/trust boundaries. Each product needs a clear problem, real use and honest boundaries.",
    featured: "Current product",
    dplTitle: "Digital Location Sales",
    dplText: "PDF guide + Bonus Pack for turning a location, land plot, property or project into a stronger digital sales flow: public page, closed brief, visual argument, lead form, email flow and Gumroad delivery.",
    dplCta: "Open sales page",
    price: "29 € launch · 49 € regular",
    systemTitle: "How the product is structured",
    system: ["Problem", "Gateway", "Brief", "Delivery", "Trust", "Signal"],
    nextTitle: "Roadmap after the first launch",
    cards: [
      ["DE localization for DACH", "German product and sales page adapted to DACH tone, legal expectations and affiliate communication."],
      ["Template Pack", "Working structures for homepage, brief, email delivery, checklists and disclaimer blocks."],
      ["Affiliate pilot", "Partner model only after sales validation and clear communication rules."],
      ["Health / Water line", "Future direction around water, routines and healthy lifestyle, separated from medical claims."],
    ],
  },
} as const;

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang} currentPath={localizedPath(lang, "products")}>
      <SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} />

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <article className="grid gap-8 rounded-[2.5rem] bg-[#07142b] p-8 text-white lg:grid-cols-[0.78fr_1.22fr] lg:p-10 lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-4">
            <Image src="/images/products/digitalna-prodaja-lokacije-cover.svg" alt="Digitalna prodaja lokacije cover" width={900} height={1272} className="mx-auto h-auto w-full max-w-[330px] rounded-[1.4rem]" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">{t.featured}</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{t.dplTitle}</h2>
            <p className="mt-5 max-w-3xl leading-8 text-slate-300">{t.dplText}</p>
            <p className="mt-5 text-lg font-semibold text-[#d7b46a]">{t.price}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {t.system.map((item, index) => (
                <span key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-center text-sm text-slate-300">
                  <strong className="block text-[#d7b46a]">0{index + 1}</strong>{item}
                </span>
              ))}
            </div>
            <Link href={localizedPath(lang, "dpl")} className="mt-8 inline-flex rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">
              {t.dplCta}
            </Link>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">{t.nextTitle}</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.cards.map(([title, text]) => (
            <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="mt-4 leading-8 text-[#706a5d]">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
