import Image from "next/image";
import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

type Card = {
  label: string;
  title: string;
  text: string;
  status: string;
  cta: string;
  href: "dpl" | "support" | "newsletter" | "health";
  points: string[];
};

const dplIncludes = [
  "PDF vodič: Digitalna prodaja lokacije",
  "DPL Bonus Pack kao sastavni deo paketa",
  "Pre-launch checklist",
  "Investor Brief Outline",
  "Homepage Structure Template",
  "Lead Calculator spec",
  "Email Templates",
  "Visual Asset Checklist",
  "Public / Private Information Map",
  "Metrics Tracker",
  "Disclaimer Library",
  "AI Dialogue Worksheet",
] as const;

const copy: Record<Locale, {
  eyebrow: string;
  title: string;
  text: string;
  artifactNote: string;
  featured: string;
  dplTitle: string;
  dplText: string;
  dplCta: string;
  price: string;
  systemTitle: string;
  system: string[];
  includeTitle: string;
  offerTitle: string;
  offerText: string;
  cards: Card[];
  futureTitle: string;
  futureText: string;
  futureCards: Card[];
  methodTitle: string;
  methodSteps: [string, string][];
  disclaimerTitle: string;
  disclaimerText: string;
}> = {
  sr: {
    eyebrow: "DaniniNet proizvodi",
    title: "DPL je glavni proizvod. DPL analiza je posebna usluga. Ostali pravci su odvojeni.",
    text: "Na ovoj strani ne mešamo proizvode. Kupac DPL paketa dobija PDF vodič i Bonus Pack. DPL analiza ide preko upita. Affiliate i health/water pravci nisu deo DPL paketa.",
    artifactNote: "Radni princip: Pitaj AI — AI pita tebe · artifact pre kampanje · dokaz pre tvrdnje · granica pre CTA-a.",
    featured: "Aktuelni prodajni proizvod",
    dplTitle: "Digitalna prodaja lokacije — PDF + Bonus Pack",
    dplText: "Jedan jasan digitalni proizvod za vlasnike lokacija, agente, male investitore i digitalne kreatore koji žele da običan oglas pretvore u ozbiljniji digitalni prodajni tok. Paket uključuje PDF vodič i Bonus Pack za primenu, proveru, lead tok, delivery i legal/trust granice.",
    dplCta: "Otvori DPL prodajnu stranicu",
    price: "29 € launch · 49 € regular",
    systemTitle: "DPL tok",
    system: ["Problem", "Podpitanja", "Gateway", "Brief", "Lead", "Delivery", "Signal"],
    includeTitle: "DPL paket uključuje",
    offerTitle: "Šta se zaista nudi",
    offerText: "Zaključana ponuda ima dva nivoa: digitalni proizvod koji se kupuje odmah i uslugu koja se traži preko upita. Tako kupcu ne obećavamo više nego što stvarno isporučujemo.",
    cards: [
      {
        label: "Digitalni proizvod · Gumroad",
        title: "DPL Paket — PDF vodič + Bonus Pack",
        text: "Kupac dobija edukativni PDF i operativni Bonus Pack. Ovo je glavni komercijalni proizvod DaniniNet-a i ne uključuje individualnu analizu konkretne lokacije.",
        status: "Aktivni prodajni fokus · 29 € launch",
        cta: "Prodajna stranica",
        href: "dpl",
        points: ["PDF + Bonus Pack", "Gumroad isporuka", "AI Dialogue Worksheet", "bez garancije prodaje"],
      },
      {
        label: "Usluga · preko upita",
        title: "DPL analiza potencijala lokacije",
        text: "Za vlasnike parcela, poslovnih prostora ili zakupnih površina koji žele konkretnu proveru: namena, javni/privatni sloj, rizici, lead logika i sledeći koraci.",
        status: "Posebna ponuda · nije Gumroad proizvod",
        cta: "Zatraži DPL analizu",
        href: "support",
        points: ["individualni upit", "ručna procena", "bez automatizovanih obećanja", "pisani dogovor pre rada"],
      },
    ],
    futureTitle: "Odvojeni pravci — nisu deo DPL paketa",
    futureText: "Ovi pravci ostaju u sistemu, ali se ne prikazuju kao sadržaj DPL kupovine. Svaki ima svoj disclaimer, svoju stranicu i svoju kampanju kada bude spreman.",
    futureCards: [
      {
        label: "Health / Water · poseban projekat",
        title: "DaniniLans — voda i zdrav stil života",
        text: "Poseban health/water sloj sa jasnim granicama tvrdnji. Nije deo DPL paketa i ne sme se mešati sa prodajom lokacija.",
        status: "Poseban projekat · sledeća faza",
        cta: "Pogledaj pravac",
        href: "health",
        points: ["voda", "zdrav stil života", "health disclaimer", "DACH sadržaj kasnije"],
      },
      {
        label: "Affiliate · posebno označeno",
        title: "Hostinger, Amazon, WELLAN/UMH i drugi pravci",
        text: "Affiliate proizvodi idu samo kroz jasno označene preporuke, bez mešanja sa DPL isporukom i bez medicinskih ili finansijskih obećanja.",
        status: "Inventar · nije deo DPL kupovine",
        cta: "Prati razvoj",
        href: "newsletter",
        points: ["affiliate disclosure", "link audit pre objave", "bez hype-a", "posebne stranice"],
      },
    ],
    methodTitle: "Kako svaki proizvod mora nastati",
    methodSteps: [["01", "Problem se imenuje bez hype-a."], ["02", "AI postavlja potpitanja za razjašnjenje."], ["03", "Agent workflow razdvaja činjenice, pretpostavke i rizike."], ["04", "Artifact se isporučuje kao stranica, PDF, email tok ili alat."], ["05", "Legal/trust sloj čuva granice i poverenje."], ["06", "Metrics signal odlučuje GO, dorada ili stop."]],
    disclaimerTitle: "Granice i poverenje",
    disclaimerText: "DPL paket je edukativni digitalni proizvod. DPL analiza je posebna usluga preko upita. DPL nije pravni, finansijski, urbanistički, tehnički ili investicioni savet i ne obećava prodaju, profit, investitore, zakupce ili dozvole. Affiliate i health/water pravci nisu deo DPL paketa osim ako je izričito drugačije navedeno.",
  },
  de: {
    eyebrow: "DaniniNet Produkte",
    title: "DPL ist das Hauptprodukt. Die DPL-Analyse ist eine separate Dienstleistung.",
    text: "Der Käufer des DPL-Pakets erhält PDF-Leitfaden und Bonus Pack. Eine individuelle Standortanalyse wird separat angefragt. Affiliate- und Health/Water-Linien sind nicht Teil des DPL-Pakets.",
    artifactNote: "Arbeitsprinzip: Frag die KI — die KI fragt dich · Artefakt vor Kampagne · Beleg vor Aussage · Grenze vor CTA.",
    featured: "Aktuelles Verkaufsprodukt",
    dplTitle: "Digitaler Verkauf von Standorten — PDF + Bonus Pack",
    dplText: "Ein klares digitales Produkt für Eigentümer, Vermittler, kleine Investoren und digitale Creator, die eine einfache Anzeige in einen seriöseren digitalen Verkaufsfluss übersetzen möchten.",
    dplCta: "DPL Verkaufsseite öffnen",
    price: "29 € Launch · 49 € regulär",
    systemTitle: "DPL Flow",
    system: ["Problem", "Rückfragen", "Gateway", "Brief", "Lead", "Delivery", "Signal"],
    includeTitle: "DPL Paket enthält",
    offerTitle: "Was wirklich angeboten wird",
    offerText: "Das Angebot ist sauber getrennt: digitales Produkt zum Sofortkauf und individuelle Analyse über Anfrage.",
    cards: [
      { label: "Digitalprodukt · Gumroad", title: "DPL Paket — PDF-Leitfaden + Bonus Pack", text: "Der Käufer erhält PDF und Bonus Pack. Keine individuelle Analyse eines konkreten Standorts.", status: "Aktiver Verkaufsfokus · 29 € Launch", cta: "Verkaufsseite", href: "dpl", points: ["PDF + Bonus Pack", "Gumroad Lieferung", "AI Dialogue Worksheet", "keine Ergebnisgarantie"] },
      { label: "Dienstleistung · Anfrage", title: "DPL Standortpotenzial-Analyse", text: "Für Eigentümer, die eine konkrete Prüfung von Nutzung, Risiken, öffentlicher/privater Ebene, Lead-Logik und nächsten Schritten benötigen.", status: "Separate Anfrage · kein Gumroad Produkt", cta: "DPL Analyse anfragen", href: "support", points: ["individuelle Anfrage", "manuelle Prüfung", "keine automatischen Versprechen", "schriftlicher Rahmen"] },
    ],
    futureTitle: "Separate Linien — nicht Teil des DPL-Pakets",
    futureText: "Diese Richtungen bleiben im System, werden aber nicht als Teil des DPL-Kaufs dargestellt.",
    futureCards: [
      { label: "Health / Water · separates Projekt", title: "DaniniLans — Wasser und gesunder Lebensstil", text: "Eigene Health/Water-Ebene mit klaren Grenzen. Nicht Teil des DPL-Pakets.", status: "Separates Projekt · nächste Phase", cta: "Bereich ansehen", href: "health", points: ["Wasser", "gesunder Lebensstil", "Health Disclaimer", "DACH Content später"] },
      { label: "Affiliate · klar markiert", title: "Hostinger, Amazon, WELLAN/UMH und weitere Linien", text: "Affiliate-Empfehlungen nur mit klarer Kennzeichnung und ohne Vermischung mit DPL-Lieferung.", status: "Inventar · nicht Teil des DPL-Kaufs", cta: "Entwicklung verfolgen", href: "newsletter", points: ["Affiliate Disclosure", "Link-Audit vor Veröffentlichung", "ohne Hype", "separate Seiten"] },
    ],
    methodTitle: "Wie jedes Produkt entstehen muss",
    methodSteps: [["01", "Problem ohne Hype benennen."], ["02", "KI stellt Rückfragen."], ["03", "Workflow trennt Fakten, Annahmen und Risiken."], ["04", "Artefakt wird als Seite, PDF, E-Mail-Fluss oder Tool geliefert."], ["05", "Legal/Trust setzt Grenzen."], ["06", "Metriken entscheiden GO, Überarbeitung oder Stop."]],
    disclaimerTitle: "Grenzen und Vertrauen",
    disclaimerText: "Das DPL Paket ist ein informatives digitales Produkt. Die DPL Analyse ist eine separate Dienstleistung. DPL ist keine Rechts-, Finanz-, Planungs-, Technik- oder Investmentberatung und garantiert keinen Verkauf, Profit, Investor, Mieter oder Genehmigungen.",
  },
  en: {
    eyebrow: "DaniniNet products",
    title: "DPL is the main product. DPL analysis is a separate service.",
    text: "The DPL buyer receives the PDF guide and Bonus Pack. Individual location analysis is requested separately. Affiliate and health/water lines are not part of the DPL package.",
    artifactNote: "Working principle: Ask AI — AI asks you · artifact before campaign · proof before claim · boundary before CTA.",
    featured: "Current sales product",
    dplTitle: "Digital Location Sales — PDF + Bonus Pack",
    dplText: "One clear digital product for owners, agents, small investors and digital creators who want to turn a basic listing into a more serious digital sales flow.",
    dplCta: "Open DPL sales page",
    price: "29 € launch · 49 € regular",
    systemTitle: "DPL flow",
    system: ["Problem", "Questions", "Gateway", "Brief", "Lead", "Delivery", "Signal"],
    includeTitle: "DPL package includes",
    offerTitle: "What is actually offered",
    offerText: "The offer is separated: a digital product for instant purchase and an individual analysis service via inquiry.",
    cards: [
      { label: "Digital product · Gumroad", title: "DPL Package — PDF guide + Bonus Pack", text: "The buyer receives the PDF and Bonus Pack. This does not include an individual analysis of a specific location.", status: "Active sales focus · 29 € launch", cta: "Sales page", href: "dpl", points: ["PDF + Bonus Pack", "Gumroad delivery", "AI Dialogue Worksheet", "no result guarantee"] },
      { label: "Service · inquiry", title: "DPL location potential analysis", text: "For owners who need a specific review of use, risks, public/private layer, lead logic and next steps.", status: "Separate inquiry · not a Gumroad product", cta: "Request DPL analysis", href: "support", points: ["individual inquiry", "manual review", "no automated promises", "written agreement"] },
    ],
    futureTitle: "Separate directions — not part of the DPL package",
    futureText: "These directions remain in the system, but are not shown as part of the DPL purchase.",
    futureCards: [
      { label: "Health / Water · separate project", title: "DaniniLans — water and healthy lifestyle", text: "A separate health/water layer with clear claim boundaries. Not part of the DPL package.", status: "Separate project · next phase", cta: "View direction", href: "health", points: ["water", "healthy lifestyle", "health disclaimer", "DACH content later"] },
      { label: "Affiliate · clearly disclosed", title: "Hostinger, Amazon, WELLAN/UMH and other lines", text: "Affiliate recommendations only with clear disclosure and without mixing them into DPL delivery.", status: "Inventory · not part of DPL purchase", cta: "Follow development", href: "newsletter", points: ["affiliate disclosure", "link audit before publishing", "no hype", "separate pages"] },
    ],
    methodTitle: "How every product must be created",
    methodSteps: [["01", "Name the problem without hype."], ["02", "AI asks clarifying questions."], ["03", "Workflow separates facts, assumptions and risks."], ["04", "Artifact is delivered as page, PDF, email flow or tool."], ["05", "Legal/trust keeps boundaries."], ["06", "Metrics signal decides GO, improve or stop."]],
    disclaimerTitle: "Boundaries and trust",
    disclaimerText: "The DPL package is an educational digital product. DPL analysis is a separate inquiry-based service. DPL is not legal, financial, planning, technical or investment advice and does not guarantee a sale, profit, investor, tenant or permits.",
  },
};

