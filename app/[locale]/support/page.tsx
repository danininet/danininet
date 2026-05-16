import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "DaniniNet Support",
    title: "Podrška za kupovinu, isporuku i sledeći korak.",
    text: "Support nije zamena za kupovinu i nije ručni checkout. Njegova uloga je da reši pristup fajlovima, razjasni pitanje oko proizvoda, odvoji affiliate/partner upit od kupovine i usmeri korisnika na pravi sledeći korak.",
    alert: "Kupovina ide ovako: product page → Gumroad checkout → Gumroad delivery. Ako je problem u isporuci, prvo se proverava Gumroad email, spam/promotions folder i Gumroad library.",
    processTitle: "Kako se upit usmerava",
    process: [
      ["Gumroad pristup", "Ako kupac ne vidi PDF ili Bonus Pack, proverava se email korišćen pri kupovini, Gumroad potvrda i library pristup."],
      ["Pitanje o proizvodu", "Ako korisnik nije siguran da li je proizvod za njega, support ga vraća na sadržaj stranice, FAQ i granice proizvoda."],
      ["Affiliate / partner", "Ako je upit saradnja, prvo se proverava da li komunikacija može ostati bez garancija prodaje, profita ili rezultata."],
      ["Stručna pitanja", "Pravna, urbanistička, tehnička, poreska, zdravstvena ili investiciona pitanja ne rešavaju se preko support-a."],
    ],
    infoTitle: "Šta treba navesti u poruci",
    info: ["email korišćen pri Gumroad kupovini", "naziv proizvoda", "kratak opis problema", "screenshot greške ako postoji", "bez lozinki, kartica i poverljivih dokumenata"],
    cards: [
      ["Gumroad delivery", "Nije stigao email, ne vide se fajlovi ili postoji pitanje oko Gumroad library pristupa."],
      ["PDF + Bonus Pack", "Pitanja o sadržaju vodiča, bonus materijalima, checklistama i pravilnoj upotrebi."],
      ["Affiliate / partner", "Upiti za saradnju, ali bez tvrdnji o garantovanoj prodaji, profitu ili rezultatima."],
    ],
    contactTitle: "Kontakt kanal",
    contactText: "Za sada se support vodi kao kontrolisan upit, ne kao automatska javna forma. Time se izbegava prikupljanje nepotrebnih podataka i pogrešno slanje osetljivih informacija.",
    product: "Otvori proizvod",
    legal: "Legal & Trust",
  },
  de: {
    eyebrow: "DaniniNet Support",
    title: "Support für Kauf, Lieferung und nächsten Schritt.",
    text: "Support ersetzt keinen Checkout. Er hilft bei Dateizugriff, Produktfragen, Affiliate/Partner-Anfragen und der richtigen nächsten Handlung.",
    alert: "Kaufablauf: Produktseite → Gumroad Checkout → Gumroad Delivery. Bei Lieferproblemen zuerst Gumroad E-Mail, Spam/Promotions und Library prüfen.",
    processTitle: "Wie Anfragen gelenkt werden",
    process: [
      ["Gumroad Zugriff", "Wenn PDF oder Bonus Pack nicht sichtbar sind, werden Kauf-E-Mail, Gumroad Bestätigung und Library geprüft."],
      ["Produktfrage", "Wenn unklar ist, ob das Produkt passt, verweisen wir auf Seiteninhalt, FAQ und Produktgrenzen."],
      ["Affiliate / Partner", "Kooperationen nur ohne Verkaufs-, Gewinn- oder Ergebnisgarantien."],
      ["Fachfragen", "Rechts-, Planungs-, Technik-, Steuer-, Gesundheits- oder Anlagefragen werden nicht über Support gelöst."],
    ],
    infoTitle: "Was in die Nachricht gehört",
    info: ["E-Mail aus dem Gumroad Kauf", "Produktname", "kurze Problembeschreibung", "Screenshot falls vorhanden", "keine Passwörter, Karten oder vertraulichen Dokumente"],
    cards: [
      ["Gumroad Delivery", "E-Mail nicht angekommen, Dateien nicht sichtbar oder Frage zum Gumroad Library Zugriff."],
      ["PDF + Bonus Pack", "Fragen zum Leitfaden, Bonusmaterialien, Checklisten und richtiger Anwendung."],
      ["Affiliate / Partner", "Kooperationsanfragen ohne Versprechen zu Verkauf, Profit oder Ergebnissen."],
    ],
    contactTitle: "Kontaktkanal",
    contactText: "Support läuft derzeit als kontrollierte Anfrage, nicht als öffentliche Auto-Form. So werden unnötige Daten und sensible Informationen vermieden.",
    product: "Produkt öffnen",
    legal: "Legal & Trust",
  },
  en: {
    eyebrow: "DaniniNet Support",
    title: "Support for purchase, delivery and next step.",
    text: "Support is not a manual checkout. It helps with file access, product questions, affiliate/partner routing and the correct next step.",
    alert: "Purchase flow: product page → Gumroad checkout → Gumroad delivery. For delivery issues, first check Gumroad email, spam/promotions and Gumroad library.",
    processTitle: "How requests are routed",
    process: [
      ["Gumroad access", "If PDF or Bonus Pack are missing, checkout email, Gumroad confirmation and library access are checked."],
      ["Product question", "If fit is unclear, the user is guided back to page content, FAQ and product boundaries."],
      ["Affiliate / partner", "Collaboration only without claims of guaranteed sales, profit or outcomes."],
      ["Professional questions", "Legal, planning, technical, tax, health or investment questions are not solved through support."],
    ],
    infoTitle: "What to include in a message",
    info: ["email used for Gumroad purchase", "product name", "short issue description", "screenshot if available", "no passwords, cards or confidential documents"],
    cards: [
      ["Gumroad delivery", "Email not received, files not visible or question about Gumroad library access."],
      ["PDF + Bonus Pack", "Questions about guide content, bonus materials, checklists and proper use."],
      ["Affiliate / partner", "Collaboration inquiries without claims of guaranteed sales, profit or outcomes."],
    ],
    contactTitle: "Contact channel",
    contactText: "Support is currently handled as a controlled request, not as a public auto-form. This avoids unnecessary data collection and accidental sharing of sensitive information.",
    product: "Open product",
    legal: "Legal & Trust",
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
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        <aside className="rounded-[2rem] bg-[#07142b] p-8 text-white shadow-[0_24px_70px_rgba(7,20,43,0.18)]">
          <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">Support routing</p>
          <h2 className="mt-4 text-3xl font-semibold">{t.processTitle}</h2>
          <div className="mt-7 grid gap-4">
            {t.process.map(([title, text], index) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                <p className="text-sm text-[#d7b46a]">0{index + 1} · {title}</p>
                <p className="mt-2 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </aside>
        <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">Minimum context</p>
          <h2 className="mt-4 text-3xl font-semibold">{t.infoTitle}</h2>
          <ul className="mt-7 grid gap-3">
            {t.info.map((item) => (
              <li key={item} className="rounded-2xl bg-[#fffaf1] p-4 leading-7 text-[#706a5d]">{item}</li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl bg-[#07142b] p-5 text-white">
            <h3 className="text-xl font-semibold">{t.contactTitle}</h3>
            <p className="mt-3 leading-7 text-slate-300">{t.contactText}</p>
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
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-14 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl leading-8 text-slate-300">DaniniNet support razdvaja kupovinu, isporuku, pitanja i stručne granice da bi korisnik dobio najkraći ispravan put.</p>
          <div className="flex flex-wrap gap-3">
            <Link href={localizedPath(lang, "dpl")} className="inline-flex rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">
              {t.product}
            </Link>
            <Link href={localizedPath(lang, "legal")} className="inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white">
              {t.legal}
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
