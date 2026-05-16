import Image from "next/image";
import Link from "next/link";
import { SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

type PageCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  buy: string;
  inside: string;
  price: string;
  regular: string;
  micro: string;
  problemTitle: string;
  problemText: string;
  productTitle: string;
  productText: string;
  audienceTitle: string;
  audience: string[];
  notForTitle: string;
  notFor: string[];
  includesTitle: string;
  includes: string[];
  methodTitle: string;
  methodText: string;
  methodSteps: string[];
  proofTitle: string;
  proofText: string;
  purchaseTitle: string;
  purchaseSteps: string[];
  faqTitle: string;
  faq: [string, string][];
  finalTitle: string;
  disclaimer: string;
};

const copy: Record<Locale, PageCopy> = {
  sr: {
    eyebrow: "DaniniNet digitalni proizvod",
    title: "Ne prodajte lokaciju samo kao oglas. Pretvorite je u ozbiljniji digitalni argument.",
    subtitle: "Praktični vodič za vlasnike parcela, stanova, kuća, lokacija, male investitore, agente i digitalne saradnike koji žele jasniju prezentaciju kroz javni sajt, zatvoreni brief, lead logiku, vizuale, SEO i legal/trust sloj.",
    buy: "Kupi PDF vodič na Gumroad-u — 29 €",
    inside: "Pogledaj šta dobijaš",
    price: "29 € launch",
    regular: "49 € regular",
    micro: "PDF vodič + Bonus Pack. Digitalna isporuka preko Gumroad-a.",
    problemTitle: "Običan oglas često ne objašnjava punu vrednost lokacije.",
    problemText: "Cena, površina i nekoliko fotografija mogu biti dovoljni za jednostavnu nekretninu. Ali kada lokacija ima širi potencijal, ozbiljniji interesent traži kontekst, dokaz, vizuale, granice, sledeći korak i poverenje.",
    productTitle: "Digitalna prodaja lokacije je vodič za izgradnju digitalnog gateway-a.",
    productText: "Ne pravite još jedan oglas. Gradite okvir za javnu prezentaciju, zatvoreni brief, lead formu, email tok, SEO, vizuelni dokaz i legal/trust sloj.",
    audienceTitle: "Za koga je ovaj vodič",
    audience: ["vlasnici parcela, stanova, kuća i poslovnih lokacija", "mali investitori i developeri", "agenti i posrednici", "digitalni marketari", "affiliate i partner saradnici"],
    notForTitle: "Za koga nije",
    notFor: ["nije za one koji traže garanciju prodaje", "nije za preskakanje pravne, urbanističke, tehničke ili finansijske provere", "nije za tvrdnje o profitu, dozvolama ili izvodljivosti"],
    includesTitle: "Šta dobijaš",
    includes: ["glavni PDF vodič", "Bonus Pack", "checklist pre objave", "Investor Brief outline", "Homepage Structure Template", "Email Template Pack", "Visual Asset Checklist", "Metrics Tracker", "Lead Calculator Spec", "Disclaimer Block Library"],
    methodTitle: "Pitaj AI — AI pita tebe.",
    methodText: "Metoda se koristi kao radni okvir: pitanje, dokaz, granica, artifact i provera tržišta. AI ne odlučuje umesto korisnika i ne zamenjuje stručnu proveru.",
    methodSteps: ["Ideja", "Pitanja", "Dokazi", "Struktura", "Artifact", "Tržišna provera"],
    proofTitle: "Zasnovano na realnom slučaju: Calije Park Residence",
    proofText: "Proizvod je izveden iz realnog DaniniHub artifact-a: javni gateway, zatvoreni brief, vizuelni sloj, SEO/legal osnova i lead logika. Privatni materijali i pregovarački detalji ne idu javno.",
    purchaseTitle: "Kako funkcioniše kupovina",
    purchaseSteps: ["Klik na Gumroad dugme.", "Plaćanje i isporuka idu preko Gumroad-a.", "PDF i Bonus Pack stižu na email korišćen pri kupovini.", "Ako email ne stigne, proverava se spam/promotions i Gumroad library."],
    faqTitle: "FAQ",
    faq: [["Da li vodič garantuje prodaju?", "Ne. Vodič pomaže da se lokacija predstavi jasnije i profesionalnije, ali ne garantuje rezultat."], ["Da li je ovo pravni ili investicioni savet?", "Ne. Proizvod je edukativan i informativan."], ["Da li moram imati sajt?", "Ne. Vodič prvo pomaže da razdvojite javno, brief, razgovor i neproverene tvrdnje."], ["Šta dobijam osim PDF-a?", "Bonus Pack sa checklistama, strukturama, email primerima i disclaimer blokovima."]],
    finalTitle: "Napravite bolji prvi korak od običnog oglasa.",
    disclaimer: "Digitalna prodaja lokacije je edukativni i informativni PDF proizvod. Ne predstavlja pravni, finansijski, poreski, urbanistički, tehnički ili investicioni savet. Ne garantuje prodaju, profit, investitora ili izvodljivost.",
  },
  de: {
    eyebrow: "DaniniNet digitales Produkt",
    title: "Verkaufen Sie einen Standort nicht nur als Anzeige. Machen Sie daraus ein seriöseres digitales Argument.",
    subtitle: "Praktischer Leitfaden für Eigentümer, kleine Investoren, Makler und digitale Partner, die eine klarere Präsentation über öffentliche Seite, geschlossenen Brief, Lead-Logik, Visuals, SEO und Legal/Trust-Ebene wollen.",
    buy: "Auf Gumroad kaufen — 29 €",
    inside: "Inhalt ansehen",
    price: "29 € Launch",
    regular: "49 € regulär",
    micro: "PDF-Leitfaden + Bonus Pack. Digitale Lieferung über Gumroad.",
    problemTitle: "Eine normale Anzeige erklärt oft nicht den vollen Wert eines Standorts.",
    problemText: "Preis, Fläche und ein paar Fotos reichen bei einfachen Objekten. Bei stärkerem Potenzial braucht ein seriöser Interessent Kontext, Belege, Visuals, Grenzen, nächsten Schritt und Vertrauen.",
    productTitle: "Digitaler Verkauf von Standorten ist ein Leitfaden für einen digitalen Gateway.",
    productText: "Kein weiterer Anzeigentext, sondern ein Rahmen für öffentliche Präsentation, geschlossenen Brief, Lead-Formular, E-Mail-Fluss, SEO, visuelle Belege und Legal/Trust.",
    audienceTitle: "Für wen dieser Leitfaden ist",
    audience: ["Eigentümer von Grundstücken, Wohnungen, Häusern und Standorten", "kleine Investoren und Entwickler", "Makler und Vermittler", "digitale Marketer", "Affiliate- und Partnerkontakte"],
    notForTitle: "Für wen er nicht ist",
    notFor: ["nicht für Garantieversprechen", "nicht zum Überspringen fachlicher Prüfungen", "nicht für Profit-, Genehmigungs- oder Machbarkeitsbehauptungen"],
    includesTitle: "Was enthalten ist",
    includes: ["Haupt-PDF", "Bonus Pack", "Checkliste", "Investor Brief Outline", "Homepage Structure Template", "Email Template Pack", "Visual Asset Checklist", "Metrics Tracker", "Lead Calculator Spec", "Disclaimer Block Library"],
    methodTitle: "Frag die KI — die KI fragt dich.",
    methodText: "Die Methode ist ein Arbeitsrahmen: Frage, Beleg, Grenze, Artifact und Marktprüfung. KI entscheidet nicht und ersetzt keine fachliche Prüfung.",
    methodSteps: ["Idee", "Fragen", "Belege", "Struktur", "Artifact", "Marktprüfung"],
    proofTitle: "Basierend auf dem realen Fall Calije Park Residence",
    proofText: "Das Produkt kommt aus einem realen DaniniHub Artifact: öffentlicher Gateway, geschlossener Brief, visuelle Ebene, SEO/Legal-Basis und Lead-Logik. Private Materialien bleiben privat.",
    purchaseTitle: "So funktioniert der Kauf",
    purchaseSteps: ["Klick auf den Gumroad Button.", "Zahlung und Lieferung laufen über Gumroad.", "PDF und Bonus Pack kommen per E-Mail.", "Bei Problemen Spam/Promotions und Gumroad Library prüfen."],
    faqTitle: "FAQ",
    faq: [["Garantiert der Leitfaden Verkauf?", "Nein. Er hilft bei klarerer Präsentation, garantiert aber kein Ergebnis."], ["Ist es Beratung?", "Nein. Es ist ein Bildungsprodukt."], ["Brauche ich sofort eine Website?", "Nein. Zuerst wird die Struktur geklärt."], ["Was ist außer dem PDF enthalten?", "Bonus Pack mit Checklisten, Strukturen und Disclaimer-Blöcken."]],
    finalTitle: "Machen Sie einen besseren ersten Schritt als eine normale Anzeige.",
    disclaimer: "Dieses Produkt ist edukativ und informativ. Es ist keine Rechts-, Finanz-, Steuer-, Planungs-, Technik- oder Anlageberatung und garantiert keine Ergebnisse.",
  },
  en: {
    eyebrow: "DaniniNet digital product",
    title: "Do not sell a location only as a listing. Turn it into a more serious digital argument.",
    subtitle: "A practical guide for owners, small investors, agents and digital partners who need a clearer presentation through a public page, closed brief, lead logic, visuals, SEO and legal/trust layer.",
    buy: "Buy on Gumroad — 29 €",
    inside: "See what is inside",
    price: "29 € launch",
    regular: "49 € regular",
    micro: "PDF guide + Bonus Pack. Digital delivery through Gumroad.",
    problemTitle: "A standard listing often fails to explain the full value of a location.",
    problemText: "Price, size and a few photos may be enough for simple cases. When the location has broader potential, serious prospects need context, proof, visuals, boundaries, next step and trust.",
    productTitle: "Digital Location Sales is a guide for building a digital gateway.",
    productText: "Not another listing. A framework for public presentation, closed brief, lead form, email flow, SEO, visual proof and legal/trust layer.",
    audienceTitle: "Who this guide is for",
    audience: ["owners of land, apartments, houses and locations", "small investors and developers", "agents and intermediaries", "digital marketers", "affiliate and partner collaborators"],
    notForTitle: "Who it is not for",
    notFor: ["not for guaranteed sales claims", "not for skipping professional checks", "not for profit, permit or feasibility claims"],
    includesTitle: "What you get",
    includes: ["main PDF guide", "Bonus Pack", "pre-publication checklist", "Investor Brief outline", "Homepage Structure Template", "Email Template Pack", "Visual Asset Checklist", "Metrics Tracker", "Lead Calculator Spec", "Disclaimer Block Library"],
    methodTitle: "Ask AI — AI asks you.",
    methodText: "The method is a working frame: question, proof, boundary, artifact and market check. AI does not decide for the user and does not replace professional review.",
    methodSteps: ["Idea", "Questions", "Proof", "Structure", "Artifact", "Market check"],
    proofTitle: "Based on a real case: Calije Park Residence",
    proofText: "The product comes from a real DaniniHub artifact: public gateway, closed brief, visual layer, SEO/legal base and lead logic. Private materials and negotiation details stay private.",
    purchaseTitle: "How purchase works",
    purchaseSteps: ["Click the Gumroad button.", "Payment and delivery are handled by Gumroad.", "PDF and Bonus Pack arrive to the checkout email.", "If needed, check spam/promotions and Gumroad library."],
    faqTitle: "FAQ",
    faq: [["Does it guarantee a sale?", "No. It helps with clearer presentation, but does not guarantee results."], ["Is this legal or investment advice?", "No. It is educational and informational."], ["Do I need a website immediately?", "No. First, the structure is clarified."], ["What is included besides the PDF?", "Bonus Pack with checklists, structures, email examples and disclaimer blocks."]],
    finalTitle: "Make a better first step than a standard listing.",
    disclaimer: "This is an educational digital product. It is not legal, financial, tax, planning, technical or investment advice and does not guarantee results.",
  },
};

