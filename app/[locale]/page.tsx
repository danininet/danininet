import Link from "next/link";
import type { ReactNode } from "react";

type Locale = "sr" | "de" | "en";

type Pillar = {
  label: string;
  title: string;
  text: string;
  icon: string;
};

type Card = {
  title: string;
  text: string;
  icon: string;
};

type MatrixRow = {
  left: string;
  right: string;
};

type Copy = {
  nav: {
    method: string;
    products: string;
    blog: string;
    support: string;
    legal: string;
  };
  routes: {
    products: string;
    product: string;
    blog: string;
    method: string;
    guestbook: string;
    support: string;
    legal: string;
    health: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
    map: string[];
  };
  positioning: {
    eyebrow: string;
    title: string;
    text: string;
    matrixTitle: string;
    matrix: MatrixRow[];
  };
  pillarsTitle: string;
  pillars: Pillar[];
  product: {
    eyebrow: string;
    title: string;
    text: string;
    cta: string;
    coverLine: string;
    coverBadge: string;
    coverSteps: string[];
  };
  proof: {
    eyebrow: string;
    title: string;
    text: string;
    layers: string[];
  };
  method: {
    eyebrow: string;
    title: string;
    text: string;
    process: string[];
  };
  content: {
    eyebrow: string;
    title: string;
    text: string;
    cards: Card[];
  };
  trust: {
    eyebrow: string;
    title: string;
    text: string;
    items: string[];
  };
  final: {
    title: string;
    primary: string;
    secondary: string;
    tertiary: string;
  };
};

