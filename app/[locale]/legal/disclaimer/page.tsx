import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "Glavni disclaimer",
    title: "DaniniNet informiše, strukturira i objašnjava — ne garantuje ishod.",
    text: "Sadržaj, digitalni proizvodi, case study materijali i AI-assisted strukture imaju edukativni i informativni karakter. Ne predstavljaju stručni savet i ne obećavaju rezultate.",
    blocks: [
      ["Digitalni proizvodi", "PDF vodiči, bonus materijali, checklist-e i template-i služe kao radni okviri. Ne garantuju prodaju, profit, investitora, tržišni uspeh ili primenu u svakom slučaju."],
      ["Lokacije i case study materijali", "Materijali o lokacijama, mapama, vizualima, scenarijima i investitorskim gateway-ima su prezentacioni i edukativni. Ne predstavljaju ponudu za investiranje, urbanističku potvrdu ili tehničku procenu."],
      ["Stručne provere", "Korisnik mora samostalno proveriti pravni status, dokumentaciju, urbanističke uslove, infrastrukturu, tehničku izvodljivost, poreze i finansijske parametre uz kvalifikovane stručnjake."],
      ["AI-assisted sadržaj", "AI može pomoći u strukturi i nacrtu, ali ne garantuje tačnost, potpunost, usklađenost ili podobnost za konkretnu odluku."],
    ],
    final: "Ako nešto zahteva stručnu proveru, ne treba se oslanjati samo na DaniniNet sadržaj, AI output ili digitalni proizvod.",
  },
  de: {
    eyebrow: "Haupt-Disclaimer",
    title: "DaniniNet informiert, strukturiert und erklärt — garantiert aber kein Ergebnis.",
    text: "Inhalte, digitale Produkte, Case-Study-Materialien und KI-unterstützte Strukturen sind edukativ und informativ. Sie sind keine Fachberatung und versprechen keine Ergebnisse.",
    blocks: [
      ["Digitale Produkte", "PDF-Leitfäden, Bonusmaterialien, Checklisten und Templates sind Arbeitsrahmen. Sie garantieren keinen Verkauf, Gewinn, Investor, Markterfolg oder Anwendung in jedem Einzelfall."],
      ["Standorte und Case Studies", "Materialien zu Standorten, Karten, Visuals, Szenarien und Investor Gateways sind präsentativ und edukativ. Sie sind kein Investitionsangebot, keine Planungsbestätigung und keine technische Bewertung."],
      ["Fachprüfungen", "Nutzer müssen rechtlichen Status, Dokumentation, Planung, Infrastruktur, technische Machbarkeit, Steuern und finanzielle Parameter mit qualifizierten Fachleuten prüfen."],
      ["KI-unterstützte Inhalte", "KI kann bei Struktur und Entwurf helfen, garantiert aber keine Richtigkeit, Vollständigkeit, Konformität oder Eignung für eine konkrete Entscheidung."],
    ],
    final: "Wenn ein Thema Fachprüfung erfordert, sollte man sich nicht allein auf DaniniNet Inhalte, KI-Output oder digitale Produkte verlassen.",
  },
  en: {
    eyebrow: "Main disclaimer",
    title: "DaniniNet informs, structures and explains — it does not guarantee outcomes.",
    text: "Content, digital products, case-study materials and AI-assisted structures are educational and informational. They are not professional advice and do not promise results.",
    blocks: [
      ["Digital products", "PDF guides, bonus materials, checklists and templates are working frameworks. They do not guarantee sales, profit, investors, market success or applicability in every case."],
      ["Locations and case studies", "Materials about locations, maps, visuals, scenarios and investor gateways are presentation and education materials. They are not an investment offer, planning confirmation or technical assessment."],
      ["Professional checks", "Users must independently verify legal status, documents, planning conditions, infrastructure, technical feasibility, taxes and financial parameters with qualified professionals."],
      ["AI-assisted content", "AI may help with structure and drafts, but does not guarantee accuracy, completeness, compliance or suitability for a specific decision."],
    ],
    final: "If a topic requires professional review, users should not rely only on DaniniNet content, AI output or a digital product.",
  },
} as const;

export default async function DisclaimerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];
  return <SiteShell locale={lang} currentPath={`/${lang}/legal/disclaimer`}><SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} /><section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2">{t.blocks.map(([title,text]) => <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm"><h2 className="text-2xl font-semibold">{title}</h2><p className="mt-4 leading-8 text-[#706a5d]">{text}</p></article>)}</section><section className="bg-[#07142b] text-white"><div className="mx-auto max-w-7xl px-6 py-14"><p className="max-w-4xl text-xl leading-9 text-slate-300">{t.final}</p><Link href={`/${lang}/legal`} className="mt-8 inline-flex rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">Legal & Trust</Link></div></section></SiteShell>;
}
