import Image from "next/image";
import Link from "next/link";
import { SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://danininet.daninihub.com";
const calijePublicUrl = "https://calije.daninihub.com";
const checkoutUrl = process.env.NEXT_PUBLIC_GUMROAD_DPL_URL || "https://danininet.gumroad.com/l/nnxnwu";

const analysisPath: Record<Locale, string> = {
  sr: "/sr/usluge/mini-audit",
  de: "/de/services/mini-audit",
  en: "/en/services/mini-audit",
};

const copy = {
  sr: {
    eyebrow: "DaniniNet · kompletan DPL paket",
    title: "Digitalna prodaja lokacije — kompletan paket materijala, ne samo PDF.",
    subtitle: "Jedna kupovina mora da isporuči ceo DPL radni paket: glavni PDF vodič, Bonus Pack, checkliste, brief outline, email obrasce, public/private mapu, metrike, disclaimer blokove i AI Dialogue Worksheet.",
    buy: "Kupi kompletan DPL paket — 29 €",
    inside: "Šta je u paketu",
    price: "29 € launch · 49 € regular",
    note: "Digitalna isporuka preko Gumroad-a mora sadržati kompletan paket fajlova/materijala, ne samo jedan PDF.",
    flow: ["Problem", "Podpitanja", "Gateway", "Brief", "Lead", "Delivery", "Signal"],
    includesTitle: "Kompletan DPL paket uključuje",
    includesIntro: "PDF je glavni vodič, ali proizvod nije samo PDF. Kupac mora dobiti sve operativne materijale potrebne da metod razume i primeni bez lažnih obećanja rezultata.",
    includes: [
      ["PDF vodič", "Digitalna prodaja lokacije kao glavni edukativni dokument."],
      ["DPL Bonus Pack", "Operativni dodatak za primenu metode na konkretan slučaj."],
      ["Pre-launch checklist", "Šta proveriti pre objave, kampanje ili slanja linka interesentima."],
      ["Investor Brief Outline", "Okvir zatvorenog dokumenta za ozbiljnije interesente."],
      ["Homepage Structure Template", "Struktura javne landing strane / gateway prezentacije."],
      ["Lead Calculator spec", "Osnovni model za procenu poseta, CTA klikova, upita i signala."],
      ["Email Templates", "Obrasci za isporuku, follow-up, support i poslovni upit."],
      ["Visual Asset Checklist", "Lista potrebnih vizuala, mapa, slika, dokaza i grafičkih elemenata."],
      ["Public / Private Information Map", "Razdvajanje javnog sadržaja i podataka koji ostaju za zatvoreni brief."],
      ["Metrics Tracker", "Praćenje poseta, klikova, upita, kupovina i tržišnog signala."],
      ["Disclaimer Library", "Granice za legal, AI, affiliate, visual, health i investicione tvrdnje."],
      ["AI Dialogue Worksheet", "Pitaj AI — AI pita tebe radni list za pitanja, razjašnjenje i artifact tok."],
    ],
    proofTitle: "Čalije su dokaz metode, ne privatni deo proizvoda",
    proofText: "DPL paket je izveden iz realnog DaniniHub procesa i Čalije Park Residence case study-ja. Javni gateway, zatvoreni brief, SEO/legal sloj i lead logika koriste se kao dokaz metode, ali privatni pregovarački materijali ne idu u javni proizvod.",
    notTitle: "Šta kupovina ne uključuje",
    not: ["individualnu analizu konkretne lokacije", "pravni, urbanistički, finansijski ili tehnički savet", "garanciju prodaje, zakupa, investitora, profita ili dozvole", "privatne dokumente iz Čalije pregovora"],
    analysisTitle: "Za konkretan slučaj postoji posebna DPL analiza",
    analysisText: "Ako kupac želi da se njegova lokacija posebno pogleda, to nije deo Gumroad paketa. Tada ide poseban upit za DPL analizu potencijala lokacije.",
    analysisCta: "Zatraži DPL analizu",
    faqTitle: "FAQ",
    faq: [
      ["Da li je ovo samo PDF?", "Ne. DPL proizvod mora biti kompletan paket materijala: PDF vodič + Bonus Pack + radni obrasci i checkliste."],
      ["Da li paket uključuje individualnu analizu moje lokacije?", "Ne. Individualna DPL analiza je posebna usluga preko upita."],
      ["Da li proizvod garantuje prodaju?", "Ne. Pomaže da se lokacija profesionalnije strukturira i predstavi, ali ne garantuje rezultat."],
    ],
    disclaimer: "DPL paket je edukativni digitalni proizvod i kompletan radni paket materijala. Ne predstavlja pravni, finansijski, poreski, urbanistički, tehnički ili investicioni savet. Ne garantuje prodaju, zakup, profit, investitora ili izvodljivost.",
  },
  de: {
    eyebrow: "DaniniNet · komplettes DPL Paket",
    title: "Digitaler Verkauf von Standorten — komplettes Materialpaket, nicht nur PDF.",
    subtitle: "Ein Kauf muss das gesamte DPL Arbeitsmaterial liefern: PDF-Leitfaden, Bonus Pack, Checklisten, Brief Outline, E-Mail-Vorlagen, Public/Private Map, Metriken, Disclaimer-Blöcke und AI Dialogue Worksheet.",
    buy: "Komplettes DPL Paket kaufen — 29 €",
    inside: "Paketinhalt",
    price: "29 € Launch · 49 € regulär",
    note: "Die digitale Lieferung über Gumroad muss das komplette Dateipaket enthalten, nicht nur ein PDF.",
    flow: ["Problem", "Rückfragen", "Gateway", "Brief", "Lead", "Delivery", "Signal"],
    includesTitle: "Das komplette DPL Paket enthält",
    includesIntro: "Das PDF ist der Leitfaden, aber das Produkt ist nicht nur PDF. Der Käufer erhält das operative Material zur Anwendung der Methode.",
    includes: [
      ["PDF-Leitfaden", "Hauptdokument für den digitalen Standort-Gateway."],
      ["DPL Bonus Pack", "Operatives Material zur Anwendung der Methode."],
      ["Pre-launch checklist", "Prüfung vor Veröffentlichung oder Kampagne."],
      ["Investor Brief Outline", "Rahmen für ein geschlossenes Dokument."],
      ["Homepage Structure Template", "Struktur für Landingpage / Gateway."],
      ["Lead Calculator spec", "Modell für Besuche, Klicks, Anfragen und Signale."],
      ["Email Templates", "Vorlagen für Delivery, Follow-up und Support."],
      ["Visual Asset Checklist", "Liste benötigter Visuals, Karten und Belege."],
      ["Public / Private Information Map", "Trennung zwischen öffentlicher und geschlossener Ebene."],
      ["Metrics Tracker", "Messung von Traffic, Klicks, Anfragen und Marktsignal."],
      ["Disclaimer Library", "Grenzen für Legal, KI, Affiliate, Visual und Investment-Aussagen."],
      ["AI Dialogue Worksheet", "Frag die KI — die KI fragt dich Arbeitsblatt."],
    ],
    proofTitle: "Čalije ist Methodennachweis, nicht privater Produktinhalt",
    proofText: "Das DPL Paket stammt aus einem realen DaniniHub Prozess und der Čalije Park Residence Fallstudie. Private Verhandlungsunterlagen sind nicht Teil des öffentlichen Produkts.",
    notTitle: "Was der Kauf nicht enthält",
    not: ["individuelle Analyse eines konkreten Standorts", "Rechts-, Finanz-, Planungs- oder Technikberatung", "Garantie für Verkauf, Mieter, Investor, Gewinn oder Genehmigung", "private Čalije Unterlagen"],
    analysisTitle: "Für konkrete Fälle gibt es eine separate DPL Analyse",
    analysisText: "Wenn ein Käufer seinen eigenen Standort prüfen lassen möchte, ist das eine separate Anfrage und nicht Teil des Gumroad Pakets.",
    analysisCta: "DPL Analyse anfragen",
    faqTitle: "FAQ",
    faq: [["Ist das nur ein PDF?", "Nein. Das DPL Produkt muss ein komplettes Materialpaket sein."], ["Ist individuelle Analyse enthalten?", "Nein. Diese ist eine separate Dienstleistung."], ["Garantiert das Produkt Ergebnisse?", "Nein. Es hilft bei Struktur und Darstellung, garantiert aber kein Ergebnis."]],
    disclaimer: "Das DPL Paket ist ein edukatives digitales Produkt und komplettes Arbeitsmaterial. Es ist keine Rechts-, Finanz-, Steuer-, Planungs-, Technik- oder Investmentberatung und garantiert keine Ergebnisse.",
  },
  en: {
    eyebrow: "DaniniNet · complete DPL package",
    title: "Digital Location Sales — complete material package, not just a PDF.",
    subtitle: "One purchase must deliver the full DPL working package: PDF guide, Bonus Pack, checklists, brief outline, email templates, public/private map, metrics, disclaimer blocks and AI Dialogue Worksheet.",
    buy: "Buy complete DPL package — 29 €",
    inside: "Package contents",
    price: "29 € launch · 49 € regular",
    note: "Gumroad delivery must contain the complete file/material package, not only one PDF.",
    flow: ["Problem", "Questions", "Gateway", "Brief", "Lead", "Delivery", "Signal"],
    includesTitle: "The complete DPL package includes",
    includesIntro: "The PDF is the main guide, but the product is not just a PDF. The buyer must receive the full operational material needed to understand and apply the method.",
    includes: [
      ["PDF guide", "Digital Location Sales as the main educational document."],
      ["DPL Bonus Pack", "Operational material for applying the method."],
      ["Pre-launch checklist", "What to check before publishing or campaigning."],
      ["Investor Brief Outline", "Closed brief structure for serious prospects."],
      ["Homepage Structure Template", "Public landing/gateway structure."],
      ["Lead Calculator spec", "Basic model for visits, clicks, inquiries and signals."],
      ["Email Templates", "Delivery, follow-up, support and inquiry templates."],
      ["Visual Asset Checklist", "Required visuals, maps, images and proof elements."],
      ["Public / Private Information Map", "Separating public content from closed-brief details."],
      ["Metrics Tracker", "Tracking traffic, clicks, inquiries, purchases and signals."],
      ["Disclaimer Library", "Boundaries for legal, AI, affiliate, visual, health and investment claims."],
      ["AI Dialogue Worksheet", "Ask AI — AI asks you worksheet."],
    ],
    proofTitle: "Čalije is proof of method, not private product content",
    proofText: "The DPL package is derived from a real DaniniHub process and the Čalije Park Residence case study. Private negotiation materials are not part of the public product.",
    notTitle: "What the purchase does not include",
    not: ["individual analysis of a specific location", "legal, planning, financial or technical advice", "guarantee of sale, tenant, investor, profit or permit", "private Čalije documents"],
    analysisTitle: "For a concrete case, use separate DPL analysis",
    analysisText: "If a buyer wants a review of their own location, that is a separate inquiry and not part of the Gumroad package.",
    analysisCta: "Request DPL analysis",
    faqTitle: "FAQ",
    faq: [["Is this only a PDF?", "No. The DPL product must be a complete material package."], ["Is individual analysis included?", "No. Individual DPL analysis is a separate service."], ["Does it guarantee results?", "No. It helps with structure and presentation, but does not guarantee outcomes."]],
    disclaimer: "The DPL package is an educational digital product and complete working-material package. It is not legal, financial, tax, planning, technical or investment advice and does not guarantee results.",
  },
} as const;

function ProductStructuredData({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const productUrl = `${siteUrl}${localizedPath(lang, "dpl")}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: lang === "sr" ? "Digitalna prodaja lokacije" : lang === "de" ? "Digitaler Verkauf von Standorten" : "Digital Location Sales",
    description: t.subtitle,
    image: `${siteUrl}/images/products/digitalna-prodaja-lokacije-cover.svg`,
    brand: { "@type": "Brand", name: "DaniniNet" },
    category: "Digital product package",
    url: productUrl,
    offers: { "@type": "Offer", url: checkoutUrl, price: "29", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
  };
  return <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default async function ProductPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang} currentPath={localizedPath(lang, "dpl")}>
      <ProductStructuredData lang={lang} />
      <section className="relative overflow-hidden bg-[#07142b] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#d7b46a]">{t.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">{t.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">{t.subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-4"><a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#f7fbff] px-7 py-4 text-sm font-semibold text-[#07142b]">{t.buy}</a><a href="#inside" className="rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white">{t.inside}</a></div>
            <p className="mt-6 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm leading-7 text-slate-300">{t.note}</p>
            <div className="mt-8 grid gap-3 md:grid-cols-7">{t.flow.map((item, index) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-center"><span className="block text-xs text-[#d7b46a]">0{index + 1}</span><span className="mt-1 block font-semibold text-white">{item}</span></div>)}</div>
          </div>
          <aside className="rounded-[2.4rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl"><Image src="/images/products/digitalna-prodaja-lokacije-cover.svg" alt="Digitalna prodaja lokacije cover" width={900} height={900} className="rounded-[2rem] bg-[#0a1834]" priority /><div className="mt-5 rounded-[1.8rem] bg-[#fffaf1] p-6 text-[#15130f]"><p className="text-sm uppercase tracking-[0.2em] text-[#9a7a38]">{t.price}</p><p className="mt-3 text-sm leading-7 text-[#706a5d]">{t.note}</p></div></aside>
        </div>
      </section>

      <section id="inside" className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm uppercase tracking-[0.22em] text-[#9a7a38]">Package</p>
        <h2 className="mt-3 text-4xl font-semibold">{t.includesTitle}</h2>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-[#706a5d]">{t.includesIntro}</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{t.includes.map(([title, text]) => <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-7"><h3 className="text-2xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-[#706a5d]">{text}</p></article>)}</div>
      </section>

      <section className="bg-[#fffaf1]"><div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-2"><article className="rounded-[2rem] border border-black/10 bg-white p-8"><h2 className="text-3xl font-semibold">{t.notTitle}</h2><ul className="mt-6 grid gap-3">{t.not.map((item) => <li key={item} className="rounded-2xl bg-[#fffaf1] p-4 leading-7 text-[#706a5d]">— {item}</li>)}</ul></article><article className="rounded-[2rem] bg-[#07142b] p-8 text-white"><h2 className="text-3xl font-semibold">{t.analysisTitle}</h2><p className="mt-5 leading-8 text-slate-300">{t.analysisText}</p><Link href={analysisPath[lang]} className="mt-7 inline-flex rounded-full bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#07142b]">{t.analysisCta}</Link></article></div></section>

      <section className="mx-auto max-w-7xl px-6 py-16"><div className="rounded-[2.4rem] border border-black/10 bg-white p-8"><p className="text-sm uppercase tracking-[0.22em] text-[#9a7a38]">Proof</p><h2 className="mt-3 text-4xl font-semibold">{t.proofTitle}</h2><p className="mt-5 max-w-4xl text-lg leading-8 text-[#706a5d]">{t.proofText}</p><a href={calijePublicUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex rounded-full bg-[#07142b] px-6 py-3 text-sm font-semibold text-white">Calije Park Residence</a></div></section>

      <section className="bg-[#07142b] text-white"><div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1fr_0.8fr]"><div><h2 className="text-4xl font-semibold">{t.faqTitle}</h2><div className="mt-6 space-y-4">{t.faq.map(([q, a]) => <details key={q} className="rounded-2xl bg-white/[0.06] p-5"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-3 text-slate-300">{a}</p></details>)}</div><p className="mt-8 leading-8 text-slate-300">{t.disclaimer}</p></div><div className="flex flex-col justify-center gap-4"><a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#f7fbff] px-7 py-4 text-center text-sm font-semibold text-[#07142b]">{t.buy}</a><Link href={analysisPath[lang]} className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-medium text-white">{t.analysisCta}</Link></div></div></section>
    </SiteShell>
  );
}
