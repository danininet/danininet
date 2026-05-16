import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "DaniniNet Support",
    title: "Podrška za kupovinu, isporuku i sledeći korak.",
    text: "Support služi za pristup fajlovima, pitanja o proizvodu, Gumroad checkout nedoumice i affiliate/partner komunikaciju. Kupovina digitalnih proizvoda ide preko Gumroad-a, ne preko support forme.",
    alert: "Kupovina ide ovako: product page → Gumroad checkout → Gumroad delivery. Support pomaže ako nešto ne radi ili ako postoji pitanje pre/posle kupovine.",
    processTitle: "Kako obrađujemo upit",
    process: [
      ["1", "Vrsta problema", "Razdvajamo: Gumroad pristup, PDF/Bonus Pack, pitanje o sadržaju, affiliate saradnja ili tehnički problem."],
      ["2", "Minimalan kontekst", "Potrebni su email korišćen pri kupovini, naziv proizvoda i kratak opis problema. Ne šalju se osetljivi podaci."],
      ["3", "Sledeći korak", "Ako je problem u delivery-ju, proverava se Gumroad tok. Ako je pitanje stručno, upućuje se na odgovarajućeg profesionalca."],
    ],
    fields: ["Ime", "Email", "Kategorija", "Pitanje"],
    button: "Pošalji support upit",
    note: "Za Gumroad kupovinu koristi email sa checkout-a i naziv proizvoda. Support ne obrađuje ručne kupovine.",
    cards: [
      ["Gumroad delivery", "Nije stigao email, ne vide se fajlovi ili postoji pitanje oko Gumroad library pristupa."],
      ["PDF + Bonus Pack", "Pitanja o sadržaju vodiča, bonus materijalima, checklistama i pravilnoj upotrebi."],
      ["Affiliate / partner", "Upiti za saradnju, ali bez tvrdnji o garantovanoj prodaji, profitu ili rezultatima."],
    ],
    product: "Otvori proizvod",
  },
  de: {
    eyebrow: "DaniniNet Support",
    title: "Support für Kauf, Lieferung und nächsten Schritt.",
    text: "Support hilft bei Dateizugriff, Produktfragen, Gumroad Checkout-Themen und Affiliate/Partner-Kommunikation. Der Kauf digitaler Produkte läuft über Gumroad, nicht über das Support-Formular.",
    alert: "Kaufablauf: Produktseite → Gumroad Checkout → Gumroad Delivery. Support hilft, wenn etwas nicht funktioniert oder wenn Fragen vor/nach dem Kauf bestehen.",
    processTitle: "Wie wir Anfragen bearbeiten",
    process: [
      ["1", "Problemtyp", "Wir trennen Gumroad-Zugriff, PDF/Bonus Pack, Inhaltsfrage, Affiliate-Kooperation oder technisches Problem."],
      ["2", "Minimaler Kontext", "Nötig sind Kauf-E-Mail, Produktname und kurze Problembeschreibung. Sensible Daten werden nicht angefordert."],
      ["3", "Nächster Schritt", "Bei Delivery-Problemen wird der Gumroad-Fluss geprüft. Bei Fachthemen wird auf passende Fachleute verwiesen."],
    ],
    fields: ["Name", "E-Mail", "Kategorie", "Frage"],
    button: "Support-Anfrage senden",
    note: "Für Gumroad-Käufe bitte Checkout-E-Mail und Produktname angeben. Support verarbeitet keine manuellen Käufe.",
    cards: [
      ["Gumroad Delivery", "E-Mail nicht angekommen, Dateien nicht sichtbar oder Frage zum Gumroad Library Zugriff."],
      ["PDF + Bonus Pack", "Fragen zum Leitfaden, Bonusmaterialien, Checklisten und richtiger Anwendung."],
      ["Affiliate / Partner", "Kooperationsanfragen ohne Versprechen zu Verkauf, Profit oder Ergebnissen."],
    ],
    product: "Produkt öffnen",
  },
  en: {
    eyebrow: "DaniniNet Support",
    title: "Support for purchase, delivery and next step.",
    text: "Support helps with file access, product questions, Gumroad checkout issues and affiliate/partner communication. Digital product purchase goes through Gumroad, not through the support form.",
    alert: "Purchase flow: product page → Gumroad checkout → Gumroad delivery. Support helps if something does not work or if there is a question before/after purchase.",
    processTitle: "How we handle requests",
    process: [
      ["1", "Issue type", "We separate Gumroad access, PDF/Bonus Pack, content question, affiliate collaboration or technical issue."],
      ["2", "Minimal context", "Needed: checkout email, product name and short issue description. Sensitive data is not requested."],
      ["3", "Next step", "Delivery issues are checked against the Gumroad flow. Professional topics are redirected to appropriate professionals."],
    ],
    fields: ["Name", "Email", "Category", "Question"],
    button: "Send support request",
    note: "For Gumroad purchases, use checkout email and product name. Support does not process manual purchases.",
    cards: [
      ["Gumroad delivery", "Email not received, files not visible or question about Gumroad library access."],
      ["PDF + Bonus Pack", "Questions about guide content, bonus materials, checklists and proper use."],
      ["Affiliate / partner", "Collaboration inquiries without claims of guaranteed sales, profit or outcomes."],
    ],
    product: "Open product",
  },
} as const;

export default async function SupportPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang} currentPath={localizedPath(lang, "support")}>
      <SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} />
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="rounded-[2rem] border border-[#d7b46a]/30 bg-[#fffaf1] p-6 text-[#15130f] shadow-sm">
          <strong className="text-[#07142b]">Gumroad flow:</strong> {t.alert}
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 lg:grid-cols-[0.95fr_1.05fr]">
        <aside className="rounded-[2rem] bg-[#07142b] p-8 text-white">
          <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">Support process</p>
          <h2 className="mt-4 text-3xl font-semibold">{t.processTitle}</h2>
          <div className="mt-7 grid gap-4">
            {t.process.map(([num, title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                <p className="text-sm text-[#d7b46a]">{num} · {title}</p>
                <p className="mt-2 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </aside>
        <form className="grid gap-4 rounded-[2rem] border border-black/10 bg-white p-8">
          <input className="rounded-xl border border-black/10 bg-[#fbf7ef] p-4" placeholder={t.fields[0]} />
          <input className="rounded-xl border border-black/10 bg-[#fbf7ef] p-4" placeholder={t.fields[1]} />
          <input className="rounded-xl border border-black/10 bg-[#fbf7ef] p-4" placeholder={t.fields[2]} />
          <textarea className="min-h-40 rounded-xl border border-black/10 bg-[#fbf7ef] p-4" placeholder={t.fields[3]} />
          <p className="text-sm leading-6 text-[#706a5d]">{t.note}</p>
          <button className="rounded-full bg-[#07142b] px-6 py-3 text-sm font-medium text-white" type="button">
            {t.button}
          </button>
        </form>
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
          <Link href={localizedPath(lang, "dpl")} className="inline-flex rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">
            {t.product}
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
