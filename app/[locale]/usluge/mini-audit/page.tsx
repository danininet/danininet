import type { Metadata } from "next";
import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const routes: Record<Locale, string> = {
  sr: "/sr/usluge/mini-audit",
  de: "/de/services/mini-audit",
  en: "/en/services/mini-audit",
};

const copy = {
  sr: {
    title: "Mini Audit za digitalnu prodaju lokacije",
    description: "Brza procena za parcelu, stan, kuću, lokaciju, projekat ili postojeći oglas: šta je javno, šta ide u brief, šta fali i koji je prvi prodajni tok.",
    eyebrow: "DaniniNet usluga · 49 €",
    h1: "Mini Audit: pretvorite lokaciju ili ideju u jasan sledeći korak.",
    text: "Ako već imate parcelu, stan, kuću, lokaciju, projekat, oglas ili digitalnu ideju, Mini Audit daje kratku procenu šta treba prikazati javno, šta treba ostati u zatvorenom briefu, šta fali, koje tvrdnje su rizične i koji tok može prvi da se testira.",
    price: "49 €",
    cta: "Zatraži Mini Audit",
    emailSubject: "Mini Audit zahtev — DaniniNet",
    productCta: "Pogledaj PDF vodič",
    productText: "Ako još nemate osnovnu strukturu, prvo pogledajte PDF vodič Digitalna prodaja lokacije.",
    includesTitle: "Šta Mini Audit uključuje",
    includes: [
      "kratku procenu postojeće lokacije, oglasa, ideje ili prezentacije",
      "razdvajanje javnog sloja i zatvorenog brief sloja",
      "listu stvari koje nedostaju za ozbiljniji digitalni tok",
      "upozorenje na rizične tvrdnje i neproverene pretpostavke",
      "predlog prvog sledećeg koraka: proizvod, lead forma, brief ili objava",
    ],
    notTitle: "Šta Mini Audit nije",
    not: [
      "nije pravni, finansijski, poreski, urbanistički, tehnički ili investicioni savet",
      "ne garantuje prodaju, investitora, profit, dozvole ili izvodljivost",
      "ne zamenjuje stručnu proveru dokumentacije, tržišta ili pravnog stanja",
    ],
    stepsTitle: "Kako ide proces",
    steps: [
      "Pošaljete kratak opis i link/slike ako postoje.",
      "Dobijate kratku strukturisanu procenu.",
      "Dobijate predlog šta prvo popraviti ili objaviti.",
      "Ako ima smisla, sledeći korak može biti Gateway Brief ili Full Gateway Setup.",
    ],
    disclaimer: "Mini Audit je edukativna i informativna procena. Ne predstavlja pravni, finansijski, poreski, urbanistički, tehnički ili investicioni savet. Ne garantuje prodaju, profit, investitora, dozvole, vrednost nekretnine ili uspeh kampanje.",
  },
  de: {
    title: "Mini-Audit für digitalen Standortverkauf",
    description: "Kurze Einschätzung für Standort, Immobilie, Projekt oder Anzeige: öffentlich, Brief, Lücken, Risiken und erster Verkaufsflow.",
    eyebrow: "DaniniNet Service · 49 €",
    h1: "Mini-Audit: machen Sie aus Standort oder Idee den nächsten klaren Schritt.",
    text: "Wenn bereits ein Grundstück, eine Immobilie, ein Projekt, eine Anzeige oder eine digitale Idee existiert, zeigt der Mini-Audit kurz, was öffentlich gezeigt werden sollte, was in einen geschlossenen Brief gehört, was fehlt, welche Aussagen riskant sind und welcher Flow zuerst getestet werden kann.",
    price: "49 €",
    cta: "Mini-Audit anfragen",
    emailSubject: "Mini-Audit Anfrage — DaniniNet",
    productCta: "PDF-Leitfaden ansehen",
    productText: "Wenn die Grundstruktur noch fehlt, starten Sie mit dem PDF-Leitfaden Digitaler Verkauf von Standorten.",
    includesTitle: "Was enthalten ist",
    includes: [
      "kurze Einschätzung von Standort, Anzeige, Idee oder Präsentation",
      "Trennung zwischen öffentlicher Ebene und geschlossenem Brief",
      "Liste fehlender Elemente für einen besseren digitalen Flow",
      "Hinweis auf riskante Aussagen und ungeprüfte Annahmen",
      "Vorschlag für den ersten nächsten Schritt: Produkt, Lead-Formular, Brief oder Veröffentlichung",
    ],
    notTitle: "Was es nicht ist",
    not: [
      "keine Rechts-, Finanz-, Steuer-, Planungs-, Technik- oder Anlageberatung",
      "keine Garantie für Verkauf, Investor, Gewinn, Genehmigungen oder Machbarkeit",
      "kein Ersatz für fachliche Prüfung von Unterlagen, Markt oder Rechtslage",
    ],
    stepsTitle: "Ablauf",
    steps: [
      "Sie senden eine kurze Beschreibung und vorhandene Links/Bilder.",
      "Sie erhalten eine kurze strukturierte Einschätzung.",
      "Sie erhalten einen Vorschlag, was zuerst verbessert oder veröffentlicht werden sollte.",
      "Wenn sinnvoll, kann der nächste Schritt Gateway Brief oder Full Gateway Setup sein.",
    ],
    disclaimer: "Der Mini-Audit ist eine edukative und informative Einschätzung. Er ist keine Rechts-, Finanz-, Steuer-, Planungs-, Technik- oder Anlageberatung und garantiert keine Ergebnisse.",
  },
  en: {
    title: "Mini Audit for digital location sales",
    description: "A short assessment for a location, property, project or listing: public layer, brief layer, gaps, risky claims and first sales flow.",
    eyebrow: "DaniniNet service · 49 €",
    h1: "Mini Audit: turn a location or idea into a clear next step.",
    text: "If you already have land, a property, a project, a listing or a digital idea, the Mini Audit gives a short assessment of what should be public, what belongs in a closed brief, what is missing, which claims are risky and what flow can be tested first.",
    price: "49 €",
    cta: "Request Mini Audit",
    emailSubject: "Mini Audit request — DaniniNet",
    productCta: "View PDF guide",
    productText: "If you do not yet have the basic structure, start with the Digital Location Sales PDF guide.",
    includesTitle: "What is included",
    includes: [
      "short assessment of your location, listing, idea or presentation",
      "separation of public layer and closed brief layer",
      "list of missing elements for a stronger digital flow",
      "warning about risky claims and unchecked assumptions",
      "suggestion for the first next step: product, lead form, brief or publication",
    ],
    notTitle: "What it is not",
    not: [
      "not legal, financial, tax, planning, technical or investment advice",
      "no guarantee of sale, investor, profit, permits or feasibility",
      "not a replacement for expert review of documents, market or legal status",
    ],
    stepsTitle: "How it works",
    steps: [
      "You send a short description and existing links/images if available.",
      "You receive a short structured assessment.",
      "You receive a suggestion on what to improve or publish first.",
      "If useful, the next step can be Gateway Brief or Full Gateway Setup.",
    ],
    disclaimer: "The Mini Audit is educational and informational. It is not legal, financial, tax, planning, technical or investment advice and does not guarantee results.",
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];
  return {
    title: `${t.title} | DaniniNet`,
    description: t.description,
    alternates: {
      canonical: routes[lang],
      languages: { sr: routes.sr, de: routes.de, en: routes.en },
    },
    openGraph: {
      title: `${t.title} | DaniniNet`,
      description: t.description,
      type: "website",
      locale: lang === "sr" ? "sr_RS" : lang === "de" ? "de_DE" : "en_US",
      url: routes[lang],
    },
  };
}

