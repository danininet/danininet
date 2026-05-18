import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const caseStudySlug = "kako-se-lokacija-pretvara-u-investitorski-argument";
const affiliateSlug = "sta-je-affiliate-marketing-bez-laznih-obecanja";

const copy = {
  sr: {
    eyebrow: "DaniniNet Blog",
    title: "Sadržaj koji gradi poverenje pre prodaje.",
    text: "Blog je editorial i SEO centar DaniniNet-a: objašnjava probleme, povezuje proizvode, uvodi čitaoca u funnel i čuva poverenje pre CTA-a.",
    featuredLabel: "Novo · Evergreen case study",
    featuredTitle: "Kako se lokacija pretvara u investitorski argument: Calije Park Residence case study",
    featuredText: "Case study pokazuje kako se lokacija može predstaviti kroz javni gateway, video uvod, višejezični sadržaj i zatvoreni Investor Brief — kao investitorski argument, a ne običan oglas.",
    featuredCta: "Čitaj članak",
    funnel: ["Problem", "Objašnjenje", "Dokaz", "Proizvod", "Trust"],
    cta: "Pogledaj proizvod",
    secondary: "Kako radi metoda",
    funnelTitle: "Editorial funnel vodi čitaoca od problema do sledećeg logičnog koraka.",
    categoriesTitle: "SEO kategorije",
    categoriesText: "Kategorije nisu prazne kartice: svaka vodi ka postojećoj stranici, članku, proizvodu ili trust sloju.",
    categories: [
      ["Digitalni marketing", "Landing stranice, SEO, email tokovi, lead forme i struktura ponude.", "dpl"],
      ["Affiliate marketing", "Preporuke, disclosure, izbor proizvoda i komunikacija bez lažnih obećanja.", "affiliate"],
      ["AI u praksi", "Pitaj AI — AI pita tebe, pitanja pre sadržaja, dokaz pre tvrdnje i artifact pre kampanje.", "method"],
      ["Digitalni proizvodi", "PDF vodiči, bonus paketi, isporuka, Gumroad tok i post-purchase iskustvo.", "products"],
      ["Case studies", "Realni projekti, javni gateway, privatni brief, vizuelni dokaz i granice tvrdnji.", "case"],
      ["Legal & Trust", "GDPR, cookies, affiliate disclosure, AI transparentnost i disclaimer biblioteka.", "legal"],
      ["Zdrav stil života", "Rutine, navike, voda i odgovoran sadržaj bez medicinskih tvrdnji.", "health"],
      ["Voda i zdravlje", "Edukativni sadržaj o vodi, hidrataciji i navikama uz jasan health disclaimer.", "health"],
    ],
    plannedTitle: "Prvih 5 SEO članaka",
    plannedText: "Prvi članak je dostupan. Ostali su roadmap i biće povezani čim budu objavljeni.",
    plannedArticles: [
      ["Šta je affiliate marketing i kako početi bez lažnih obećanja", "Affiliate marketing", "affiliate"],
      ["Pitaj AI — AI pita tebe: kako koristiti AI kroz dijalog", "AI u praksi", "method"],
      ["Šta je digitalni proizvod i zašto mu treba poverenje", "Digitalni proizvodi", "products"],
      ["Digitalna prodaja lokacije: zašto običan oglas nije dovoljan", "Digitalni marketing", "dpl"],
      ["Voda i zdrav stil života: odgovoran sadržaj bez medicinskih tvrdnji", "Zdrav stil života", "health"],
    ],
  },
  de: {
    eyebrow: "DaniniNet Blog",
    title: "Inhalte, die Vertrauen vor dem Verkauf aufbauen.",
    text: "Der Blog ist das Editorial- und SEO-Zentrum von DaniniNet: Er erklärt Probleme, verbindet Produkte, führt Leser in den Funnel und schützt Vertrauen vor dem CTA.",
    featuredLabel: "Neu · Evergreen Case Study",
    featuredTitle: "Wie ein Standort zum Investorenargument wird: Calije Park Residence Case Study",
    featuredText: "Die Case Study zeigt, wie ein Standort über Gateway, Video, mehrsprachige Inhalte und geschlossenen Investor Brief präsentiert werden kann.",
    featuredCta: "Artikel lesen",
    funnel: ["Problem", "Erklärung", "Beleg", "Produkt", "Trust"],
    cta: "Produkt ansehen",
    secondary: "Methode ansehen",
    funnelTitle: "Der Editorial Funnel führt vom Problem zum nächsten logischen Schritt.",
    categoriesTitle: "SEO-Kategorien",
    categoriesText: "Diese Karten sind keine Platzhalter: jede führt zu einer bestehenden Seite, einem Artikel, Produkt oder Trust-Bereich.",
    categories: [
      ["Digitales Marketing", "Landingpages, SEO, E-Mail-Flows, Lead-Formulare und Angebotsstruktur.", "dpl"],
      ["Affiliate Marketing", "Empfehlungen, Disclosure, Produktauswahl und Kommunikation ohne falsche Versprechen.", "affiliate"],
      ["KI in der Praxis", "Frag die KI — die KI fragt dich, Fragen vor Inhalt, Beleg vor Aussage und Artifact vor Kampagne.", "method"],
      ["Digitale Produkte", "PDF-Leitfäden, Bonus Packs, Lieferung, Gumroad-Flow und Post-Purchase-Erfahrung.", "products"],
      ["Case Studies", "Reale Projekte, öffentliche Gateways, private Briefs, visuelle Belege und Claim-Grenzen.", "case"],
      ["Legal & Trust", "DSGVO, Cookies, Affiliate Disclosure, KI-Transparenz und Disclaimer-Bibliothek.", "legal"],
      ["Gesund leben", "Routinen, Gewohnheiten, Wasser und verantwortlicher Content ohne medizinische Behauptungen.", "health"],
      ["Wasser & Gesundheit", "Edukative Inhalte zu Wasser, Hydration und Alltagsroutinen mit Health Disclaimer.", "health"],
    ],
    plannedTitle: "Die ersten 5 SEO-Artikel",
    plannedText: "Der erste Artikel ist verfügbar. Weitere Artikel werden verlinkt, sobald sie veröffentlicht sind.",
    plannedArticles: [
      ["Was ist Affiliate Marketing und wie beginnt man ohne falsche Versprechen", "Affiliate Marketing", "affiliate"],
      ["Frag die KI — die KI fragt dich: KI als Dialog nutzen", "KI in der Praxis", "method"],
      ["Was ist ein digitales Produkt und warum braucht es Vertrauen", "Digitale Produkte", "products"],
      ["Digitaler Standortverkauf: warum eine normale Anzeige nicht reicht", "Digitales Marketing", "dpl"],
      ["Wasser und gesund leben: verantwortliche Inhalte ohne medizinische Claims", "Gesund leben", "health"],
    ],
  },
  en: {
    eyebrow: "DaniniNet Blog",
    title: "Content that builds trust before the sale.",
    text: "The blog is DaniniNet's editorial and SEO center: it explains problems, connects products, guides readers into the funnel and protects trust before the CTA.",
    featuredLabel: "New · Evergreen case study",
    featuredTitle: "How a location becomes an investor argument: Calije Park Residence case study",
    featuredText: "The case study shows how a location can be presented through a public gateway, video, multilingual content and a closed Investor Brief.",
    featuredCta: "Read article",
    funnel: ["Problem", "Explanation", "Proof", "Product", "Trust"],
    cta: "View product",
    secondary: "See method",
    funnelTitle: "The editorial funnel leads from problem to the next logical step.",
    categoriesTitle: "SEO categories",
    categoriesText: "These cards are not placeholders: each one links to an existing page, article, product or trust layer.",
    categories: [
      ["Digital marketing", "Landing pages, SEO, email flows, lead forms and offer structure.", "dpl"],
      ["Affiliate marketing", "Recommendations, disclosure, product selection and responsible communication without false promises.", "affiliate"],
      ["AI in practice", "Ask AI — AI asks you, questions before content, proof before claim and artifact before campaign.", "method"],
      ["Digital products", "PDF guides, bonus packs, delivery, Gumroad flow and post-purchase experience.", "products"],
      ["Case studies", "Real projects, public gateways, private briefs, visual proof and claim boundaries.", "case"],
      ["Legal & Trust", "GDPR, cookies, affiliate disclosure, AI transparency and disclaimer library.", "legal"],
      ["Healthy lifestyle", "Routines, habits, water and responsible content without medical claims.", "health"],
      ["Water & health", "Educational content on water, hydration and daily routines with a clear health disclaimer.", "health"],
    ],
    plannedTitle: "First 5 SEO articles",
    plannedText: "The first article is available. The others are roadmap items and will be linked as they are published.",
    plannedArticles: [
      ["What affiliate marketing is and how to start without false promises", "Affiliate marketing", "affiliate"],
      ["Ask AI — AI asks you: using AI through dialogue", "AI in practice", "method"],
      ["What a digital product is and why it needs trust", "Digital products", "products"],
      ["Digital location sales: why a standard listing is not enough", "Digital marketing", "dpl"],
      ["Water and healthy lifestyle: responsible content without medical claims", "Healthy lifestyle", "health"],
    ],
  },
} as const;

