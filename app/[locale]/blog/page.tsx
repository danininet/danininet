import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const articleSlug = "kako-se-lokacija-pretvara-u-investitorski-argument";

const copy = {
  sr: {
    eyebrow: "DaniniNet Blog",
    title: "Sadržaj koji gradi poverenje pre prodaje.",
    text: "Blog je editorial i SEO centar DaniniNet-a: ne služi za gomilanje tekstova, nego za objašnjavanje problema, povezivanje proizvoda, uvođenje čitaoca u funnel i čuvanje poverenja pre CTA-a.",
    featuredLabel: "Novo · Evergreen case study",
    featuredTitle: "Kako se lokacija pretvara u investitorski argument: Calije Park Residence case study",
    featuredText: "Calije Park Residence pokazuje kako se građevinska lokacija u Nišu može predstaviti kroz javni gateway, video uvod, višejezični sadržaj i zatvoreni Investor Brief — kao investitorski argument, a ne običan oglas.",
    featuredCta: "Čitaj članak",
    funnel: ["Problem", "Objašnjenje", "Dokaz", "Proizvod", "Trust"],
    items: [
      ["Zašto običan oglas nije dovoljan", "Ulazni članak za vlasnike lokacija: objašnjava razliku između oglasa i digitalnog gateway-a."],
      ["Javna stranica vs zatvoreni brief", "Editorial most ka proizvodu: šta sme javno, šta ide samo ozbiljnijim interesentima."],
      ["Šta investitor želi da vidi", "Case-study pristup bez obećanja: kontekst, dokaz, rizik, granice i sledeći korak."],
      ["Affiliate preporuka bez pritiska", "DaniniNet standard za preporuke: kontekst, disclosure, realna upotreba i bez garancija."],
      ["AI dijalog u praksi", "Pitaj AI — AI pita tebe kao metoda za pitanja, dokaze, rizike i konkretan artifact."],
      ["Health / Water pravac", "Budući editorial sloj o vodi, rutinama i zdravom stilu života, odvojen od medicinskih obećanja."],
    ],
    cta: "Pogledaj proizvod",
    secondary: "Kako radi metoda",
    funnelTitle: "Editorial funnel vodi čitaoca od problema do sledećeg logičnog koraka.",
    categoriesTitle: "SEO kategorije",
    categoriesText: "Kategorije drže blog čistim: svaka tema ima svoju ulogu, interni link i jasnu vezu sa proizvodom, metodom ili trust slojem.",
    categories: [
      ["Digitalni marketing", "Landing stranice, SEO, email tokovi, lead forme i struktura ponude."],
      ["Affiliate marketing", "Preporuke, disclosure, izbor proizvoda i odgovorna komunikacija bez lažnih obećanja."],
      ["AI u praksi", "Pitaj AI — AI pita tebe, pitanja pre sadržaja, dokaz pre tvrdnje i artifact pre kampanje."],
      ["Digitalni proizvodi", "PDF vodiči, bonus paketi, isporuka, Gumroad tok i post-purchase iskustvo."],
      ["Case studies", "Realni projekti, javni gateway, privatni brief, vizuelni dokaz i granice tvrdnji."],
      ["Legal & Trust", "GDPR, cookies, affiliate disclosure, AI transparentnost i disclaimer biblioteka."],
      ["Zdrav stil života", "Rutine, navike, voda i odgovoran sadržaj bez medicinskih tvrdnji."],
      ["Voda i zdravlje", "Edukativni sadržaj o vodi, hidrataciji i svakodnevnim navikama uz jasan health disclaimer."],
    ],
    plannedTitle: "Prvih 5 SEO članaka",
    plannedText: "Ovi članci grade osnovu za indeksiranje, interno linkovanje i budući newsletter sadržaj.",
    plannedArticles: [
      ["Šta je affiliate marketing i kako početi bez lažnih obećanja", "Affiliate marketing"],
      ["Pitaj AI — AI pita tebe: kako koristiti AI kroz dijalog", "AI u praksi"],
      ["Šta je digitalni proizvod i zašto mu treba poverenje", "Digitalni proizvodi"],
      ["Digitalna prodaja lokacije: zašto običan oglas nije dovoljan", "Digitalni marketing"],
      ["Voda i zdrav stil života: kako pisati odgovoran sadržaj bez medicinskih tvrdnji", "Zdrav stil života"],
    ],
  },
  de: {
    eyebrow: "DaniniNet Blog",
    title: "Inhalte, die Vertrauen vor dem Verkauf aufbauen.",
    text: "Der Blog ist das Editorial- und SEO-Zentrum von DaniniNet: Er erklärt Probleme, verbindet Produkte, führt Leser in den Funnel und schützt Vertrauen vor dem CTA.",
    featuredLabel: "Neu · Evergreen Case Study",
    featuredTitle: "Wie ein Standort zum Investorenargument wird: Calije Park Residence Case Study",
    featuredText: "Calije Park Residence zeigt, wie ein Standort in Niš über einen öffentlichen Gateway, Video, mehrsprachige Inhalte und einen geschlossenen Investor Brief präsentiert werden kann.",
    featuredCta: "Artikel lesen",
    funnel: ["Problem", "Erklärung", "Beleg", "Produkt", "Trust"],
    items: [
      ["Warum eine normale Anzeige nicht reicht", "Einstiegsartikel für Eigentümer: Unterschied zwischen Anzeige und digitalem Gateway."],
      ["Öffentliche Seite vs. geschlossener Brief", "Was öffentlich sein darf und was nur ernstere Interessenten sehen."],
      ["Was Investoren sehen möchten", "Case-Study-Ansatz ohne Versprechen: Kontext, Beleg, Risiko, Grenzen und nächster Schritt."],
      ["Affiliate Empfehlung ohne Druck", "DaniniNet Standard: Kontext, Disclosure, reale Nutzung und keine Garantien."],
      ["KI-Dialog in der Praxis", "Frag die KI — die KI fragt dich als Methode für Fragen, Belege, Risiken und Artifact."],
      ["Health / Water Bereich", "Künftiger Editorial-Bereich zu Wasser, Routinen und gesundem Lebensstil ohne medizinische Versprechen."],
    ],
    cta: "Produkt ansehen",
    secondary: "Methode ansehen",
    funnelTitle: "Der Editorial Funnel führt vom Problem zum nächsten logischen Schritt.",
    categoriesTitle: "SEO-Kategorien",
    categoriesText: "Kategorien halten den Blog sauber: jedes Thema hat eine Rolle, interne Verlinkung und Verbindung zu Produkt, Methode oder Trust-Ebene.",
    categories: [
      ["Digitales Marketing", "Landingpages, SEO, E-Mail-Flows, Lead-Formulare und Angebotsstruktur."],
      ["Affiliate Marketing", "Empfehlungen, Disclosure, Produktauswahl und verantwortliche Kommunikation ohne falsche Versprechen."],
      ["KI in der Praxis", "Frag die KI — die KI fragt dich, Fragen vor Inhalt, Beleg vor Aussage und Artifact vor Kampagne."],
      ["Digitale Produkte", "PDF-Leitfäden, Bonus Packs, Lieferung, Gumroad-Flow und Post-Purchase-Erfahrung."],
      ["Case Studies", "Reale Projekte, öffentliche Gateways, private Briefs, visuelle Belege und Claim-Grenzen."],
      ["Legal & Trust", "DSGVO, Cookies, Affiliate Disclosure, KI-Transparenz und Disclaimer-Bibliothek."],
      ["Gesund leben", "Routinen, Gewohnheiten, Wasser und verantwortlicher Content ohne medizinische Behauptungen."],
      ["Wasser & Gesundheit", "Edukative Inhalte zu Wasser, Hydration und Alltagsroutinen mit Health Disclaimer."],
    ],
    plannedTitle: "Die ersten 5 SEO-Artikel",
    plannedText: "Diese Artikel bilden die Grundlage für Indexierung, interne Verlinkung und künftige Newsletter-Inhalte.",
    plannedArticles: [
      ["Was ist Affiliate Marketing und wie beginnt man ohne falsche Versprechen", "Affiliate Marketing"],
      ["Frag die KI — die KI fragt dich: KI als Dialog nutzen", "KI in der Praxis"],
      ["Was ist ein digitales Produkt und warum braucht es Vertrauen", "Digitale Produkte"],
      ["Digitaler Standortverkauf: warum eine normale Anzeige nicht reicht", "Digitales Marketing"],
      ["Wasser und gesund leben: verantwortliche Inhalte ohne medizinische Claims", "Gesund leben"],
    ],
  },
  en: {
    eyebrow: "DaniniNet Blog",
    title: "Content that builds trust before the sale.",
    text: "The blog is DaniniNet's editorial and SEO center: it explains problems, connects products, guides readers into the funnel and protects trust before the CTA.",
    featuredLabel: "New · Evergreen case study",
    featuredTitle: "How a location becomes an investor argument: Calije Park Residence case study",
    featuredText: "Calije Park Residence shows how a location in Niš can be presented through a public gateway, video, multilingual content and a closed Investor Brief.",
    featuredCta: "Read article",
    funnel: ["Problem", "Explanation", "Proof", "Product", "Trust"],
    items: [
      ["Why a standard listing is not enough", "Entry article for owners: the difference between a listing and a digital gateway."],
      ["Public page vs. closed brief", "What can be public and what belongs only to serious prospects."],
      ["What investors want to see", "Case-study approach without promises: context, proof, risk, boundaries and next step."],
      ["Affiliate recommendation without pressure", "DaniniNet standard: context, disclosure, real use and no guarantees."],
      ["AI dialogue in practice", "Ask AI — AI asks you as a method for questions, proof, risks and artifact."],
      ["Health / Water direction", "Future editorial layer on water, routines and healthy lifestyle without medical promises."],
    ],
    cta: "View product",
    secondary: "See method",
    funnelTitle: "The editorial funnel leads from problem to the next logical step.",
    categoriesTitle: "SEO categories",
    categoriesText: "Categories keep the blog clean: each topic has a role, internal link logic and a connection to product, method or trust layer.",
    categories: [
      ["Digital marketing", "Landing pages, SEO, email flows, lead forms and offer structure."],
      ["Affiliate marketing", "Recommendations, disclosure, product selection and responsible communication without false promises."],
      ["AI in practice", "Ask AI — AI asks you, questions before content, proof before claim and artifact before campaign."],
      ["Digital products", "PDF guides, bonus packs, delivery, Gumroad flow and post-purchase experience."],
      ["Case studies", "Real projects, public gateways, private briefs, visual proof and claim boundaries."],
      ["Legal & Trust", "GDPR, cookies, affiliate disclosure, AI transparency and disclaimer library."],
      ["Healthy lifestyle", "Routines, habits, water and responsible content without medical claims."],
      ["Water & health", "Educational content on water, hydration and daily routines with a clear health disclaimer."],
    ],
    plannedTitle: "First 5 SEO articles",
    plannedText: "These articles create the base for indexing, internal linking and future newsletter content.",
    plannedArticles: [
      ["What affiliate marketing is and how to start without false promises", "Affiliate marketing"],
      ["Ask AI — AI asks you: using AI through dialogue", "AI in practice"],
      ["What a digital product is and why it needs trust", "Digital products"],
      ["Digital location sales: why a standard listing is not enough", "Digital marketing"],
      ["Water and healthy lifestyle: responsible content without medical claims", "Healthy lifestyle"],
    ],
  },
} as const;

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
          <Link href={`/${lang}/blog/${articleSlug}`} className="mt-8 inline-flex rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">
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
            {t.categories.map(([title, text], index) => (
              <article key={title} className="rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-[#226bbf]">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-[#706a5d]">{text}</p>
              </article>
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
              {t.plannedArticles.map(([title, category], index) => (
                <article key={title} className="grid gap-3 rounded-2xl bg-[#f5efe3] p-5 md:grid-cols-[auto_1fr_auto] md:items-center">
                  <span className="text-sm font-semibold text-[#226bbf]">0{index + 1}</span>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <span className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-[#706a5d]">{category}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2 lg:grid-cols-3">
        {t.items.map(([title, text], index) => (
          <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold text-[#226bbf]">0{index + 1}</p>
            <h2 className="mt-3 text-2xl font-semibold">{title}</h2>
            <p className="mt-4 leading-8 text-[#706a5d]">{text}</p>
          </article>
        ))}
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
