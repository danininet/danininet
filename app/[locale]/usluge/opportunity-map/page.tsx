import type { Metadata } from "next";
import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const routes: Record<Locale, string> = {
  sr: "/sr/usluge/opportunity-map",
  de: "/de/services/opportunity-map",
  en: "/en/services/opportunity-map",
};

const startRoutes: Record<Locale, string> = {
  sr: "/sr/pocni",
  de: "/de/start",
  en: "/en/start",
};

const copy = {
  sr: {
    title: "Opportunity Map analiza",
    description: "Konkretna 49 € analiza iskustva, resursa i tržišnih pravaca kroz transparentan Human + AI rad.",
    eyebrow: "DaniniNet usluga · Opportunity Map",
    h1: "Ne treba ti još 50 ideja. Treba ti nekoliko pravaca koje možeš stvarno da testiraš.",
    text: "Pošalješ svoje iskustvo, resurse, ograničenja i cilj. Dragan vodi slučaj, a ChatGPT se koristi otvoreno kao analitički i produkcioni partner za istraživanje, strukturiranje i ubrzavanje rada. Dobijaš 3–5 realnih pravaca, prvi tržišni test i jasan kriterijum šta nastaviti, korigovati ili odbaciti.",
    price: "49 € početna analiza",
    cta: "Zatraži Opportunity Map analizu",
    subject: "Opportunity Map analiza — konkretan slučaj",
    free: "Prvo uradi besplatnu Opportunity Map",
    fit: "Pre prihvatanja analize prvo proveravamo da li slučaj ima smisla za ovu uslugu. Ne naplaćujemo obećanje zarade i ne garantujemo rezultat.",
    transparencyTitle: "Kako stvarno radimo",
    transparency: "Ništa ne skrivamo iza fraze ‘AI rešenje’. Dragan donosi iskustvo, kontekst, odluke i odgovornost. ChatGPT pomaže u istraživanju, poređenju, matematici, pisanju, strukturiranju ponude i pripremi tržišnog testa. Isti način rada javno dokumentujemo kroz Case 01 — Čalije.",
    includesTitle: "Šta dobijaš",
    includes: ["sažetak onoga što realno možeš da ponudiš tržištu", "3–5 prioritizovanih pravaca zasnovanih na tvojim resursima", "za svaki pravac: kupac, problem i početna ponuda", "najjeftiniji tržišni test koji može da se pokrene brzo", "jasno: šta radi AI, a šta mora da uradi čovek", "rizike, rupe u znanju i šta ne treba trošiti unapred", "kriterijum za nastavak ili odustajanje"],
    notTitle: "Šta ne prodajemo",
    not: ["garanciju zarade", "generičku listu online poslova", "priču da AI radi sve umesto tebe", "investicioni, pravni ili stručni savet"],
    stepsTitle: "Kako ide",
    steps: ["Uradiš besplatnu Opportunity Map i pošalješ podatke.", "Proveravamo da li imamo dovoljno informacija i da li analiza ima smisla.", "Ako prihvatimo slučaj, dogovaramo 49 € naknadu i isporuku analize.", "Dobijaš strukturisan dokument i sledeći konkretan tržišni test."],
    closing: "Naš prvi cilj nije da ti prodamo veliki paket. Cilj je da dovoljno brzo saznaš da li postoji pravac vredan daljeg vremena i novca."
  },
  de: {
    title: "Opportunity Map Analyse",
    description: "Konkrete 49-€-Analyse von Erfahrung, Ressourcen und realistischen Marktwegen in transparenter Human+AI-Zusammenarbeit.",
    eyebrow: "DaniniNet Service · Opportunity Map",
    h1: "Du brauchst nicht noch 50 Ideen. Du brauchst wenige Wege, die du real testen kannst.",
    text: "Du sendest Erfahrung, Ressourcen, Grenzen und Ziel. Dragan führt den Fall, ChatGPT wird offen als Analyse- und Produktionspartner für Recherche, Struktur und Beschleunigung eingesetzt. Du erhältst 3–5 realistische Wege, einen ersten Markttest und eine klare Weiter/Korrigieren/Stop-Regel.",
    price: "49 € erste Analyse",
    cta: "Opportunity Map Analyse anfragen",
    subject: "Opportunity Map Analyse — konkreter Fall",
    free: "Zuerst kostenlose Opportunity Map ausfüllen",
    fit: "Vor Annahme prüfen wir, ob der Fall für diesen Service geeignet ist. Wir verkaufen kein Einkommensversprechen und garantieren kein Ergebnis.",
    transparencyTitle: "So arbeiten wir wirklich",
    transparency: "Wir verstecken nichts hinter dem Begriff ‘KI-Lösung’. Dragan bringt Erfahrung, Kontext, Entscheidungen und Verantwortung ein. ChatGPT unterstützt Recherche, Vergleiche, Kalkulation, Text, Angebotsstruktur und Markttests. Dieselbe Arbeitsweise dokumentieren wir öffentlich im Case 01 — Čalije.",
    includesTitle: "Was du bekommst",
    includes: ["Zusammenfassung deiner real nutzbaren Ressourcen", "3–5 priorisierte Wege", "für jeden Weg: Kunde, Problem und Startangebot", "günstigster sinnvoller Markttest", "klar getrennt: KI-Aufgaben und menschliche Aufgaben", "Risiken, Wissenslücken und unnötige Vorabkosten", "klare Weiter/Stop-Regel"],
    notTitle: "Was wir nicht verkaufen",
    not: ["Einkommensgarantie", "generische Online-Jobliste", "Versprechen, dass KI alles übernimmt", "Anlage-, Rechts- oder Fachberatung"],
    stepsTitle: "Ablauf",
    steps: ["Kostenlose Opportunity Map ausfüllen und Daten senden.", "Wir prüfen Informationslage und Fit.", "Bei Annahme vereinbaren wir die 49-€-Analyse.", "Du erhältst eine strukturierte Auswertung und den nächsten Markttest."],
    closing: "Das Ziel ist nicht, sofort ein großes Paket zu verkaufen. Du sollst schnell erkennen, ob ein Weg weiteres Geld und Zeit verdient."
  },
  en: {
    title: "Opportunity Map analysis",
    description: "Concrete €49 analysis of experience, resources and realistic market directions through transparent Human + AI collaboration.",
    eyebrow: "DaniniNet service · Opportunity Map",
    h1: "You do not need 50 more ideas. You need a few directions you can actually test.",
    text: "Send your experience, resources, constraints and goal. Dragan leads the case while ChatGPT is openly used as an analysis and production partner for research, structure and acceleration. Receive 3–5 realistic directions, a first market test and a clear continue/adjust/stop rule.",
    price: "€49 initial analysis",
    cta: "Request Opportunity Map analysis",
    subject: "Opportunity Map analysis — concrete case",
    free: "Complete the free Opportunity Map first",
    fit: "Before accepting the analysis we check whether the case fits the service. We do not sell an income promise and do not guarantee an outcome.",
    transparencyTitle: "How we actually work",
    transparency: "We hide nothing behind the phrase ‘AI solution’. Dragan provides experience, context, decisions and accountability. ChatGPT supports research, comparison, calculations, writing, offer structure and market-test preparation. We document the same method publicly in Case 01 — Čalije.",
    includesTitle: "What you get",
    includes: ["summary of resources you can realistically bring to market", "3–5 prioritised directions", "customer, problem and starter offer for each direction", "lowest-cost useful market test", "clear split between AI work and human work", "risks, skill gaps and unnecessary upfront spending", "clear continue/stop criteria"],
    notTitle: "What we do not sell",
    not: ["income guarantee", "generic list of online jobs", "promise that AI does everything for you", "investment, legal or professional advice"],
    stepsTitle: "Process",
    steps: ["Complete the free Opportunity Map and send your information.", "We check information quality and fit.", "If accepted, we agree the €49 analysis.", "You receive a structured assessment and the next market test."],
    closing: "The goal is not to sell a large package first. The goal is to learn quickly whether a direction deserves more time and money."
  }
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

export default async function OpportunityMapService({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return <SiteShell locale={lang} currentPath={routes[lang]}>
    <SectionIntro eyebrow={t.eyebrow} title={t.h1} text={t.text} />
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <aside className="rounded-[2.5rem] bg-[#07142b] p-8 text-white">
          <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">Opportunity Map · Human + AI</p>
          <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6"><span className="block text-sm text-slate-300">{lang === "sr" ? "Cena" : lang === "de" ? "Preis" : "Price"}</span><strong className="mt-2 block text-4xl text-[#d7b46a]">{t.price}</strong></div>
          <p className="mt-6 leading-8 text-slate-300">{t.fit}</p>
          <a href={mailHref(t.subject)} className="mt-7 inline-flex w-full justify-center rounded-full bg-[#f7fbff] px-7 py-4 text-center text-sm font-semibold text-[#07142b]">{t.cta}</a>
          <Link href={startRoutes[lang]} className="mt-3 inline-flex w-full justify-center rounded-full border border-white/15 px-7 py-4 text-center text-sm font-semibold text-white">{t.free}</Link>
        </aside>
        <div className="grid gap-6">
          <article className="rounded-[2rem] border border-[#d7b46a]/40 bg-[#fffaf1] p-8"><p className="text-sm uppercase tracking-[0.18em] text-[#a47d2d]">Human + AI · transparentno</p><h2 className="mt-3 text-3xl font-semibold">{t.transparencyTitle}</h2><p className="mt-5 leading-8 text-[#706a5d]">{t.transparency}</p></article>
          <article className="rounded-[2rem] border border-black/10 bg-white p-8"><h2 className="text-3xl font-semibold">{t.includesTitle}</h2><ul className="mt-6 grid gap-3">{t.includes.map(item => <li key={item} className="rounded-2xl bg-[#fffaf1] p-4 leading-7 text-[#706a5d]">✓ {item}</li>)}</ul></article>
          <article className="rounded-[2rem] border border-black/10 bg-white p-8"><h2 className="text-3xl font-semibold">{t.stepsTitle}</h2><ol className="mt-6 grid gap-3">{t.steps.map((item,index) => <li key={item} className="rounded-2xl bg-[#fffaf1] p-4 leading-7 text-[#706a5d]">0{index+1} {item}</li>)}</ol></article>
          <article className="rounded-[2rem] border border-black/10 bg-white p-8"><h2 className="text-3xl font-semibold">{t.notTitle}</h2><ul className="mt-6 grid gap-3">{t.not.map(item => <li key={item} className="rounded-2xl bg-[#fffaf1] p-4 leading-7 text-[#706a5d]">— {item}</li>)}</ul><p className="mt-6 rounded-2xl bg-[#07142b] p-5 leading-8 text-slate-300">{t.closing}</p></article>
        </div>
      </div>
    </section>
  </SiteShell>;
}
