import Link from "next/link";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    nav: ["Metoda", "Proizvod", "Utisci", "Support", "Legal"],
    hero: "DaniniNet — digitalni sistem za ideje koje zaslužuju tržište.",
    sub:
      "Portal za affiliate marketing, SEO, AI dijalog, digitalne proizvode i odgovoran health/water pravac. Ideja se ne prepušta šablonu: gradi se kroz pitanja, dokaz, sadržaj, ponudu i prodajni tok.",
    primary: "Pogledaj prvi proizvod",
    secondary: "Kako radi metoda",
    signal: "Pitaj AI — AI pita tebe",
    signalText:
      "AI ne glumi autoritet. AI pomaže da odvojiš činjenice od pretpostavki, vidiš rizik, formulišeš sledeći korak i zadržiš ljudsku odluku u centru procesa.",
    dpl: "Digitalna prodaja lokacije",
    dplText:
      "Prvi proof product: vodič za pretvaranje lokacije, parcele, stana, kuće ili projekta u ozbiljniji digitalni prodajni tok — javna stranica, zatvoreni brief, vizuelni argument, email tok i tržišni signal.",
    calije: "Calije Park Residence kao proof artifact",
    calijeText:
      "Realan primer kako DaniniHub OS pretvara lokaciju u javni gateway i zatvoreni poslovni brief. Privatni materijali i pregovarački detalji ostaju van javne prezentacije.",
    newsletter: "Jedno korisno pitanje nedeljno",
    newsletterText:
      "Jedan DaniniNet signal, jedno pitanje za razmišljanje i jedan resurs koji možeš primeniti — bez spam ritma i bez lažnog pritiska.",
  },
  de: {
    nav: ["Methode", "Produkt", "Gästebuch", "Support", "Legal"],
    hero: "DaniniNet — ein digitales System für Ideen mit Marktreife.",
    sub:
      "Portal für Affiliate Marketing, SEO, KI-Dialog, digitale Produkte und verantwortliche Health/Water-Themen. Eine Idee wird nicht dem Template überlassen: sie wird über Fragen, Belege, Inhalt, Angebot und Verkaufsfluss aufgebaut.",
    primary: "Erstes Produkt ansehen",
    secondary: "Methode ansehen",
    signal: "Frag die KI — die KI fragt dich",
    signalText:
      "KI ersetzt keine menschliche Entscheidung. Sie hilft, Fakten von Annahmen zu trennen, Risiken zu sehen, den nächsten Schritt zu formulieren und Verantwortung beim Menschen zu halten.",
    dpl: "Digitaler Verkauf von Standorten",
    dplText:
      "Erstes Proof Product: ein Leitfaden, wie Standort, Grundstück, Immobilie oder Projekt in einen seriöseren digitalen Verkaufsfluss übersetzt werden — öffentliche Seite, geschlossener Brief, visuelles Argument, E-Mail-Fluss und Marktsignal.",
    calije: "Calije Park Residence als Proof Artifact",
    calijeText:
      "Ein reales Beispiel dafür, wie DaniniHub OS einen Standort in einen öffentlichen Gateway und einen geschlossenen Business Brief übersetzt. Private Materialien und Verhandlungsdetails bleiben außerhalb der öffentlichen Präsentation.",
    newsletter: "Eine nützliche Frage pro Woche",
    newsletterText:
      "Ein DaniniNet Signal, eine Denkfrage und eine anwendbare Ressource — ohne Spam-Rhythmus und ohne künstlichen Druck.",
  },
  en: {
    nav: ["Method", "Product", "Guestbook", "Support", "Legal"],
    hero: "DaniniNet — a digital system for ideas that deserve a market.",
    sub:
      "A portal for affiliate marketing, SEO, AI dialogue, digital products and responsible health/water topics. An idea is not handed to a template: it is built through questions, proof, content, offer and sales flow.",
    primary: "View first product",
    secondary: "See the method",
    signal: "Ask AI — AI asks you",
    signalText:
      "AI does not replace human judgment. It helps separate facts from assumptions, reveal risk, formulate the next step and keep responsibility with the human decision-maker.",
    dpl: "Digital Location Sales",
    dplText:
      "First proof product: a guide for turning a location, land plot, property or project into a stronger digital sales flow — public page, closed brief, visual argument, email flow and market signal.",
    calije: "Calije Park Residence as proof artifact",
    calijeText:
      "A real example of DaniniHub OS turning a location into a public gateway and a closed business brief. Private materials and negotiation details stay outside the public presentation.",
    newsletter: "One useful question per week",
    newsletterText:
      "One DaniniNet signal, one thinking question and one practical resource — no spam rhythm and no artificial pressure.",
  },
} as const;

const hrefs = [
  "daninihub-metod",
  "proizvodi/digitalna-prodaja-lokacije",
  "knjiga-utisaka",
  "support",
  "legal",
];

const pillars = [
  ["Income", "Affiliate marketing, SEO, digitalni proizvodi, alati i prodajni tokovi bez manipulacije."],
  ["Intelligence", "DaniniHub OS, AI dijalog, pitanja, struktura, rizik i odluka koju donosi čovek."],
  ["Health", "Zdrav stil života, voda, rutine i odgovorni vodiči bez medicinskih obećanja."],
];

