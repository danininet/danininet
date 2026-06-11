import Image from "next/image";
import Link from "next/link";
import { SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";
type VisualKey = "gateway" | "brief" | "email" | "trust" | "metrics" | "gumroad";

type PageCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  buy: string;
  inside: string;
  price: string;
  regular: string;
  micro: string;
  heroBadges: string[];
  heroValueStack: [string, string][];
  visualFlow: string[];
  artifactTitle: string;
  artifactText: string;
  artifactSteps: [string, string][];
  problemTitle: string;
  problemText: string;
  productTitle: string;
  productText: string;
  audienceTitle: string;
  audience: string[];
  notForTitle: string;
  notFor: string[];
  includesTitle: string;
  includesIntro: string;
  includes: { key: VisualKey; title: string; text: string }[];
  bonusTitle: string;
  bonusItems: string[];
  methodTitle: string;
  methodText: string;
  methodSteps: string[];
  proofTitle: string;
  proofText: string;
  calijeLink: string;
  purchaseTitle: string;
  purchaseSteps: string[];
  faqTitle: string;
  faq: [string, string][];
  finalTitle: string;
  disclaimer: string;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://danininet.daninihub.com";
const calijePublicUrl = "https://calije.daninihub.com";

const copy: Record<Locale, PageCopy> = {
  sr: {
    eyebrow: "DaniniNet · DaniniHub OS artifact proizvod",
    title: "Digitalna prodaja lokacije: PDF vodič + Bonus Pack iz realnog DaniniHub procesa.",
    subtitle: "Komercijalni DaniniNet proizvod izveden iz DaniniHub metode i Calije Park Residence artifacta. Cilj nije još jedan oglas, nego sistem: javni gateway, Investor Brief, lead logika, email delivery, vizuelni dokaz, SEO i legal/trust granice.",
    buy: "Kupi DPL paket na Gumroad-u — 29 €",
    inside: "Pogledaj ceo paket",
    price: "29 € launch",
    regular: "49 € regular",
    micro: "Jedna kupovina: PDF vodič + Bonus Pack. Digitalna isporuka preko Gumroad-a.",
    heroBadges: ["PDF vodič", "Bonus Pack uključen", "Calije artifact", "DaniniHub metoda", "Gumroad delivery", "Legal/trust okvir"],
    heroValueStack: [["PDF vodič", "Metod, struktura i redosled izgradnje digitalnog gateway-a."], ["Bonus Pack", "Checklist, email, brief, metrics i disclaimer blokovi za primenu."], ["Gumroad delivery", "Kupovina i digitalna isporuka bez ručnog slanja fajlova."]],
    visualFlow: ["Problem", "Podpitanja", "Gateway", "Brief", "Lead", "Delivery", "Signal"],
    artifactTitle: "Ovo je nus-proizvod DaniniHub OS sistema.",
    artifactText: "DPL nije izolovan PDF. Nastaje iz sistema: lokacija → pitanja → razjašnjenje → agent workflow → javni sajt → zatvoreni brief → lead tok → PDF proizvod → tržišni signal.",
    artifactSteps: [["01", "Owner pokreće nameru: lokacija mora dobiti bolji digitalni nastup."], ["02", "AI/agent postavlja podpitanja i razdvaja činjenice, pretpostavke i rizike."], ["03", "Artifact se pretvara u javnu stranicu, brief, delivery tok i proizvod."], ["04", "Kupac dobija vodič i Bonus Pack da metod primeni na svoj slučaj."]],
    problemTitle: "Običan oglas često ne objašnjava punu vrednost lokacije.",
    problemText: "Cena, površina i nekoliko fotografija mogu biti dovoljni za jednostavnu nekretninu. Ali kada lokacija ima širi potencijal, ozbiljniji interesent traži kontekst, dokaz, vizuale, granice, sledeći korak i poverenje.",
    productTitle: "DPL paket gradi digitalni gateway, ne generičku landing stranicu.",
    productText: "Paket vodi korisnika kroz metodu: problem, ideja, potpitanja, razjašnjenje, javni sloj, zatvoreni brief, lead forma, email tok, SEO, vizuelni dokaz, disclaimer i metrike.",
    audienceTitle: "Za koga je ovaj vodič",
    audience: ["vlasnici parcela, stanova, kuća i poslovnih lokacija", "mali investitori i developeri", "agenti i posrednici", "digitalni marketari", "affiliate i partner saradnici"],
    notForTitle: "Za koga nije",
    notFor: ["nije za one koji traže garanciju prodaje", "nije za preskakanje pravne, urbanističke, tehničke ili finansijske provere", "nije za tvrdnje o profitu, dozvolama ili izvodljivosti"],
    includesTitle: "Šta dobijaš u DPL paketu",
    includesIntro: "Bonus Pack nije dodatak koji se pominje usput. On je operativni deo proizvoda: PDF daje razumevanje, Bonus Pack daje primenu.",
    includes: [
      { key: "gateway", title: "PDF vodič: Digitalna prodaja lokacije", text: "Glavni edukativni vodič za prelaz od običnog oglasa do digitalnog investitorskog gateway-a." },
      { key: "brief", title: "Investor Brief Outline", text: "Okvir za zatvoreni dokument namenjen ozbiljnijim interesentima, bez javnog otkrivanja osetljivih informacija." },
      { key: "email", title: "Email Template Pack", text: "Primeri komunikacije za formu, isporuku posle kupovine, follow-up, support i partner tok." },
      { key: "metrics", title: "Metrics Tracker", text: "Merenje poseta, CTA klikova, upita, kupovina i tržišnog signala bez izmišljanja uspeha." },
      { key: "trust", title: "Disclaimer Block Library", text: "Blokovi za jasne granice: edukacija, affiliate, AI, legal, visual i health napomene." },
      { key: "gumroad", title: "Delivery okvir", text: "Kupovina, isporuka PDF-a i Bonus Pack-a, success/support logika i sledeći korak." },
    ],
    bonusTitle: "Bonus Pack sadrži",
    bonusItems: ["Pre-launch checklist", "Investor Brief Outline", "Homepage Structure Template", "Lead Calculator spec", "Email Templates", "Visual Asset Checklist", "Public / Private Information Map", "Metrics Tracker", "Disclaimer Library", "DaniniHub Prompt Pack"],
    methodTitle: "Pitaj AI — AI pita tebe.",
    methodText: "Metoda se koristi kao radni okvir: čovek pokreće nameru, AI sme da razjasni do tri podpitanja, zatim se prelazi na analizu, artifact i proverljiv sledeći korak. AI ne odlučuje umesto korisnika i ne zamenjuje stručnu proveru.",
    methodSteps: ["Namera", "Podpitanja", "Dokazi", "Granice", "Artifact", "Signal"],
    proofTitle: "Zasnovano na realnom slučaju: Calije Park Residence",
    proofText: "Proizvod je izveden iz realnog DaniniHub artifact-a: javni gateway, zatvoreni brief, vizuelni sloj, SEO/legal osnova i lead logika. Privatni materijali i pregovarački detalji ne idu javno.",
    calijeLink: "Javni primer: Calije Park Residence",
    purchaseTitle: "Kako funkcioniše kupovina",
    purchaseSteps: ["Klik na Gumroad dugme.", "Plaćanje i isporuka idu preko Gumroad-a.", "PDF vodič i Bonus Pack stižu na email korišćen pri kupovini.", "Ako email ne stigne, proverava se spam/promotions i Gumroad library."],
    faqTitle: "FAQ",
    faq: [["Da li DPL uključuje Bonus Pack?", "Da. Bonus Pack je sastavni deo DPL paketa, ne poseban dodatak koji se kupuje odvojeno."], ["Da li vodič garantuje prodaju?", "Ne. Vodič pomaže da se lokacija predstavi jasnije i profesionalnije, ali ne garantuje rezultat."], ["Da li je ovo pravni ili investicioni savet?", "Ne. Proizvod je edukativan i informativan."], ["Da li moram imati sajt?", "Ne. Vodič prvo pomaže da razdvojite javno, brief, razgovor i neproverene tvrdnje."]],
    finalTitle: "Napravite bolji prvi korak od običnog oglasa.",
    disclaimer: "Digitalna prodaja lokacije je edukativni i informativni PDF + Bonus Pack proizvod. Ne predstavlja pravni, finansijski, poreski, urbanistički, tehnički ili investicioni savet. Ne garantuje prodaju, profit, investitora ili izvodljivost.",
  },
  de: {
    eyebrow: "DaniniNet · DaniniHub OS Artefaktprodukt",
    title: "Digitaler Verkauf von Standorten: PDF-Leitfaden + Bonus Pack aus einem realen DaniniHub Prozess.",
    subtitle: "Kommerzielles DaniniNet Produkt aus DaniniHub Methode und Calije Park Residence Artifact: öffentlicher Gateway, Investor Brief, Lead-Logik, E-Mail-Delivery, Visual Proof, SEO und Legal/Trust Grenzen.",
    buy: "DPL Paket auf Gumroad kaufen — 29 €",
    inside: "Paket ansehen",
    price: "29 € Launch",
    regular: "49 € regulär",
    micro: "Ein Kauf: PDF-Leitfaden + Bonus Pack. Digitale Lieferung über Gumroad.",
    heroBadges: ["PDF-Leitfaden", "Bonus Pack enthalten", "Calije Artifact", "DaniniHub Methode", "Gumroad Delivery", "Legal/Trust Rahmen"],
    heroValueStack: [["PDF-Leitfaden", "Methode, Struktur und Reihenfolge für den digitalen Gateway."], ["Bonus Pack", "Checklisten, E-Mail, Brief, Metriken und Disclaimer-Blöcke."], ["Gumroad Delivery", "Kauf und digitale Lieferung ohne manuelles Dateisenden."]],
    visualFlow: ["Problem", "Rückfragen", "Gateway", "Brief", "Lead", "Delivery", "Signal"],
    artifactTitle: "Dies ist ein Nebenprodukt des DaniniHub OS.",
    artifactText: "DPL ist kein isoliertes PDF. Es entsteht aus dem System: Standort → Fragen → Klärung → Agent Workflow → öffentliche Seite → geschlossener Brief → Lead Flow → PDF Produkt → Marktsignal.",
    artifactSteps: [["01", "Owner startet die Absicht."], ["02", "KI/Agent trennt Fakten, Annahmen und Risiken."], ["03", "Artifact wird zu Seite, Brief, Delivery und Produkt."], ["04", "Käufer erhält Leitfaden und Bonus Pack zur Anwendung."]],
    problemTitle: "Eine normale Anzeige erklärt oft nicht den vollen Wert eines Standorts.",
    problemText: "Preis, Fläche und ein paar Fotos reichen bei einfachen Objekten. Bei stärkerem Potenzial braucht ein seriöser Interessent Kontext, Belege, Visuals, Grenzen, nächsten Schritt und Vertrauen.",
    productTitle: "Das DPL Paket baut einen digitalen Gateway, keine generische Landingpage.",
    productText: "Das Paket führt durch Problem, Idee, Rückfragen, Klärung, öffentliche Ebene, geschlossenen Brief, Lead-Formular, E-Mail-Fluss, SEO, Visual Proof, Disclaimer und Metriken.",
    audienceTitle: "Für wen dieser Leitfaden ist",
    audience: ["Eigentümer von Grundstücken, Wohnungen, Häusern und Standorten", "kleine Investoren und Entwickler", "Makler und Vermittler", "digitale Marketer", "Affiliate- und Partnerkontakte"],
    notForTitle: "Für wen er nicht ist",
    notFor: ["nicht für Garantieversprechen", "nicht zum Überspringen fachlicher Prüfungen", "nicht für Profit-, Genehmigungs- oder Machbarkeitsbehauptungen"],
    includesTitle: "Was im DPL Paket enthalten ist",
    includesIntro: "Der Bonus Pack ist operativer Teil des Produkts: PDF = Verständnis, Bonus Pack = Anwendung.",
    includes: [
      { key: "gateway", title: "PDF-Leitfaden", text: "Hauptleitfaden vom Inserat zum digitalen Investor Gateway." },
      { key: "brief", title: "Investor Brief Outline", text: "Rahmen für ein geschlossenes Dokument für ernstere Interessenten." },
      { key: "email", title: "Email Template Pack", text: "Kommunikation für Formular, Lieferung, Follow-up, Support und Partner." },
      { key: "metrics", title: "Metrics Tracker", text: "Messung von Besuchen, Klicks, Fragen, Käufen und Marktsignalen." },
      { key: "trust", title: "Disclaimer Block Library", text: "Grenzen für Bildung, Affiliate, KI, Legal, Visual und Health Hinweise." },
      { key: "gumroad", title: "Delivery Rahmen", text: "Kauf, Lieferung von PDF und Bonus Pack, Success/Support Logik." },
    ],
    bonusTitle: "Bonus Pack enthält",
    bonusItems: ["Pre-launch checklist", "Investor Brief Outline", "Homepage Structure Template", "Lead Calculator spec", "Email Templates", "Visual Asset Checklist", "Public / Private Information Map", "Metrics Tracker", "Disclaimer Library", "DaniniHub Prompt Pack"],
    methodTitle: "Frag die KI — die KI fragt dich.",
    methodText: "Der Mensch startet die Absicht, KI darf bis zu drei Rückfragen stellen, danach folgen Analyse, Artifact und überprüfbarer nächster Schritt.",
    methodSteps: ["Absicht", "Rückfragen", "Belege", "Grenzen", "Artifact", "Signal"],
    proofTitle: "Basierend auf dem realen Fall Calije Park Residence",
    proofText: "Das Produkt kommt aus einem realen DaniniHub Artifact: öffentlicher Gateway, geschlossener Brief, visuelle Ebene, SEO/Legal-Basis und Lead-Logik. Private Materialien bleiben privat.",
    calijeLink: "Öffentliches Beispiel: Calije Park Residence",
    purchaseTitle: "So funktioniert der Kauf",
    purchaseSteps: ["Klick auf den Gumroad Button.", "Zahlung und Lieferung laufen über Gumroad.", "PDF und Bonus Pack kommen per E-Mail.", "Bei Problemen Spam/Promotions und Gumroad Library prüfen."],
    faqTitle: "FAQ",
    faq: [["Ist der Bonus Pack enthalten?", "Ja. Der Bonus Pack ist Teil des DPL Pakets."], ["Garantiert der Leitfaden Verkauf?", "Nein."], ["Ist es Beratung?", "Nein. Es ist ein Bildungsprodukt."], ["Brauche ich sofort eine Website?", "Nein. Zuerst wird die Struktur geklärt."]],
    finalTitle: "Machen Sie einen besseren ersten Schritt als eine normale Anzeige.",
    disclaimer: "Dieses Produkt ist edukativ und informativ. Es ist keine Rechts-, Finanz-, Steuer-, Planungs-, Technik- oder Anlageberatung und garantiert keine Ergebnisse.",
  },
  en: {
    eyebrow: "DaniniNet · DaniniHub OS artifact product",
    title: "Digital Location Sales: PDF guide + Bonus Pack from a real DaniniHub process.",
    subtitle: "A commercial DaniniNet product derived from the DaniniHub method and Calije Park Residence artifact: public gateway, Investor Brief, lead logic, email delivery, visual proof, SEO and legal/trust boundaries.",
    buy: "Buy DPL package on Gumroad — 29 €",
    inside: "See the package",
    price: "29 € launch",
    regular: "49 € regular",
    micro: "One purchase: PDF guide + Bonus Pack. Digital delivery through Gumroad.",
    heroBadges: ["PDF guide", "Bonus Pack included", "Calije artifact", "DaniniHub method", "Gumroad delivery", "Legal/trust frame"],
    heroValueStack: [["PDF guide", "Method, structure and build order for the digital gateway."], ["Bonus Pack", "Checklists, email, brief, metrics and disclaimer blocks."], ["Gumroad delivery", "Purchase and digital delivery without manual file sending."]],
    visualFlow: ["Problem", "Questions", "Gateway", "Brief", "Lead", "Delivery", "Signal"],
    artifactTitle: "This is a by-product of the DaniniHub OS.",
    artifactText: "DPL is not an isolated PDF. It emerges from the system: location → questions → clarification → agent workflow → public page → closed brief → lead flow → PDF product → market signal.",
    artifactSteps: [["01", "Owner starts the intent."], ["02", "AI/agent separates facts, assumptions and risks."], ["03", "Artifact becomes page, brief, delivery and product."], ["04", "Buyer receives guide and Bonus Pack for application."]],
    problemTitle: "A standard listing often fails to explain the full value of a location.",
    problemText: "Price, size and a few photos may be enough for simple cases. When the location has broader potential, serious prospects need context, proof, visuals, boundaries, next step and trust.",
    productTitle: "The DPL package builds a digital gateway, not a generic landing page.",
    productText: "The package guides through problem, idea, questions, clarification, public layer, closed brief, lead form, email flow, SEO, visual proof, disclaimer and metrics.",
    audienceTitle: "Who this guide is for",
    audience: ["owners of land, apartments, houses and locations", "small investors and developers", "agents and intermediaries", "digital marketers", "affiliate and partner collaborators"],
    notForTitle: "Who it is not for",
    notFor: ["not for guaranteed sales claims", "not for skipping professional checks", "not for profit, permit or feasibility claims"],
    includesTitle: "What the DPL package includes",
    includesIntro: "The Bonus Pack is an operational part of the product: PDF = understanding, Bonus Pack = application.",
    includes: [
      { key: "gateway", title: "PDF guide", text: "Main guide from listing to digital investor gateway." },
      { key: "brief", title: "Investor Brief Outline", text: "A frame for a closed document aimed at more serious prospects." },
      { key: "email", title: "Email Template Pack", text: "Communication for form, delivery, follow-up, support and partners." },
      { key: "metrics", title: "Metrics Tracker", text: "Tracking visits, clicks, questions, purchases and market signals." },
      { key: "trust", title: "Disclaimer Block Library", text: "Boundaries for education, affiliate, AI, legal, visual and health notes." },
      { key: "gumroad", title: "Delivery frame", text: "Purchase, PDF and Bonus Pack delivery, success/support logic." },
    ],
    bonusTitle: "Bonus Pack contains",
    bonusItems: ["Pre-launch checklist", "Investor Brief Outline", "Homepage Structure Template", "Lead Calculator spec", "Email Templates", "Visual Asset Checklist", "Public / Private Information Map", "Metrics Tracker", "Disclaimer Library", "DaniniHub Prompt Pack"],
    methodTitle: "Ask AI — AI asks you.",
    methodText: "The human starts the intent, AI may ask up to three clarifying questions, then moves to analysis, artifact and a verifiable next step.",
    methodSteps: ["Intent", "Questions", "Proof", "Boundaries", "Artifact", "Signal"],
    proofTitle: "Based on a real case: Calije Park Residence",
    proofText: "The product comes from a real DaniniHub artifact: public gateway, closed brief, visual layer, SEO/legal base and lead logic. Private materials stay private.",
    calijeLink: "Public example: Calije Park Residence",
    purchaseTitle: "How purchase works",
    purchaseSteps: ["Click the Gumroad button.", "Payment and delivery are handled by Gumroad.", "PDF and Bonus Pack arrive by email.", "If needed, check spam/promotions and Gumroad library."],
    faqTitle: "FAQ",
    faq: [["Is the Bonus Pack included?", "Yes. The Bonus Pack is part of the DPL package."], ["Does it guarantee a sale?", "No."], ["Is this advice?", "No. It is educational."], ["Do I need a website immediately?", "No. First, the structure is clarified."]],
    finalTitle: "Make a better first step than a standard listing.",
    disclaimer: "This is an educational PDF + Bonus Pack product. It is not legal, financial, tax, planning, technical or investment advice and does not guarantee results.",
  },
};

function path(lang: Locale, route: "blog" | "support") {
  return localizedPath(lang, route);
}

function Section({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "cream" | "dark" }) {
  const cls = tone === "dark" ? "bg-[#07142b] text-white" : tone === "cream" ? "bg-[#f4efe5] text-[#15130f]" : "bg-[#fffaf1] text-[#15130f]";
  return <section className={cls}><div className="mx-auto max-w-7xl px-6 py-16">{children}</div></section>;
}

function LineIcon({ type }: { type: VisualKey }) {
  return (
    <svg viewBox="0 0 96 96" className="h-14 w-14" fill="none" aria-hidden="true">
      <rect width="96" height="96" rx="26" fill="#07142B" />
      {type === "gateway" && <><path d="M22 72V44L48 26L74 44V72" stroke="#D7B46A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M34 72V50L48 40L62 50V72" stroke="#F7FBFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></>}
      {type === "brief" && <><path d="M30 18H58L70 30V76H30V18Z" stroke="#D7B46A" strokeWidth="3" strokeLinejoin="round"/><path d="M58 18V30H70M40 46H58M40 56H56M40 66H50" stroke="#F7FBFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></>}
      {type === "email" && <><rect x="22" y="30" width="52" height="38" rx="6" stroke="#D7B46A" strokeWidth="3"/><path d="M24 34L48 52L72 34" stroke="#F7FBFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></>}
      {type === "metrics" && <><path d="M24 72H74" stroke="#F7FBFF" strokeWidth="2.4" strokeLinecap="round"/><path d="M34 64V48M48 64V34M62 64V42" stroke="#D7B46A" strokeWidth="4" strokeLinecap="round"/></>}
      {type === "trust" && <><path d="M48 18L70 28V46C70 60 60 70 48 78C36 70 26 60 26 46V28L48 18Z" stroke="#D7B46A" strokeWidth="3" strokeLinejoin="round"/><path d="M38 48L45 55L59 39" stroke="#F7FBFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></>}
      {type === "gumroad" && <><circle cx="48" cy="48" r="26" stroke="#D7B46A" strokeWidth="3"/><path d="M36 48H60M50 38L60 48L50 58" stroke="#F7FBFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></>}
    </svg>
  );
}

function HeroFlow({ items }: { items: string[] }) {
  return <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.05] p-4"><div className="grid gap-3 md:grid-cols-7">{items.map((item, index) => <div key={item} className="relative rounded-2xl border border-white/10 bg-[#07142b] p-4 text-center"><span className="block text-xs text-[#d7b46a]">0{index + 1}</span><span className="mt-1 block font-semibold text-white">{item}</span>{index < items.length - 1 ? <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-[#d7b46a] md:block">→</span> : null}</div>)}</div></div>;
}

function ChecklistColumn({ title, items, mark }: { title: string; items: string[]; mark: string }) {
  return <article className="rounded-[2rem] border border-black/10 bg-white p-8"><h2 className="text-3xl font-semibold">{title}</h2><ul className="mt-6 grid gap-3">{items.map((x) => <li key={x} className="rounded-2xl bg-[#fffaf1] p-4 text-[#706a5d]"><strong className="mr-2 text-[#07142b]">{mark}</strong>{x}</li>)}</ul></article>;
}

function ProductStructuredData({ lang, checkoutUrl }: { lang: Locale; checkoutUrl: string }) {
  const t = copy[lang];
  const productUrl = `${siteUrl}${localizedPath(lang, "dpl")}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: lang === "sr" ? "Digitalna prodaja lokacije" : lang === "de" ? "Digitaler Verkauf von Standorten" : "Digital Location Sales",
    description: t.subtitle,
    image: `${siteUrl}/images/products/digitalna-prodaja-lokacije-cover.svg`,
    brand: { "@type": "Brand", name: "DaniniNet" },
    category: "Digital product",
    url: productUrl,
    offers: { "@type": "Offer", url: checkoutUrl, price: "29", priceCurrency: "EUR", availability: "https://schema.org/InStock", itemCondition: "https://schema.org/NewCondition" },
  };
  return <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default async function ProductPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];
  const checkoutUrl = process.env.NEXT_PUBLIC_GUMROAD_DPL_URL || "https://danininet.gumroad.com/l/nnxnwu";

  return (
    <SiteShell locale={lang} currentPath={localizedPath(lang, "dpl")}>
      <ProductStructuredData lang={lang} checkoutUrl={checkoutUrl} />
      <section className="relative overflow-hidden bg-[#07142b] text-white"><div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_8%,rgba(215,180,106,0.18),transparent_32%),radial-gradient(circle_at_84%_14%,rgba(68,130,190,0.20),transparent_34%)]" /><div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center"><div><p className="text-sm uppercase tracking-[0.24em] text-[#d7b46a]">{t.eyebrow}</p><h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">{t.title}</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">{t.subtitle}</p><div className="mt-9 flex flex-wrap gap-4"><a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#f7fbff] px-7 py-4 text-sm font-semibold text-[#07142b]">{t.buy}</a><a href="#inside" className="rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white">{t.inside}</a></div><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{t.heroBadges.map((badge) => <span key={badge} className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-slate-300">{badge}</span>)}</div><HeroFlow items={t.visualFlow} /><p className="mt-5 text-sm text-slate-400">{t.micro}</p></div><aside className="rounded-[2.4rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl"><div className="grid gap-5 md:grid-cols-[0.62fr_0.38fr] md:items-center lg:grid-cols-1 xl:grid-cols-[0.62fr_0.38fr]"><Image src="/images/products/digitalna-prodaja-lokacije-cover.svg" alt="Digitalna prodaja lokacije cover" width={900} height={1272} priority className="mx-auto h-auto w-full max-w-[380px] rounded-[1.6rem] shadow-[0_24px_80px_rgba(0,0,0,0.36)]" /><div className="grid gap-3"><span className="rounded-2xl border border-white/10 bg-[#07142b] p-5 text-center"><strong className="block text-3xl text-[#d7b46a]">{t.price}</strong><small className="mt-2 block text-slate-400">{t.regular}</small></span>{t.heroValueStack.map(([title, text]) => <span key={title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"><strong className="block text-sm text-white">{title}</strong><small className="mt-1 block leading-6 text-slate-400">{text}</small></span>)}</div></div></aside></div></section>
      <Section tone="dark"><div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">DaniniHub OS</p><h2 className="mt-4 text-4xl font-semibold">{t.artifactTitle}</h2><p className="mt-5 leading-8 text-slate-300">{t.artifactText}</p></div><div className="grid gap-4 md:grid-cols-2">{t.artifactSteps.map(([num, text]) => <div key={num} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5"><span className="text-sm font-semibold text-[#d7b46a]">{num}</span><p className="mt-2 leading-7 text-slate-300">{text}</p></div>)}</div></div></Section>
      <Section tone="cream"><div className="grid gap-6 lg:grid-cols-2"><article className="rounded-[2rem] bg-white p-8 shadow-sm"><h2 className="text-4xl font-semibold">{t.problemTitle}</h2><p className="mt-5 leading-8 text-[#706a5d]">{t.problemText}</p></article><article className="rounded-[2rem] bg-white p-8 shadow-sm"><h2 className="text-4xl font-semibold">{t.productTitle}</h2><p className="mt-5 leading-8 text-[#706a5d]">{t.productText}</p></article></div></Section>
      <Section><div className="grid gap-6 lg:grid-cols-2"><ChecklistColumn title={t.audienceTitle} items={t.audience} mark="✓" /><ChecklistColumn title={t.notForTitle} items={t.notFor} mark="—" /></div></Section>
      <Section tone="cream"><div id="inside"><h2 className="text-4xl font-semibold">{t.includesTitle}</h2><p className="mt-4 max-w-3xl leading-8 text-[#706a5d]">{t.includesIntro}</p><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{t.includes.map((x) => <article key={x.title} className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm"><LineIcon type={x.key} /><h3 className="mt-5 text-2xl font-semibold">{x.title}</h3><p className="mt-3 leading-7 text-[#706a5d]">{x.text}</p></article>)}</div><div className="mt-8 rounded-[2rem] border border-black/10 bg-white p-7"><h3 className="text-3xl font-semibold">{t.bonusTitle}</h3><div className="mt-5 grid gap-2 md:grid-cols-2 lg:grid-cols-3">{t.bonusItems.map((item) => <span key={item} className="rounded-2xl bg-[#fffaf1] px-4 py-3 text-sm text-[#706a5d]">• {item}</span>)}</div></div></div></Section>
      <Section><div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]"><article><h2 className="text-4xl font-semibold">{t.methodTitle}</h2><p className="mt-5 leading-8 text-[#706a5d]">{t.methodText}</p></article><div className="rounded-[2rem] border border-black/10 bg-white p-5"><div className="grid gap-3 md:grid-cols-3">{t.methodSteps.map((x, i) => <div key={x} className="rounded-2xl border border-black/10 bg-[#fffaf1] p-5 text-center"><span className="text-sm text-[#226bbf]">0{i + 1}</span><p className="mt-2 font-semibold">{x}</p></div>)}</div></div></div></Section>
      <Section tone="cream"><div className="grid gap-6 lg:grid-cols-2"><article className="rounded-[2rem] bg-white p-8 shadow-sm"><h2 className="text-3xl font-semibold">{t.proofTitle}</h2><p className="mt-5 leading-8 text-[#706a5d]">{t.proofText}</p><a href={calijePublicUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-[#07142b]">{t.calijeLink}</a></article><article className="rounded-[2rem] bg-white p-8 shadow-sm"><h2 className="text-3xl font-semibold">{t.purchaseTitle}</h2><ol className="mt-6 grid gap-3">{t.purchaseSteps.map((x, i) => <li key={x} className="rounded-2xl bg-[#fffaf1] p-4 text-[#706a5d]"><strong className="text-[#07142b]">0{i + 1}</strong> · {x}</li>)}</ol></article></div></Section>
      <Section><h2 className="text-4xl font-semibold">{t.faqTitle}</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{t.faq.map(([q, a]) => <article key={q} className="rounded-[2rem] bg-white p-6 shadow-sm"><h3 className="text-xl font-semibold">{q}</h3><p className="mt-3 leading-7 text-[#706a5d]">{a}</p></article>)}</div></Section>
      <Section tone="dark"><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="text-4xl font-semibold">{t.finalTitle}</h2><p className="mt-5 max-w-3xl leading-8 text-slate-300">{t.disclaimer}</p><div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300"><Link href={path(lang, "blog")} className="rounded-full border border-white/10 px-4 py-2">Blog</Link><Link href={path(lang, "support")} className="rounded-full border border-white/10 px-4 py-2">Support</Link></div></div><a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#f7fbff] px-7 py-4 text-sm font-semibold text-[#07142b]">{t.buy}</a></div></Section>
    </SiteShell>
  );
}
