import Image from "next/image";
import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

type ProductCard = {
  label: string;
  title: string;
  text: string;
  status: string;
  cta: string;
  href?: string;
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
  inventoryTitle: string;
  inventoryText: string;
  products: ProductCard[];
  methodTitle: string;
  methodSteps: [string, string][];
  disclaimerTitle: string;
  disclaimerText: string;
}> = {
  sr: {
    eyebrow: "DaniniNet proizvodi",
    title: "Proizvodi kao DaniniHub OS artifacti, ne katalog bez pravca.",
    text: "DaniniNet proizvodi nastaju iz metode: problem, ideja, potpitanja, razjašnjenje, agent workflow, artifact i isporuka. Svaki proizvod mora imati jasnu primenu, dokazni sloj, granice i legal/trust napomene.",
    artifactNote: "Radni princip: Pitaj AI — AI pita tebe · artifact pre kampanje · dokaz pre tvrdnje · granica pre CTA-a.",
    featured: "Aktuelni prodajni artifact",
    dplTitle: "Digitalna prodaja lokacije",
    dplText: "DaniniNet komercijalni PDF proizvod nastao iz DaniniHub sistema/metode i Calije Park Residence artifacta. Paket nije samo PDF: DPL uključuje vodič i kompletan Bonus Pack za primenu, proveru, lead tok, delivery i legal/trust granice.",
    dplCta: "Otvori DPL prodajnu stranicu",
    price: "29 € launch · 49 € regular",
    systemTitle: "Artifact tok",
    system: ["Problem", "Ideja", "Podpitanja", "Razjašnjenje", "Agent workflow", "Artifact", "Delivery", "Signal"],
    includeTitle: "DPL paket uključuje",
    inventoryTitle: "Inventar proizvoda i affiliate pravaca",
    inventoryText: "Ovo su proizvodi i pravci pronađeni u postojećim materijalima: DPL paket, NutriLans eBook, Wellan/UMH voda i health affiliate linija. Bonus Pack nije poseban proizvod za odvajanje od DPL-a, nego deo glavnog paketa.",
    products: [
      {
        label: "DaniniNet · Glavni digitalni proizvod",
        title: "Digitalna prodaja lokacije — PDF + Bonus Pack",
        text: "Glavni proizvod za vlasnike lokacija, agente, male investitore i digitalne kreatore koji žele da običan oglas pretvore u javni gateway i ozbiljniji poslovni tok. Bonus Pack je uključen u paket.",
        status: "Aktivni prodajni fokus · final working product source",
        cta: "Prodajna stranica",
        href: "dpl",
        points: ["DaniniHub metoda", "Calije case study", "Bonus Pack uključen", "Gumroad/checkout delivery"],
      },
      {
        label: "NutriLans · Health / Water",
        title: "Leitfaden für reines Wasser und gesundes Leben",
        text: "Nemački eBook o vodi, hidrataciji, kvalitetu vode i zdravijim navikama. Služi kao health/water proizvodni stub i kao osnova za odgovoran affiliate sadržaj.",
        status: "Pronađen Drive proizvod · treba prodajna stranica",
        cta: "U pripremi",
        points: ["voda i hidratacija", "water filter preporuke", "health disclaimer", "DACH sadržaj"],
      },
      {
        label: "Affiliate / partner product",
        title: "WELLAN®2000",
        text: "Partner/affiliate pravac za obradu vode, kamenac, cevi, koroziju i kvalitet vode. Materijal postoji kroz prezentaciju i kontakt distributera.",
        status: "Pronađen affiliate materijal · potrebna pravila tvrdnji",
        cta: "U pripremi",
        points: ["water treatment", "kamenac", "partner kontakt", "bez medicinskih obećanja"],
      },
      {
        label: "Affiliate / research cluster",
        title: "UMH, Brita, Aarke, Berkey, Santevia, Aqualogis, Maunawai",
        text: "Grupa proizvoda iz NutriLans materijala za buduće affiliate kartice, poređenja i članke. Linkovi moraju biti provereni pre javne objave.",
        status: "Inventarisan pravac · link audit pre objave",
        cta: "Link audit potreban",
        points: ["affiliate cards", "poređenja", "water filters", "transparent disclosure"],
      },
    ],
    methodTitle: "Kako svaki proizvod mora nastati",
    methodSteps: [["01", "Problem se imenuje bez hype-a."], ["02", "AI postavlja do tri potpitanja za razjašnjenje."], ["03", "Agent workflow razdvaja činjenice, pretpostavke i rizike."], ["04", "Artifact se isporučuje kao stranica, PDF, email tok ili alat."], ["05", "Legal/trust sloj čuva granice i poverenje."], ["06", "Metrics signal odlučuje GO, dorada ili stop."]],
    disclaimerTitle: "Granice i poverenje",
    disclaimerText: "Sadržaj je edukativnog i informativnog karaktera. Affiliate linkovi moraju biti označeni. Health/water sadržaj nije medicinski savet. DPL nije pravni, finansijski, urbanistički, tehnički ili investicioni savet i ne obećava prodaju, profit, investitore ili dozvole.",
  },
  de: {
    eyebrow: "DaniniNet Produkte",
    title: "Produkte als DaniniHub OS Artefakte, nicht als richtungsloser Katalog.",
    text: "DaniniNet Produkte entstehen aus Methode: Problem, Idee, Rückfragen, Klärung, Agent Workflow, Artefakt und Auslieferung.",
    artifactNote: "Arbeitsprinzip: Frag die KI — die KI fragt dich · Artefakt vor Kampagne · Beleg vor Aussage · Grenze vor CTA.",
    featured: "Aktuelles Verkaufsartefakt",
    dplTitle: "Digitaler Verkauf von Standorten",
    dplText: "DaniniNet kommerzielles PDF-Produkt aus DaniniHub Methode und Calije Park Residence Artifact. Das Paket ist nicht nur ein PDF: DPL enthält den Leitfaden und den Bonus Pack für Anwendung, Prüfung, Lead Flow, Delivery und Legal/Trust Grenzen.",
    dplCta: "DPL Verkaufsseite öffnen",
    price: "29 € Launch · 49 € regulär",
    systemTitle: "Artefakt-Flow",
    system: ["Problem", "Idee", "Rückfragen", "Klärung", "Agent Workflow", "Artefakt", "Delivery", "Signal"],
    includeTitle: "DPL Paket enthält",
    inventoryTitle: "Produkt- und Affiliate-Inventar",
    inventoryText: "Gefundene Produktlinien: DPL Paket, NutriLans Wasser-eBook, Wellan/UMH und Health/Water Affiliate-Linie.",
    products: [],
    methodTitle: "Wie jedes Produkt entstehen muss",
    methodSteps: [["01", "Problem ohne Hype benennen."], ["02", "KI stellt bis zu drei Rückfragen."], ["03", "Workflow trennt Fakten, Annahmen und Risiken."], ["04", "Artefakt wird als Seite, PDF, E-Mail-Fluss oder Tool geliefert."], ["05", "Legal/Trust setzt Grenzen."], ["06", "Metriken entscheiden GO, Überarbeitung oder Stop."]],
    disclaimerTitle: "Grenzen und Vertrauen",
    disclaimerText: "Inhalte sind informativ und edukativ. Affiliate Links müssen markiert werden. Health/Water Inhalte sind kein medizinischer Rat. DPL ist kein rechtlicher, finanzieller, technischer oder Investment-Rat.",
  },
  en: {
    eyebrow: "DaniniNet products",
    title: "Products as DaniniHub OS artifacts, not a directionless catalog.",
    text: "DaniniNet products are created through method: problem, idea, clarifying questions, agent workflow, artifact and delivery.",
    artifactNote: "Working principle: Ask AI — AI asks you · artifact before campaign · proof before claim · boundary before CTA.",
    featured: "Current sales artifact",
    dplTitle: "Digital Location Sales",
    dplText: "DaniniNet commercial PDF product created from the DaniniHub method and Calije Park Residence artifact. The package is not just a PDF: DPL includes the guide and the Bonus Pack for application, checks, lead flow, delivery and legal/trust boundaries.",
    dplCta: "Open DPL sales page",
    price: "29 € launch · 49 € regular",
    systemTitle: "Artifact flow",
    system: ["Problem", "Idea", "Questions", "Clarification", "Agent workflow", "Artifact", "Delivery", "Signal"],
    includeTitle: "DPL package includes",
    inventoryTitle: "Product and affiliate inventory",
    inventoryText: "Confirmed lines: DPL package, NutriLans water eBook, Wellan/UMH and Health/Water affiliate line.",
    products: [],
    methodTitle: "How every product must be created",
    methodSteps: [["01", "Name the problem without hype."], ["02", "AI asks up to three clarifying questions."], ["03", "Workflow separates facts, assumptions and risks."], ["04", "Artifact is delivered as page, PDF, email flow or tool."], ["05", "Legal/trust keeps boundaries."], ["06", "Metrics signal decides GO, improve or stop."]],
    disclaimerTitle: "Boundaries and trust",
    disclaimerText: "Content is educational and informational. Affiliate links must be disclosed. Health/water content is not medical advice. DPL is not legal, financial, technical or investment advice.",
  },
};

