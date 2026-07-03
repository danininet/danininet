import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    title: "Trust centar za DaniniNet proizvode.",
    text: "DaniniNet ne sme prodavati maglu. Pre kupovine korisnik mora razumeti poreklo proizvoda, AI-assisted metod, digitalnu isporuku, podatke, affiliate odnose i granice odgovornosti.",
    lead: "DaniniHub OS je izvor rada; DaniniNet je javni kanal. Proizvodi su edukativni artifacti nastali iz pitanja, provere, korekcija i realnih case study procesa.",
    blocks: [["Šta kupac dobija", "Strukturu, checkliste, radni okvir, pitanja i orijentaciju za profesionalniju digitalnu prezentaciju."], ["Šta kupac ne dobija", "Ne dobija garanciju prodaje, investitora, profita, SEO pozicije, dozvole ili poslovnog ishoda."], ["Zašto postoji ovaj trust sloj", "Da korisnik pre kupovine vidi pravila igre: šta je proizvod, šta su granice, kako se koriste podaci i kako radi digitalna isporuka."]],
  },
  de: {
    title: "Vertrauenszentrum für DaniniNet Produkte.",
    text: "DaniniNet darf keine Luft verkaufen. Vor dem Kauf müssen Nutzer Herkunft, AI-assisted Methode, digitale Lieferung, Daten, Affiliate-Beziehungen und Verantwortungsgrenzen verstehen.",
    lead: "DaniniHub OS ist der Ursprung der Arbeit; DaniniNet ist der öffentliche Kanal. Produkte sind edukative Artefakte aus Fragen, Prüfung, Korrektur und realen Case-Study-Prozessen.",
    blocks: [["Was Käufer erhalten", "Struktur, Checklisten, Arbeitsrahmen, Fragen und Orientierung für eine professionellere digitale Präsentation."], ["Was Käufer nicht erhalten", "Keine Garantie für Verkauf, Investor, Gewinn, SEO-Position, Genehmigung oder Geschäftserfolg."], ["Warum diese Vertrauensebene existiert", "Nutzer sollen vor dem Kauf die Regeln sehen: was das Produkt ist, wo Grenzen liegen, wie Daten genutzt werden und wie digitale Lieferung funktioniert."]],
  },
  en: {
    title: "Trust center for DaniniNet products.",
    text: "DaniniNet must not sell empty promises. Before purchase, users must understand product origin, AI-assisted method, digital delivery, data, affiliate relationships and responsibility limits.",
    lead: "DaniniHub OS is the origin of the work; DaniniNet is the public channel. Products are educational artifacts from questions, review, corrections and real case-study processes.",
    blocks: [["What buyers receive", "Structure, checklists, working framework, questions and orientation for more professional digital presentation."], ["What buyers do not receive", "No guarantee of sales, investors, profit, SEO position, permits or business outcomes."], ["Why this trust layer exists", "Users should see the rules before purchase: what the product is, where limits apply, how data is used and how digital delivery works."]],
  },
} as const;

const links = [
  ["daninihub-os", "DaniniHub OS", "System"],
  ["product-transparency", "Product transparency", "Product"],
  ["rueckgabe", "Rückgabe", "Delivery"],
  ["privacy", "Privacy / GDPR", "Data"],
  ["terms", "Terms", "Terms"],
  ["disclaimer", "Disclaimer", "Limits"],
  ["affiliate-disclosure", "Affiliate disclosure", "Affiliate"],
  ["ai-transparentnost", "AI transparency", "AI"],
  ["cookies", "Cookies", "Tracking"],
  ["impressum", "Impressum", "Contact"],
] as const;

export default async function LegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];
  return <SiteShell locale={lang} currentPath={`/${lang}/legal`}><SectionIntro eyebrow="Legal & Trust Center" title={t.title} text={t.text} /><section className="mx-auto max-w-7xl px-6 pb-12"><div className="rounded-[2.5rem] bg-[#07142b] p-8 text-white shadow-[0_24px_70px_rgba(7,20,43,0.18)]"><p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">DaniniHub OS</p><h2 className="mt-4 text-4xl font-semibold">Pitaj AI — AI pita tebe</h2><p className="mt-5 max-w-4xl leading-8 text-slate-300">{t.lead}</p></div></section><section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-3">{t.blocks.map(([title, text]) => <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm"><h2 className="text-2xl font-semibold text-[#15130f]">{title}</h2><p className="mt-4 leading-8 text-[#706a5d]">{text}</p></article>)}</section><section className="mx-auto grid max-w-7xl gap-4 px-6 pb-16 md:grid-cols-2 lg:grid-cols-5">{links.map(([href, title, label]) => <Link key={href} href={`/${lang}/legal/${href}`} className="rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1"><p className="text-xs uppercase tracking-[0.2em] text-[#226bbf]">{label}</p><h2 className="mt-3 text-lg font-semibold text-[#15130f]">{title}</h2></Link>)}</section></SiteShell>;
}
