import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "DaniniNet Support",
    title: "Podrška za kupovinu, isporuku i sledeći korak.",
    text: "Support služi za pristup fajlovima, pitanja o proizvodu, Gumroad checkout nedoumice i affiliate/partner komunikaciju. Kupovina digitalnih proizvoda ide preko Gumroad-a.",
    alert: "Kupovina ide ovako: product page → Gumroad checkout → Gumroad delivery.",
    cards: [
      ["Gumroad delivery", "Ako email nije stigao, proverite spam/promotions i Gumroad library."],
      ["PDF + Bonus Pack", "Pitanja o sadržaju vodiča, bonus materijalima i pravilnoj upotrebi."],
      ["Affiliate / partner", "Upiti za saradnju bez tvrdnji o garantovanoj prodaji, profitu ili rezultatima."],
    ],
    product: "Otvori proizvod",
  },
  de: {
    eyebrow: "DaniniNet Support",
    title: "Support für Kauf, Lieferung und nächsten Schritt.",
    text: "Support hilft bei Dateizugriff, Produktfragen, Gumroad Checkout-Themen und Affiliate/Partner-Kommunikation. Der Kauf digitaler Produkte läuft über Gumroad.",
    alert: "Kaufablauf: Produktseite → Gumroad Checkout → Gumroad Delivery.",
    cards: [
      ["Gumroad Delivery", "Wenn die E-Mail nicht angekommen ist, bitte Spam/Promotions und Gumroad Library prüfen."],
      ["PDF + Bonus Pack", "Fragen zum Leitfaden, Bonusmaterialien und richtiger Anwendung."],
      ["Affiliate / Partner", "Kooperationsanfragen ohne Versprechen zu Verkauf, Profit oder Ergebnissen."],
    ],
    product: "Produkt öffnen",
  },
  en: {
    eyebrow: "DaniniNet Support",
    title: "Support for purchase, delivery and next step.",
    text: "Support helps with file access, product questions, Gumroad checkout issues and affiliate/partner communication. Digital product purchase goes through Gumroad.",
    alert: "Purchase flow: product page → Gumroad checkout → Gumroad delivery.",
    cards: [
      ["Gumroad delivery", "If the email did not arrive, check spam/promotions and Gumroad library."],
      ["PDF + Bonus Pack", "Questions about guide content, bonus materials and proper use."],
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
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-3">
        {t.cards.map(([title, text]) => (
          <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
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
