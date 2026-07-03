import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: { eyebrow: "Rückgabe", title: "Fer pravila za digitalnu isporuku.", text: "DaniniNet jasno objašnjava pristup, tehničke probleme, duple kupovine i realne granice digitalnog proizvoda.", items: [["Digitalna isporuka", "Kada je digitalni proizvod isporučen, ne ponaša se kao fizička roba. Ipak, tehnički problem ili očigledna greška u isporuci rešavaju se fer."], ["Kada se zahtev razmatra", "Zahtev se razmatra kod neisporučene datoteke, neispravnog linka, duple kupovine ili jasne checkout greške."], ["Granice", "Proizvod ne obećava investitora, prodaju, profit, SEO rezultat, dozvolu, vrednost ili stručni savet."], ["Prvi korak", "Prvo se proveravaju kupovina, e-mail, link, datoteka i pristup da kupac dobije ono što je platio."]] },
  de: { eyebrow: "Rückgabe", title: "Faire Regeln für digitale Lieferung.", text: "DaniniNet erklärt Zugriff, technische Probleme, Doppelkauf und die realen Grenzen digitaler Produkte klar.", items: [["Digitale Lieferung", "Nach digitaler Lieferung verhält sich ein Produkt nicht wie physische Ware. Technische Probleme oder klare Lieferfehler werden dennoch fair behandelt."], ["Wann geprüft wird", "Geprüft wird bei nicht gelieferter Datei, defektem Link, Doppelkauf oder eindeutigem Checkout-Fehler."], ["Grenzen", "Das Produkt verspricht keinen Investor, Verkauf, Gewinn, SEO-Erfolg, Genehmigung, Wert oder Fachberatung."], ["Erster Schritt", "Zuerst werden Kauf, E-Mail, Link, Datei und Zugriff geprüft, damit Käufer erhalten, was bezahlt wurde."]] },
  en: { eyebrow: "Return policy", title: "Fair rules for digital delivery.", text: "DaniniNet clearly explains access, technical issues, duplicate purchases and the real limits of digital products.", items: [["Digital delivery", "After digital delivery, a product is not treated like physical goods. Technical problems or clear delivery errors are still handled fairly."], ["When review applies", "Review applies to missing files, broken links, duplicate purchases or clear checkout errors."], ["Limits", "The product does not promise investors, sales, profit, SEO success, permits, value or professional advice."], ["First step", "Purchase, email, link, file and access are checked first so buyers receive what they paid for."]] },
} as const;

export default async function RueckgabePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];
  return <SiteShell locale={lang} currentPath={`/${lang}/legal/rueckgabe`}><SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} /><section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2">{t.items.map(([title, text]) => <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm"><h2 className="text-2xl font-semibold text-[#15130f]">{title}</h2><p className="mt-4 leading-8 text-[#706a5d]">{text}</p></article>)}</section><section className="bg-[#07142b] text-white"><div className="mx-auto max-w-7xl px-6 py-14"><Link href={`/${lang}/legal`} className="inline-flex rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">Legal & Trust Center</Link></div></section></SiteShell>;
}
