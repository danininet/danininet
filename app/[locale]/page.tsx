import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

type Copy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primary: string;
  secondary: string;
  signals: string[];
  problemTitle: string;
  problemText: string;
  flowTitle: string;
  flow: { n: string; title: string; text: string }[];
  forPeopleTitle: string;
  forPeopleText: string;
  forCompaniesTitle: string;
  forCompaniesText: string;
  proofTitle: string;
  proofText: string;
  calijeTitle: string;
  calijeText: string;
  calijeCta: string;
  principleTitle: string;
  principles: string[];
  finalTitle: string;
  finalText: string;
  finalCta: string;
};

const copy: Record<Locale, Copy> = {
  sr: {
    eyebrow: "DaniniNet · AI za stvarni život, rad i prihod",
    title: "Ne traži još jednu online šemu. Počni od onoga što već imaš.",
    subtitle:
      "DaniniNet pomaže ljudima da prepoznaju svoje znanje, iskustvo, vreme, kontakte i imovinu — i da uz AI pronađu realan način da od toga naprave posao, uslugu ili dodatni prihod. Firmama pomaže da jasnije vide koje ljude, veštine i procese im nedostaju.",
    primary: "Počni od sebe",
    secondary: "Pogledaj metod",
    signals: ["Bez guru obećanja", "Stvarni slučajevi", "AI kao alat, ne autoritet", "Merimo rezultat"],
    problemTitle: "Problem nije što ljudi nemaju vrednost. Problem je što često ne znaju gde je njihova vrednost tržišno korisna.",
    problemText:
      "Jedan čovek ima iskustvo. Drugi ima slobodno vreme. Treći ima plac, kombi, računar, zanat ili mrežu kontakata. Firma ima problem koji ne ume jasno da opiše. DaniniNet pokušava da te dve strane prevede u konkretan sledeći korak.",
    flowTitle: "Od onoga što imaš do tržišnog testa.",
    flow: [
      { n: "01", title: "Inventura", text: "Šta znaš, šta imaš, koliko vremena i kapitala možeš realno da koristiš?" },
      { n: "02", title: "Problem", text: "Koji konkretan problem možeš da rešiš osobi ili firmi?" },
      { n: "03", title: "Ponuda", text: "Pretvaramo sposobnost ili resurs u jasnu uslugu, proizvod ili model prihoda." },
      { n: "04", title: "AI ubrzanje", text: "AI pomaže u istraživanju, strukturi, učenju, sadržaju, automatizaciji i pripremi." },
      { n: "05", title: "Tržišni test", text: "Ne nagađamo mesecima. Objavimo, ponudimo, merimo interesovanje i korigujemo." },
      { n: "06", title: "Dokaz", text: "Vrednost dokazujemo upitima, kupcima, uštedom vremena ili stvarnim prihodom." },
    ],
    forPeopleTitle: "Za ljude koji ne znaju odakle da počnu",
    forPeopleText:
      "Ne guramo svakoga u affiliate marketing, programiranje ili YouTube. Prvo tražimo gde se tvoja postojeća životna i radna iskustva seku sa realnim problemom tržišta.",
    forCompaniesTitle: "Za firme koje imaju rupu u sistemu",
    forCompaniesText:
      "Firma često ne treba još jednu veliku platformu. Treba joj prava osoba, prava veština ili bolji proces. Cilj je da se potreba firme opiše dovoljno precizno da se može spojiti sa odgovarajućim čovekom ili AI podržanim rešenjem.",
    proofTitle: "Nećemo predavati teoriju koju sami nismo proverili.",
    proofText:
      "DaniniNet će svoje metode pokazivati kroz stvarne projekte, sa stvarnim ograničenjima, troškovima i rezultatima — uključujući neuspehe. Prvi veliki javni slučaj je monetizacija postojeće lokacije u Nišu.",
    calijeTitle: "Case study #1 · Čalije: može li neiskorišćena parcela početi da pravi prihod?",
    calijeText:
      "Od ideje i analize lokacije, preko jednostavnog parking modela i digitalne prezentacije, do testiranja stvarne potražnje. Ne prodajemo rezultat unapred — dokumentujemo proces i brojke.",
    calijeCta: "Pogledaj Čalije projekat",
    principleTitle: "Naša pravila",
    principles: [
      "Ne obećavamo zaradu.",
      "Ne pravimo sadržaj samo da bismo izgledali zauzeto.",
      "Ne gradimo proizvod pre nego što proverimo problem.",
      "AI predlaže i ubrzava; čovek odlučuje.",
      "Svaki projekat mora imati merljiv sledeći korak.",
    ],
    finalTitle: "Ako ne znaš šta bi mogao da radiš — to je upravo početna tačka.",
    finalText:
      "Počni inventurom: iskustvo, znanje, vreme, resursi, ograničenja i cilj. Od toga pravimo mapu realnih mogućnosti, a ne listu internet trendova.",
    finalCta: "Pokreni Opportunity Map",
  },
  de: {
    eyebrow: "DaniniNet · KI für echtes Leben, Arbeit und Einkommen",
    title: "Suche nicht nach dem nächsten Online-Trick. Starte mit dem, was du bereits hast.",
    subtitle:
      "DaniniNet hilft Menschen, Wissen, Erfahrung, Zeit, Kontakte und vorhandene Ressourcen in realistische Arbeit, Dienstleistungen oder zusätzliche Einnahmen zu übersetzen. Unternehmen hilft es, fehlende Menschen, Fähigkeiten und Prozesse klarer zu erkennen.",
    primary: "Bei dir selbst starten",
    secondary: "Methode ansehen",
    signals: ["Keine Guru-Versprechen", "Reale Fälle", "KI als Werkzeug", "Messbare Ergebnisse"],
    problemTitle: "Menschen fehlt oft nicht der Wert, sondern die Klarheit, wo dieser Wert am Markt gebraucht wird.",
    problemText:
      "Erfahrung, freie Zeit, Grundstück, Fahrzeug, Computer, Handwerk oder Kontakte können wirtschaftlichen Wert haben. Gleichzeitig haben Unternehmen Probleme, die sie oft nicht präzise genug beschreiben. DaniniNet übersetzt beides in einen konkreten nächsten Schritt.",
    flowTitle: "Vom vorhandenen Potenzial zum Markttest.",
    flow: [
      { n: "01", title: "Inventur", text: "Was kannst du, was besitzt du und wie viel Zeit oder Kapital ist realistisch?" },
      { n: "02", title: "Problem", text: "Welches konkrete Problem kannst du für Menschen oder Unternehmen lösen?" },
      { n: "03", title: "Angebot", text: "Fähigkeit oder Ressource wird zu einer klaren Dienstleistung, einem Produkt oder Einkommensmodell." },
      { n: "04", title: "KI-Beschleunigung", text: "KI unterstützt Recherche, Lernen, Struktur, Content, Automatisierung und Vorbereitung." },
      { n: "05", title: "Markttest", text: "Veröffentlichen, anbieten, Interesse messen und schnell korrigieren." },
      { n: "06", title: "Beleg", text: "Wert zeigt sich in Anfragen, Kunden, Zeitersparnis oder echtem Umsatz." },
    ],
    forPeopleTitle: "Für Menschen, die nicht wissen, wo sie anfangen sollen",
    forPeopleText:
      "Nicht jeder muss Affiliate-Marketer, Programmierer oder YouTuber werden. Wir suchen zuerst die Schnittstelle zwischen deiner realen Erfahrung und einem realen Marktproblem.",
    forCompaniesTitle: "Für Unternehmen mit einer Lücke im System",
    forCompaniesText:
      "Oft braucht ein Unternehmen keine weitere große Plattform, sondern die richtige Person, Fähigkeit oder einen besseren Ablauf. Der Bedarf muss so klar werden, dass er mit einem passenden Menschen oder einer KI-gestützten Lösung verbunden werden kann.",
    proofTitle: "Wir lehren keine Theorie, die wir selbst nicht getestet haben.",
    proofText:
      "DaniniNet dokumentiert reale Projekte mit Grenzen, Kosten, Ergebnissen und auch Fehlversuchen. Der erste große öffentliche Fall ist die Monetarisierung einer vorhandenen Fläche in Niš.",
    calijeTitle: "Case Study #1 · Čalije: Kann ein ungenutztes Grundstück Einnahmen erzeugen?",
    calijeText:
      "Von der Standortanalyse über ein einfaches Parkplatzmodell und digitale Präsentation bis zum Test echter Nachfrage. Keine Ergebnisgarantie — dokumentierter Prozess und Zahlen.",
    calijeCta: "Čalije Projekt ansehen",
    principleTitle: "Unsere Regeln",
    principles: [
      "Keine Einkommensgarantien.",
      "Kein Content nur um beschäftigt zu wirken.",
      "Kein Produkt vor Problemvalidierung.",
      "KI unterstützt; der Mensch entscheidet.",
      "Jedes Projekt braucht einen messbaren nächsten Schritt.",
    ],
    finalTitle: "Wenn du nicht weißt, was du tun könntest, ist genau das der Startpunkt.",
    finalText:
      "Beginne mit Erfahrung, Wissen, Zeit, Ressourcen, Grenzen und Ziel. Daraus entsteht eine realistische Opportunity Map statt einer Liste von Internet-Trends.",
    finalCta: "Opportunity Map starten",
  },
  en: {
    eyebrow: "DaniniNet · AI for real life, work and income",
    title: "Stop chasing the next online scheme. Start with what you already have.",
    subtitle:
      "DaniniNet helps people turn existing knowledge, experience, time, contacts and assets into realistic work, services or additional income. For companies, it helps clarify which people, skills or processes are actually missing.",
    primary: "Start with yourself",
    secondary: "See the method",
    signals: ["No guru promises", "Real cases", "AI as a tool", "Measured outcomes"],
    problemTitle: "People often do not lack value. They lack clarity about where that value is useful in the market.",
    problemText:
      "Experience, spare time, land, a vehicle, a computer, a trade or a network can all carry economic value. Companies also have problems they cannot always describe precisely. DaniniNet turns both sides into a concrete next step.",
    flowTitle: "From what you have to a market test.",
    flow: [
      { n: "01", title: "Inventory", text: "What do you know, own and realistically have time or capital to use?" },
      { n: "02", title: "Problem", text: "What concrete problem can you solve for a person or company?" },
      { n: "03", title: "Offer", text: "Turn a capability or asset into a clear service, product or income model." },
      { n: "04", title: "AI acceleration", text: "Use AI for research, learning, structure, content, automation and preparation." },
      { n: "05", title: "Market test", text: "Publish, offer, measure demand and correct quickly instead of guessing for months." },
      { n: "06", title: "Proof", text: "Value is proven through inquiries, customers, time saved or real revenue." },
    ],
    forPeopleTitle: "For people who do not know where to start",
    forPeopleText:
      "We do not push everyone into affiliate marketing, coding or YouTube. We first look for the intersection between your real-world experience and a real market problem.",
    forCompaniesTitle: "For companies with a gap in the system",
    forCompaniesText:
      "A company often does not need another large platform. It needs the right person, skill or process. The goal is to define the need well enough to match it with a suitable person or AI-supported solution.",
    proofTitle: "We will not teach theory we have not tested ourselves.",
    proofText:
      "DaniniNet will document real projects with constraints, costs, outcomes and failures. The first major public case is monetising an existing property in Niš.",
    calijeTitle: "Case study #1 · Čalije: can an unused plot start generating income?",
    calijeText:
      "From location analysis and a simple parking model to digital presentation and testing actual demand. No guaranteed outcome — just a documented process and numbers.",
    calijeCta: "View the Čalije project",
    principleTitle: "Our rules",
    principles: [
      "No income guarantees.",
      "No content just to look busy.",
      "No product before problem validation.",
      "AI supports and accelerates; humans decide.",
      "Every project needs a measurable next step.",
    ],
    finalTitle: "If you do not know what you could do, that is exactly the starting point.",
    finalText:
      "Start with experience, knowledge, time, resources, constraints and a goal. We turn that into a realistic opportunity map rather than a list of internet trends.",
    finalCta: "Start the Opportunity Map",
  },
};

