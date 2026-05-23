import type { Metadata } from "next";
import Link from "next/link";
import { affiliateLinks } from "@/lib/affiliate-links";
import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    title: "UMH Technologie preko GrünePerlen",
    text: "Partnerska preporuka za DACH publiku u okviru DaniniNet health/water pravca. Predstavljeno kao affiliate link, bez medicinskih obećanja i bez tvrdnji o lečenju.",
    cta: "Otvori GrünePerlen shop",
    note: "Affiliate napomena: ako kupiš preko ovog linka, DaniniNet može ostvariti proviziju bez dodatnog troška za tebe.",
    blocks: ["Proveri proizvod, cenu, isporuku i uslove direktno na GrünePerlen stranici.", "Ovo nije medicinski savet, dijagnoza, terapija ili tvrdnja o zdravstvenom ishodu.", "Koristi DaniniHub pitanje: šta tačno očekuješ od proizvoda i šta moraš proveriti pre kupovine?"],
  },
  de: {
    title: "UMH Technologie über GrünePerlen",
    text: "Partnerempfehlung für DACH-Publikum im DaniniNet Health/Water-Bereich. Als Affiliate-Link gekennzeichnet, ohne medizinische Versprechen und ohne Heilungsbehauptungen.",
    cta: "GrünePerlen Shop öffnen",
    note: "Affiliate-Hinweis: Wenn du über diesen Link kaufst, kann DaniniNet eine Provision erhalten, ohne zusätzliche Kosten für dich.",
    blocks: ["Prüfe Produkt, Preis, Lieferung und Bedingungen direkt bei GrünePerlen.", "Dies ist keine medizinische Beratung, Diagnose, Therapie oder Aussage zu gesundheitlichen Ergebnissen.", "Nutze die DaniniHub-Frage: Was erwartest du konkret vom Produkt und was musst du vor dem Kauf prüfen?"],
  },
  en: {
    title: "UMH Technologie via GrünePerlen",
    text: "Partner recommendation for the DACH audience within the DaniniNet health/water direction. Presented as an affiliate link, without medical promises or healing claims.",
    cta: "Open GrünePerlen shop",
    note: "Affiliate notice: if you buy through this link, DaniniNet may receive a commission at no extra cost to you.",
    blocks: ["Check product, price, delivery and terms directly on the GrünePerlen website.", "This is not medical advice, diagnosis, treatment or a claim about health outcomes.", "Use the DaniniHub question: what exactly do you expect from the product and what must you verify before buying?"],
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang = normalizeLocale(locale) as Locale;
  const t = copy[lang];
  return { title: `${t.title} | DaniniNet`, description: t.text };
}

export default async function GruenePerlenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = normalizeLocale(locale) as Locale;
  const t = copy[lang];
  return <SiteShell locale={lang} currentPath={`/${lang}/partneri/umh-technologie-grueneperlen`}><SectionIntro eyebrow="Partner / Affiliate" title={t.title} text={t.text} /><section className="mx-auto max-w-5xl px-6 pb-16"><div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm"><p className="leading-8 text-[#706a5d]">{t.note}</p><div className="mt-6 grid gap-3">{t.blocks.map((block) => <p key={block} className="rounded-2xl bg-[#fffaf1] p-4 leading-7 text-[#706a5d]">{block}</p>)}</div><a href={affiliateLinks.gruenenPerlenUmh} target="_blank" rel="sponsored noopener noreferrer" className="mt-8 inline-flex rounded-full bg-[#07142b] px-7 py-4 text-sm font-semibold text-white">{t.cta}</a><Link href={`/${lang}/legal/affiliate-disclosure`} className="ml-4 mt-8 inline-flex rounded-full border border-black/10 px-7 py-4 text-sm font-semibold text-[#07142b]">Affiliate disclosure</Link></div></section></SiteShell>;
}