const categories = [
  ["Digitalni marketing", "Landing, SEO, email tok, lead forma, javni i privatni sloj ponude."],
  ["Affiliate marketing", "Preporuke sa kontekstom: kome služi, kada ima smisla i gde je disclosure."],
  ["AI u praksi", "Dijalog umesto prompt kulture: činjenice, pretpostavke, dokazi i rizici."],
  ["Voda i zdravlje", "Health/water sadržaj sa pažljivim granicama i odgovornim affiliate modelom."],
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang: Locale = locale === "de" || locale === "en" ? locale : "sr";
  const t = copy[lang];

  return (
    <main className="min-h-screen bg-[#f4efe5] text-[#15130f]">
      <section className="bg-[#07142b] text-[#f7fbff]">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <header className="flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-6">
            <Link href={`/${lang}`} className="flex items-center gap-3" aria-label="DaniniNet home">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[#7db7e8]/40 bg-white/5 text-sm font-bold text-[#d9ecff] shadow-[0_0_24px_rgba(34,107,191,0.18)]">
                DN
              </span>
              <span>
                <span className="block text-2xl font-semibold tracking-tight">DaniniNet</span>
                <span className="block text-[11px] uppercase tracking-[0.26em] text-[#b9d7f0]">Income · Intelligence · Health</span>
              </span>
            </Link>

            <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300" aria-label="Main navigation">
              {t.nav.map((label, index) => (
                <Link key={label} href={`/${lang}/${hrefs[index]}`}>
                  {label}
                </Link>
              ))}
              <span className="mx-1 h-4 w-px bg-white/15" />
              <Link href="/sr" hrefLang="sr">SR</Link>
              <Link href="/de" hrefLang="de">DE</Link>
              <Link href="/en" hrefLang="en">EN</Link>
            </nav>
          </header>

          <section className="grid gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="mb-6 inline-flex rounded-full border border-[#7db7e8]/30 bg-white/[0.06] px-4 py-2 text-sm text-[#d9ecff]">
                DaniniHub OS · proof-driven portal
              </p>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
                {t.hero}
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">{t.sub}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href={`/${lang}/proizvodi/digitalna-prodaja-lokacije`} className="rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b] shadow-[0_12px_34px_rgba(34,107,191,0.20)]">
                  {t.primary}
                </Link>
                <Link href={`/${lang}/daninihub-metod`} className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white">
                  {t.secondary}
                </Link>
              </div>
            </div>

            <aside className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl backdrop-blur">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#226bbf]/20 blur-3xl" />
              <p className="text-sm uppercase tracking-[0.24em] text-[#b9d7f0]">{t.signal}</p>
              <h2 className="mt-6 text-3xl font-semibold leading-tight">AI kao partner za pitanja, ne kao zamena za odluku.</h2>
              <p className="mt-6 leading-8 text-slate-300">{t.signalText}</p>
              <div className="mt-8 grid grid-cols-3 gap-3 text-center text-xs text-slate-300">
                <span className="rounded-full border border-white/10 bg-white/5 py-2">Facts</span>
                <span className="rounded-full border border-white/10 bg-white/5 py-2">Risk</span>
                <span className="rounded-full border border-white/10 bg-white/5 py-2">Next</span>
              </div>
            </aside>
          </section>
        </div>
      </section>

      <section className="bg-[#f4efe5] text-[#15130f]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map(([title, text]) => (
              <article key={title} className="rounded-[2rem] border border-black/10 bg-[#fffaf1] p-8">
                <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">{title}</p>
                <h2 className="mt-4 text-2xl font-semibold">{title}</h2>
                <p className="mt-4 leading-7 text-[#706a5d]">{text}</p>
              </article>
            ))}
          </div>

          <section className="grid gap-6 py-16 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-black/10 bg-white p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">Proof product</p>
              <h2 className="mt-4 text-4xl font-semibold">{t.dpl}</h2>
              <p className="mt-5 leading-8 text-[#706a5d]">{t.dplText}</p>
              <Link href={`/${lang}/proizvodi/digitalna-prodaja-lokacije`} className="mt-8 inline-flex rounded-full bg-[#07142b] px-6 py-3 text-sm font-medium text-white">
                {t.primary}
              </Link>
            </article>

            <article className="rounded-[2rem] border border-black/10 bg-white p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">Proof artifact</p>
              <h2 className="mt-4 text-4xl font-semibold">{t.calije}</h2>
              <p className="mt-5 leading-8 text-[#706a5d]">{t.calijeText}</p>
            </article>
          </section>

          <section className="py-6">
            <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">Portal structure</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight">Sadržaj koji gradi poverenje, SEO strukturu i prodajni tok.</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {categories.map(([title, text]) => (
                <article key={title} className="rounded-3xl border border-black/10 bg-[#fffaf1] p-6">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-[#706a5d]">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 py-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-[#07142b] p-8 text-white">
              <p className="text-sm uppercase tracking-[0.22em] text-[#b9d7f0]">Newsletter</p>
              <h2 className="mt-4 text-3xl font-semibold">{t.newsletter}</h2>
              <p className="mt-5 leading-8 text-slate-300">{t.newsletterText}</p>
            </div>
            <div className="rounded-[2rem] border border-black/10 bg-white p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">Trust layer</p>
              <h2 className="mt-4 text-3xl font-semibold">Jasno šta je edukacija, šta je preporuka, a šta nije savet.</h2>
              <p className="mt-5 leading-8 text-[#706a5d]">Affiliate odnos, AI transparentnost, GDPR/kolačići i health disclaimer idu u legal sloj, a prodajni CTA ostaje čist i razumljiv.</p>
            </div>
          </section>

          <footer className="border-t border-black/10 py-8 text-sm leading-7 text-[#706a5d]">
            <p>DaniniNet · DaniniHub OS · Affiliate disclosure · AI transparency · GDPR/Cookies · Health disclaimer</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
