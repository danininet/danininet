import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

const copy = {
  sr: {
    eyebrow: "DaniniHub OS",
    title: "Pitaj AI — AI pita tebe.",
    text: "Metoda za rad sa AI u kojoj čovek ne prepisuje promptove, nego vodi dijalog: razdvaja činjenice od pretpostavki, prepoznaje rizike i donosi odluke na osnovu jasnije strukture.",
    blocks: [
      ["Prvo pitanje", "Ne kreće se od generičkog šablona. Kreće se od stvarne namere: šta želiš da prodaš, kome, zašto bi neko verovao i koji dokaz već postoji."],
      ["AI kao ogledalo", "AI vraća potpitanja, razdvaja javno od poverljivog, vidi rupe u argumentu i pomaže da se sledeći korak formuliše bez izmišljanja."],
      ["Čovek odlučuje", "AI ne garantuje ishod, ne menja stručnjake i ne donosi odluke. Korisnik zadržava odgovornost, kontekst i finalnu procenu."],
      ["Artifact kao dokaz", "Rezultat razgovora mora izaći u nešto proverljivo: stranica, brief, email tok, PDF, lead forma, legal sloj ili test tržišnog interesa."],
    ],
    bridgeTitle: "Kako se ovo povezuje sa DaniniNet-om",
    bridgeText: "DaniniNet je javni kanal ove metode: digitalni proizvodi, affiliate preporuke, SEO članci, case study projekti i health/water sadržaj moraju imati istu logiku — jasnoća, dokaz, granice i poverenje.",
  },
  de: {
    eyebrow: "DaniniHub OS",
    title: "Frag die KI — die KI fragt dich.",
    text: "Eine Methode für KI-Arbeit, bei der der Mensch keine Prompts kopiert, sondern einen Dialog führt: Fakten und Annahmen trennen, Risiken erkennen und Entscheidungen klarer strukturieren.",
    blocks: [
      ["Die erste Frage", "Der Prozess beginnt nicht mit einem generischen Template, sondern mit der echten Absicht: was angeboten wird, für wen, warum Vertrauen entstehen soll und welcher Beleg bereits existiert."],
      ["KI als Spiegel", "KI stellt Rückfragen, trennt öffentliche von vertraulichen Informationen, erkennt Lücken im Argument und hilft beim nächsten Schritt ohne Erfindungen."],
      ["Der Mensch entscheidet", "KI garantiert kein Ergebnis, ersetzt keine Fachleute und trifft keine Entscheidungen. Verantwortung, Kontext und finale Bewertung bleiben beim Nutzer."],
      ["Artifact als Beleg", "Das Ergebnis muss sichtbar werden: Website, Brief, E-Mail-Fluss, PDF, Lead-Formular, Legal-Ebene oder Markttest."],
    ],
    bridgeTitle: "Wie das mit DaniniNet verbunden ist",
    bridgeText: "DaniniNet ist der öffentliche Kanal dieser Methode: digitale Produkte, Affiliate-Empfehlungen, SEO-Artikel, Case Studies und Health/Water-Inhalte folgen derselben Logik — Klarheit, Beleg, Grenzen und Vertrauen.",
  },
  en: {
    eyebrow: "DaniniHub OS",
    title: "Ask AI — AI asks you.",
    text: "A method for working with AI where the human does not copy prompts, but leads a dialogue: separating facts from assumptions, seeing risks and making decisions with clearer structure.",
    blocks: [
      ["The first question", "The process does not start with a generic template. It starts with real intent: what you want to offer, for whom, why anyone should trust it and what proof already exists."],
      ["AI as mirror", "AI asks follow-up questions, separates public from confidential information, spots gaps in the argument and helps define the next step without inventing facts."],
      ["Human decision", "AI does not guarantee outcomes, replace professionals or make decisions. Responsibility, context and final judgment stay with the user."],
      ["Artifact as proof", "The result must become something visible: site, brief, email flow, PDF, lead form, legal layer or market-interest test."],
    ],
    bridgeTitle: "How this connects to DaniniNet",
    bridgeText: "DaniniNet is the public channel of this method: digital products, affiliate recommendations, SEO articles, case studies and health/water content follow the same logic — clarity, evidence, boundaries and trust.",
  },
} as const;

export default async function DaniniHubMetodPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang}>
      <SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2">
        {t.blocks.map(([title, text]) => (
          <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-4 leading-8 text-[#706a5d]">{text}</p>
          </article>
        ))}
      </section>
      <section className="bg-[#07142b] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-sm uppercase tracking-[0.22em] text-[#b9d7f0]">DaniniNet bridge</p>
          <h2 className="mt-4 text-4xl font-semibold">{t.bridgeTitle}</h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-300">{t.bridgeText}</p>
        </div>
      </section>
    </SiteShell>
  );
}
