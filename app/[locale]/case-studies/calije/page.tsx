import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "DANININET · CASE 01 · STVARNI TRŽIŠNI TEST",
    title: "Može li neiskorišćena parcela da počne da donosi prihod pre velike investicije?",
    lead: "Ovo nije priča o brzoj zaradi. Čalije u Nišu koristimo kao prvi javni DaniniNet eksperiment: krećemo od stvarne imovine, postavljamo najmanji održivi model, proveravamo potražnju i objavljujemo šta je uspelo, šta nije i šta smo naučili.",
    status: "TEST U TOKU",
    owner: "Odgovorno lice: Dragan Zdravković",
    problemTitle: "Početna situacija",
    problem: "Parcela ima potencijalnu vrednost, ali sama po sebi ne pravi prihod. Umesto da prvo uložimo veliki novac, proveravamo da li tržište želi jednostavan mesečni parking, poslovne pakete mesta i lokalnu reklamnu vidljivost.",
    methodTitle: "Šta tačno testiramo",
    method: [
      ["01", "Potražnja", "Da li privatni korisnici i firme u okolini traže dugoročnije parking mesto?"],
      ["02", "Ponuda", "Da li jednostavan MVP — tampon/rizla, obeležavanje, reklamni paneli i solarni nadzor — rešava dovoljno jak problem?"],
      ["03", "Cena i namera", "Koliko upita prelazi iz opšteg interesovanja u zahtev za konkretnom ponudom?"],
      ["04", "Odluka", "Tek posle merljivih signala određujemo obim ulaganja, kapacitet i sledeću fazu."]
    ],
    metricsTitle: "Merimo, ne nagađamo",
    metrics: ["Broj kvalifikovanih privatnih upita", "Broj B2B upita i traženih mesta", "Interesovanje za reklamna partnerstva", "Izvor upita: Google, direktan kontakt, društvene mreže, video", "Odnos interesovanja i konkretnih ponuda"],
    youtubeTitle: "YouTube dnevnik eksperimenta",
    youtubeText: "Video nije cilj sam po sebi. Svaka epizoda dokumentuje jednu odluku i vraća publiku na ovaj case, gde se rezultati mogu proveravati kroz vreme.",
    episodes: ["Imam plac koji trenutno ne donosi ništa — šta AI predlaže?", "Parking kao MVP: da li matematika uopšte prolazi?", "Sajt pre uređenja placa: može li se potražnja proveriti unapred?", "Prvi upiti: šta ljudi zaista traže?", "Rezultat: koliko je koštalo, šta je donelo i šta menjamo"],
    liveCta: "Pogledaj Čalije Parking",
    mapCta: "Pokreni svoju Opportunity Map",
    note: "Rezultat nije unapred poznat niti obećan. Ako test ne pokaže dovoljnu potražnju, i to je rezultat koji ćemo dokumentovati."
  },
  de: {
    eyebrow: "DANININET · CASE 01 · REALER MARKTTEST",
    title: "Kann eine ungenutzte Fläche Einnahmen erzeugen, bevor groß investiert wird?",
    lead: "Das ist keine Geschichte über schnelles Geld. Čalije in Niš ist der erste öffentliche DaniniNet-Test: reales Eigentum, kleinstes tragfähiges Modell, messbare Nachfrage und eine offene Dokumentation dessen, was funktioniert und was nicht.",
    status: "TEST LÄUFT",
    owner: "Verantwortlich: Dragan Zdravković",
    problemTitle: "Ausgangslage",
    problem: "Die Fläche hat potenziellen Wert, erzeugt aber aktuell keinen laufenden Ertrag. Statt zuerst groß zu investieren, testen wir Monatsparken, Firmenkontingente und lokale Werbesichtbarkeit.",
    methodTitle: "Was wir konkret testen",
    method: [
      ["01", "Nachfrage", "Suchen Privatpersonen und Unternehmen in der Umgebung planbare Stellplätze?"],
      ["02", "Angebot", "Löst ein einfaches MVP mit Tragschicht/Schotter, Markierung, Werbepaneelen und Solarüberwachung ein ausreichend starkes Problem?"],
      ["03", "Preis und Absicht", "Wie viele Interessenten wechseln von allgemeinem Interesse zu einer konkreten Angebotsanfrage?"],
      ["04", "Entscheidung", "Erst nach messbaren Signalen bestimmen wir Investition, Kapazität und nächste Phase."]
    ],
    metricsTitle: "Messen statt raten",
    metrics: ["Qualifizierte private Anfragen", "B2B-Anfragen und benötigte Stellplätze", "Interesse an Werbepartnerschaften", "Quelle der Anfragen: Google, Direktansprache, Social Media, Video", "Verhältnis von Interesse zu konkreten Angeboten"],
    youtubeTitle: "YouTube-Tagebuch des Experiments",
    youtubeText: "Video ist nicht das Endziel. Jede Episode dokumentiert eine Entscheidung und führt zurück zu diesem Case, auf dem die Entwicklung nachvollziehbar bleibt.",
    episodes: ["Ich habe ein Grundstück ohne laufenden Ertrag — was schlägt KI vor?", "Parken als MVP: funktioniert die Rechnung?", "Website vor Ausbau: lässt sich Nachfrage vorher testen?", "Erste Anfragen: Was will der Markt wirklich?", "Ergebnis: Kosten, Ertrag und was wir ändern"],
    liveCta: "Čalije Parking ansehen",
    mapCta: "Eigene Opportunity Map starten",
    note: "Das Ergebnis ist nicht vorab bekannt oder versprochen. Auch unzureichende Nachfrage ist ein relevantes Testergebnis."
  },
  en: {
    eyebrow: "DANININET · CASE 01 · REAL MARKET TEST",
    title: "Can an unused property generate income before a large investment is made?",
    lead: "This is not a quick-money story. Čalije in Niš is DaniniNet's first public experiment: start with a real asset, build the smallest viable model, test demand and openly document what works, what fails and what changes.",
    status: "TEST IN PROGRESS",
    owner: "Responsible person: Dragan Zdravković",
    problemTitle: "Starting point",
    problem: "The property has potential value but currently produces no recurring income. Instead of investing heavily first, we test monthly parking, business space packages and local advertising visibility.",
    methodTitle: "What we are testing",
    method: [
      ["01", "Demand", "Do nearby private users and businesses need predictable long-term parking?"],
      ["02", "Offer", "Does a simple MVP with compacted base/gravel, markings, ad panels and solar surveillance solve a strong enough problem?"],
      ["03", "Price and intent", "How many people move from general interest to asking for a concrete offer?"],
      ["04", "Decision", "Only after measurable signals do we set investment scope, capacity and the next phase."]
    ],
    metricsTitle: "Measure, don't guess",
    metrics: ["Qualified private enquiries", "B2B enquiries and requested spaces", "Advertising partnership interest", "Lead source: Google, direct outreach, social media, video", "Interest-to-offer conversion"],
    youtubeTitle: "YouTube experiment diary",
    youtubeText: "Video is not the goal itself. Each episode documents one decision and points viewers back to this case so progress can be checked over time.",
    episodes: ["I own land that currently earns nothing — what does AI suggest?", "Parking as an MVP: does the math work?", "Website before construction: can demand be tested first?", "First enquiries: what does the market actually want?", "Result: cost, revenue and what changes next"],
    liveCta: "View Čalije Parking",
    mapCta: "Start your Opportunity Map",
    note: "The outcome is not known or promised in advance. Insufficient demand would also be a meaningful result to document."
  }
} as const;

