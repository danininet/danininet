import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "AI transparentnost",
    title: "AI je deo DaniniHub metode, ali nije zamena za ljudsku odgovornost.",
    text: "DaniniNet otvoreno koristi AI kao radni alat za pitanja, strukturu, nacrte, analizu rizika i digitalne artifacte. To se ne prikriva, jer je pravilno korišćenje AI deo metode Pitaj AI — AI pita tebe.",
    blocks: [
      ["Kako se AI koristi", "AI pomaže u strukturisanju pitanja, razdvajanju činjenica od pretpostavki, organizaciji sadržaja, pripremi nacrta, izradi checklist-a, analizi rizika i definisanju sledećeg proverljivog koraka."],
      ["Kako se AI ne koristi", "AI se ne predstavlja kao pravni, finansijski, poreski, urbanistički, tehnički, zdravstveni ili investicioni autoritet. AI ne donosi odluke umesto korisnika i ne garantuje tačnost, ishod ili rezultate."],
      ["DaniniHub metoda", "Metoda Pitaj AI — AI pita tebe zasniva se na dijalogu. AI ne služi samo da isporuči tekst, već da postavi bolja pitanja, označi rupe u argumentu, odvoji dokaz od pretpostavke i pomogne da razgovor postane artifact."],
      ["Ljudska provera", "Sadržaj koji nastane uz pomoć AI mora biti pregledan, prilagođen kontekstu i, kada je potrebno, proveren od strane stručnjaka. Posebno za lokacije, zdravlje, finansije, pravne uslove i tehničku izvodljivost."],
    ],
    finalTitle: "Kratka AI napomena",
    finalText: "AI može pomoći u strukturi, ali ne zamenjuje stručnu proveru, odgovornost, dokumentaciju i ljudsku odluku.",
  },
  de: {
    eyebrow: "KI-Transparenz",
    title: "KI ist Teil der DaniniHub Methode, aber kein Ersatz für menschliche Verantwortung.",
    text: "DaniniNet nutzt KI offen als Arbeitswerkzeug für Fragen, Struktur, Entwürfe, Risikoanalyse und digitale Artefakte. Das wird nicht versteckt, weil der bewusste KI-Einsatz Teil der Methode Frag die KI — die KI fragt dich ist.",
    blocks: [
      ["Wie KI genutzt wird", "KI hilft bei der Strukturierung von Fragen, Trennung von Fakten und Annahmen, Organisation von Inhalten, Entwürfen, Checklisten, Risikoanalyse und dem nächsten überprüfbaren Schritt."],
      ["Wie KI nicht genutzt wird", "KI wird nicht als Rechts-, Finanz-, Steuer-, Planungs-, Technik-, Gesundheits- oder Anlageautorität dargestellt. KI entscheidet nicht für Nutzer und garantiert keine Richtigkeit oder Ergebnisse."],
      ["DaniniHub Methode", "Die Methode Frag die KI — die KI fragt dich basiert auf Dialog. KI liefert nicht nur Text, sondern stellt bessere Fragen, zeigt Lücken und verwandelt Gespräche in Artefakte."],
      ["Menschliche Prüfung", "KI-unterstützte Inhalte müssen geprüft, angepasst und bei Bedarf durch Fachleute kontrolliert werden — besonders bei Standorten, Gesundheit, Finanzen, Recht und Technik."],
    ],
    finalTitle: "Kurzer KI-Hinweis",
    finalText: "KI kann Struktur liefern, ersetzt aber keine Fachprüfung, Verantwortung, Dokumentation oder menschliche Entscheidung.",
  },
  en: {
    eyebrow: "AI transparency",
    title: "AI is part of the DaniniHub method, but not a replacement for human responsibility.",
    text: "DaniniNet openly uses AI as a working tool for questions, structure, drafts, risk analysis and digital artifacts. This is not hidden, because responsible AI use is part of the Ask AI — AI asks you method.",
    blocks: [
      ["How AI is used", "AI helps structure questions, separate facts from assumptions, organize content, prepare drafts, create checklists, analyze risk and define the next verifiable step."],
      ["How AI is not used", "AI is not presented as a legal, financial, tax, planning, technical, health or investment authority. AI does not make decisions for users and does not guarantee accuracy or outcomes."],
      ["DaniniHub method", "The Ask AI — AI asks you method is based on dialogue. AI is not used only to generate text, but to ask better questions, reveal gaps and turn conversations into artifacts."],
      ["Human review", "AI-assisted content must be reviewed, adapted to context and, where needed, checked by professionals — especially for locations, health, finance, law and technical feasibility."],
    ],
    finalTitle: "Short AI notice",
    finalText: "AI may help with structure, but it does not replace expert review, responsibility, documentation or human decision-making.",
  },
} as const;

export default async function AiTransparencyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];
  return (
    <SiteShell locale={lang} currentPath={`/${lang}/legal/ai-transparentnost`}>
      <SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2">
        {t.blocks.map(([title, text]) => <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm"><h2 className="text-2xl font-semibold">{title}</h2><p className="mt-4 leading-8 text-[#706a5d]">{text}</p></article>)}
      </section>
      <section className="bg-[#07142b] text-white"><div className="mx-auto max-w-7xl px-6 py-14"><h2 className="text-4xl font-semibold">{t.finalTitle}</h2><p className="mt-5 max-w-3xl leading-8 text-slate-300">{t.finalText}</p><Link href={`/${lang}/legal`} className="mt-8 inline-flex rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">Legal & Trust</Link></div></section>
    </SiteShell>
  );
}
