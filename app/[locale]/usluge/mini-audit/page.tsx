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
    title: "DPL analiza potencijala lokacije",
    description: "Početna DPL analiza za lokaciju, oglas ili zakupnu površinu.",
    eyebrow: "DaniniNet usluga · DPL analiza",
    h1: "DPL analiza: procena lokacije pre javne kampanje ili zakupne ponude.",
    text: "DPL analiza je posebna usluga preko upita. Nije deo Gumroad kupovine DPL paketa. Početni mini audit pokazuje šta treba prikazati javno, šta treba ostaviti za zatvoreni brief i koji je sledeći korak.",
    price: "49 € početni mini audit",
    cta: "Zatraži DPL analizu",
    emailSubject: "DPL analiza potencijala lokacije",
    productCta: "Pogledaj DPL PDF + Bonus Pack",
    productText: "DPL paket je za samostalno razumevanje metode. DPL analiza je za konkretan slučaj.",
    includesTitle: "Šta početna analiza uključuje",
    includes: ["kratku procenu lokacije ili oglasa", "razdvajanje javnog i zatvorenog sloja", "listu nedostataka za bolji digitalni nastup", "upozorenje na neproverene tvrdnje", "predlog sledećeg koraka"],
    notTitle: "Šta analiza nije",
    not: ["nije stručni savet", "ne garantuje rezultat", "ne zamenjuje proveru dokumentacije"],
    stepsTitle: "Proces",
    steps: ["Pošaljete opis lokacije.", "Proverava se da li analiza ima smisla.", "Dobijate kratku strukturisanu procenu.", "Predlaže se sledeći korak."],
    disclaimer: "DPL analiza je informativna poslovna procena. Za dokumentaciju i dozvole potrebna je stručna provera.",
  },
  de: {
    title: "DPL Standortanalyse",
    description: "Erste DPL Analyse für Standort, Anzeige oder Nutzungsfläche.",
    eyebrow: "DaniniNet Service · DPL Analyse",
    h1: "DPL Analyse: Standortprüfung vor öffentlicher Kampagne oder Nutzungsangebot.",
    text: "Die DPL Analyse ist eine separate Dienstleistung auf Anfrage. Sie ist nicht Teil des Gumroad-Kaufs.",
    price: "49 € erster Mini-Audit",
    cta: "DPL Analyse anfragen",
    emailSubject: "DPL Standortanalyse",
    productCta: "DPL PDF + Bonus Pack ansehen",
    productText: "Das DPL Paket erklärt die Methode. Die DPL Analyse ist für einen konkreten Fall.",
    includesTitle: "Was enthalten ist",
    includes: ["kurze Standortprüfung", "öffentliche und geschlossene Ebene", "Liste fehlender Elemente", "Hinweis auf ungeprüfte Aussagen", "nächster Schritt"],
    notTitle: "Was es nicht ist",
    not: ["keine Fachberatung", "keine Ergebnisgarantie", "kein Ersatz für Dokumentenprüfung"],
    stepsTitle: "Prozess",
    steps: ["Sie senden eine Beschreibung.", "Es wird geprüft, ob Analyse sinnvoll ist.", "Sie erhalten eine kurze Einschätzung.", "Der nächste Schritt wird vorgeschlagen."],
    disclaimer: "Die DPL Analyse ist eine informative geschäftliche Einschätzung. Unterlagen und Genehmigungen müssen fachlich geprüft werden.",
  },
  en: {
    title: "DPL location analysis",
    description: "Initial DPL analysis for a location, listing or use case.",
    eyebrow: "DaniniNet service · DPL analysis",
    h1: "DPL analysis: location review before public campaign or use offer.",
    text: "DPL analysis is a separate inquiry-based service. It is not part of the Gumroad purchase.",
    price: "49 € initial mini audit",
    cta: "Request DPL analysis",
    emailSubject: "DPL location analysis",
    productCta: "View DPL PDF + Bonus Pack",
    productText: "The DPL package explains the method. DPL analysis is for a concrete case.",
    includesTitle: "What is included",
    includes: ["short location review", "public and closed layer", "list of missing elements", "warning about unchecked claims", "next step"],
    notTitle: "What it is not",
    not: ["not expert advice", "no result guarantee", "not a replacement for document review"],
    stepsTitle: "Process",
    steps: ["You send a description.", "We check if analysis makes sense.", "You receive a short assessment.", "Next step is proposed."],
    disclaimer: "DPL analysis is an informational business review. Documents and approvals require expert checks.",
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];
  return { title: `${t.title} | DaniniNet`, description: t.description, alternates: { canonical: routes[lang], languages: { sr: routes.sr, de: routes.de, en: routes.en } } };
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
          <aside className="rounded-[2.5rem] bg-[#07142b] p-8 text-white">
            <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">DaniniNet DPL Analysis</p>
            <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6"><span className="block text-sm text-slate-300">Cena</span><strong className="mt-2 block text-4xl text-[#d7b46a]">{t.price}</strong></div>
            <a href={mailHref(t.emailSubject)} className="mt-7 inline-flex w-full justify-center rounded-full bg-[#f7fbff] px-7 py-4 text-sm font-semibold text-[#07142b]">{t.cta}</a>
            <Link href={localizedPath(lang, "dpl")} className="mt-3 inline-flex w-full justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white">{t.productCta}</Link>
            <p className="mt-6 leading-8 text-slate-300">{t.productText}</p>
          </aside>
          <div className="grid gap-6">
            <article className="rounded-[2rem] border border-black/10 bg-white p-8"><h2 className="text-3xl font-semibold">{t.includesTitle}</h2><ul className="mt-6 grid gap-3">{t.includes.map((item) => <li key={item} className="rounded-2xl bg-[#fffaf1] p-4 leading-7 text-[#706a5d]">✓ {item}</li>)}</ul></article>
            <article className="rounded-[2rem] border border-black/10 bg-white p-8"><h2 className="text-3xl font-semibold">{t.stepsTitle}</h2><ol className="mt-6 grid gap-3">{t.steps.map((item, index) => <li key={item} className="rounded-2xl bg-[#fffaf1] p-4 leading-7 text-[#706a5d]">0{index + 1} {item}</li>)}</ol></article>
            <article className="rounded-[2rem] border border-black/10 bg-white p-8"><h2 className="text-3xl font-semibold">{t.notTitle}</h2><ul className="mt-6 grid gap-3">{t.not.map((item) => <li key={item} className="rounded-2xl bg-[#fffaf1] p-4 leading-7 text-[#706a5d]">— {item}</li>)}</ul><p className="mt-6 rounded-2xl bg-[#07142b] p-5 leading-8 text-slate-300">{t.disclaimer}</p></article>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