function mailHref(subject: string) {
  return `mailto:dragangaganet@gmail.com?subject=${encodeURIComponent(subject)}`;
}

export default async function MiniAuditPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang} currentPath={routes[lang]}>
      <SectionIntro eyebrow={t.eyebrow} title={t.h1} text={t.text} />

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <aside className="rounded-[2.5rem] bg-[#07142b] p-8 text-white shadow-[0_24px_70px_rgba(7,20,43,0.18)]">
            <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">DaniniNet Mini Audit</p>
            <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
              <span className="block text-sm text-slate-300">Cena</span>
              <strong className="mt-2 block text-5xl text-[#d7b46a]">{t.price}</strong>
            </div>
            <a href={mailHref(t.emailSubject)} className="mt-7 inline-flex w-full justify-center rounded-full bg-[#f7fbff] px-7 py-4 text-sm font-semibold text-[#07142b]">{t.cta}</a>
            <Link href={localizedPath(lang, "dpl")} className="mt-3 inline-flex w-full justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white">{t.productCta}</Link>
            <p className="mt-6 leading-8 text-slate-300">{t.productText}</p>
          </aside>

          <div className="grid gap-6">
            <article className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold">{t.includesTitle}</h2>
              <ul className="mt-6 grid gap-3">
                {t.includes.map((item) => <li key={item} className="rounded-2xl bg-[#fffaf1] p-4 leading-7 text-[#706a5d]"><strong className="mr-2 text-[#07142b]">✓</strong>{item}</li>)}
              </ul>
            </article>
            <article className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold">{t.stepsTitle}</h2>
              <ol className="mt-6 grid gap-3">
                {t.steps.map((item, index) => <li key={item} className="rounded-2xl bg-[#fffaf1] p-4 leading-7 text-[#706a5d]"><strong className="mr-2 text-[#07142b]">0{index + 1}</strong>{item}</li>)}
              </ol>
            </article>
            <article className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
              <h2 className="text-3xl font-semibold">{t.notTitle}</h2>
              <ul className="mt-6 grid gap-3">
                {t.not.map((item) => <li key={item} className="rounded-2xl bg-[#fffaf1] p-4 leading-7 text-[#706a5d]"><strong className="mr-2 text-[#07142b]">—</strong>{item}</li>)}
              </ul>
              <p className="mt-6 rounded-2xl border border-black/10 bg-[#07142b] p-5 leading-8 text-slate-300">{t.disclaimer}</p>
            </article>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