function linkFor(lang: Locale, key: string) {
  if (key === "affiliate") return `/${lang}/blog/${affiliateSlug}`;
  if (key === "case") return `/${lang}/blog/${caseStudySlug}`;
  if (key === "method") return localizedPath(lang, "method");
  if (key === "products") return localizedPath(lang, "products");
  if (key === "dpl") return localizedPath(lang, "dpl");
  if (key === "legal") return localizedPath(lang, "legal");
  if (key === "health") return localizedPath(lang, "health");
  return localizedPath(lang, "blog");
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang} currentPath={localizedPath(lang, "blog")}>
      <SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} />
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <article className="rounded-[2.5rem] bg-[#07142b] p-8 text-white shadow-[0_24px_70px_rgba(7,20,43,0.18)]">
          <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">{t.featuredLabel}</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">{t.featuredTitle}</h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-300">{t.featuredText}</p>
          <Link href={`/${lang}/blog/${caseStudySlug}`} className="mt-8 inline-flex rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">
            {t.featuredCta}
          </Link>
        </article>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2.5rem] bg-[#07142b] p-6 text-white shadow-[0_24px_70px_rgba(7,20,43,0.18)]">
          <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">Editorial funnel</p>
          <h2 className="mt-4 text-4xl font-semibold">{t.funnelTitle}</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-5">
            {t.funnel.map((item, index) => (
              <span key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-center text-sm text-slate-300">
                <strong className="block text-[#d7b46a]">0{index + 1}</strong>{item}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">{t.categoriesTitle}</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">{t.title}</h2>
            <p className="mt-5 leading-8 text-[#706a5d]">{t.categoriesText}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {t.categories.map(([title, text, key], index) => (
              <Link key={title} href={linkFor(lang, key)} className="group rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <p className="text-sm font-semibold text-[#226bbf]">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold group-hover:text-[#226bbf]">{title}</h3>
                <p className="mt-3 leading-7 text-[#706a5d]">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">{t.plannedTitle}</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight">{t.plannedTitle}</h2>
              <p className="mt-5 leading-8 text-[#706a5d]">{t.plannedText}</p>
            </div>
            <div className="grid gap-3">
              {t.plannedArticles.map(([title, category, key], index) => (
                <Link key={title} href={linkFor(lang, key)} className="grid gap-3 rounded-2xl bg-[#f5efe3] p-5 transition hover:bg-[#efe4d1] md:grid-cols-[auto_1fr_auto] md:items-center">
                  <span className="text-sm font-semibold text-[#226bbf]">0{index + 1}</span>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-[#706a5d]">{category}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#07142b] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-14 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-3xl text-4xl font-semibold">{t.funnelTitle}</h2>
          <div className="flex flex-wrap gap-3">
            <Link href={localizedPath(lang, "dpl")} className="rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">{t.cta}</Link>
            <Link href={localizedPath(lang, "method")} className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white">{t.secondary}</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
