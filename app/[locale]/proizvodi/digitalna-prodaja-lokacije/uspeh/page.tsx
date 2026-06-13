import Link from "next/link";
import { SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

const copy = {
  sr: {
    eyebrow: "DPL delivery artifact",
    title: "Hvala na kupovini. Sledeći korak je isporuka PDF vodiča i Bonus Pack-a.",
    text: "Kupovina i isporuka idu preko Gumroad-a. Ova stranica objašnjava šta korisnik treba da proveri posle checkout-a i kako da zatraži support ako delivery email ne stigne.",
    stepsTitle: "Posle kupovine proverite",
    steps: [
      ["01", "Email sa Gumroad-a", "PDF vodič i Bonus Pack stižu na email korišćen pri checkout-u."],
      ["02", "Spam / Promotions", "Ako email nije odmah vidljiv, proverite spam, promotions i Gumroad library."],
      ["03", "Prvi radni korak", "Počnite od Pre-launch checklist-e i Public / Private Information Map."],
      ["04", "Support", "Ako link ne radi, pošaljite support upit sa checkout emailom i nazivom proizvoda."],
    ],
    includesTitle: "DPL paket uključuje",
    includes: ["PDF vodič Digitalna prodaja lokacije", "DPL Bonus Pack", "Lead Calculator spec", "Email Templates", "Metrics Tracker", "Disclaimer Library", "DaniniHub paket pitanja i dijalog metod"],
    support: "Otvori support",
    product: "Nazad na proizvod",
    disclaimer: "DPL je edukativni i informativni proizvod. Ne predstavlja pravni, finansijski, urbanistički, tehnički ili investicioni savet i ne garantuje prodaju, profit, investitore ili izvodljivost.",
  },
  de: {
    eyebrow: "DPL Delivery Artifact",
    title: "Danke für den Kauf. Der nächste Schritt ist die Lieferung von PDF-Leitfaden und Bonus Pack.",
    text: "Kauf und Lieferung laufen über Gumroad. Diese Seite erklärt, was nach dem Checkout geprüft werden soll und wie Support funktioniert.",
    stepsTitle: "Nach dem Kauf prüfen",
    steps: [["01", "Gumroad E-Mail", "PDF und Bonus Pack kommen an die Checkout-E-Mail."], ["02", "Spam / Promotions", "Bitte Spam, Promotions und Gumroad Library prüfen."], ["03", "Erster Arbeitsschritt", "Starten Sie mit Pre-launch Checklist und Public / Private Map."], ["04", "Support", "Bei Problemen Support mit Checkout-E-Mail und Produktname kontaktieren."]],
    includesTitle: "DPL Paket enthält",
    includes: ["PDF-Leitfaden", "DPL Bonus Pack", "Lead Calculator spec", "Email Templates", "Metrics Tracker", "Disclaimer Library", "DaniniHub Fragen- und Dialogmethodik"],
    support: "Support öffnen",
    product: "Zurück zum Produkt",
    disclaimer: "DPL ist edukativ und informativ. Es ist keine Rechts-, Finanz-, Planungs-, Technik- oder Anlageberatung und garantiert keine Ergebnisse.",
  },
  en: {
    eyebrow: "DPL delivery artifact",
    title: "Thank you for your purchase. Next step: PDF guide and Bonus Pack delivery.",
    text: "Purchase and delivery are handled by Gumroad. This page explains what to check after checkout and how to request support if the delivery email does not arrive.",
    stepsTitle: "After purchase, check",
    steps: [["01", "Gumroad email", "PDF guide and Bonus Pack arrive to the checkout email."], ["02", "Spam / Promotions", "Check spam, promotions and Gumroad library if needed."], ["03", "First working step", "Start with the Pre-launch checklist and Public / Private Information Map."], ["04", "Support", "If the link does not work, send a support request with checkout email and product name."]],
    includesTitle: "DPL package includes",
    includes: ["PDF guide", "DPL Bonus Pack", "Lead Calculator spec", "Email Templates", "Metrics Tracker", "Disclaimer Library", "DaniniHub questions and dialogue method"],
    support: "Open support",
    product: "Back to product",
    disclaimer: "DPL is educational and informational. It is not legal, financial, planning, technical or investment advice and does not guarantee results.",
  },
} as const;

export default async function DplSuccessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang} currentPath={`${localizedPath(lang, "dpl")}/uspeh`}>
      <section className="bg-[#07142b] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">{t.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight">{t.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{t.text}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href={localizedPath(lang, "support")} className="rounded-full bg-[#f7fbff] px-7 py-4 text-sm font-semibold text-[#07142b]">{t.support}</Link>
            <Link href={localizedPath(lang, "dpl")} className="rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white">{t.product}</Link>
          </div>
        </div>
      </section>
      <section className="bg-[#fffaf1] text-[#15130f]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-4xl font-semibold">{t.stepsTitle}</h2>
            <div className="mt-7 grid gap-4">
              {t.steps.map(([num, title, text]) => (
                <div key={title} className="rounded-2xl border border-black/10 bg-[#fffaf1] p-5">
                  <span className="text-sm font-semibold text-[#226bbf]">{num}</span>
                  <h3 className="mt-2 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 leading-7 text-[#706a5d]">{text}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-[2rem] bg-white p-8 shadow-sm">
            <h2 className="text-4xl font-semibold">{t.includesTitle}</h2>
            <ul className="mt-7 grid gap-3">
              {t.includes.map((item) => <li key={item} className="rounded-2xl bg-[#fffaf1] p-4 text-[#706a5d]">• {item}</li>)}
            </ul>
            <p className="mt-7 rounded-2xl border border-black/10 bg-[#f4efe5] p-5 leading-8 text-[#706a5d]">{t.disclaimer}</p>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}