export default async function CalijeCasePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = locale === "de" || locale === "en" ? locale : "sr";
  const t = copy[lang];
  const parking = `https://calije.daninihub.com/${lang}`;
  const start = lang === "sr" ? `/${lang}/pocni` : `/${lang}/start`;

  return <SiteShell locale={lang} currentPath={`/${lang}/case-studies/calije`}>
    <section className="bg-[#071326] text-white"><div className="mx-auto max-w-6xl px-6 py-20"><p className="text-sm font-semibold tracking-[0.2em] text-[#d8b86b]">{t.eyebrow}</p><h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.04] md:text-7xl">{t.title}</h1><p className="mt-7 max-w-4xl text-lg leading-9 text-slate-300">{t.lead}</p><div className="mt-8 flex flex-wrap gap-3"><span className="rounded-full border border-[#d8b86b]/40 bg-[#d8b86b]/10 px-4 py-2 text-sm text-[#f0dca8]">{t.status}</span><span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">{t.owner}</span></div></div></section>

    <section className="bg-[#f2eadc]"><div className="mx-auto max-w-6xl px-6 py-16"><h2 className="text-4xl font-semibold">{t.problemTitle}</h2><p className="mt-5 max-w-4xl text-lg leading-9 text-[#615b51]">{t.problem}</p></div></section>

    <section className="bg-[#fffaf0]"><div className="mx-auto max-w-6xl px-6 py-16"><h2 className="text-4xl font-semibold">{t.methodTitle}</h2><div className="mt-8 grid gap-5 md:grid-cols-2">{t.method.map(([n,title,text])=><article key={n} className="rounded-3xl border border-black/10 bg-white p-6"><span className="text-sm font-semibold text-[#9a7530]">{n}</span><h3 className="mt-2 text-2xl font-semibold">{title}</h3><p className="mt-3 leading-8 text-[#615b51]">{text}</p></article>)}</div></div></section>

    <section className="bg-[#f2eadc]"><div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2"><div><h2 className="text-4xl font-semibold">{t.metricsTitle}</h2><ul className="mt-6 grid gap-3">{t.metrics.map(item=><li key={item} className="rounded-2xl border border-black/10 bg-white px-5 py-4">✓ {item}</li>)}</ul></div><div><h2 className="text-4xl font-semibold">{t.youtubeTitle}</h2><p className="mt-5 leading-8 text-[#615b51]">{t.youtubeText}</p><ol className="mt-6 grid gap-3">{t.episodes.map((item,i)=><li key={item} className="rounded-2xl bg-[#071326] px-5 py-4 text-white"><span className="mr-3 text-[#d8b86b]">0{i+1}</span>{item}</li>)}</ol></div></div></section>

    <section className="bg-[#071326] text-white"><div className="mx-auto max-w-6xl px-6 py-16"><p className="max-w-4xl text-lg leading-9 text-slate-300">{t.note}</p><div className="mt-8 flex flex-wrap gap-4"><a href={parking} target="_blank" rel="noreferrer" className="rounded-full bg-[#f8f3e8] px-6 py-3 font-semibold text-[#071326]">{t.liveCta} ↗</a><Link href={start} className="rounded-full border border-white/20 px-6 py-3">{t.mapCta}</Link></div></div></section>
  </SiteShell>;
}
