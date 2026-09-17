import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { ZeroToOneIntake } from "@/components/leads/ZeroToOneIntake";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "DaniniNet Opportunity Map",
    title: "Počni od onoga što već imaš.",
    intro: "Ovo nije test ličnosti i nije obećanje zarade. Ovo je praktična inventura iz koje treba da izađe nekoliko realnih pravaca za posao, uslugu, dodatni prihod ili bolju upotrebu postojećeg resursa.",
    sections: [
      ["1. Šta znaš i šta si radio?", ["Poslovi, zanati, odgovornosti i iskustva koja već imaš", "Jezici, komunikacija, prodaja, organizacija, tehničke ili praktične veštine", "Šta drugi ljudi već traže od tebe da im objasniš ili uradiš"]],
      ["2. Šta poseduješ ili čemu imaš pristup?", ["Plac, stan, garaža, vozilo, alat, računar, prostor ili oprema", "Kontakti, lokalna mreža, poslovni odnosi ili pristup određenoj industriji", "Postojeći sajt, kanal, društveni profil, baza sadržaja ili domen"]],
      ["3. Koja su tvoja ograničenja?", ["Koliko sati nedeljno realno možeš da uložiš", "Koliki početni budžet možeš da rizikuješ bez ugrožavanja osnovnih potreba", "Šta ne želiš ili realno ne možeš da radiš"]],
      ["4. Šta želiš da postigneš?", ["Prvih 100 € dodatnog prihoda, stalni posao, mala usluga ili ozbiljniji biznis", "Online, offline ili kombinacija", "Koliko brzo ti treba prvi tržišni signal"]],
      ["5. Gde AI stvarno pomaže?", ["Istraživanje tržišta i konkurencije", "Učenje onoga što ti konkretno nedostaje", "Ponuda, prodajna stranica, email, sadržaj i video", "Automatizacija ponavljajućih zadataka i strukturisanje odluka"]]
    ],
    outputTitle: "Šta treba da dobiješ iz ove inventure",
    output: ["3–5 realnih pravaca, ne 50 ideja", "Za svaki pravac: kome služi i koji problem rešava", "Najjeftiniji mogući tržišni test", "Šta AI može da uradi, a šta mora čovek", "Jasan kriterijum: nastavi, koriguj ili odbaci"],
    promptTitle: "Pošalji ove podatke AI-u ovako",
    prompt: "Analiziraj moje iskustvo, resurse, ograničenja i cilj. Ne predlaži generičke online poslove. Pronađi 3–5 realnih načina da rešim konkretan problem za osobu ili firmu. Za svaki predlog navedi: kupca, problem, ponudu, potrebne veštine, početni trošak, prvi tržišni test u 7 dana, šta AI može da ubrza i koji rezultat bi bio dovoljan da nastavim. Ako neka moja ideja nema tržišnu logiku, reci to jasno.",
    method: "Pogledaj DaniniNet metod",
    paidEyebrow: "Ako želiš da ovo uradimo na tvom konkretnom slučaju",
    paidTitle: "Opportunity Map analiza · 49 €",
    paidText: "Pošalješ iskustvo, resurse, ograničenja i cilj. Dobijaš 3–5 prioritizovanih pravaca, prvi tržišni test, rizike i jasan kriterijum šta vredi nastaviti. Pre prihvatanja prvo proveravamo da li slučaj ima smisla za uslugu.",
    paidCta: "Pogledaj šta analiza uključuje"
  },
  de: {
    eyebrow: "DaniniNet Opportunity Map",
    title: "Starte mit dem, was du bereits hast.",
    intro: "Kein Persönlichkeitstest und keine Einkommensgarantie. Das ist eine praktische Inventur, aus der wenige realistische Wege zu Arbeit, Dienstleistung, Zusatzeinkommen oder besserer Nutzung vorhandener Ressourcen entstehen sollen.",
    sections: [
      ["1. Was kannst du und was hast du gemacht?", ["Berufe, Tätigkeiten, Verantwortung und Erfahrung", "Sprachen, Kommunikation, Verkauf, Organisation, technische oder praktische Fähigkeiten", "Wobei bitten dich andere bereits um Hilfe?"]],
      ["2. Was besitzt du oder worauf hast du Zugriff?", ["Grundstück, Wohnung, Garage, Fahrzeug, Werkzeug, Computer, Raum oder Ausrüstung", "Kontakte, Netzwerk, Geschäftsbeziehungen oder Branchenzugang", "Website, Kanal, Social-Profil, Inhalte oder Domains"]],
      ["3. Welche Grenzen gibt es?", ["Realistisch verfügbare Stunden pro Woche", "Startbudget, das du verantwortbar riskieren kannst", "Arbeiten, die du nicht machen willst oder kannst"]],
      ["4. Was ist dein Ziel?", ["Erste 100 € Zusatzverdienst, fester Job, kleine Dienstleistung oder größeres Geschäft", "Online, offline oder kombiniert", "Wie schnell brauchst du ein erstes Marktsignal?"]],
      ["5. Wo hilft KI wirklich?", ["Markt- und Wettbewerbsrecherche", "Gezieltes Lernen fehlender Fähigkeiten", "Angebot, Landingpage, E-Mail, Content und Video", "Automatisierung wiederkehrender Aufgaben"]]
    ],
    outputTitle: "Was aus der Inventur entstehen soll",
    output: ["3–5 realistische Wege statt 50 Ideen", "Kunde und konkretes Problem für jeden Weg", "Günstigster sinnvoller Markttest", "Was KI übernimmt und was der Mensch tun muss", "Klare Regel: weiter, korrigieren oder stoppen"],
    promptTitle: "So kannst du die Daten an eine KI geben",
    prompt: "Analysiere meine Erfahrung, Ressourcen, Grenzen und mein Ziel. Schlage keine generischen Online-Jobs vor. Finde 3–5 realistische Wege, ein konkretes Problem für eine Person oder ein Unternehmen zu lösen. Nenne Kunde, Problem, Angebot, nötige Fähigkeiten, Startkosten, ersten Markttest in 7 Tagen, was KI beschleunigen kann und welches Ergebnis ausreicht, um weiterzumachen.",
    method: "DaniniNet Methode ansehen",
    paidEyebrow: "Wenn du möchtest, dass wir deinen konkreten Fall strukturieren",
    paidTitle: "Opportunity Map Analyse · 49 €",
    paidText: "Du sendest Erfahrung, Ressourcen, Grenzen und Ziel. Du erhältst 3–5 priorisierte Wege, ersten Markttest, Risiken und klare Weiter/Stop-Kriterien. Vor Annahme prüfen wir zuerst den Fit.",
    paidCta: "Leistungsumfang ansehen"
  },
  en: {
    eyebrow: "DaniniNet Opportunity Map",
    title: "Start with what you already have.",
    intro: "This is not a personality test and not an income promise. It is a practical inventory designed to produce a small number of realistic directions for work, services, additional income or better use of an existing asset.",
    sections: [
      ["1. What do you know and what have you done?", ["Jobs, responsibilities and experience", "Languages, communication, sales, organisation, technical or practical skills", "What do people already ask you to help with?"]],
      ["2. What do you own or have access to?", ["Land, apartment, garage, vehicle, tools, computer, space or equipment", "Contacts, local network, business relationships or industry access", "Website, channel, social profile, content library or domains"]],
      ["3. What are your constraints?", ["Realistically available hours per week", "Startup budget you can responsibly risk", "Work you do not want or cannot take on"]],
      ["4. What is the goal?", ["First €100, a stable job, a small service or larger business", "Online, offline or hybrid", "How quickly do you need a market signal?"]],
      ["5. Where can AI actually help?", ["Market and competitor research", "Learning specific missing skills", "Offer, landing page, email, content and video", "Automating repetitive tasks"]]
    ],
    outputTitle: "What this inventory should produce",
    output: ["3–5 realistic directions, not 50 ideas", "Customer and concrete problem for each", "Lowest-cost useful market test", "What AI can do and what humans must do", "Clear continue, adjust or stop rule"],
    promptTitle: "Give the information to AI like this",
    prompt: "Analyse my experience, resources, constraints and goal. Do not suggest generic online jobs. Find 3–5 realistic ways to solve a concrete problem for a person or company. For each include customer, problem, offer, required skills, startup cost, first market test within 7 days, what AI can accelerate and what result would justify continuing.",
    method: "See the DaniniNet method",
    paidEyebrow: "If you want us to structure your concrete case",
    paidTitle: "Opportunity Map analysis · €49",
    paidText: "Send experience, resources, constraints and goal. Receive 3–5 prioritised directions, the first market test, risks and clear continue/stop criteria. We check fit before accepting the case.",
    paidCta: "See what the analysis includes"
  }
} as const;

