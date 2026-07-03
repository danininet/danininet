import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "DaniniHub OS",
    title: "DaniniHub OS je izvor sistema. DaniniNet je javni kanal.",
    text: "Ova stranica objašnjava vezu između DaniniHub OS, metode Pitaj AI - AI pita tebe i DaniniNet digitalnih proizvoda.",
    steps: ["DaniniHub OS", "Pitaj AI - AI pita tebe", "Artifact proces", "Case study", "DaniniNet", "Digitalni proizvod"],
    cards: [
      ["Sistem", "DaniniHub OS je radni sistem za dijalog, strukturu, proveru, artifacte i odvajanje činjenica od pretpostavki."],
      ["Metoda", "Pitaj AI - AI pita tebe koristi AI da pomogne korisniku da postavlja bolja pitanja, vidi rupe u argumentu i jasnije organizuje sledeći korak."],
      ["Javni kanal", "DaniniNet je javni sloj za edukativne proizvode, affiliate sadržaj, case study prezentacije, support, prodaju i distribuciju."],
      ["Nus-proizvodi", "PDF, eBook, checkliste i mini audit ponude nisu magična rešenja. To su nus-proizvodi realnog sistema i rada."],
      ["Granice", "AI ne zamenjuje advokata, finansijskog savetnika, urbanistu, tehničkog stručnjaka, lekara ili ljudsku odgovornost."],
      ["Transparentnost", "Kupac mora znati da je proizvod AI-assisted, edukativan i ograničen, bez garancije prodaje, profita, investitora ili rezultata."],
    ],
  },
  de: {
    eyebrow: "DaniniHub OS",
    title: "DaniniHub OS ist der Systemursprung. DaniniNet ist der öffentliche Kanal.",
    text: "Diese Seite erklärt die Verbindung zwischen DaniniHub OS, der Methode Frag die KI - die KI fragt dich und DaniniNet digitalen Produkten.",
    steps: ["DaniniHub OS", "Frag die KI - die KI fragt dich", "Artifact-Prozess", "Case Study", "DaniniNet", "Digitales Produkt"],
    cards: [
      ["System", "DaniniHub OS ist ein Arbeitssystem für Dialog, Struktur, Prüfung, Artefakte und die Trennung von Fakten und Annahmen."],
      ["Methode", "Frag die KI - die KI fragt dich nutzt AI, um bessere Fragen zu stellen, Lücken zu erkennen und den nächsten Schritt klarer zu organisieren."],
      ["Öffentlicher Kanal", "DaniniNet ist die öffentliche Ebene für edukative Produkte, Affiliate-Inhalte, Case Studies, Support, Verkauf und Distribution."],
      ["Nebenprodukte", "PDF, eBook, Checklisten und Mini-Audit-Angebote sind keine magischen Lösungen. Sie sind Nebenprodukte realer Systemarbeit."],
      ["Grenzen", "AI ersetzt keine Rechtsanwälte, Finanzberater, Planer, technische Fachleute, Ärzte oder menschliche Verantwortung."],
      ["Transparenz", "Käufer müssen wissen, dass das Produkt AI-assisted, edukativ und begrenzt ist, ohne Garantie für Verkauf, Gewinn, Investor oder Ergebnis."],
    ],
  },
  en: {
    eyebrow: "DaniniHub OS",
    title: "DaniniHub OS is the system origin. DaniniNet is the public channel.",
    text: "This page explains the connection between DaniniHub OS, the Ask AI - AI asks you method and DaniniNet digital products.",
    steps: ["DaniniHub OS", "Ask AI - AI asks you", "Artifact process", "Case study", "DaniniNet", "Digital product"],
    cards: [
      ["System", "DaniniHub OS is a working system for dialogue, structure, verification, artifacts and separating facts from assumptions."],
      ["Method", "Ask AI - AI asks you uses AI to ask better questions, identify gaps and organize the next step more clearly."],
      ["Public channel", "DaniniNet is the public layer for educational products, affiliate content, case studies, support, sales and distribution."],
      ["By-products", "PDFs, eBooks, checklists and mini audit offers are not magic solutions. They are by-products of real system work."],
      ["Boundaries", "AI does not replace lawyers, financial advisors, planners, technical experts, doctors or human responsibility."],
      ["Transparency", "Buyers must know the product is AI-assisted, educational and limited, without guarantee of sales, profit, investors or outcomes."],
    ],
  },
} as const;

export default async function DaniniHubOSPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang} currentPath={`/${lang}/legal/daninihub-os`}>
      <SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} />
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="rounded-[2.5rem] bg-[#07142b] p-8 text-white shadow-[0_24px_70px_rgba(7,20,43,0.18)]">
          <div className="flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#d7b46a]">
            {t.steps.map((step, index) => <span key={step}>{step}{index < t.steps.length - 1 ? " ->" : ""}</span>)}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2">
        {t.cards.map(([title, text]) => (
          <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#15130f]">{title}</h2>
            <p className="mt-4 leading-8 text-[#706a5d]">{text}</p>
          </article>
        ))}
      </section>
      <section className="bg-[#07142b] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <Link href={`/${lang}/legal`} className="inline-flex rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">Legal & Trust Center</Link>
        </div>
      </section>
    </SiteShell>
  );
}
