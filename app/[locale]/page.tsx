import Link from "next/link";
import type { ReactNode } from "react";
import { SiteShell } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";
type VisualKey = "digital" | "affiliate" | "dialogue" | "proof" | "water";

type Copy = {
  routes: { products: string; product: string; blog: string; method: string; support: string; legal: string };
  nav: string[];
  hero: {
    eyebrow: string; title: string; subtitle: string; primary: string; secondary: string; proof: string; signals: string[];
    panelTitle: string; panelText: string; panelSteps: [string, string][];
  };
  system: { title: string; text: string; rows: [string, string][] };
  pillars: { key: VisualKey; label: string; title: string; text: string }[];
  product: { eyebrow: string; title: string; text: string; cta: string };
  method: { title: string; text: string; steps: string[] };
  content: { title: string; text: string; cards: { key: VisualKey; title: string; text: string }[] };
  trust: { title: string; text: string; items: string[] };
  final: { title: string; products: string; blog: string; legal: string };
};

const copy: Record<Locale, Copy> = {
  sr: {
    routes: { products: "proizvodi", product: "proizvodi/digitalna-prodaja-lokacije", blog: "blog", method: "daninihub-metod", support: "support", legal: "legal" },
    nav: ["Proizvodi", "Blog", "Metoda", "Support", "Legal"],
    hero: {
      eyebrow: "DaniniNet · DaniniHub artifact layer",
      title: "Od ideje do digitalnog prodajnog sistema — bez magije i praznih obećanja.",
      subtitle: "DaniniNet povezuje digitalne proizvode, affiliate sadržaj, AI dijalog, SEO i trust sloj u jasan tok: problem, dokaz, granica, ponuda i sledeći korak.",
      primary: "Pogledaj DPL proizvod",
      secondary: "Kako radi DaniniHub metoda",
      proof: "Glavni prodajni fokus: Digitalna prodaja lokacije",
      signals: ["DPL PDF + Bonus Pack", "Calije case study", "Affiliate disclosure", "AI transparentnost"],
      panelTitle: "Šta DaniniNet sada gradi",
      panelText: "Prvi cilj nije gomila stranica. Prvi cilj je stabilan prodajni tok: početna, DPL landing, trust, checkout, isporuka i sadržaj koji dovodi prave ljude.",
      panelSteps: [["01", "DPL proizvod kao glavni entry offer"], ["02", "Trust i legal sloj pre plaćenog prometa"], ["03", "SEO članci povezani sa proizvodom"], ["04", "Affiliate preporuke samo uz kontekst"]],
    },
    system: { title: "Nije poenta samo napraviti stranicu. Poenta je napraviti sistem koji ima smisao.", text: "Svaka ideja se posmatra kroz pitanje: kome služi, koji dokaz postoji, šta se prodaje, šta se ne sme obećati i koji je sledeći korak.", rows: [["Ideja", "Kome služi i zašto sada?"], ["Dokaz", "Šta postoji, a šta je pretpostavka?"], ["Sadržaj", "Koji problem objašnjava pre prodaje?"], ["Tok", "Kako posetilac prelazi u kupca, lead ili čitaoca?"]] },
    pillars: [
      { key: "digital", label: "Income", title: "Prodajni i affiliate sloj", text: "Digitalni proizvodi, affiliate marketing, Gumroad isporuka, landing stranice i kampanje." },
      { key: "dialogue", label: "Intelligence", title: "DaniniHub metoda", text: "AI dijalog, pitanja, razdvajanje činjenica od pretpostavki, rizici i odluke." },
      { key: "water", label: "Health", title: "Health / water pravac", text: "Voda, rutine, zdrav stil života i odgovoran affiliate okvir bez medicinskih obećanja." },
    ],
    product: { eyebrow: "Aktuelni proizvod", title: "Digitalna prodaja lokacije", text: "Vodič za pretvaranje parcele, stana, kuće, lokacije ili projekta u ozbiljniji digitalni prodajni tok.", cta: "Otvori proizvode" },
    method: { title: "Pitaj AI — AI pita tebe.", text: "AI se koristi kao partner za pitanja: da razdvoji činjenice od pretpostavki, prepozna rupe u argumentu, postavi granice i pomogne da sledeći korak postane konkretan artifact.", steps: ["Ideja", "Pitanja", "Dokazi", "Struktura", "Artifact", "Tržišna provera"] },
    content: { title: "Sadržaj koji gradi autoritet pre prodaje.", text: "Blog je SEO i edukativni sloj platforme: objašnjava probleme, povezuje proizvode, podržava affiliate preporuke i vodi čitaoca u sledeći logičan korak.", cards: [
      { key: "digital", title: "Digitalni marketing", text: "Landing, SEO, email logika, lead forma i struktura ponude." },
      { key: "affiliate", title: "Affiliate marketing", text: "Preporuke sa kontekstom, disclosure slojem i bez garancija." },
      { key: "dialogue", title: "AI u praksi", text: "Dijalog i pitanja umesto nasumičnog generisanja teksta." },
      { key: "proof", title: "Case studies", text: "Realni artifacti, javni/privatni sloj i proverljive granice." },
      { key: "water", title: "Health / Water", text: "Budući pravac bez medicinskih tvrdnji." },
    ] },
    trust: { title: "Poverenje se ne dodaje na kraju. Ono je deo sistema.", text: "DaniniNet razdvaja edukaciju od saveta, affiliate preporuku od garancije, AI pomoć od autoriteta i digitalni proizvod od obećanja rezultata.", items: ["Affiliate disclosure", "AI transparentnost", "GDPR / kolačići", "Health disclaimer"] },
    final: { title: "Kreni od proizvoda, metode ili sadržaja.", products: "Pogledaj proizvode", blog: "Čitaj blog", legal: "Legal & Trust" },
  },
  de: {
    routes: { products: "produkte", product: "produkte/digitaler-verkauf-von-standorten", blog: "blog", method: "methode", support: "support", legal: "legal" },
    nav: ["Produkte", "Blog", "Methode", "Support", "Legal"],
    hero: { eyebrow: "DaniniNet · DaniniHub Artifact Layer", title: "Von der Idee zum digitalen Verkaufssystem — ohne leere Versprechen.", subtitle: "DaniniNet verbindet digitale Produkte, Affiliate-Inhalte, KI-Dialog, SEO und Trust-Layer in einen klaren Flow: Problem, Beleg, Grenze, Angebot und nächster Schritt.", primary: "DPL Produkt ansehen", secondary: "DaniniHub Methode ansehen", proof: "Hauptfokus: Digitaler Verkauf von Standorten", signals: ["DPL PDF + Bonus Pack", "Calije Case Study", "Affiliate Disclosure", "KI-Transparenz"], panelTitle: "Was DaniniNet jetzt baut", panelText: "Der erste Fokus ist kein Seiten-Chaos, sondern ein stabiler Verkaufsflow: Startseite, DPL Landing, Trust, Checkout, Lieferung und SEO-Inhalte.", panelSteps: [["01", "DPL als Entry Offer"], ["02", "Trust vor Paid Traffic"], ["03", "SEO Artikel mit Produktbezug"], ["04", "Affiliate nur mit Kontext"]] },
    system: { title: "Es geht nicht nur darum, eine Seite zu bauen. Es geht darum, ein System mit Sinn zu bauen.", text: "Jede Idee wird über klare Fragen geprüft: wem dient sie, welche Belege gibt es, was wird verkauft, was darf nicht versprochen werden und was ist der nächste Schritt.", rows: [["Idee", "Wem dient sie und warum jetzt?"], ["Beleg", "Was existiert und was ist Annahme?"], ["Inhalt", "Welches Problem erklärt er vor dem Verkauf?"], ["Flow", "Wie wird aus Besuch Interesse, Kauf oder Lead?"]] },
    pillars: [{ key: "digital", label: "Income", title: "Verkauf und Affiliate", text: "Digitale Produkte, Affiliate Marketing, Gumroad-Auslieferung, Landingpages und Kampagnen." }, { key: "dialogue", label: "Intelligence", title: "DaniniHub Methode", text: "KI-Dialog, Fragen, Trennung von Fakten und Annahmen, Risiken und Entscheidungen." }, { key: "water", label: "Health", title: "Health / Water", text: "Wasser, Routinen und verantwortlicher Affiliate-Rahmen ohne medizinische Versprechen." }],
    product: { eyebrow: "Aktuelles Produkt", title: "Digitaler Verkauf von Standorten", text: "Ein Leitfaden, um Standort, Immobilie oder Projekt in einen seriöseren digitalen Verkaufsfluss zu übersetzen.", cta: "Produkte öffnen" },
    method: { title: "Frag die KI — die KI fragt dich.", text: "KI wird als Partner für Fragen eingesetzt: Fakten, Annahmen, Lücken, Grenzen und der nächste konkrete Artifact-Schritt.", steps: ["Idee", "Fragen", "Belege", "Struktur", "Artifact", "Marktprüfung"] },
    content: { title: "Inhalt, der Autorität vor dem Verkauf aufbaut.", text: "Der Blog ist die SEO- und Bildungsebene der Plattform.", cards: [{ key: "digital", title: "Digitales Marketing", text: "Landing, SEO, E-Mail-Logik und Angebotsstruktur." }, { key: "affiliate", title: "Affiliate Marketing", text: "Empfehlungen mit Kontext und Disclosure." }, { key: "dialogue", title: "KI in der Praxis", text: "Dialog und Fragen statt generischer Texte." }, { key: "proof", title: "Case Studies", text: "Reale Artefakte und Grenzen." }, { key: "water", title: "Health / Water", text: "Künftiger Bereich ohne medizinische Behauptungen." }] },
    trust: { title: "Vertrauen ist Teil des Systems.", text: "DaniniNet trennt Bildung, Empfehlung, KI-Unterstützung und Ergebnisversprechen sauber voneinander.", items: ["Affiliate Disclosure", "KI-Transparenz", "GDPR / Cookies", "Health Disclaimer"] },
    final: { title: "Starte mit Produkt, Methode oder Inhalt.", products: "Produkte ansehen", blog: "Blog lesen", legal: "Legal & Trust" },
  },
  en: {
    routes: { products: "products", product: "products/digital-location-sales", blog: "blog", method: "method", support: "support", legal: "legal" },
    nav: ["Products", "Blog", "Method", "Support", "Legal"],
    hero: { eyebrow: "DaniniNet · DaniniHub artifact layer", title: "From idea to digital sales system — without empty promises.", subtitle: "DaniniNet connects digital products, affiliate content, AI dialogue, SEO and trust into a clear flow: problem, proof, boundary, offer and next step.", primary: "View DPL product", secondary: "See the DaniniHub method", proof: "Main sales focus: Digital Location Sales", signals: ["DPL PDF + Bonus Pack", "Calije case study", "Affiliate disclosure", "AI transparency"], panelTitle: "What DaniniNet is building now", panelText: "The first focus is not page chaos. It is a stable sales flow: homepage, DPL landing, trust, checkout, delivery and product-linked SEO content.", panelSteps: [["01", "DPL as entry offer"], ["02", "Trust before paid traffic"], ["03", "SEO articles linked to product"], ["04", "Affiliate only with context"]] },
    system: { title: "The point is not just to build a page. The point is to build a system that makes sense.", text: "Every idea is examined through practical questions: who it serves, what proof exists, what is sold, what must not be promised and what the next step is.", rows: [["Idea", "Who does it serve and why now?"], ["Proof", "What exists and what is assumption?"], ["Content", "What problem does it explain before selling?"], ["Flow", "How does a visitor become a buyer, lead or reader?"]] },
    pillars: [{ key: "digital", label: "Income", title: "Sales and affiliate layer", text: "Digital products, affiliate marketing, Gumroad delivery, landing pages and campaigns." }, { key: "dialogue", label: "Intelligence", title: "DaniniHub method", text: "AI dialogue, questions, facts versus assumptions, risks and decisions." }, { key: "water", label: "Health", title: "Health / Water", text: "Water, routines and responsible affiliate framework without medical promises." }],
    product: { eyebrow: "Current product", title: "Digital Location Sales", text: "A guide for turning land, a property, a location or a project into a more serious digital sales flow.", cta: "Open products" },
    method: { title: "Ask AI — AI asks you.", text: "AI is used as a partner for questions: facts, assumptions, gaps, boundaries and the next concrete artifact.", steps: ["Idea", "Questions", "Proof", "Structure", "Artifact", "Market check"] },
    content: { title: "Content that builds authority before the sale.", text: "The blog is the SEO and educational layer of the platform.", cards: [{ key: "digital", title: "Digital marketing", text: "Landing, SEO, email logic and offer structure." }, { key: "affiliate", title: "Affiliate marketing", text: "Recommendations with context and disclosure." }, { key: "dialogue", title: "AI in practice", text: "Dialogue and questions instead of generic text." }, { key: "proof", title: "Case studies", text: "Real artifacts and boundaries." }, { key: "water", title: "Health / Water", text: "Future direction without medical claims." }] },
    trust: { title: "Trust is part of the system.", text: "DaniniNet separates education, recommendation, AI assistance and result promises clearly.", items: ["Affiliate disclosure", "AI transparency", "GDPR / Cookies", "Health disclaimer"] },
    final: { title: "Start with product, method or content.", products: "View products", blog: "Read blog", legal: "Legal & Trust" },
  },
};

