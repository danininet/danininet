import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "DaniniHub metoda",
    title: "Pitaj AI — AI pita tebe.",
    text: "Radni sistem za odluke: pitanje, potpitanje, dokaz, granica, artifact i test tržišta.",
    workflowTitle: "Operativni tok metode",
    workflow: ["Namera", "Pitanja", "Dokazi", "Granice", "Artifact", "Test"],
    blocks: [
      ["Namera pre teksta", "Prvo se definiše šta se gradi: proizvod, stranica, brief, email, affiliate preporuka ili članak."],
      ["Podpitanja", "Kratka pitanja razdvajaju činjenice, pretpostavke, rizike i ono što još nije spremno."],
      ["Dokaz pre tvrdnje", "Ako nema dokaza, ne piše se kao činjenica. Ako je pretpostavka, tako se i označava."],
      ["Granice pre CTA-a", "Pre prodaje se definiše šta proizvod ne obećava: profit, prodaju, dozvole, zdravlje, stručni savet ili rezultate."],
      ["Artifact kao izlaz", "Razgovor mora da izađe u nešto korisno: landing page, PDF, brief, email tok, checklist ili funnel."],
      ["Test tržišta", "Meri se signal: poseta, klik, pitanje, kupovina, refund, komentar ili zahtev za dodatnim materijalom."],
    ],
    bridgeTitle: "Kako se metoda koristi na DaniniNet-u",
    bridgeText: "Metoda se vidi kroz Digitalnu prodaju lokacije, product funnel, blog članke, affiliate pravila i budući health/water pravac.",
    ctaProduct: "Pogledaj proizvod",
    ctaBlog: "Čitaj blog",
  },
  de: {
    eyebrow: "DaniniHub Methode",
    title: "Frag die KI — die KI fragt dich.",
    text: "Arbeitssystem für Entscheidungen: Frage, Rückfrage, Beleg, Grenze, Artifact und Markttest.",
    workflowTitle: "Operativer Ablauf",
    workflow: ["Absicht", "Fragen", "Belege", "Grenzen", "Artifact", "Test"],
    blocks: [
      ["Absicht vor Text", "Zuerst wird definiert, was gebaut wird: Produkt, Seite, Brief, E-Mail, Empfehlung oder Artikel."],
      ["Rückfragen", "Kurze Fragen trennen Fakten, Annahmen, Risiken und offene Punkte."],
      ["Beleg vor Aussage", "Ohne Beleg wird nichts als Tatsache dargestellt."],
      ["Grenzen vor CTA", "Vor dem Verkauf wird definiert, was nicht versprochen wird."],
      ["Artifact als Ergebnis", "Der Dialog muss zu Landingpage, PDF, Brief, E-Mail-Fluss, Checkliste oder Funnel führen."],
      ["Markttest", "Gemessen werden Besuch, Klick, Frage, Kauf, Refund, Kommentar oder Materialanfrage."],
    ],
    bridgeTitle: "Wie die Methode auf DaniniNet genutzt wird",
    bridgeText: "Die Methode zeigt sich in Produkt, Funnel, Blog, Affiliate-Regeln und späterem Health/Water Bereich.",
    ctaProduct: "Produkt ansehen",
    ctaBlog: "Blog lesen",
  },
  en: {
    eyebrow: "DaniniHub method",
    title: "Ask AI — AI asks you.",
    text: "A working system for decisions: question, follow-up, proof, boundary, artifact and market test.",
    workflowTitle: "Operational flow",
    workflow: ["Intent", "Questions", "Proof", "Boundaries", "Artifact", "Test"],
    blocks: [
      ["Intent before text", "First define what is being built: product, page, brief, email, recommendation or article."],
      ["Follow-up questions", "Short questions separate facts, assumptions, risks and open points."],
      ["Proof before claim", "Without proof, it is not presented as fact."],
      ["Boundaries before CTA", "Before selling, define what is not promised."],
      ["Artifact as output", "The dialogue must produce a landing page, PDF, brief, email flow, checklist or funnel."],
      ["Market test", "Measure visits, clicks, questions, purchases, refunds, comments or material requests."],
    ],
    bridgeTitle: "How the method is used on DaniniNet",
    bridgeText: "The method appears in product, funnel, blog, affiliate rules and the future health/water direction.",
    ctaProduct: "View product",
    ctaBlog: "Read blog",
  },
} as const;

export default async function DaniniHubMetodPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang} currentPath={localizedPath(lang, "method")}>
      <SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} />
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2.5rem] bg-[#07142b] p-8 text-white shadow-[0_24px_70px_rgba(7,20,43,0.18)]">
          <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">{t.workflowTitle}</p>
          <div className="mt-8 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
            {t.workflow.map((step, index) => (
              <span key={step} className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-center text-sm text-slate-300">
                <strong className="block text-[#d7b46a]">0{index + 1}</strong>{step}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2 lg:grid-cols-3">
        {t.blocks.map(([title, text]) => (
          <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-4 leading-8 text-[#706a5d]">{text}</p>
          </article>
        ))}
      </section>
      <section className="bg-[#07142b] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[#b9d7f0]">DaniniNet bridge</p>
            <h2 className="mt-4 text-4xl font-semibold">{t.bridgeTitle}</h2>
            <p className="mt-5 max-w-3xl leading-8 text-slate-300">{t.bridgeText}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={localizedPath(lang, "dpl")} className="rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">{t.ctaProduct}</Link>
            <Link href={localizedPath(lang, "blog")} className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white">{t.ctaBlog}</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