export default async function StartPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = locale === "de" || locale === "en" ? locale : "sr";
  const t = copy[lang];
  const method = lang === "sr" ? `/${lang}/daninihub-metod` : lang === "de" ? `/${lang}/methode` : `/${lang}/method`;
  const paid = lang === "sr" ? `/${lang}/usluge/opportunity-map` : `/${lang}/services/opportunity-map`;

  return <SiteShell locale={lang} currentPath={`/${lang}/${lang === "sr" ? "pocni" : "start"}`}>
    <section className="bg-[#07142b] text-white"><div className="mx-auto max-w-5xl px-6 py-20"><p className="text-sm uppercase tracking-[0.24em] text-[#c9a85f]">{t.eyebrow}</p><h1 className="mt-6 text-5xl font-semibold leading-tight md:text-6xl">{t.title}</h1><p className="mt-7 max-w-4xl text-lg leading-9 text-slate-300">{t.intro}</p></div></section>
    <ZeroToOneIntake locale={lang} />
    <section className="mx-auto max-w-5xl px-6 py-16"><div className="grid gap-6">{t.sections.map(([title,questions]) => <article key={title as string} className="rounded-3xl border border-black/10 bg-[#fffaf0] p-7"><h2 className="text-2xl font-semibold">{title}</h2><ul className="mt-5 grid gap-3 text-[#706a5d]">{(questions as readonly string[]).map(q => <li key={q} className="rounded-2xl bg-white p-4 leading-7">{q}</li>)}</ul></article>)}</div>
      <div className="mt-12 rounded-3xl bg-[#efe6d6] p-8"><h2 className="text-3xl font-semibold">{t.outputTitle}</h2><ul className="mt-6 grid gap-3">{t.output.map(item => <li key={item} className="rounded-2xl bg-white/70 p-4 leading-7">{item}</li>)}</ul></div>
      <div className="mt-12 rounded-3xl bg-[#07142b] p-8 text-white"><h2 className="text-3xl font-semibold">{t.promptTitle}</h2><p className="mt-6 rounded-2xl border border-white/10 bg-white/[0.05] p-6 leading-8 text-slate-200">{t.prompt}</p><Link href={method} className="mt-7 inline-flex rounded-full bg-[#f4efe5] px-6 py-3 font-semibold text-[#07142b]">{t.method}</Link></div>
      <div className="mt-12 rounded-[2rem] border border-[#c9a85f]/35 bg-[#fffaf0] p-8"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8b6a2e]">{t.paidEyebrow}</p><h2 className="mt-4 text-4xl font-semibold">{t.paidTitle}</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-[#706a5d]">{t.paidText}</p><Link href={paid} className="mt-7 inline-flex rounded-full bg-[#07142b] px-6 py-3 font-semibold text-white">{t.paidCta} →</Link></div>
    </section>
  </SiteShell>;
}
