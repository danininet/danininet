import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "Knjiga utisaka",
    title: "Poverenje se gradi javno, ali se moderira odgovorno.",
    text: "Knjiga utisaka je prostor za pitanja, iskustva, predloge i tržišne signale oko DaniniNet proizvoda, DaniniHub metode i budućih sadržajnih pravaca.",
    noteTitle: "Kako funkcioniše moderacija",
    noteText: "Poruke ne idu automatski javno. AI može pomoći u prepoznavanju spama, uvreda, privatnih podataka i nejasnih tvrdnji, ali konačnu odluku donosi čovek.",
    fields: ["Ime", "Email", "Tema", "Poruka"],
    consent: "Saglasan/saglasna sam da se poruka pregleda i moderira pre eventualne objave.",
    button: "Pošalji utisak",
    cards: [
      ["Za kupce", "Pitanja o proizvodima, isporuci, bonus materijalima i praktičnoj primeni."],
      ["Za čitaoce", "Predlozi tema za blog, affiliate vodiče, AI radni sistem i SEO sadržaj."],
      ["Za partnere", "Signali za saradnju, distribuciju i buduće digitalne proizvode."],
    ],
  },
  de: {
    eyebrow: "Gästebuch",
    title: "Vertrauen wird öffentlich aufgebaut, aber verantwortungsvoll moderiert.",
    text: "Das Gästebuch sammelt Fragen, Erfahrungen, Vorschläge und Marktsignale zu DaniniNet Produkten, der DaniniHub Methode und künftigen Content-Richtungen.",
    noteTitle: "Wie Moderation funktioniert",
    noteText: "Beiträge werden nicht automatisch veröffentlicht. KI kann Spam, Beleidigungen, private Daten und unklare Behauptungen erkennen helfen; die finale Entscheidung trifft ein Mensch.",
    fields: ["Name", "E-Mail", "Thema", "Nachricht"],
    consent: "Ich stimme zu, dass meine Nachricht vor einer möglichen Veröffentlichung geprüft und moderiert wird.",
    button: "Eintrag senden",
    cards: [
      ["Für Käufer", "Fragen zu Produkten, Lieferung, Bonusmaterialien und praktischer Anwendung."],
      ["Für Leser", "Themenvorschläge für Blog, Affiliate Guides, KI-Arbeitssysteme und SEO-Inhalte."],
      ["Für Partner", "Signale für Zusammenarbeit, Distribution und künftige digitale Produkte."],
    ],
  },
  en: {
    eyebrow: "Guestbook",
    title: "Trust is built publicly, but moderated responsibly.",
    text: "The guestbook collects questions, experiences, suggestions and market signals around DaniniNet products, the DaniniHub method and future content directions.",
    noteTitle: "How moderation works",
    noteText: "Messages are not published automatically. AI may help detect spam, abuse, private data and unclear claims, but the final decision is made by a human.",
    fields: ["Name", "Email", "Topic", "Message"],
    consent: "I agree that my message may be reviewed and moderated before possible publication.",
    button: "Send entry",
    cards: [
      ["For buyers", "Questions about products, delivery, bonus materials and practical use."],
      ["For readers", "Topic suggestions for blog, affiliate guides, AI working systems and SEO content."],
      ["For partners", "Signals for collaboration, distribution and future digital products."],
    ],
  },
} as const;

export default async function KnjigaUtisakaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang}>
      <SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-[2rem] bg-[#07142b] p-8 text-white">
          <p className="text-sm uppercase tracking-[0.22em] text-[#b9d7f0]">Moderation layer</p>
          <h2 className="mt-4 text-3xl font-semibold">{t.noteTitle}</h2>
          <p className="mt-5 leading-8 text-slate-300">{t.noteText}</p>
        </aside>
        <form className="grid gap-4 rounded-[2rem] border border-black/10 bg-white p-8">
          <input className="rounded-xl border border-black/10 bg-[#fbf7ef] p-4" placeholder={t.fields[0]} />
          <input className="rounded-xl border border-black/10 bg-[#fbf7ef] p-4" placeholder={t.fields[1]} />
          <input className="rounded-xl border border-black/10 bg-[#fbf7ef] p-4" placeholder={t.fields[2]} />
          <textarea className="min-h-40 rounded-xl border border-black/10 bg-[#fbf7ef] p-4" placeholder={t.fields[3]} />
          <label className="flex gap-3 text-sm leading-6 text-[#706a5d]">
            <input type="checkbox" />
            {t.consent}
          </label>
          <button className="rounded-full bg-[#07142b] px-6 py-3 text-sm font-medium text-white" type="button">
            {t.button}
          </button>
        </form>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-3">
        {t.cards.map(([title, text]) => (
          <article key={title} className="rounded-[2rem] border border-black/10 bg-[#fffaf1] p-8">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-4 leading-8 text-[#706a5d]">{text}</p>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}
