import Link from "next/link";

type Locale = "sr" | "de" | "en";

type Pillar = {
  label: string;
  title: string;
  text: string;
};

type Card = {
  title: string;
  text: string;
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
  };
  pillarsTitle: string;
  pillars: Pillar[];
  product: {
    eyebrow: string;
    title: string;
    text: string;
    cta: string;
  };
  proof: {
    eyebrow: string;
    title: string;
    text: string;
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
    },
    pillarsTitle: "Tri stuba DaniniNet platforme",
    pillars: [
      {
        label: "Income",
        title: "Prodajni i affiliate sloj",
        text:
          "Digitalni proizvodi, affiliate marketing, prodajni tokovi, Gumroad isporuka, landing stranice i kampanje koje imaju jasan sledeći korak.",
      },
      {
        label: "Intelligence",
        title: "Metoda za odluke i sadržaj",
        text:
          "DaniniHub metoda, AI dijalog, razdvajanje činjenica od pretpostavki, pitanja, rizici i odluke pre nego što sadržaj izađe pred tržište.",
      },
      {
        label: "Health",
        title: "Budući health/water pravac",
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
    },
    proof: {
      eyebrow: "Proof artifact",
      title: "Calije Park Residence kao dokazni primer.",
      text:
        "Calije Park Residence pokazuje kako se realna lokacija može predstaviti kao digitalni gateway: javna stranica za tržišni signal, zatvoreni brief za ozbiljnije interesente, vizuelni sloj, lokalizacija i pravno pažljiva komunikacija. Privatni materijali i pregovarački detalji ostaju van javnosti.",
    },
    method: {
      eyebrow: "DaniniHub metoda",
      title: "Pitaj AI — AI pita tebe.",
      text:
        "DaniniHub metoda ne koristi AI kao mašinu za generičke tekstove. AI se koristi kao partner za pitanja: da razdvoji činjenice od pretpostavki, prepozna rupe u argumentu, postavi granice i pomogne da se sledeći korak pretvori u konkretan artifact.",
      process: ["Ideja", "Pitanja", "Dokazi", "Struktura", "Artifact", "Test tržišta"],
    },
    content: {
      eyebrow: "Content & SEO engine",
      title: "Sadržaj koji gradi autoritet pre prodaje.",
      text:
        "Blog nije dodatak sajtu. Blog je SEO i edukativni sloj platforme: objašnjava probleme, povezuje proizvode, gradi link juice, podržava affiliate preporuke i uvodi čitaoca u sledeći logičan korak.",
      cards: [
        { title: "Digitalni marketing", text: "Landing stranice, prodajni tokovi, email logika, lead forme i jasna struktura ponude." },
        { title: "Affiliate marketing", text: "Preporuke sa kontekstom, disclosure slojem i granicom između informacije i obećanja." },
        { title: "AI u praksi", text: "Dijalog, pitanja, odluke, dokazi i artifacti umesto nasumičnog generisanja teksta." },
        { title: "Case studies", text: "Realni primeri koji pokazuju proces, strukturu, ograničenja i javno-privatni sloj." },
        { title: "Health / Water", text: "Budući pravac o vodi, rutinama i zdravom stilu života bez medicinskih tvrdnji." },
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
    },
    pillarsTitle: "Drei Säulen der DaniniNet Plattform",
    pillars: [
      {
        label: "Income",
        title: "Verkauf und Affiliate-Struktur",
        text:
          "Digitale Produkte, Affiliate Marketing, Verkaufsflüsse, Gumroad-Auslieferung, Landingpages und Kampagnen mit einem klaren nächsten Schritt.",
      },
      {
        label: "Intelligence",
        title: "Methode für Entscheidungen und Inhalt",
        text:
          "DaniniHub Methode, KI-Dialog, Trennung von Fakten und Annahmen, Fragen, Risiken und Entscheidungen, bevor Inhalt in den Markt geht.",
      },
      {
        label: "Health",
        title: "Künftiger Health/Water-Bereich",
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
    },
    proof: {
      eyebrow: "Proof Artifact",
      title: "Calije Park Residence als Belegbeispiel.",
      text:
        "Calije Park Residence zeigt, wie ein realer Standort als digitaler Gateway präsentiert werden kann: öffentliche Seite für ein Marktsignal, geschlossener Brief für ernstere Interessenten, visuelle Ebene, Lokalisierung und rechtlich vorsichtige Kommunikation. Private Materialien und Verhandlungsdetails bleiben außerhalb der Öffentlichkeit.",
    },
    method: {
      eyebrow: "DaniniHub Methode",
      title: "Frag die KI — die KI fragt dich.",
      text:
        "Die DaniniHub Methode nutzt KI nicht als Maschine für generische Texte. KI wird als Partner für Fragen eingesetzt: um Fakten von Annahmen zu trennen, Lücken in der Argumentation zu erkennen, Grenzen zu setzen und den nächsten Schritt in ein konkretes Artifact zu übersetzen.",
      process: ["Idee", "Fragen", "Belege", "Struktur", "Artifact", "Markttest"],
    },
    content: {
      eyebrow: "Content & SEO Engine",
      title: "Inhalt, der Autorität vor dem Verkauf aufbaut.",
      text:
        "Der Blog ist kein Zusatz zur Website. Er ist die SEO- und Bildungsebene der Plattform: Er erklärt Probleme, verbindet Produkte, stärkt interne Verlinkung, unterstützt Affiliate-Empfehlungen und führt Leser in den nächsten logischen Schritt.",
      cards: [
        { title: "Digitales Marketing", text: "Landingpages, Verkaufsflüsse, E-Mail-Logik, Lead-Formulare und klare Angebotsstruktur." },
        { title: "Affiliate Marketing", text: "Empfehlungen mit Kontext, Disclosure-Ebene und klarer Grenze zwischen Information und Versprechen." },
        { title: "KI in der Praxis", text: "Dialog, Fragen, Entscheidungen, Belege und Artefakte statt zufälliger Textproduktion." },
        { title: "Case Studies", text: "Reale Beispiele, die Prozess, Struktur, Grenzen und öffentliche/private Ebenen zeigen." },
        { title: "Health / Water", text: "Künftiger Bereich zu Wasser, Routinen und gesundem Lebensstil ohne medizinische Behauptungen." },
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
    },
    pillarsTitle: "Three pillars of the DaniniNet platform",
    pillars: [
      {
        label: "Income",
        title: "Sales and affiliate layer",
        text:
          "Digital products, affiliate marketing, sales flows, Gumroad delivery, landing pages and campaigns with a clear next step.",
      },
      {
        label: "Intelligence",
        title: "Method for decisions and content",
        text:
          "DaniniHub method, AI dialogue, separation of facts from assumptions, questions, risks and decisions before content reaches the market.",
      },
      {
        label: "Health",
        title: "Future health/water direction",
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
    },
    proof: {
      eyebrow: "Proof artifact",
      title: "Calije Park Residence as a proof example.",
      text:
        "Calije Park Residence shows how a real location can be presented as a digital gateway: a public page for market signal, a closed brief for more serious interest, visual layer, localization and legally careful communication. Private materials and negotiation details remain outside the public view.",
    },
    method: {
      eyebrow: "DaniniHub method",
      title: "Ask AI — AI asks you.",
      text:
        "The DaniniHub method does not use AI as a machine for generic text. AI is used as a partner for questions: to separate facts from assumptions, detect gaps in the argument, set boundaries and help turn the next step into a concrete artifact.",
      process: ["Idea", "Questions", "Proof", "Structure", "Artifact", "Market test"],
    },
    content: {
      eyebrow: "Content & SEO engine",
      title: "Content that builds authority before the sale.",
      text:
        "A blog is not an add-on to the website. It is the SEO and educational layer of the platform: it explains problems, connects products, builds internal link value, supports affiliate recommendations and leads the reader into the next logical step.",
      cards: [
        { title: "Digital marketing", text: "Landing pages, sales flows, email logic, lead forms and a clear offer structure." },
        { title: "Affiliate marketing", text: "Recommendations with context, disclosure and a clear boundary between information and promises." },
        { title: "AI in practice", text: "Dialogue, questions, decisions, proof and artifacts instead of random text generation." },
        { title: "Case studies", text: "Real examples that show process, structure, limits and the public/private layer." },
        { title: "Health / Water", text: "Future direction around water, routines and healthy lifestyle without medical claims." },
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

function Arrow() {
  return <span className="hidden text-[#9c7b38] md:inline" aria-hidden="true">→</span>;
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
    <main className="min-h-screen bg-[#f4efe5] text-[#171717]">
      <section className="overflow-hidden bg-[#071326] text-[#f8f3e8]">
        <div className="mx-auto max-w-7xl px-6 py-7 md:px-8">
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

            <aside className="relative rounded-[2rem] border border-white/12 bg-white/[0.05] p-7 shadow-2xl backdrop-blur">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#1d5f9f]/20 blur-3xl" />
              <div className="relative">
                <p className="text-sm uppercase tracking-[0.24em] text-[#ead7a1]">System map</p>
                <div className="mt-8 grid gap-3">
                  {t.hero.map.map((item, index) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#071326]/45 p-4">
                      <span className="grid h-8 w-8 place-items-center rounded-full border border-[#d2b46f]/35 text-xs text-[#ead7a1]">
                        {index + 1}
                      </span>
                      <span className="font-medium text-[#f8f3e8]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </section>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#fffaf0]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
          <p className="text-sm uppercase tracking-[0.24em] text-[#1d5f9f]">{t.positioning.eyebrow}</p>
          <div className="mt-5 grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">{t.positioning.title}</h2>
            <p className="text-lg leading-9 text-[#635d52]">{t.positioning.text}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f4efe5]">
        <div className="mx-auto max-w-7xl px-6 py-18 md:px-8 md:py-20">
          <h2 className="text-4xl font-semibold tracking-tight">{t.pillarsTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {t.pillars.map((pillar) => (
              <article key={pillar.label} className="rounded-[2rem] border border-black/10 bg-[#fffaf0] p-7 shadow-[0_16px_45px_rgba(7,19,38,0.06)]">
                <p className="text-sm uppercase tracking-[0.22em] text-[#1d5f9f]">{pillar.label}</p>
                <h3 className="mt-4 text-2xl font-semibold">{pillar.title}</h3>
                <p className="mt-4 leading-8 text-[#635d52]">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071326] text-[#f8f3e8]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-18 md:px-8 md:py-20 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-white/12 bg-white/[0.05] p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-[#ead7a1]">{t.product.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">{t.product.title}</h2>
            <p className="mt-5 leading-8 text-[#d8e2ee]">{t.product.text}</p>
            <Link
              href={localizedPath(lang, t.routes.products)}
              className="mt-8 inline-flex rounded-full bg-[#f4efe5] px-6 py-3 text-sm font-semibold text-[#071326]"
            >
              {t.product.cta}
            </Link>
          </article>

          <article className="rounded-[2rem] border border-white/12 bg-[#0b1b32] p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-[#ead7a1]">{t.proof.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">{t.proof.title}</h2>
            <p className="mt-5 leading-8 text-[#d8e2ee]">{t.proof.text}</p>
          </article>
        </div>
      </section>

      <section className="bg-[#fffaf0]">
        <div className="mx-auto max-w-7xl px-6 py-18 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[#1d5f9f]">{t.method.eyebrow}</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{t.method.title}</h2>
              <p className="mt-6 text-lg leading-9 text-[#635d52]">{t.method.text}</p>
            </div>
            <div className="rounded-[2rem] border border-black/10 bg-[#f4efe5] p-6">
              <div className="grid gap-3 md:grid-cols-[repeat(11,minmax(0,auto))] md:items-center">
                {t.method.process.map((step, index) => (
                  <div key={step} className="contents">
                    <div className="rounded-2xl border border-black/10 bg-white px-4 py-4 text-center shadow-sm">
                      <span className="block text-xs text-[#9c7b38]">0{index + 1}</span>
                      <span className="mt-1 block text-sm font-semibold">{step}</span>
                    </div>
                    {index < t.method.process.length - 1 ? <Arrow /> : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4efe5]">
        <div className="mx-auto max-w-7xl px-6 py-18 md:px-8 md:py-20">
          <p className="text-sm uppercase tracking-[0.22em] text-[#1d5f9f]">{t.content.eyebrow}</p>
          <div className="mt-4 grid gap-7 lg:grid-cols-[0.95fr_1.05fr]">
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">{t.content.title}</h2>
            <p className="text-lg leading-9 text-[#635d52]">{t.content.text}</p>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {t.content.cards.map((card) => (
              <article key={card.title} className="rounded-3xl border border-black/10 bg-[#fffaf0] p-6">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 leading-7 text-[#635d52]">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-18 md:px-8 md:py-20 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[#1d5f9f]">{t.trust.eyebrow}</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{t.trust.title}</h2>
            <p className="mt-6 text-lg leading-9 text-[#635d52]">{t.trust.text}</p>
          </div>
          <div className="grid gap-4">
            {t.trust.items.map((item) => (
              <div key={item} className="rounded-2xl border border-black/10 bg-white p-5 text-[#39352e] shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071326] text-[#f8f3e8]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
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
      </section>
    </main>
  );
}
