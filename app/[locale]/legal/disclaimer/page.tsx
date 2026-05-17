import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "Glavni disclaimer",
    title: "DaniniNet informiše, strukturira i objašnjava — ne garantuje ishod.",
    text: "Sadržaj, digitalni proizvodi, case study materijali, affiliate preporuke i AI-assisted strukture imaju edukativni i informativni karakter. Ne predstavljaju stručni savet i ne obećavaju rezultate.",
    blocks: [
      ["Edukativni karakter", "DaniniNet sadržaj služi za razumevanje, strukturisanje i bolju prezentaciju ideja, proizvoda, lokacija, zdravih navika i digitalnih tokova. Ne zamenjuje stručnu procenu."],
      ["Nije pravni, finansijski ili poreski savet", "Sadržaj ne predstavlja pravni, finansijski, poreski, investicioni, urbanistički, tehnički ili poslovni savet. Za konkretne odluke korisnik treba da uključi kvalifikovane stručnjake."],
      ["Nije medicinski savet", "Health/water sadržaj je edukativan. Ne dijagnostikuje, ne leči, ne propisuje terapiju i ne zamenjuje lekara, farmaceuta, nutricionistu ili drugog zdravstvenog stručnjaka."],
      ["Digitalni proizvodi", "PDF vodiči, bonus materijali, checklist-e i template-i su radni okviri. Ne garantuju prodaju, profit, investitora, SEO rezultat, tržišni uspeh, dozvole ili primenu u svakom slučaju."],
      ["Lokacije i case study materijali", "Materijali o lokacijama, mapama, vizualima, scenarijima i investitorskim gateway-ima su prezentacioni i edukativni. Ne predstavljaju ponudu za investiranje, urbanističku potvrdu, tehničku procenu ili dokaz izvodljivosti."],
      ["AI-assisted sadržaj", "AI može pomoći u strukturi i nacrtu, ali ne garantuje tačnost, potpunost, usklađenost, aktuelnost ili podobnost za konkretnu odluku. Ljudska provera ostaje obavezna."],
      ["Affiliate i eksterni servisi", "Affiliate linkovi, Gumroad, Brevo, hosting, alati i eksterni partneri imaju sopstvene uslove i politike. DaniniNet ne kontroliše njihove odluke, cene, dostupnost ili promene."],
      ["Bez garancija", "DaniniNet ne garantuje prodaju, profit, investitora, dozvole, tehničku izvodljivost, SEO rezultate, zdravstvene ishode, vrednost imovine, poslovni uspeh ili bilo koji drugi konkretan rezultat."],
    ],
    final: "Ako nešto zahteva stručnu proveru, ne treba se oslanjati samo na DaniniNet sadržaj, AI output, affiliate preporuku ili digitalni proizvod.",
  },
  de: {
    eyebrow: "Haupt-Disclaimer",
    title: "DaniniNet informiert, strukturiert und erklärt — garantiert aber kein Ergebnis.",
    text: "Inhalte, digitale Produkte, Case-Study-Materialien, Affiliate-Empfehlungen und KI-unterstützte Strukturen sind edukativ und informativ. Sie sind keine Fachberatung und versprechen keine Ergebnisse.",
    blocks: [
      ["Bildungscharakter", "DaniniNet Inhalte dienen Verständnis, Struktur und besserer Präsentation von Ideen, Produkten, Standorten, gesunden Routinen und digitalen Abläufen."],
      ["Keine Rechts-, Finanz- oder Steuerberatung", "Inhalte sind keine rechtliche, finanzielle, steuerliche, Investitions-, Planungs-, technische oder geschäftliche Beratung. Für konkrete Entscheidungen sollten Fachleute einbezogen werden."],
      ["Keine medizinische Beratung", "Health/Water-Inhalte sind edukativ. Sie diagnostizieren nicht, behandeln nicht, verschreiben keine Therapie und ersetzen keine medizinischen Fachpersonen."],
      ["Digitale Produkte", "PDF-Leitfäden, Bonusmaterialien, Checklisten und Templates sind Arbeitsrahmen. Sie garantieren keinen Verkauf, Gewinn, Investor, SEO-Erfolg, Genehmigungen oder Anwendbarkeit in jedem Fall."],
      ["Standorte und Case Studies", "Materialien zu Standorten, Karten, Visuals, Szenarien und Investor Gateways sind Präsentations- und Bildungsinhalte. Sie sind kein Investitionsangebot, keine Planungsbestätigung und kein Machbarkeitsnachweis."],
      ["KI-unterstützte Inhalte", "KI kann bei Struktur und Entwurf helfen, garantiert aber keine Richtigkeit, Vollständigkeit, Konformität, Aktualität oder Eignung für eine konkrete Entscheidung."],
      ["Affiliate und externe Dienste", "Affiliate-Links, Gumroad, Brevo, Hosting, Tools und externe Partner haben eigene Bedingungen. DaniniNet kontrolliert nicht deren Entscheidungen, Preise, Verfügbarkeit oder Änderungen."],
      ["Keine Garantien", "DaniniNet garantiert keinen Verkauf, Gewinn, Investor, Genehmigungen, technische Machbarkeit, SEO-Ergebnisse, Gesundheitsresultate, Immobilienwert, Geschäftserfolg oder sonstiges konkretes Ergebnis."],
    ],
    final: "Wenn ein Thema Fachprüfung erfordert, sollte man sich nicht allein auf DaniniNet Inhalte, KI-Output, Affiliate-Empfehlungen oder digitale Produkte verlassen.",
  },
  en: {
    eyebrow: "Main disclaimer",
    title: "DaniniNet informs, structures and explains — it does not guarantee outcomes.",
    text: "Content, digital products, case-study materials, affiliate recommendations and AI-assisted structures are educational and informational. They are not professional advice and do not promise results.",
    blocks: [
      ["Educational nature", "DaniniNet content helps users understand, structure and present ideas, products, locations, healthy habits and digital flows. It does not replace professional assessment."],
      ["Not legal, financial or tax advice", "Content is not legal, financial, tax, investment, planning, technical or business advice. Users should involve qualified professionals for concrete decisions."],
      ["Not medical advice", "Health/water content is educational. It does not diagnose, treat, prescribe therapy or replace a doctor, pharmacist, nutritionist or other health professional."],
      ["Digital products", "PDF guides, bonus materials, checklists and templates are working frameworks. They do not guarantee sales, profit, investors, SEO results, permits, market success or applicability in every case."],
      ["Locations and case studies", "Materials about locations, maps, visuals, scenarios and investor gateways are presentation and education materials. They are not an investment offer, planning confirmation, technical assessment or proof of feasibility."],
      ["AI-assisted content", "AI may help with structure and drafts, but does not guarantee accuracy, completeness, compliance, recency or suitability for a specific decision. Human review remains required."],
      ["Affiliate and external services", "Affiliate links, Gumroad, Brevo, hosting, tools and external partners have their own terms and policies. DaniniNet does not control their decisions, prices, availability or changes."],
      ["No guarantees", "DaniniNet does not guarantee sales, profit, investors, permits, technical feasibility, SEO results, health outcomes, property value, business success or any other concrete result."],
    ],
    final: "If a topic requires professional review, users should not rely only on DaniniNet content, AI output, affiliate recommendations or a digital product.",
  },
} as const;

export default async function DisclaimerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];
  return <SiteShell locale={lang} currentPath={`/${lang}/legal/disclaimer`}><SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} /><section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2">{t.blocks.map(([title,text]) => <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm"><h2 className="text-2xl font-semibold text-[#15130f]">{title}</h2><p className="mt-4 leading-8 text-[#706a5d]">{text}</p></article>)}</section><section className="bg-[#07142b] text-white"><div className="mx-auto max-w-7xl px-6 py-14"><p className="max-w-4xl text-xl leading-9 text-slate-300">{t.final}</p><Link href={`/${lang}/legal`} className="mt-8 inline-flex rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">Legal & Trust</Link></div></section></SiteShell>;
}