function pathFor(lang: Locale, href: Card["href"]) {
  if (href === "dpl") return localizedPath(lang, "dpl");
  if (href === "support") return localizedPath(lang, "support");
  if (href === "health") return localizedPath(lang, "health");
  return localizedPath(lang, "newsletter");
}

function CardGrid({ lang, cards }: { lang: Locale; cards: Card[] }) {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      {cards.map((card) => (
        <article key={card.title} className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-[#226bbf]">{card.label}</p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight">{card.title}</h3>
          <p className="mt-4 leading-8 text-[#706a5d]">{card.text}</p>
          <p className="mt-5 rounded-2xl bg-[#fff7e8] px-4 py-3 text-sm font-semibold text-[#795d1e]">{card.status}</p>
          <ul className="mt-5 grid gap-2 text-sm text-[#706a5d]">
            {card.points.map((point) => <li key={point}>• {point}</li>)}
          </ul>
          <Link href={pathFor(lang, card.href)} className="mt-6 inline-flex rounded-full bg-[#07142b] px-5 py-3 text-sm font-semibold text-white">{card.cta}</Link>
        </article>
      ))}
    </div>
  );
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang} currentPath={localizedPath(lang, "products")}>
      <SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} />

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-[2rem] border border-[#226bbf]/20 bg-[#e8f4ff] p-6 text-[#07142b]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#226bbf]">DaniniHub OS artifact layer</p>
          <p className="mt-3 text-lg leading-8">{t.artifactNote}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <article className="grid gap-8 rounded-[2.5rem] bg-[#07142b] p-8 text-white lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:p-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-4">
            <Image src="/images/products/digitalna-prodaja-lokacije-cover.svg" alt="Digitalna prodaja lokacije cover" width={900} height={1272} className="mx-auto h-auto w-full max-w-[330px] rounded-[1.4rem]" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">{t.featured}</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{t.dplTitle}</h2>
            <p className="mt-5 max-w-3xl leading-8 text-slate-300">{t.dplText}</p>
            <p className="mt-5 text-lg font-semibold text-[#d7b46a]">{t.price}</p>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-400">{t.systemTitle}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
              {t.system.map((item, index) => (
                <span key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-3 text-center text-xs text-slate-300">
                  <strong className="block text-[#d7b46a]">0{index + 1}</strong>{item}
                </span>
              ))}
            </div>
            <div className="mt-7 rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d7b46a]">{t.includeTitle}</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {dplIncludes.map((item) => <span key={item} className="text-sm leading-6 text-slate-300">• {item}</span>)}
              </div>
            </div>
            <Link href={localizedPath(lang, "dpl")} className="mt-8 inline-flex rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">
              {t.dplCta}
            </Link>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">{t.offerTitle}</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">DPL paket + DPL analiza</h2>
          </div>
          <p className="text-lg leading-9 text-[#706a5d]">{t.offerText}</p>
        </div>
        <CardGrid lang={lang} cards={t.cards} />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">{t.futureTitle}</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">DaniniLans · Affiliate · Health / Water</h2>
          </div>
          <p className="text-lg leading-9 text-[#706a5d]">{t.futureText}</p>
        </div>
        <CardGrid lang={lang} cards={t.futureCards} />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 rounded-[2rem] bg-[#07142b] p-8 text-white lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">DaniniHub OS</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">{t.methodTitle}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {t.methodSteps.map(([num, text]) => (
              <div key={num} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <span className="text-sm font-semibold text-[#d7b46a]">{num}</span>
                <p className="mt-2 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">{t.disclaimerTitle}</h2>
          <p className="mt-4 leading-8 text-[#706a5d]">{t.disclaimerText}</p>
        </div>
      </section>
    </SiteShell>
  );
}
