import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

type Copy = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { title: string; questions: string[] }[];
  outputTitle: string;
  output: string[];
  promptTitle: string;
  prompt: string;
  cta: string;
};

const copy: Record<Locale, Copy> = {
  sr: {
    eyebrow: "DaniniNet Opportunity Map",
    title: "Počni od onoga što već imaš.",
    intro: "Ovo nije test ličnosti i nije obećanje zarade. Ovo je praktična inventura iz koje treba da izađe nekoliko realnih pravaca za posao, uslugu, dodatni prihod ili bolju upotrebu postojećeg resursa.",
    sections: [
      { title: "1. Šta znaš i šta si radio?", questions: ["Poslovi, zanati, odgovornosti i iskustva koja već imaš", "Jezici, komunikacija, prodaja, organizacija, tehničke ili praktične veštine", "Šta drugi ljudi već traže od tebe da im objasniš ili uradiš"] },
      { title: "2. Šta poseduješ ili čemu imaš pristup?", questions: ["Plac, stan, garaža, vozilo, alat, računar, prostor ili oprema", "Kontakti, lokalna mreža, poslovni odnosi ili pristup određenoj industriji", "Postojeći sajt, kanal, društveni profil, baza sadržaja ili domen"] },
      { title: "3. Koja su tvoja ograničenja?", questions: ["Koliko sati nedeljno realno možeš da uložiš", "Koliki početni budžet možeš da rizikuješ bez ugrožavanja osnovnih potreba", "Šta ne želiš da radiš i koje poslove fizički, pravno ili organizaciono ne možeš da preuzmeš"] },
      { title: "4. Šta želiš da postigneš?", questions: ["Prvih 100 € dodatnog prihoda, stalni posao, mala usluga ili ozbiljniji biznis", "Online, offline ili kombinacija", "Koliko brzo ti treba prvi tržišni signal"] },
      { title: "5. Gde AI stvarno pomaže?", questions: ["Istraživanje tržišta i konkurencije", "Učenje onoga što ti konkretno nedostaje", "Ponuda, prodajna stranica, email, sadržaj i video", "Automatizacija ponavljajućih zadataka i strukturisanje odluka"] },
    ],
    outputTitle: "Šta treba da dobiješ iz ove inventure",
    output: ["3–5 realnih pravaca, ne 50 ideja", "Za svaki pravac: kome služi i koji problem rešava", "Najjeftiniji mogući tržišni test", "Šta AI može da uradi, a šta mora čovek", "Jasan kriterijum: nastavi, koriguj ili odbaci"],
    promptTitle: "Pošalji ove podatke AI-u ovako",
    prompt: "Analiziraj moje iskustvo, resurse, ograničenja i cilj. Ne predlaži generičke online poslove. Pronađi 3–5 realnih načina da rešim konkretan problem za osobu ili firmu. Za svaki predlog navedi: kupca, problem, ponudu, potrebne veštine, početni trošak, prvi tržišni test u 7 dana, šta AI može da ubrza i koji rezultat bi bio dovoljan da nastavim. Ako neka moja ideja nema tržišnu logiku, reci to jasno.",
    cta: "Pogledaj DaniniNet metod",
  },
  de: {
    eyebrow: "DaniniNet Opportunity Map",
    title: "Starte mit dem, was du bereits hast.",
    intro: "Kein Persönlichkeitstest und keine Einkommensgarantie. Das ist eine praktische Inventur, aus der wenige realistische Wege zu Arbeit, Dienstleistung, Zusatzeinkommen oder besserer Nutzung vorhandener Ressourcen entstehen sollen.",
    sections: [
      { title: "1. Was kannst du und was hast du bereits gemacht?", questions: ["Berufe, Tätigkeiten, Verantwortung und Erfahrung", "Sprachen, Kommunikation, Verkauf, Organisation, technische oder praktische Fähigkeiten", "Wobei bitten dich andere Menschen bereits um Hilfe?"] },
      { title: "2. Was besitzt du oder worauf hast du Zugriff?", questions: ["Grundstück, Wohnung, Garage, Fahrzeug, Werkzeug, Computer, Raum oder Ausrüstung", "Kontakte, lokales Netzwerk, Geschäftsbeziehungen oder Branchenzugang", "Bestehende Website, Kanal, Social-Profil, Inhalte oder Domains"] },
      { title: "3. Welche Grenzen gibt es?", questions: ["Realistisch verfügbare Stunden pro Woche", "Startbudget, das du ohne Gefährdung deiner Basis riskieren kannst", "Arbeiten, die du nicht machen willst oder nicht übernehmen kannst"] },
      { title: "4. Was ist dein Ziel?", questions: ["Erste 100 € Zusatzverdienst, fester Job, kleine Dienstleistung oder größeres Geschäft", "Online, offline oder kombiniert", "Wie schnell brauchst du ein erstes Marktsignal?"] },
      { title: "5. Wo hilft KI wirklich?", questions: ["Markt- und Wettbewerbsrecherche", "Gezieltes Lernen fehlender Fähigkeiten", "Angebot, Landingpage, E-Mail, Content und Video", "Automatisierung wiederkehrender Aufgaben und Entscheidungsstruktur"] },
    ],
    outputTitle: "Was aus der Inventur entstehen soll",
    output: ["3–5 realistische Wege statt 50 Ideen", "Für jeden Weg: Kunde und konkretes Problem", "Der günstigste mögliche Markttest", "Was KI übernimmt und was der Mensch entscheiden muss", "Klare Regel: weitermachen, korrigieren oder stoppen"],
    promptTitle: "So kannst du die Daten an eine KI geben",
    prompt: "Analysiere meine Erfahrung, Ressourcen, Grenzen und mein Ziel. Schlage keine generischen Online-Jobs vor. Finde 3–5 realistische Wege, ein konkretes Problem für eine Person oder ein Unternehmen zu lösen. Nenne für jeden Weg: Kunde, Problem, Angebot, nötige Fähigkeiten, Startkosten, ersten Markttest in 7 Tagen, was KI beschleunigen kann und welches Ergebnis ausreicht, um weiterzumachen. Wenn eine Idee keine Marktlogik hat, sage es klar.",
    cta: "DaniniNet Methode ansehen",
  },
  en: {
    eyebrow: "DaniniNet Opportunity Map",
    title: "Start with what you already have.",
    intro: "This is not a personality test and not an income promise. It is a practical inventory designed to produce a small number of realistic directions for work, services, additional income or better use of an existing asset.",
    sections: [
      { title: "1. What do you know and what have you done?", questions: ["Jobs, trades, responsibilities and experience", "Languages, communication, sales, organisation, technical or practical skills", "What do people already ask you to explain or do for them?"] },
      { title: "2. What do you own or have access to?", questions: ["Land, apartment, garage, vehicle, tools, computer, space or equipment", "Contacts, local network, business relationships or industry access", "Existing website, channel, social profile, content library or domain"] },
      { title: "3. What are your constraints?", questions: ["Realistically available hours per week", "Startup budget you can risk without harming basic needs", "Work you do not want or cannot legally, physically or organisationally take on"] },
      { title: "4. What is the goal?", questions: ["First €100 of extra income, a stable job, a small service or a larger business", "Online, offline or hybrid", "How quickly do you need the first market signal?"] },
      { title: "5. Where can AI actually help?", questions: ["Market and competitor research", "Learning the specific skills you are missing", "Offer, landing page, email, content and video", "Automating repetitive tasks and structuring decisions"] },
    ],
    outputTitle: "What this inventory should produce",
    output: ["3–5 realistic directions, not 50 ideas", "For each direction: customer and concrete problem", "The cheapest possible market test", "What AI can do and what humans must decide", "A clear rule: continue, adjust or stop"],
    promptTitle: "Give the information to AI like this",
    prompt: "Analyse my experience, resources, constraints and goal. Do not suggest generic online jobs. Find 3–5 realistic ways for me to solve a concrete problem for a person or company. For each option include: customer, problem, offer, required skills, startup cost, first market test within 7 days, what AI can accelerate and what result would be enough to continue. If an idea has no market logic, say so clearly.",
    cta: "See the DaniniNet method",
  },
};