function Section({ children, tone = "light" }: { children: React.ReactNode; tone?: "light" | "cream" | "dark" }) {
  const cls = tone === "dark" ? "bg-[#07142b] text-white" : tone === "cream" ? "bg-[#f4efe5] text-[#15130f]" : "bg-[#fffaf1] text-[#15130f]";
  return <section className={cls}><div className="mx-auto max-w-7xl px-6 py-16">{children}</div></section>;
}

export default async function ProductPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];
  const checkoutUrl = process.env.NEXT_PUBLIC_GUMROAD_DPL_URL || "https://danininet.gumroad.com/";

  return (
    <SiteShell locale={lang} currentPath={localizedPath(lang, "dpl")}>
      <section className="bg-[#07142b] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#d7b46a]">{t.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">{t.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">{t.subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href={checkoutUrl} className="rounded-full bg-[#f7fbff] px-7 py-4 text-sm font-semibold text-[#07142b]">{t.buy}</Link>
              <a href="#inside" className="rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white">{t.inside}</a>
            </div>
            <p className="mt-5 text-sm text-slate-400">{t.micro}</p>
          </div>
          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl">
            <Image src="/images/products/digitalna-prodaja-lokacije-cover.svg" alt="Digitalna prodaja lokacije cover" width={900} height={1272} priority className="mx-auto h-auto w-full max-w-[390px] rounded-[1.6rem]" />
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <span className="rounded-2xl border border-white/10 p-4 text-center">{t.price}</span>
              <span className="rounded-2xl border border-white/10 p-4 text-center">{t.regular}</span>
            </div>
          </aside>
        </div>
      </section>

      <Section tone="cream"><div className="grid gap-6 lg:grid-cols-2"><article className="rounded-[2rem] bg-white p-8"><h2 className="text-4xl font-semibold">{t.problemTitle}</h2><p className="mt-5 leading-8 text-[#706a5d]">{t.problemText}</p></article><article className="rounded-[2rem] bg-white p-8"><h2 className="text-4xl font-semibold">{t.productTitle}</h2><p className="mt-5 leading-8 text-[#706a5d]">{t.productText}</p></article></div></Section>

      <Section><div className="grid gap-6 lg:grid-cols-2"><article><h2 className="text-3xl font-semibold">{t.audienceTitle}</h2><ul className="mt-6 grid gap-3">{t.audience.map((x) => <li key={x} className="rounded-2xl bg-white p-4 text-[#706a5d]">{x}</li>)}</ul></article><article><h2 className="text-3xl font-semibold">{t.notForTitle}</h2><ul className="mt-6 grid gap-3">{t.notFor.map((x) => <li key={x} className="rounded-2xl bg-white p-4 text-[#706a5d]">{x}</li>)}</ul></article></div></Section>

      <Section tone="cream"><div id="inside" className="rounded-[2rem] bg-white p-8"><h2 className="text-4xl font-semibold">{t.includesTitle}</h2><div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-5">{t.includes.map((x) => <span key={x} className="rounded-2xl border border-black/10 bg-[#fffaf1] p-4 text-sm text-[#706a5d]">{x}</span>)}</div></div></Section>

      <Section><div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"><article><h2 className="text-4xl font-semibold">{t.methodTitle}</h2><p className="mt-5 leading-8 text-[#706a5d]">{t.methodText}</p></article><div className="grid gap-3 md:grid-cols-3">{t.methodSteps.map((x, i) => <div key={x} className="rounded-2xl border border-black/10 bg-white p-5 text-center"><span className="text-sm text-[#226bbf]">0{i + 1}</span><p className="mt-2 font-semibold">{x}</p></div>)}</div></div></Section>

      <Section tone="cream"><div className="grid gap-6 lg:grid-cols-2"><article className="rounded-[2rem] bg-white p-8"><h2 className="text-3xl font-semibold">{t.proofTitle}</h2><p className="mt-5 leading-8 text-[#706a5d]">{t.proofText}</p></article><article className="rounded-[2rem] bg-white p-8"><h2 className="text-3xl font-semibold">{t.purchaseTitle}</h2><ol className="mt-6 grid gap-3">{t.purchaseSteps.map((x, i) => <li key={x} className="rounded-2xl bg-[#fffaf1] p-4 text-[#706a5d]"><strong className="text-[#07142b]">0{i + 1}</strong> · {x}</li>)}</ol></article></div></Section>

      <Section><h2 className="text-4xl font-semibold">{t.faqTitle}</h2><div className="mt-7 grid gap-4 md:grid-cols-2">{t.faq.map(([q, a]) => <article key={q} className="rounded-[2rem] bg-white p-6"><h3 className="text-xl font-semibold">{q}</h3><p className="mt-3 leading-7 text-[#706a5d]">{a}</p></article>)}</div></Section>

      <Section tone="dark"><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="text-4xl font-semibold">{t.finalTitle}</h2><p className="mt-5 max-w-3xl leading-8 text-slate-300">{t.disclaimer}</p></div><Link href={checkoutUrl} className="rounded-full bg-[#f7fbff] px-7 py-4 text-sm font-semibold text-[#07142b]">{t.buy}</Link></div></Section>
    </SiteShell>
  );
}
