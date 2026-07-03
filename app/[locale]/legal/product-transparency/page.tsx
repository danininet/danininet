import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "Product transparency",
    title: "Transparentnost proizvoda pre kupovine.",
    text: "Ova stranica objašnjava šta DaniniNet digitalni proizvod jeste, šta nije, kako nastaje i gde su njegove profesionalne granice.",
    sections: [
      ["Šta kupac stvarno kupuje", "Kupac ne kupuje obećanje prodaje, investitora ili profita. Kupuje strukturisan edukativni radni okvir: PDF/eBook, checkliste, modele pitanja, trust logiku, DACH komunikacioni okvir i primere nastale iz realnog DaniniHub OS rada."],
      ["Poreklo proizvoda", "DaniniNet proizvodi nastaju iz DaniniHub OS sistema i metode Pitaj AI — AI pita tebe. To znači da proizvod nije napravljen kao prazna AI brošura, nego kao uređeni nus-proizvod stvarnog rada: pitanja, provere, case study materijali, strukture, greške, korekcije i finalni artifact."],
      ["AI-assisted rad", "AI može biti korišćen za strukturu, prevod, DACH adaptaciju, formulacije, checkliste, vizuelne koncepte i SEO logiku. AI nije prikazan kao stručnjak, organ, advokat, finansijski savetnik ili garant ishoda. Odgovornost za objavu, proveru i upotrebu ostaje ljudska."],
      ["Šta proizvod ne radi", "Proizvod ne proverava pravni status, urbanističke uslove, poreske posledice, vrednost imovine, zdravstvene tvrdnje, investicionu sigurnost ili tehničku izvodljivost. Sve što zahteva stručnu proveru mora proveriti kvalifikovano lice."],
      ["Realna očekivanja", "Kupac može očekivati bolju strukturu razmišljanja, bolju pripremu sadržaja, jasnije granice komunikacije i ozbiljniji okvir za digitalnu prezentaciju. Kupac ne treba očekivati garantovan rezultat, automatsku prodaju, investitora, SEO poziciju, dozvolu, prihod ili poslovni uspeh."],
      ["Zašto je ovo važno", "Transparentnost štiti kupca i DaniniNet. Kupac mora pre kupovine videti granice proizvoda, a DaniniNet mora izbeći hype, lažnu sigurnost i nejasna obećanja. To je deo DACH trust standarda."],
    ],
  },
  de: {
    eyebrow: "Produkttransparenz",
    title: "Produkttransparenz vor dem Kauf.",
    text: "Diese Seite erklärt, was ein DaniniNet digitales Produkt ist, was es nicht ist, wie es entsteht und wo seine professionellen Grenzen liegen.",
    sections: [
      ["Was Käufer wirklich kaufen", "Käufer kaufen kein Versprechen für Verkauf, Investor oder Gewinn. Sie kaufen einen strukturierten edukativen Arbeitsrahmen: PDF/eBook, Checklisten, Fragemodelle, Trust-Logik, DACH-Kommunikationsrahmen und Beispiele aus realer DaniniHub OS Arbeit."],
      ["Herkunft des Produkts", "DaniniNet Produkte entstehen aus dem DaniniHub OS System und der Methode Frag die KI — die KI fragt dich. Das Produkt ist keine leere AI-Broschüre, sondern ein kuratiertes Nebenprodukt realer Arbeit: Fragen, Prüfungen, Case-Study-Material, Strukturen, Fehler, Korrekturen und finaler Artifact."],
      ["AI-assisted Arbeit", "AI kann für Struktur, Übersetzung, DACH-Adaption, Formulierungen, Checklisten, visuelle Konzepte und SEO-Logik eingesetzt werden. AI wird nicht als Fachperson, Behörde, Anwalt, Finanzberater oder Ergebnisgarant dargestellt. Verantwortung für Veröffentlichung, Prüfung und Nutzung bleibt menschlich."],
      ["Was das Produkt nicht leistet", "Das Produkt prüft keinen Rechtsstatus, keine Bau- oder Planungsbedingungen, keine Steuerfolgen, keinen Immobilienwert, keine Gesundheitsbehauptungen, keine Investitionssicherheit und keine technische Machbarkeit. Alles, was Fachprüfung erfordert, muss von qualifizierten Personen geprüft werden."],
      ["Realistische Erwartungen", "Käufer können bessere Denkstruktur, bessere Inhaltsvorbereitung, klarere Kommunikationsgrenzen und einen seriöseren Rahmen für digitale Präsentation erwarten. Käufer sollten keinen garantierten Verkauf, Investor, SEO-Rang, Genehmigung, Umsatz oder Geschäftserfolg erwarten."],
      ["Warum das wichtig ist", "Transparenz schützt Käufer und DaniniNet. Käufer müssen Grenzen vor dem Kauf sehen; DaniniNet muss Hype, Scheinsicherheit und unklare Versprechen vermeiden. Das ist Teil eines DACH Trust Standards."],
    ],
  },
  en: {
    eyebrow: "Product transparency",
    title: "Product transparency before purchase.",
    text: "This page explains what a DaniniNet digital product is, what it is not, how it is created and where its professional boundaries are.",
    sections: [
      ["What buyers actually buy", "Buyers do not buy a promise of sales, investors or profit. They buy a structured educational working framework: PDF/eBook, checklists, question models, trust logic, DACH communication structure and examples from real DaniniHub OS work."],
      ["Product origin", "DaniniNet products come from the DaniniHub OS system and the Ask AI — AI asks you method. The product is not an empty AI brochure, but a curated by-product of real work: questions, reviews, case-study material, structures, errors, corrections and a final artifact."],
      ["AI-assisted work", "AI may be used for structure, translation, DACH adaptation, wording, checklists, visual concepts and SEO logic. AI is not presented as a professional, authority, lawyer, financial advisor or outcome guarantor. Responsibility for publication, review and use remains human."],
      ["What the product does not do", "The product does not verify legal status, planning conditions, tax consequences, property value, health claims, investment safety or technical feasibility. Anything requiring professional review must be checked by qualified people."],
      ["Realistic expectations", "Buyers can expect better thinking structure, better content preparation, clearer communication boundaries and a more serious framework for digital presentation. Buyers should not expect guaranteed sales, investors, SEO ranking, permits, revenue or business success."],
      ["Why this matters", "Transparency protects buyers and DaniniNet. Buyers must see boundaries before purchase; DaniniNet must avoid hype, false certainty and unclear promises. This is part of a DACH trust standard."],
    ],
  },
} as const;

export default async function ProductTransparencyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];
  return (
    <SiteShell locale={lang} currentPath={`/${lang}/legal/product-transparency`}>
      <SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2">
        {t.sections.map(([title, text]) => (
          <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#15130f]">{title}</h2>
            <p className="mt-4 leading-8 text-[#706a5d]">{text}</p>
          </article>
        ))}
      </section>
      <section className="bg-[#07142b] text-white"><div className="mx-auto max-w-7xl px-6 py-14"><Link href={`/${lang}/legal`} className="inline-flex rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">Legal & Trust Center</Link></div></section>
    </SiteShell>
  );
}