const copy: Record<Locale, Copy> = {
  sr: {
    nav: {
      method: "Metoda",
      products: "Proizvodi",
      blog: "Blog",
      support: "Support",
      legal: "Legal",
    },
    routes: {
      products: "proizvodi",
      product: "proizvodi/digitalna-prodaja-lokacije",
      blog: "blog",
      method: "daninihub-metod",
      guestbook: "knjiga-utisaka",
      support: "support",
      legal: "legal",
      health: "zdrav-stil-zivota",
    },
    hero: {
      eyebrow: "DaniniNet platforma",
      title: "DaniniNet gradi digitalne sisteme oko ideja koje imaju tržišni potencijal.",
      subtitle:
        "Platforma za digitalni marketing, affiliate marketing, SEO sadržaj, AI dijalog i digitalne proizvode — povezana sa DaniniHub metodom i realnim case study projektima.",
      primary: "Pogledaj proizvode",
      secondary: "Kako radi DaniniHub metoda",
      map: ["Ideja", "Pitanja", "Sadržaj", "Proizvod", "Poverenje", "Prodajni tok"],
    },
    positioning: {
      eyebrow: "Pozicioniranje",
      title: "Nije poenta samo napraviti stranicu. Poenta je napraviti sistem koji ima smisao.",
      text:
        "DaniniNet povezuje sadržaj, proizvode, affiliate preporuke, SEO strukturu i AI radni tok u jedan pregledan sistem. Svaka ideja se posmatra kroz pitanje: kome služi, koji dokaz postoji, šta se prodaje, šta se ne sme obećati i koji je sledeći korak.",
      matrixTitle: "Od ideje do prodajnog toka",
      matrix: [
        { left: "Ideja", right: "Kome služi i zašto sada?" },
        { left: "Dokaz", right: "Šta postoji, a šta je pretpostavka?" },
        { left: "Sadržaj", right: "Koji problem objašnjava pre prodaje?" },
        { left: "Ponuda", right: "Šta se kupuje i šta se ne obećava?" },
      ],
    },
    pillarsTitle: "Tri stuba DaniniNet platforme",
    pillars: [
      {
        label: "Income",
        title: "Prodajni i affiliate sloj",
        icon: "€",
        text:
          "Digitalni proizvodi, affiliate marketing, prodajni tokovi, Gumroad isporuka, landing stranice i kampanje koje imaju jasan sledeći korak.",
      },
      {
        label: "Intelligence",
        title: "Metoda za odluke i sadržaj",
        icon: "?",
        text:
          "DaniniHub metoda, AI dijalog, razdvajanje činjenica od pretpostavki, pitanja, rizici i odluke pre nego što sadržaj izađe pred tržište.",
      },
      {
        label: "Health",
        title: "Budući health/water pravac",
        icon: "H₂O",
        text:
          "Voda, rutine, zdrav stil života i odgovoran affiliate okvir bez medicinskih obećanja, sa jasnim granicama između edukacije i saveta.",
      },
    ],
    product: {
      eyebrow: "Aktuelni proizvod",
      title: "Digitalna prodaja lokacije",
      text:
        "Vodič za pretvaranje parcele, stana, kuće, lokacije ili projekta u ozbiljniji digitalni prodajni tok.",
      cta: "Otvori proizvode",
      coverLine: "Vodič + Bonus Pack",
      coverBadge: "DaniniNet product",
      coverSteps: ["Lokacija", "Gateway", "Brief", "Lead tok"],
    },
    proof: {
      eyebrow: "Proof artifact",
      title: "Calije Park Residence kao dokazni primer.",
      text:
        "Calije Park Residence pokazuje kako se realna lokacija može predstaviti kao digitalni gateway: javna stranica za tržišni signal, zatvoreni brief za ozbiljnije interesente, vizuelni sloj, lokalizacija i pravno pažljiva komunikacija. Privatni materijali i pregovarački detalji ostaju van javnosti.",
      layers: ["Javna stranica", "Zatvoreni brief", "Vizuelni sloj", "Lokalizacija", "Legal granice"],
    },
    method: {
      eyebrow: "DaniniHub metoda",
      title: "Pitaj AI — AI pita tebe.",
      text:
        "DaniniHub metoda ne koristi AI kao mašinu za generičke tekstove. AI se koristi kao partner za pitanja: da razdvoji činjenice od pretpostavki, prepozna rupe u argumentu, postavi granice i pomogne da se sledeći korak pretvori u konkretan artifact.",
      process: ["Ideja", "Pitanja", "Dokazi", "Struktura", "Artifact", "Tržišna provera"],
    },
    content: {
      eyebrow: "Content & SEO engine",
      title: "Sadržaj koji gradi autoritet pre prodaje.",
      text:
        "Blog nije dodatak sajtu. Blog je SEO i edukativni sloj platforme: objašnjava probleme, povezuje proizvode, gradi link juice, podržava affiliate preporuke i uvodi čitaoca u sledeći logičan korak.",
      cards: [
        { title: "Digitalni marketing", icon: "DM", text: "Landing stranice, prodajni tokovi, email logika, lead forme i jasna struktura ponude." },
        { title: "Affiliate marketing", icon: "AF", text: "Preporuke sa kontekstom, disclosure slojem i granicom između informacije i obećanja." },
        { title: "AI u praksi", icon: "AI", text: "Dijalog, pitanja, odluke, dokazi i artifacti umesto nasumičnog generisanja teksta." },
        { title: "Case studies", icon: "CS", text: "Realni primeri koji pokazuju proces, strukturu, ograničenja i javno-privatni sloj." },
        { title: "Health / Water", icon: "HW", text: "Budući pravac o vodi, rutinama i zdravom stilu života bez medicinskih tvrdnji." },
      ],
    },
    trust: {
      eyebrow: "Trust & legal",
      title: "Poverenje se ne dodaje na kraju. Ono je deo sistema.",
      text:
        "DaniniNet jasno razdvaja edukaciju od saveta, affiliate preporuku od garancije, AI pomoć od autoriteta i digitalni proizvod od obećanja rezultata. Zato platforma ima stalni legal/trust sloj: affiliate disclosure, AI transparentnost, GDPR/kolačići i health disclaimer.",
      items: ["Edukacija nije pravni, finansijski ili zdravstveni savet", "Affiliate preporuka nije garancija rezultata", "AI pomoć zahteva ljudsku proveru", "GDPR, kolačići i disclosure su deo prodajnog toka"],
    },
    final: {
      title: "Kreni od proizvoda, metode ili sadržaja.",
      primary: "Pogledaj proizvode",
      secondary: "Čitaj blog",
      tertiary: "Legal & Trust",
    },
  },
  de: {
    nav: {
      method: "Methode",
      products: "Produkte",
      blog: "Blog",
      support: "Support",
      legal: "Legal",
    },
    routes: {
      products: "produkte",
      product: "produkte/digitaler-verkauf-von-standorten",
      blog: "blog",
      method: "methode",
      guestbook: "gaestebuch",
      support: "support",
      legal: "legal",
      health: "gesund-leben-wasser",
    },
    hero: {
      eyebrow: "DaniniNet Plattform",
      title: "DaniniNet baut digitale Systeme rund um Ideen mit Marktpotenzial.",
      subtitle:
        "Eine Plattform für digitales Marketing, Affiliate Marketing, SEO-Inhalte, KI-Dialog und digitale Produkte — verbunden mit der DaniniHub Methode und realen Case-Study-Projekten.",
      primary: "Produkte ansehen",
      secondary: "So arbeitet die DaniniHub Methode",
      map: ["Idee", "Fragen", "Inhalt", "Produkt", "Vertrauen", "Sales Flow"],
    },
    positioning: {
      eyebrow: "Positionierung",
      title: "Es geht nicht nur darum, eine Seite zu bauen. Es geht darum, ein System mit Sinn zu bauen.",
      text:
        "DaniniNet verbindet Inhalte, Produkte, Affiliate-Empfehlungen, SEO-Struktur und KI-Workflow zu einem übersichtlichen System. Jede Idee wird über klare Fragen geprüft: wem dient sie, welche Belege gibt es, was wird verkauft, was darf nicht versprochen werden und was ist der nächste Schritt.",
      matrixTitle: "Von der Idee zum Verkaufsfluss",
      matrix: [
        { left: "Idee", right: "Wem dient sie und warum jetzt?" },
        { left: "Beleg", right: "Was ist vorhanden und was ist Annahme?" },
        { left: "Inhalt", right: "Welches Problem erklärt er vor dem Verkauf?" },
        { left: "Angebot", right: "Was wird gekauft und was wird nicht versprochen?" },
      ],
    },
    pillarsTitle: "Drei Säulen der DaniniNet Plattform",
    pillars: [
      {
        label: "Income",
        title: "Verkauf und Affiliate-Struktur",
        icon: "€",
        text:
          "Digitale Produkte, Affiliate Marketing, Verkaufsflüsse, Gumroad-Auslieferung, Landingpages und Kampagnen mit einem klaren nächsten Schritt.",
      },
      {
        label: "Intelligence",
        title: "Methode für Entscheidungen und Inhalt",
        icon: "?",
        text:
          "DaniniHub Methode, KI-Dialog, Trennung von Fakten und Annahmen, Fragen, Risiken und Entscheidungen, bevor Inhalt in den Markt geht.",
      },
      {
        label: "Health",
        title: "Künftiger Health/Water-Bereich",
        icon: "H₂O",
        text:
          "Wasser, Routinen, gesunder Lebensstil und ein verantwortlicher Affiliate-Rahmen ohne medizinische Versprechen, mit klaren Grenzen zwischen Bildung und Beratung.",
      },
    ],
    product: {
      eyebrow: "Aktuelles Produkt",
      title: "Digitaler Verkauf von Standorten",
      text:
        "Ein Leitfaden, um ein Grundstück, eine Wohnung, ein Haus, einen Standort oder ein Projekt in einen seriöseren digitalen Verkaufsfluss zu übersetzen.",
      cta: "Produkte öffnen",
      coverLine: "Leitfaden + Bonus Pack",
      coverBadge: "DaniniNet Produkt",
      coverSteps: ["Standort", "Gateway", "Brief", "Lead Flow"],
    },
    proof: {
      eyebrow: "Proof Artifact",
      title: "Calije Park Residence als Belegbeispiel.",
      text:
        "Calije Park Residence zeigt, wie ein realer Standort als digitaler Gateway präsentiert werden kann: öffentliche Seite für ein Marktsignal, geschlossener Brief für ernstere Interessenten, visuelle Ebene, Lokalisierung und rechtlich vorsichtige Kommunikation. Private Materialien und Verhandlungsdetails bleiben außerhalb der Öffentlichkeit.",
      layers: ["Öffentliche Seite", "Geschlossener Brief", "Visuelle Ebene", "Lokalisierung", "Legal-Grenzen"],
    },
    method: {
      eyebrow: "DaniniHub Methode",
      title: "Frag die KI — die KI fragt dich.",
      text:
        "Die DaniniHub Methode nutzt KI nicht als Maschine für generische Texte. KI wird als Partner für Fragen eingesetzt: um Fakten von Annahmen zu trennen, Lücken in der Argumentation zu erkennen, Grenzen zu setzen und den nächsten Schritt in ein konkretes Artifact zu übersetzen.",
      process: ["Idee", "Fragen", "Belege", "Struktur", "Artifact", "Marktprüfung"],
    },
    content: {
      eyebrow: "Content & SEO Engine",
      title: "Inhalt, der Autorität vor dem Verkauf aufbaut.",
      text:
        "Der Blog ist kein Zusatz zur Website. Er ist die SEO- und Bildungsebene der Plattform: Er erklärt Probleme, verbindet Produkte, stärkt interne Verlinkung, unterstützt Affiliate-Empfehlungen und führt Leser in den nächsten logischen Schritt.",
      cards: [
        { title: "Digitales Marketing", icon: "DM", text: "Landingpages, Verkaufsflüsse, E-Mail-Logik, Lead-Formulare und klare Angebotsstruktur." },
        { title: "Affiliate Marketing", icon: "AF", text: "Empfehlungen mit Kontext, Disclosure-Ebene und klarer Grenze zwischen Information und Versprechen." },
        { title: "KI in der Praxis", icon: "KI", text: "Dialog, Fragen, Entscheidungen, Belege und Artefakte statt zufälliger Textproduktion." },
        { title: "Case Studies", icon: "CS", text: "Reale Beispiele, die Prozess, Struktur, Grenzen und öffentliche/private Ebenen zeigen." },
        { title: "Health / Water", icon: "HW", text: "Künftiger Bereich zu Wasser, Routinen und gesundem Lebensstil ohne medizinische Behauptungen." },
      ],
    },
    trust: {
      eyebrow: "Trust & Legal",
      title: "Vertrauen wird nicht am Ende hinzugefügt. Es ist Teil des Systems.",
      text:
        "DaniniNet trennt Bildung von Beratung, Affiliate-Empfehlung von Garantie, KI-Unterstützung von Autorität und digitale Produkte von Ergebnisversprechen. Deshalb hat die Plattform eine feste Legal- und Trust-Ebene: Affiliate Disclosure, KI-Transparenz, GDPR/Cookies und Health Disclaimer.",
      items: ["Bildung ist keine Rechts-, Finanz- oder Gesundheitsberatung", "Affiliate-Empfehlung ist keine Ergebnisgarantie", "KI-Unterstützung braucht menschliche Prüfung", "GDPR, Cookies und Disclosure gehören in den Verkaufsfluss"],
    },
    final: {
      title: "Starte mit Produkt, Methode oder Inhalt.",
      primary: "Produkte ansehen",
      secondary: "Blog lesen",
      tertiary: "Legal & Trust",
    },
  },
  en: {
    nav: {
      method: "Method",
      products: "Products",
      blog: "Blog",
      support: "Support",
      legal: "Legal",
    },
    routes: {
      products: "products",
      product: "products/digital-location-sales",
      blog: "blog",
      method: "method",
      guestbook: "guestbook",
      support: "support",
      legal: "legal",
      health: "healthy-lifestyle-water",
    },
    hero: {
      eyebrow: "DaniniNet platform",
      title: "DaniniNet builds digital systems around ideas with market potential.",
      subtitle:
        "A platform for digital marketing, affiliate marketing, SEO content, AI dialogue and digital products — connected with the DaniniHub method and real case-study projects.",
      primary: "View products",
      secondary: "How the DaniniHub method works",
      map: ["Idea", "Questions", "Content", "Product", "Trust", "Sales flow"],
    },
    positioning: {
      eyebrow: "Positioning",
      title: "The point is not just to build a page. The point is to build a system that makes sense.",
      text:
        "DaniniNet connects content, products, affiliate recommendations, SEO structure and AI workflow into one clear system. Every idea is examined through practical questions: who it serves, what proof exists, what is being sold, what must not be promised and what the next step is.",
      matrixTitle: "From idea to sales flow",
      matrix: [
        { left: "Idea", right: "Who does it serve and why now?" },
        { left: "Proof", right: "What exists and what is an assumption?" },
        { left: "Content", right: "Which problem does it explain before the sale?" },
        { left: "Offer", right: "What is bought and what is not promised?" },
      ],
    },
    pillarsTitle: "Three pillars of the DaniniNet platform",
    pillars: [
      {
        label: "Income",
        title: "Sales and affiliate layer",
        icon: "€",
        text:
          "Digital products, affiliate marketing, sales flows, Gumroad delivery, landing pages and campaigns with a clear next step.",
      },
      {
        label: "Intelligence",
        title: "Method for decisions and content",
        icon: "?",
        text:
          "DaniniHub method, AI dialogue, separation of facts from assumptions, questions, risks and decisions before content reaches the market.",
      },
      {
        label: "Health",
        title: "Future health/water direction",
        icon: "H₂O",
        text:
          "Water, routines, healthy lifestyle and a responsible affiliate framework without medical promises, with clear boundaries between education and advice.",
      },
    ],
    product: {
      eyebrow: "Current product",
      title: "Digital Location Sales",
      text:
        "A guide for turning land, an apartment, a house, a location or a project into a more serious digital sales flow.",
      cta: "Open products",
      coverLine: "Guide + Bonus Pack",
      coverBadge: "DaniniNet product",
      coverSteps: ["Location", "Gateway", "Brief", "Lead flow"],
    },
    proof: {
      eyebrow: "Proof artifact",
      title: "Calije Park Residence as a proof example.",
      text:
        "Calije Park Residence shows how a real location can be presented as a digital gateway: a public page for market signal, a closed brief for more serious interest, visual layer, localization and legally careful communication. Private materials and negotiation details remain outside the public view.",
      layers: ["Public page", "Closed brief", "Visual layer", "Localization", "Legal boundaries"],
    },
    method: {
      eyebrow: "DaniniHub method",
      title: "Ask AI — AI asks you.",
      text:
        "The DaniniHub method does not use AI as a machine for generic text. AI is used as a partner for questions: to separate facts from assumptions, detect gaps in the argument, set boundaries and help turn the next step into a concrete artifact.",
      process: ["Idea", "Questions", "Proof", "Structure", "Artifact", "Market check"],
    },
    content: {
      eyebrow: "Content & SEO engine",
      title: "Content that builds authority before the sale.",
      text:
        "A blog is not an add-on to the website. It is the SEO and educational layer of the platform: it explains problems, connects products, builds internal link value, supports affiliate recommendations and leads the reader into the next logical step.",
      cards: [
        { title: "Digital marketing", icon: "DM", text: "Landing pages, sales flows, email logic, lead forms and a clear offer structure." },
        { title: "Affiliate marketing", icon: "AF", text: "Recommendations with context, disclosure and a clear boundary between information and promises." },
        { title: "AI in practice", icon: "AI", text: "Dialogue, questions, decisions, proof and artifacts instead of random text generation." },
        { title: "Case studies", icon: "CS", text: "Real examples that show process, structure, limits and the public/private layer." },
        { title: "Health / Water", icon: "HW", text: "Future direction around water, routines and healthy lifestyle without medical claims." },
      ],
    },
    trust: {
      eyebrow: "Trust & legal",
      title: "Trust is not added at the end. It is part of the system.",
      text:
        "DaniniNet clearly separates education from advice, affiliate recommendation from guarantee, AI assistance from authority and a digital product from promises of results. That is why the platform has a permanent legal/trust layer: affiliate disclosure, AI transparency, GDPR/cookies and health disclaimer.",
      items: ["Education is not legal, financial or health advice", "Affiliate recommendation is not a guarantee of results", "AI assistance requires human review", "GDPR, cookies and disclosure belong inside the sales flow"],
    },
    final: {
      title: "Start with the product, the method or the content.",
      primary: "View products",
      secondary: "Read blog",
      tertiary: "Legal & Trust",
    },
  },
};