function getProducts(lang: Locale) {
  return copy[lang].products.length ? copy[lang].products : copy.sr.products;
}

function productHref(lang: Locale, href?: string) {
  return href === "dpl" ? localizedPath(lang, "dpl") : localizedPath(lang, "products");
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];
  const products = getProducts(lang);

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
        <article className="grid gap-8 rounded-[2.5rem] bg-[#07142b] p-8 text-white lg:grid-cols-[0.78fr_1.22fr] lg:p-10 lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-4">
            <Image src="/images/products/digitalna-prodaja-lokacije-cover.svg" alt="Digitalna prodaja lokacije cover" width={900} height={1272} className="mx-auto h-auto w-full max-w-[330px] rounded-[1.4rem]" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">{t.featured}</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{t.dplTitle}</h2>
            <p className="mt-5 max-w-3xl leading-8 text-slate-300">{t.dplText}</p>
            <p className="mt-5 text-lg font-semibold text-[#d7b46a]">{t.price}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-4 lg:grid-cols-8">
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
            <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">{t.inventoryTitle}</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">DPL · NutriLans · WELLAN · UMH</h2>
          </div>
          <p className="text-lg leading-9 text-[#706a5d]">{t.inventoryText}</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article key={product.title} className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-[#226bbf]">{product.label}</p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight">{product.title}</h3>
              <p className="mt-4 leading-8 text-[#706a5d]">{product.text}</p>
              <p className="mt-5 rounded-2xl bg-[#fff7e8] px-4 py-3 text-sm font-semibold text-[#795d1e]">{product.status}</p>
              <ul className="mt-5 grid gap-2 text-sm text-[#706a5d]">
                {product.points.map((point) => <li key={point}>• {point}</li>)}
              </ul>
              <Link href={productHref(lang, product.href)} className="mt-6 inline-flex rounded-full bg-[#07142b] px-5 py-3 text-sm font-semibold text-white">{product.cta}</Link>
            </article>
          ))}
        </div>
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
