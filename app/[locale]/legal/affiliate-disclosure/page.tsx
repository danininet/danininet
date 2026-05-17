import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "Affiliate disclosure",
    title: "Affiliate preporuke moraju biti jasne, označene i bez lažnih obećanja.",
    text: "DaniniNet može koristiti affiliate linkove za digitalne i fizičke proizvode. Ako korisnik kupi preko takvog linka, DaniniNet može ostvariti proviziju bez dodatnog troška za korisnika.",
    blocks: [
      ["Kako označavamo affiliate linkove", "Kada je link affiliate ili može dovesti do provizije, to treba biti jasno naznačeno u relevantnom sadržaju, footeru, product bloku ili disclosure napomeni."],
      ["Nezavisnost preporuke", "Affiliate provizija ne sme biti razlog da se proizvod predstavi kao bolji nego što jeste. Preporuka mora imati kontekst, namenu, ograničenja i realnu upotrebu."],
      ["Bez garancija", "Affiliate preporuke ne garantuju zaradu, zdravlje, rezultate, prodaju, investitore, profit ili bilo kakav ishod."],
      ["Regionalna relevantnost", "Za DACH, Balkan i druga tržišta treba jasno razlikovati dostupnost, isporuku, uslove kupovine, cenu i lokalna pravila."],
    ],
    final: "Affiliate marketing na DaniniNet-u mora biti transparentan, urednički odgovoran i jasno odvojen od garancija rezultata.",
  },
  de: {
    eyebrow: "Affiliate Disclosure",
    title: "Affiliate-Empfehlungen müssen klar gekennzeichnet sein und ohne falsche Versprechen auskommen.",
    text: "DaniniNet kann Affiliate-Links für digitale und physische Produkte nutzen. Wenn Nutzer über solche Links kaufen, kann DaniniNet eine Provision erhalten, ohne zusätzliche Kosten für Nutzer.",
    blocks: [
      ["Kennzeichnung", "Wenn ein Link Affiliate-Charakter hat oder zu Provision führen kann, sollte dies im relevanten Inhalt, Footer, Produktblock oder Hinweis klar erkennbar sein."],
      ["Unabhängigkeit", "Eine Provision darf kein Grund sein, ein Produkt besser darzustellen als es ist. Empfehlungen brauchen Kontext, Zweck, Grenzen und reale Nutzung."],
      ["Keine Garantien", "Affiliate-Empfehlungen garantieren kein Einkommen, Gesundheit, Ergebnisse, Verkäufe, Investoren, Gewinn oder sonstige Resultate."],
      ["Regionale Relevanz", "Für DACH, Balkan und andere Märkte müssen Verfügbarkeit, Lieferung, Kaufbedingungen, Preis und lokale Regeln unterschieden werden."],
    ],
    final: "Affiliate Marketing auf DaniniNet muss transparent, redaktionell verantwortungsvoll und klar von Ergebnisgarantien getrennt sein.",
  },
  en: {
    eyebrow: "Affiliate disclosure",
    title: "Affiliate recommendations must be clear, disclosed and free of false promises.",
    text: "DaniniNet may use affiliate links for digital and physical products. If a user buys through such a link, DaniniNet may earn a commission at no additional cost to the user.",
    blocks: [
      ["How links are disclosed", "When a link is affiliate or may lead to a commission, this should be clearly indicated in the relevant content, footer, product block or disclosure notice."],
      ["Editorial independence", "Commission must not be a reason to overstate a product. A recommendation needs context, purpose, limitations and real use."],
      ["No guarantees", "Affiliate recommendations do not guarantee income, health, results, sales, investors, profit or any outcome."],
      ["Regional relevance", "For DACH, Balkan and other markets, availability, delivery, terms, pricing and local rules must be separated clearly."],
    ],
    final: "Affiliate marketing on DaniniNet must be transparent, editorially responsible and clearly separated from outcome guarantees.",
  },
} as const;

export default async function AffiliateDisclosurePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];
  return <SiteShell locale={lang} currentPath={`/${lang}/legal/affiliate-disclosure`}><SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} /><section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2">{t.blocks.map(([title,text]) => <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm"><h2 className="text-2xl font-semibold">{title}</h2><p className="mt-4 leading-8 text-[#706a5d]">{text}</p></article>)}</section><section className="bg-[#07142b] text-white"><div className="mx-auto max-w-7xl px-6 py-14"><p className="max-w-4xl text-xl leading-9 text-slate-300">{t.final}</p><Link href={`/${lang}/legal`} className="mt-8 inline-flex rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">Legal & Trust</Link></div></section></SiteShell>;
}