function localizedPath(lang: Locale, path: string) {
  return `/${lang}/${path}`;
}

function SectionShell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`relative overflow-hidden ${className}`}>{children}</section>;
}

function IconDisc({ children }: { children: ReactNode }) {
  return (
    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[#d2b46f]/35 bg-[#071326] text-sm font-semibold tracking-[0.08em] text-[#ead7a1] shadow-[0_12px_28px_rgba(7,19,38,0.14)]">
      {children}
    </span>
  );
}

function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
      <div className="grid gap-3">
        {steps.map((item, index) => (
          <div key={item} className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-[#071326]/55 p-4">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-[#d2b46f]/35 bg-white/[0.04] text-xs text-[#ead7a1]">
              {index + 1}
            </span>
            <span className="font-medium text-[#f8f3e8]">{item}</span>
            {index < steps.length - 1 ? <span className="ml-auto text-[#d2b46f]">↓</span> : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function PositionMatrix({ title, rows }: { title: string; rows: MatrixRow[] }) {
  return (
    <div className="rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_18px_55px_rgba(7,19,38,0.08)] backdrop-blur">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9c7b38]">{title}</p>
      <div className="mt-5 divide-y divide-black/10 overflow-hidden rounded-2xl border border-black/10">
        {rows.map((row) => (
          <div key={row.left} className="grid grid-cols-[0.35fr_0.65fr] bg-[#fffaf0]">
            <div className="border-r border-black/10 bg-[#f4efe5] px-4 py-4 text-sm font-semibold text-[#071326]">{row.left}</div>
            <div className="px-4 py-4 text-sm leading-6 text-[#635d52]">{row.right}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductCover({ product }: { product: Copy["product"] }) {
  return (
    <div className="relative mx-auto w-full max-w-[360px] rotate-[-2deg] rounded-[2rem] border border-[#d2b46f]/35 bg-[#071326] p-5 text-[#f8f3e8] shadow-[0_30px_90px_rgba(7,19,38,0.30)]">
      <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#d2b46f]/20 blur-2xl" />
      <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.10] via-white/[0.04] to-[#1d5f9f]/20 p-6">
        <p className="text-xs uppercase tracking-[0.24em] text-[#ead7a1]">{product.coverBadge}</p>
        <h3 className="mt-8 text-4xl font-semibold leading-tight">{product.title}</h3>
        <p className="mt-5 text-sm uppercase tracking-[0.18em] text-[#d8e2ee]">{product.coverLine}</p>
        <div className="mt-8 grid grid-cols-2 gap-3">
          {product.coverSteps.map((step) => (
            <span key={step} className="rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-3 text-center text-xs text-[#d8e2ee]">
              {step}
            </span>
          ))}
        </div>
        <div className="mt-8 h-2 rounded-full bg-[#d2b46f]" />
      </div>
    </div>
  );
}

function MethodStepper({ steps }: { steps: string[] }) {
  return (
    <div className="rounded-[2rem] border border-black/10 bg-[#fffaf0]/90 p-6 shadow-[0_18px_55px_rgba(7,19,38,0.08)]">
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        {steps.map((step, index) => (
          <div key={step} className="relative rounded-2xl border border-black/10 bg-white p-4 text-center">
            <span className="mx-auto grid h-9 w-9 place-items-center rounded-full bg-[#071326] text-xs text-[#ead7a1]">0{index + 1}</span>
            <span className="mt-3 block text-sm font-semibold text-[#171717]">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang: Locale = locale === "de" || locale === "en" ? locale : "sr";
  const t = copy[lang];

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#071326_0%,#10233a_24%,#efe6d6_24%,#f6efe2_100%)] text-[#171717]">
      <SectionShell className="bg-[#071326] text-[#f8f3e8]">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_20%_0%,rgba(210,180,111,0.16),transparent_34%),radial-gradient(circle_at_85%_10%,rgba(29,95,159,0.24),transparent_38%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-7 md:px-8">
          <header className="flex flex-wrap items-center justify-between gap-5 border-b border-white/10 pb-6">
            <Link href={`/${lang}`} className="flex items-center gap-3" aria-label="DaniniNet home">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[#d2b46f]/40 bg-white/[0.04] text-sm font-semibold tracking-[0.16em] text-[#f8f3e8]">
                DN
              </span>
              <span>
                <span className="block text-2xl font-semibold tracking-tight">DaniniNet</span>
                <span className="block text-[11px] uppercase tracking-[0.28em] text-[#b7c7d9]">
                  Income · Intelligence · Health
                </span>
              </span>
            </Link>

            <nav className="flex flex-wrap items-center gap-4 text-sm text-[#d8e2ee]" aria-label="Main navigation">
              <Link href={localizedPath(lang, t.routes.products)}>{t.nav.products}</Link>
              <Link href={localizedPath(lang, t.routes.blog)}>{t.nav.blog}</Link>
              <Link href={localizedPath(lang, t.routes.method)}>{t.nav.method}</Link>
              <Link href={localizedPath(lang, t.routes.support)}>{t.nav.support}</Link>
              <Link href={localizedPath(lang, t.routes.legal)}>{t.nav.legal}</Link>
              <span className="mx-1 h-4 w-px bg-white/15" aria-hidden="true" />
              <Link href="/sr" hrefLang="sr">SR</Link>
              <Link href="/de" hrefLang="de">DE</Link>
              <Link href="/en" hrefLang="en">EN</Link>
            </nav>
          </header>

          <section className="grid gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-24">
            <div>
              <p className="mb-6 inline-flex rounded-full border border-[#d2b46f]/35 bg-white/[0.05] px-4 py-2 text-sm text-[#ead7a1]">
                {t.hero.eyebrow}
              </p>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
                {t.hero.title}
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-[#d8e2ee]">{t.hero.subtitle}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={localizedPath(lang, t.routes.products)}
                  className="rounded-full bg-[#f4efe5] px-6 py-3 text-sm font-semibold text-[#071326] shadow-[0_18px_45px_rgba(0,0,0,0.22)]"
                >
                  {t.hero.primary}
                </Link>
                <Link
                  href={localizedPath(lang, t.routes.method)}
                  className="rounded-full border border-white/18 px-6 py-3 text-sm font-medium text-white"
                >
                  {t.hero.secondary}
                </Link>
              </div>
            </div>

            <FlowDiagram steps={t.hero.map} />
          </section>
        </div>
      </SectionShell>

      <SectionShell className="bg-[linear-gradient(180deg,#071326_0%,#10233a_20%,#efe6d6_20%,#efe6d6_100%)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
          <div className="rounded-[2rem] border border-black/10 bg-[#fffaf0]/95 p-8 shadow-[0_24px_80px_rgba(7,19,38,0.14)]">
            <p className="text-sm uppercase tracking-[0.24em] text-[#1d5f9f]">{t.positioning.eyebrow}</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">{t.positioning.title}</h2>
            <p className="mt-6 text-lg leading-9 text-[#635d52]">{t.positioning.text}</p>
          </div>
          <PositionMatrix title={t.positioning.matrixTitle} rows={t.positioning.matrix} />
        </div>
      </SectionShell>

      <SectionShell className="bg-[#efe6d6]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
          <h2 className="text-4xl font-semibold tracking-tight">{t.pillarsTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {t.pillars.map((pillar) => (
              <article key={pillar.label} className="rounded-[2rem] border border-black/10 bg-[#fffaf0]/90 p-7 shadow-[0_16px_45px_rgba(7,19,38,0.06)]">
                <IconDisc>{pillar.icon}</IconDisc>
                <p className="mt-6 text-sm uppercase tracking-[0.22em] text-[#1d5f9f]">{pillar.label}</p>
                <h3 className="mt-3 text-2xl font-semibold">{pillar.title}</h3>
                <p className="mt-4 leading-8 text-[#635d52]">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[linear-gradient(180deg,#efe6d6_0%,#f6efe2_100%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ProductCover product={t.product} />
          <div className="grid gap-6">
            <article className="rounded-[2rem] border border-black/10 bg-[#fffaf0] p-8 shadow-[0_18px_55px_rgba(7,19,38,0.08)]">
              <p className="text-sm uppercase tracking-[0.22em] text-[#1d5f9f]">{t.product.eyebrow}</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight">{t.product.title}</h2>
              <p className="mt-5 leading-8 text-[#635d52]">{t.product.text}</p>
              <Link
                href={localizedPath(lang, t.routes.products)}
                className="mt-8 inline-flex rounded-full bg-[#071326] px-6 py-3 text-sm font-semibold text-[#f8f3e8]"
              >
                {t.product.cta}
              </Link>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-white/75 p-8 shadow-[0_18px_55px_rgba(7,19,38,0.06)]">
              <p className="text-sm uppercase tracking-[0.22em] text-[#9c7b38]">{t.proof.eyebrow}</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight">{t.proof.title}</h2>
              <p className="mt-5 leading-8 text-[#635d52]">{t.proof.text}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                {t.proof.layers.map((layer) => (
                  <span key={layer} className="rounded-full border border-black/10 bg-[#f4efe5] px-4 py-2 text-sm text-[#39352e]">
                    {layer}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#f6efe2]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[#1d5f9f]">{t.method.eyebrow}</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{t.method.title}</h2>
              <p className="mt-6 text-lg leading-9 text-[#635d52]">{t.method.text}</p>
            </div>
            <MethodStepper steps={t.method.process} />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[linear-gradient(180deg,#f6efe2_0%,#efe6d6_100%)]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
          <p className="text-sm uppercase tracking-[0.22em] text-[#1d5f9f]">{t.content.eyebrow}</p>
          <div className="mt-4 grid gap-7 lg:grid-cols-[0.95fr_1.05fr]">
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">{t.content.title}</h2>
            <p className="text-lg leading-9 text-[#635d52]">{t.content.text}</p>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {t.content.cards.map((card) => (
              <article key={card.title} className="rounded-3xl border border-black/10 bg-[#fffaf0]/90 p-6 shadow-[0_16px_45px_rgba(7,19,38,0.05)]">
                <IconDisc>{card.icon}</IconDisc>
                <h3 className="mt-5 text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 leading-7 text-[#635d52]">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#efe6d6]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:px-8 md:py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[#1d5f9f]">{t.trust.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{t.trust.title}</h2>
            <p className="mt-6 text-lg leading-9 text-[#635d52]">{t.trust.text}</p>
          </div>
          <div className="rounded-[2rem] border border-black/10 bg-[#fffaf0] p-5 shadow-[0_18px_55px_rgba(7,19,38,0.08)]">
            <div className="grid gap-4">
              {t.trust.items.map((item, index) => (
                <div key={item} className="grid grid-cols-[auto_1fr] items-start gap-4 rounded-2xl border border-black/10 bg-white/75 p-5 text-[#39352e]">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#071326] text-xs text-[#ead7a1]">{index + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-[#071326] text-[#f8f3e8]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(210,180,111,0.16),transparent_32%),radial-gradient(circle_at_88%_20%,rgba(29,95,159,0.22),transparent_36%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8">
          <div className="flex flex-col justify-between gap-8 rounded-[2rem] border border-white/12 bg-white/[0.05] p-8 md:flex-row md:items-center">
            <h2 className="max-w-2xl text-4xl font-semibold leading-tight">{t.final.title}</h2>
            <div className="flex flex-wrap gap-4">
              <Link href={localizedPath(lang, t.routes.products)} className="rounded-full bg-[#f4efe5] px-6 py-3 text-sm font-semibold text-[#071326]">
                {t.final.primary}
              </Link>
              <Link href={localizedPath(lang, t.routes.blog)} className="rounded-full border border-white/18 px-6 py-3 text-sm font-medium text-white">
                {t.final.secondary}
              </Link>
              <Link href={localizedPath(lang, t.routes.legal)} className="rounded-full border border-white/18 px-6 py-3 text-sm font-medium text-white">
                {t.final.tertiary}
              </Link>
            </div>
          </div>
          <footer className="mt-8 border-t border-white/10 pt-7 text-sm text-[#b7c7d9]">
            DaniniNet · DaniniHub metoda · Digital marketing · Affiliate marketing · SEO · Digital products · Trust layer
          </footer>
        </div>
      </SectionShell>
    </main>
  );
}