export default async function StartPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = locale === "de" || locale === "en" ? locale : "sr";
  const t = copy[lang];
  const method = lang === "sr" ? `/${lang}/daninihub-metod` : lang === "de" ? `/${lang}/methode` : `/${lang}/method`;

  return (
    <SiteShell locale={lang} currentPath={`/${lang}/${lang === "sr" ? "pocni" : "start"}`}>
      <section className="bg-[#07142b] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.24em] text-[#c9a85f]">{t.eyebrow}</p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-6xl">{t.title}</h1>
          <p className="mt-7 max-w-4xl text-lg leading-9 text-slate-300">{t.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-6">
          {t.sections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-black/10 bg-[#fffaf0] p-7">
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <ul className="mt-5 grid gap-3 text-[#706a5d]">
                {section.questions.map((q) => <li key={q} className="rounded-2xl bg-white p-4 leading-7">{q}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-[#efe6d6] p-8">
          <h2 className="text-3xl font-semibold">{t.outputTitle}</h2>
          <ul className="mt-6 grid gap-3">
            {t.output.map((item) => <li key={item} className="rounded-2xl bg-white/70 p-4 leading-7">{item}</li>)}
          </ul>
        </div>

        <div className="mt-12 rounded-3xl bg-[#07142b] p-8 text-white">
          <h2 className="text-3xl font-semibold">{t.promptTitle}</h2>
          <p className="mt-6 whitespace-pre-line rounded-2xl border border-white/10 bg-white/[0.05] p-6 leading-8 text-slate-200">{t.prompt}</p>
          <Link href={method} className="mt-7 inline-flex rounded-full bg-[#f4efe5] px-6 py-3 font-semibold text-[#07142b]">{t.cta}</Link>
        </div>
      </section>
    </SiteShell>
  );
}