function localePath(lang: Locale, sr: string, de: string, en: string) {
  const slug = lang === "de" ? de : lang === "en" ? en : sr;
  return `/${lang}/${slug}`;
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = locale === "de" || locale === "en" ? locale : "sr";
  const t = copy[lang];
  const startPath = localePath(lang, "pocni", "start", "start");
  const methodPath = localePath(lang, "daninihub-metod", "methode", "method");

  return (
    <SiteShell locale={lang} currentPath={`/${lang}`}>
      <section className="bg-[#07142b] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-sm uppercase tracking-[0.24em] text-[#c9a85f]">{t.eyebrow}</p>
          <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.04] tracking-tight md:text-7xl">{t.title}</h1>
          <p className="mt-8 max-w-4xl text-lg leading-9 text-slate-300 md:text-xl">{t.subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href={startPath} className="rounded-full bg-[#f4efe5] px-6 py-3 font-semibold text-[#07142b]">{t.primary}</Link>
            <Link href={methodPath} className="rounded-full border border-white/20 px-6 py-3 font-semibold">{t.secondary}</Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.signals.map((signal) => <div key={signal} className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 text-sm text-slate-200">{signal}</div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">{t.problemTitle}</h2>
          <p className="text-lg leading-9 text-[#706a5d]">{t.problemText}</p>
        </div>
      </section>

      <section className="bg-white/55">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-4xl font-semibold md:text-5xl">{t.flowTitle}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.flow.map((item) => (
              <article key={item.n} className="rounded-3xl border border-black/10 bg-[#fffaf0] p-6">
                <span className="text-sm font-semibold text-[#9a7430]">{item.n}</span>
                <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#706a5d]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-2">
        <article className="rounded-[2rem] bg-[#07142b] p-8 text-white">
          <p className="text-xs uppercase tracking-[0.22em] text-[#c9a85f]">B2C</p>
          <h2 className="mt-4 text-4xl font-semibold">{t.forPeopleTitle}</h2>
          <p className="mt-5 leading-8 text-slate-300">{t.forPeopleText}</p>
        </article>
        <article className="rounded-[2rem] border border-black/10 bg-[#fffaf0] p-8">
          <p className="text-xs uppercase tracking-[0.22em] text-[#9a7430]">B2B</p>
          <h2 className="mt-4 text-4xl font-semibold">{t.forCompaniesTitle}</h2>
          <p className="mt-5 leading-8 text-[#706a5d]">{t.forCompaniesText}</p>
        </article>
      </section>

      <section className="bg-[#efe6d6]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-semibold md:text-5xl">{t.proofTitle}</h2>
            <p className="mt-6 text-lg leading-9 text-[#706a5d]">{t.proofText}</p>
          </div>
          <div className="mt-10 rounded-[2rem] border border-black/10 bg-white p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-[#9a7430]">REAL WORLD PROOF</p>
            <h3 className="mt-4 max-w-4xl text-3xl font-semibold">{t.calijeTitle}</h3>
            <p className="mt-5 max-w-4xl leading-8 text-[#706a5d]">{t.calijeText}</p>
            <a href="https://calije.daninihub.com" className="mt-7 inline-flex rounded-full bg-[#07142b] px-6 py-3 font-semibold text-white">{t.calijeCta}</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-4xl font-semibold md:text-5xl">{t.principleTitle}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {t.principles.map((item, index) => (
            <div key={item} className="rounded-3xl border border-black/10 bg-[#fffaf0] p-5">
              <span className="text-sm font-semibold text-[#9a7430]">0{index + 1}</span>
              <p className="mt-3 font-semibold leading-7">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#07142b] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="max-w-4xl text-4xl font-semibold md:text-5xl">{t.finalTitle}</h2>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">{t.finalText}</p>
          <Link href={startPath} className="mt-8 inline-flex rounded-full bg-[#f4efe5] px-6 py-3 font-semibold text-[#07142b]">{t.finalCta}</Link>
        </div>
      </section>
    </SiteShell>
  );
}