function path(lang: Locale, slug: string) { return `/${lang}/${slug}`; }

function Icon({ type }: { type: VisualKey }) {
  const common = "stroke-[#C5A35A]";
  return <svg viewBox="0 0 80 80" className="h-12 w-12" fill="none" aria-hidden="true"><rect width="80" height="80" rx="22" fill="#071326" />{type === "digital" && <><rect x="18" y="24" width="44" height="30" rx="4" className={common} strokeWidth="2.4"/><path d="M16 60H64M28 46L36 38L42 44L54 32" stroke="#F8F3E8" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/></>}{type === "affiliate" && <><circle cx="30" cy="42" r="10" className={common} strokeWidth="2.4"/><circle cx="54" cy="28" r="8" stroke="#F8F3E8" strokeWidth="2.4"/><circle cx="54" cy="56" r="8" stroke="#F8F3E8" strokeWidth="2.4"/><path d="M39 38L47 32M39 46L47 52" className={common} strokeWidth="2.4" strokeLinecap="round"/></>}{type === "dialogue" && <><path d="M20 26H50C56 26 60 30 60 36V46C60 52 56 56 50 56H36L24 66V56H20C14 56 10 52 10 46V36C10 30 14 26 20 26Z" className={common} strokeWidth="2.4"/><path d="M28 38H44M28 46H50" stroke="#F8F3E8" strokeWidth="2.4" strokeLinecap="round"/></>}{type === "proof" && <><path d="M24 16H50L60 26V64H24V16Z" className={common} strokeWidth="2.4"/><path d="M50 16V26H60M32 38H50M32 46H48M32 54H42" stroke="#F8F3E8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></>}{type === "water" && <><path d="M40 14C40 14 26 33 26 46C26 55 32 64 40 64C48 64 54 55 54 46C54 33 40 14 40 14Z" className={common} strokeWidth="2.6"/><path d="M34 48C35 53 38 56 43 56" stroke="#F8F3E8" strokeWidth="2.4" strokeLinecap="round"/></>}</svg>;
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) { return <div className={`rounded-[2rem] border border-[#C5A35A]/20 bg-[#0A1424]/84 shadow-[0_24px_90px_rgba(0,0,0,0.22)] ${className}`}>{children}</div>; }

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = locale === "de" || locale === "en" ? locale : "sr";
  const t = copy[lang];

  return (
    <SiteShell locale={lang} currentPath={`/${lang}`}>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_10%,rgba(197,163,90,0.16),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(45,91,141,0.22),transparent_36%),linear-gradient(180deg,#05070A_0%,#071326_100%)] text-[#F8F3E8]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <p className="mb-6 inline-flex rounded-full border border-[#C5A35A]/35 bg-white/[0.05] px-4 py-2 text-sm text-[#E9D8A8]">{t.hero.eyebrow}</p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-tight md:text-7xl">{t.hero.title}</h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#D9E2EA]">{t.hero.subtitle}</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href={path(lang, t.routes.product)} className="rounded-full bg-[#F8F3E8] px-6 py-3 text-sm font-semibold text-[#071326]">{t.hero.primary}</Link>
                <Link href={path(lang, t.routes.method)} className="rounded-full border border-white/18 px-6 py-3 text-sm font-medium text-white">{t.hero.secondary}</Link>
              </div>
              <div className="mt-9 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4">{t.hero.signals.map((signal) => <span key={signal} className="rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-sm text-[#D9E2EA]">{signal}</span>)}</div>
            </div>
            <Card className="relative p-7">
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#C5A35A]/20 blur-3xl" />
              <p className="relative text-xs uppercase tracking-[0.24em] text-[#C5A35A]">{t.hero.proof}</p>
              <h2 className="relative mt-4 text-3xl font-semibold leading-tight text-white">{t.hero.panelTitle}</h2>
              <p className="relative mt-4 leading-8 text-[#D9E2EA]">{t.hero.panelText}</p>
              <div className="relative mt-6 grid gap-3">
                {t.hero.panelSteps.map(([num, label]) => <div key={num} className="rounded-2xl border border-white/10 bg-[#071326] p-4"><span className="text-xs text-[#C5A35A]">{num}</span><p className="mt-1 text-sm font-semibold text-white">{label}</p></div>)}
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-[#EFE6D6] text-[#171717]"><div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:px-8 lg:grid-cols-[1fr_0.9fr]"><div className="rounded-[2rem] bg-[#FFF8EA] p-8 shadow-[0_22px_70px_rgba(7,19,38,0.10)]"><h2 className="text-4xl font-semibold leading-tight md:text-5xl">{t.system.title}</h2><p className="mt-6 text-lg leading-9 text-[#625B51]">{t.system.text}</p></div><div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_22px_70px_rgba(7,19,38,0.08)]">{t.system.rows.map(([a, b]) => <div key={a} className="grid grid-cols-[0.34fr_0.66fr] border-b border-black/10 last:border-b-0"><div className="bg-[#071326] px-5 py-5 font-semibold text-[#E9D8A8]">{a}</div><div className="px-5 py-5 leading-7 text-[#625B51]">{b}</div></div>)}</div></div></section>
      <section className="bg-[#EFE6D6] text-[#171717]"><div className="mx-auto max-w-7xl px-6 pb-16 md:px-8"><div className="grid gap-6 md:grid-cols-3">{t.pillars.map((p) => <article key={p.title} className="rounded-[2rem] border border-black/10 bg-[#FFF8EA] p-7"><Icon type={p.key}/><p className="mt-6 text-sm uppercase tracking-[0.22em] text-[#8F7133]">{p.label}</p><h3 className="mt-3 text-2xl font-semibold">{p.title}</h3><p className="mt-4 leading-8 text-[#625B51]">{p.text}</p></article>)}</div></div></section>
      <section className="bg-[#F6EFE2] text-[#171717]"><div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div className="rounded-[2rem] border border-black/10 bg-[#FFF8EA] p-8"><p className="text-sm uppercase tracking-[0.22em] text-[#8F7133]">{t.product.eyebrow}</p><h2 className="mt-4 text-4xl font-semibold">{t.product.title}</h2><p className="mt-5 leading-8 text-[#625B51]">{t.product.text}</p><Link href={path(lang, t.routes.products)} className="mt-8 inline-flex rounded-full bg-[#071326] px-6 py-3 text-sm font-semibold text-[#F8F3E8]">{t.product.cta}</Link></div><div className="rounded-[2rem] border border-black/10 bg-white p-8"><h2 className="text-4xl font-semibold">{t.method.title}</h2><p className="mt-5 leading-8 text-[#625B51]">{t.method.text}</p><div className="mt-7 grid gap-3 md:grid-cols-3">{t.method.steps.map((s, i) => <div key={s} className="rounded-2xl border border-black/10 bg-[#F6EFE2] p-4 text-center"><span className="text-xs text-[#8F7133]">0{i + 1}</span><p className="font-semibold">{s}</p></div>)}</div></div></div></section>
      <section className="bg-[#EFE6D6] text-[#171717]"><div className="mx-auto max-w-7xl px-6 py-16 md:px-8"><div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]"><h2 className="text-4xl font-semibold md:text-5xl">{t.content.title}</h2><p className="text-lg leading-9 text-[#625B51]">{t.content.text}</p></div><div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-5">{t.content.cards.map((c) => <article key={c.title} className="rounded-3xl border border-black/10 bg-[#FFF8EA] p-6"><Icon type={c.key}/><h3 className="mt-5 text-xl font-semibold">{c.title}</h3><p className="mt-3 leading-7 text-[#625B51]">{c.text}</p></article>)}</div></div></section>
      <section className="bg-[#071326] text-[#F8F3E8]"><div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:px-8 lg:grid-cols-[0.9fr_1.1fr]"><div><h2 className="text-4xl font-semibold md:text-5xl">{t.trust.title}</h2><p className="mt-6 text-lg leading-9 text-[#D9E2EA]">{t.trust.text}</p></div><div className="grid gap-4">{t.trust.items.map((item, i) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5"><span className="mr-4 text-[#C5A35A]">0{i + 1}</span>{item}</div>)}</div></div><div className="mx-auto max-w-7xl px-6 pb-16 md:px-8"><div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8"><h2 className="text-4xl font-semibold">{t.final.title}</h2><div className="mt-8 flex flex-wrap gap-4"><Link href={path(lang, t.routes.products)} className="rounded-full bg-[#F8F3E8] px-6 py-3 text-sm font-semibold text-[#071326]">{t.final.products}</Link><Link href={path(lang, t.routes.blog)} className="rounded-full border border-white/18 px-6 py-3 text-sm">{t.final.blog}</Link><Link href={path(lang, t.routes.legal)} className="rounded-full border border-white/18 px-6 py-3 text-sm">{t.final.legal}</Link></div></div></div></section>
    </SiteShell>
  );
}
