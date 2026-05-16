import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "Knjiga utisaka",
    title: "Pitanja, signali i iskustva koja pomažu da DaniniNet raste u pravom smeru.",
    text: "Knjiga utisaka nije otvorena tabla za automatske komentare. Ona je moderisan kanal za stvarna pitanja, predloge tema, utiske o digitalnim proizvodima i signale koji pokazuju šta publici zaista treba.",
    noteTitle: "Šta se ovde prikuplja",
    noteText: "Vredan utisak nije samo pohvala. To može biti pitanje pre kupovine, problem u razumevanju proizvoda, predlog za novi blog članak, partner signal ili iskustvo posle korišćenja PDF vodiča.",
    processTitle: "Kako utisak postaje koristan signal",
    process: [
      ["Pitanje", "Korisnik postavi pitanje ili ukaže na deo koji nije dovoljno jasan."],
      ["Razvrstavanje", "Utisak se razdvaja na support, product feedback, blog temu, affiliate signal ili partner upit."],
      ["Odluka", "Ako se pitanje ponavlja, postaje FAQ, blog tema, poboljšanje proizvoda ili nova sekcija stranice."],
    ],
    cards: [
      ["Za kupce", "Pitanja o proizvodima, isporuci, bonus materijalima i praktičnoj primeni."],
      ["Za čitaoce", "Predlozi tema za blog, affiliate vodiče, AI radni sistem i SEO sadržaj."],
      ["Za partnere", "Signali za saradnju, distribuciju i buduće digitalne proizvode."],
    ],
    trustTitle: "Moderacija i privatnost",
    trustText: "Poruke se ne objavljuju automatski. Privatni podaci, uvrede, spam, neproverene tvrdnje i poverljivi poslovni detalji ne idu javno. Ako je poruka support slučaj, vodi se kroz support tok, a ne kroz javni komentar.",
    support: "Pošalji support upit",
    product: "Pogledaj proizvode",
  },
  de: {
    eyebrow: "Gästebuch",
    title: "Fragen, Signale und Erfahrungen, die DaniniNet in die richtige Richtung entwickeln.",
    text: "Das Gästebuch ist keine offene Kommentarwand. Es ist ein moderierter Kanal für echte Fragen, Themenvorschläge, Produktfeedback und Marktsignale.",
    noteTitle: "Was hier gesammelt wird",
    noteText: "Ein wertvoller Eintrag ist nicht nur Lob. Es kann eine Frage vor dem Kauf, ein Verständnisproblem, ein Blogvorschlag, ein Partnersignal oder Erfahrung nach Nutzung eines PDF-Leitfadens sein.",
    processTitle: "Wie Feedback zum Signal wird",
    process: [
      ["Frage", "Ein Nutzer stellt eine Frage oder zeigt, was noch nicht klar genug ist."],
      ["Sortierung", "Der Eintrag wird als Support, Produktfeedback, Blogthema, Affiliate-Signal oder Partneranfrage eingeordnet."],
      ["Entscheidung", "Wiederkehrende Fragen werden FAQ, Blogthema, Produktverbesserung oder neue Seiten-Sektion."],
    ],
    cards: [
      ["Für Käufer", "Fragen zu Produkten, Lieferung, Bonusmaterialien und praktischer Anwendung."],
      ["Für Leser", "Themenvorschläge für Blog, Affiliate Guides, KI-Arbeitssysteme und SEO-Inhalte."],
      ["Für Partner", "Signale für Zusammenarbeit, Distribution und künftige digitale Produkte."],
    ],
    trustTitle: "Moderation und Privatsphäre",
    trustText: "Einträge werden nicht automatisch veröffentlicht. Private Daten, Spam, ungeprüfte Behauptungen und vertrauliche Geschäftsdetails gehen nicht öffentlich. Supportfälle laufen über Support.",
    support: "Support-Anfrage senden",
    product: "Produkte ansehen",
  },
  en: {
    eyebrow: "Guestbook",
    title: "Questions, signals and experiences that help DaniniNet grow in the right direction.",
    text: "The guestbook is not an open auto-published comment wall. It is a moderated channel for real questions, topic suggestions, product feedback and market signals.",
    noteTitle: "What is collected here",
    noteText: "A useful entry is not only praise. It may be a pre-purchase question, a product clarity issue, a blog suggestion, a partner signal or experience after using a PDF guide.",
    processTitle: "How feedback becomes a useful signal",
    process: [
      ["Question", "A user asks a question or points to something that is not clear enough."],
      ["Sorting", "The entry is sorted into support, product feedback, blog topic, affiliate signal or partner inquiry."],
      ["Decision", "Repeated questions become FAQ, blog topic, product improvement or a new page section."],
    ],
    cards: [
      ["For buyers", "Questions about products, delivery, bonus materials and practical use."],
      ["For readers", "Topic suggestions for blog, affiliate guides, AI working systems and SEO content."],
      ["For partners", "Signals for collaboration, distribution and future digital products."],
    ],
    trustTitle: "Moderation and privacy",
    trustText: "Messages are not published automatically. Private data, spam, unverified claims and confidential business details are not published. Support cases go through support.",
    support: "Send support request",
    product: "View products",
  },
} as const;

export default async function KnjigaUtisakaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang} currentPath={localizedPath(lang, "guestbook")}>
      <SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="rounded-[2rem] bg-[#07142b] p-8 text-white shadow-[0_24px_70px_rgba(7,20,43,0.18)]">
          <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">Signal layer</p>
          <h2 className="mt-4 text-3xl font-semibold">{t.noteTitle}</h2>
          <p className="mt-5 leading-8 text-slate-300">{t.noteText}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={localizedPath(lang, "support")} className="rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">
              {t.support}
            </Link>
            <Link href={localizedPath(lang, "products")} className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white">
              {t.product}
            </Link>
          </div>
        </aside>
        <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">Feedback workflow</p>
          <h2 className="mt-4 text-3xl font-semibold">{t.processTitle}</h2>
          <div className="mt-7 grid gap-4">
            {t.process.map(([title, text], index) => (
              <div key={title} className="rounded-2xl bg-[#fffaf1] p-5">
                <p className="text-sm font-semibold text-[#226bbf]">0{index + 1} · {title}</p>
                <p className="mt-2 leading-7 text-[#706a5d]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-3">
        {t.cards.map(([title, text]) => (
          <article key={title} className="rounded-[2rem] border border-black/10 bg-[#fffaf1] p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-4 leading-8 text-[#706a5d]">{text}</p>
          </article>
        ))}
      </section>
      <section className="bg-[#07142b] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-sm uppercase tracking-[0.22em] text-[#b9d7f0]">Trust layer</p>
          <h2 className="mt-4 text-4xl font-semibold">{t.trustTitle}</h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-300">{t.trustText}</p>
        </div>
      </section>
    </SiteShell>
  );
}
