import Image from "next/image";
import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "DaniniNet proizvodi",
    title: "Digitalni proizvodi za stvarne projekte, ne katalog bez pravca.",
    text: "DaniniNet proizvodi povezuju vodiče, radne liste, case study logiku, isporuku, email tokove i legal/trust granice. Svaki proizvod mora imati jasan problem, realnu primenu i poštenu granicu onoga što ne obećava.",
    featured: "Aktuelni proizvod",
    dplTitle: "Digitalna prodaja lokacije",
    dplText: "PDF vodič + Bonus Pack za pretvaranje lokacije, parcele, stana, kuće ili projekta u ozbiljniji digitalni prodajni tok: javna stranica, zatvoreni brief, vizuelni argument, lead forma, email tok i jasna granica između prezentacije i obećanja.",
    dplCta: "Otvori prodajnu stranicu",
    price: "29 € launch · 49 € regular",
    systemTitle: "Kako je proizvod strukturisan",
    systemIntro: "Proizvod nije samo PDF. On je mapa toka koji vlasniku, agentu ili marketeru pokazuje kako se od obične lokacije dolazi do digitalnog gateway-a.",
    system: [["Problem", "Zašto običan oglas ne objašnjava vrednost lokacije."], ["Gateway", "Kako javna stranica uvodi priču, dokaz i sledeći korak."], ["Brief", "Šta ide u zatvoreni materijal, a šta ostaje javno."], ["Delivery", "Kako kupac dobija vodič, bonus i uputstvo."], ["Trust", "Disclaimeri, AI transparentnost i jasne granice."], ["Signal", "Kako se meri interesovanje bez obećanja rezultata."]],
    includesTitle: "Šta kupac dobija",
    includes: ["PDF vodič sa metodom i strukturom", "Bonus checklist za javni gateway", "Email tok primer za isporuku", "Disclaimer library za odgovornu komunikaciju", "Case study logiku iz Calije projekta", "AI dijalog okvir: Pitaj AI — AI pita tebe"],
    notTitle: "Šta proizvod ne obećava",
    notItems: ["Ne garantuje prodaju lokacije", "Ne garantuje investitora ili profit", "Ne zamenjuje pravni, poreski, tehnički ili investicioni savet", "Ne potvrđuje urbanističku, građevinsku ili tržišnu izvodljivost"],
    flowTitle: "Prodajni tok proizvoda",
    flow: ["Članak / objava", "Landing stranica", "Checkout", "Email isporuka", "Vodič + bonus", "Sledeći sadržaj"],
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
    text: "DaniniNet Produkte verbinden Leitfäden, Arbeitslisten, Case-Study-Logik, Auslieferung, E-Mail-Flows und Legal/Trust-Grenzen. Jedes Produkt braucht Problem, Anwendung und klare Grenzen.",
    featured: "Aktuelles Produkt",
    dplTitle: "Digitaler Verkauf von Standorten",
    dplText: "PDF-Leitfaden + Bonus Pack, um Standort, Grundstück, Immobilie oder Projekt in einen seriöseren digitalen Verkaufsfluss zu übersetzen: öffentliche Seite, geschlossener Brief, visuelles Argument, Lead-Formular, E-Mail-Fluss und klare Grenzen.",
    dplCta: "Verkaufsseite öffnen",
    price: "29 € Launch · 49 € regulär",
    systemTitle: "Wie das Produkt strukturiert ist",
    systemIntro: "Das Produkt ist nicht nur ein PDF. Es ist eine Flow-Karte vom einfachen Standort zum digitalen Gateway.",
    system: [["Problem", "Warum eine normale Anzeige den Standortwert nicht erklärt."], ["Gateway", "Wie eine öffentliche Seite Story, Beleg und nächsten Schritt verbindet."], ["Brief", "Was geschlossen bleibt und was öffentlich erklärt wird."], ["Delivery", "Wie Leitfaden, Bonus und Anleitung ausgeliefert werden."], ["Trust", "Disclaimer, KI-Transparenz und klare Grenzen."], ["Signal", "Wie Interesse gemessen wird, ohne Ergebnisse zu versprechen."]],
    includesTitle: "Was Käufer erhalten",
    includes: ["PDF-Leitfaden mit Methode", "Bonus-Checklist für den Gateway", "E-Mail-Flow Beispiel", "Disclaimer Library", "Case-Study-Logik", "KI-Dialog Rahmen"],
    notTitle: "Was das Produkt nicht verspricht",
    notItems: ["Kein Verkaufsversprechen", "Keine Garantie für Investor oder Gewinn", "Kein Rechts-, Steuer-, Technik- oder Investmentrat", "Keine Bestätigung von Machbarkeit"],
    flowTitle: "Produkt-Verkaufsflow",
    flow: ["Artikel / Post", "Landingpage", "Checkout", "E-Mail Lieferung", "Guide + Bonus", "Nächster Inhalt"],
    nextTitle: "Roadmap nach dem ersten Launch",
    cards: [["DE-Lokalisierung für DACH", "Deutsches Produkt und Verkaufsseite mit DACH-Ton, rechtlichen Erwartungen und Affiliate-Kommunikation."], ["Template Pack", "Arbeitsstrukturen für Homepage, Brief, E-Mail-Lieferung, Checklisten und Disclaimer-Blöcke."], ["Affiliate Pilot", "Partnermodell erst nach Verkaufssignal und klaren Regeln zu erlaubten Aussagen."], ["Health / Water Linie", "Künftiger Bereich zu Wasser, Routinen und gesundem Lebensstil ohne medizinische Behauptungen."]],
  },
  en: {
    eyebrow: "DaniniNet products",
    title: "Digital products for real projects, not a catalog without direction.",
    text: "DaniniNet products connect guides, worksheets, case-study logic, delivery, email flows and legal/trust boundaries. Each product needs a clear problem, real use and honest boundaries.",
    featured: "Current product",
    dplTitle: "Digital Location Sales",
    dplText: "PDF guide + Bonus Pack for turning a location, land plot, property or project into a stronger digital sales flow: public page, closed brief, visual argument, lead form, email flow and clear boundaries.",
    dplCta: "Open sales page",
    price: "29 € launch · 49 € regular",
    systemTitle: "How the product is structured",
    systemIntro: "The product is not just a PDF. It is a map of the flow from ordinary location to digital gateway.",
    system: [["Problem", "Why a normal listing does not explain location value."], ["Gateway", "How a public page connects story, proof and next step."], ["Brief", "What stays closed and what becomes public."], ["Delivery", "How the guide, bonus and instructions are delivered."], ["Trust", "Disclaimers, AI transparency and boundaries."], ["Signal", "How interest is measured without promising results."]],
    includesTitle: "What the buyer gets",
    includes: ["PDF guide with method", "Bonus gateway checklist", "Email flow example", "Disclaimer library", "Case-study logic", "AI dialogue framework"],
    notTitle: "What the product does not promise",
    notItems: ["No guaranteed sale", "No guaranteed investor or profit", "Not legal, tax, technical or investment advice", "No feasibility confirmation"],
    flowTitle: "Product sales flow",
    flow: ["Article / post", "Landing page", "Checkout", "Email delivery", "Guide + bonus", "Next content"],
    nextTitle: "Roadmap after the first launch",
    cards: [["DE localization for DACH", "German product and sales page adapted to DACH tone, legal expectations and affiliate communication."], ["Template Pack", "Working structures for homepage, brief, email delivery, checklists and disclaimer blocks."], ["Affiliate pilot", "Partner model only after sales validation and clear communication rules."], ["Health / Water line", "Future direction around water, routines and healthy lifestyle, separated from medical claims."]],
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
        <article className="grid gap-8 rounded-[2.5rem] bg-[#07142b] p-8 text-white shadow-[0_24px_90px_rgba(7,20,43,0.24)] lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:p-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-4">
            <Image src="/images/products/digitalna-prodaja-lokacije-cover.svg" alt="Digitalna prodaja lokacije cover" width={900} height={1272} className="mx-auto h-auto w-full max-w-[330px] rounded-[1.4rem]" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">{t.featured}</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{t.dplTitle}</h2>
            <p className="mt-5 max-w-3xl leading-8 text-slate-300">{t.dplText}</p>
            <p className="mt-5 text-lg font-semibold text-[#d7b46a]">{t.price}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {t.system.map(([item], index) => (
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
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">{t.systemTitle}</p>
            <h2 className="mt-4 text-3xl font-semibold">{t.dplTitle}</h2>
            <p className="mt-5 leading-8 text-[#706a5d]">{t.systemIntro}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {t.system.map(([title, text], index) => (
              <article key={title} className="rounded-[1.5rem] border border-black/10 bg-[#fffaf0] p-6">
                <span className="text-sm font-semibold text-[#226bbf]">0{index + 1}</span>
                <h3 className="mt-2 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-[#706a5d]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">{t.includesTitle}</h2>
          <div className="mt-6 grid gap-3">
            {t.includes.map((item) => <p key={item} className="rounded-2xl bg-[#f5efe3] px-5 py-4 leading-7 text-[#706a5d]">{item}</p>)}
          </div>
        </div>
        <div className="rounded-[2rem] border border-black/10 bg-[#07142b] p-8 text-white shadow-sm">
          <h2 className="text-3xl font-semibold">{t.notTitle}</h2>
          <div className="mt-6 grid gap-3">
            {t.notItems.map((item) => <p key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 leading-7 text-slate-300">{item}</p>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">{t.flowTitle}</p>
          <div className="mt-7 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
            {t.flow.map((item, index) => (
              <div key={item} className="rounded-2xl border border-black/10 bg-[#f5efe3] p-4 text-center">
                <span className="text-sm font-semibold text-[#226bbf]">0{index + 1}</span>
                <p className="mt-2 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
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
