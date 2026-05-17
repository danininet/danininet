import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "Affiliate disclosure",
    title: "Affiliate preporuke moraju biti jasne, označene i bez lažnih obećanja.",
    text: "DaniniNet može koristiti affiliate linkove za digitalne i fizičke proizvode u temama kao što su digitalni alati, online prodaja, zdrav stil života, voda i korisni resursi. Ako korisnik kupi preko takvog linka, DaniniNet može ostvariti proviziju bez dodatnog troška za korisnika.",
    blocks: [
      ["Kako označavamo affiliate linkove", "Kada je link affiliate ili može dovesti do provizije, to treba biti jasno naznačeno u relevantnom sadržaju, footeru, product bloku, članku, emailu ili disclosure napomeni."],
      ["Šta provizija znači", "Provizija znači da DaniniNet može dobiti naknadu ako korisnik kupi preko označenog linka. To ne mora menjati cenu za korisnika, ali korisnik treba da zna da komercijalni odnos postoji."],
      ["Urednička odgovornost", "Affiliate provizija ne sme biti razlog da se proizvod predstavi kao bolji nego što jeste. Preporuka mora imati kontekst, namenu, ograničenja, realnu upotrebu i jasnu razliku između činjenice, iskustva i mišljenja."],
      ["Bez garancija rezultata", "Affiliate preporuke ne garantuju zaradu, zdravlje, rezultate, prodaju, investitore, profit, SEO pozicije, fizičke efekte, medicinske ishode ili bilo kakav konkretan ishod."],
      ["Health/water proizvodi", "Kod filtera, opreme, dodataka, navika i proizvoda povezanih sa vodom ili zdravim stilom života, preporuka nije medicinski savet. Korisnik treba da proveri sastav, sertifikate, lokalna pravila i svoje zdravstvene okolnosti."],
      ["Digitalni alati i platforme", "Kod softvera, hosting-a, email alata, checkout sistema, AI alata i drugih platformi, korisnik sam proverava cenu, uslove, dostupnost, kompatibilnost, refund politiku i promene koje servis uvodi."],
      ["Regionalna relevantnost", "Za DACH, Balkan i druga tržišta treba jasno razlikovati dostupnost, isporuku, cenu, valutu, poreze, garanciju, podršku, lokalna pravila i jezik korisničke službe."],
      ["Eksterni sajtovi", "Kada korisnik napusti DaniniNet i ode na eksterni sajt, važe uslovi, politika privatnosti i pravila tog eksternog servisa. DaniniNet ne kontroliše njihove odluke, dostupnost ili promene."],
    ],
    final: "Affiliate marketing na DaniniNet-u mora biti transparentan, urednički odgovoran i jasno odvojen od garancija rezultata, medicinskih tvrdnji i investicionih obećanja.",
  },
  de: {
    eyebrow: "Affiliate Disclosure",
    title: "Affiliate-Empfehlungen müssen klar gekennzeichnet sein und ohne falsche Versprechen auskommen.",
    text: "DaniniNet kann Affiliate-Links für digitale und physische Produkte nutzen, etwa für digitale Tools, Online-Verkauf, gesunden Lebensstil, Wasser und nützliche Ressourcen. Wenn Nutzer über solche Links kaufen, kann DaniniNet eine Provision erhalten, ohne zusätzliche Kosten für Nutzer.",
    blocks: [
      ["Kennzeichnung", "Wenn ein Link Affiliate-Charakter hat oder zu Provision führen kann, sollte dies im relevanten Inhalt, Footer, Produktblock, Artikel, E-Mail oder Hinweis klar erkennbar sein."],
      ["Was Provision bedeutet", "Eine Provision bedeutet, dass DaniniNet eine Vergütung erhalten kann, wenn Nutzer über einen gekennzeichneten Link kaufen. Der kommerzielle Zusammenhang sollte klar sein."],
      ["Redaktionelle Verantwortung", "Eine Provision darf kein Grund sein, ein Produkt besser darzustellen als es ist. Empfehlungen brauchen Kontext, Zweck, Grenzen, reale Nutzung und klare Trennung von Fakten, Erfahrung und Meinung."],
      ["Keine Ergebnisgarantien", "Affiliate-Empfehlungen garantieren kein Einkommen, Gesundheit, Ergebnisse, Verkäufe, Investoren, Gewinn, SEO-Positionen, körperliche Effekte, medizinische Resultate oder sonstige konkreten Ergebnisse."],
      ["Health/Water-Produkte", "Bei Filtern, Ausstattung, Ergänzungen, Routinen und Produkten rund um Wasser oder gesunden Lebensstil ist eine Empfehlung keine medizinische Beratung. Nutzer prüfen Zusammensetzung, Zertifikate, lokale Regeln und eigene gesundheitliche Umstände."],
      ["Digitale Tools und Plattformen", "Bei Software, Hosting, E-Mail-Tools, Checkout-Systemen, KI-Tools und Plattformen prüfen Nutzer Preis, Bedingungen, Verfügbarkeit, Kompatibilität, Refund-Politik und Änderungen selbst."],
      ["Regionale Relevanz", "Für DACH, Balkan und andere Märkte müssen Verfügbarkeit, Lieferung, Preis, Währung, Steuern, Garantie, Support, lokale Regeln und Sprache des Kundendienstes klar unterschieden werden."],
      ["Externe Websites", "Wenn Nutzer DaniniNet verlassen, gelten Bedingungen, Datenschutzregeln und Richtlinien des externen Dienstes. DaniniNet kontrolliert deren Entscheidungen, Verfügbarkeit oder Änderungen nicht."],
    ],
    final: "Affiliate Marketing auf DaniniNet muss transparent, redaktionell verantwortungsvoll und klar von Ergebnisgarantien, medizinischen Behauptungen und Investitionsversprechen getrennt sein.",
  },
  en: {
    eyebrow: "Affiliate disclosure",
    title: "Affiliate recommendations must be clear, disclosed and free of false promises.",
    text: "DaniniNet may use affiliate links for digital and physical products in areas such as digital tools, online sales, healthy lifestyle, water and useful resources. If a user buys through such a link, DaniniNet may earn a commission at no additional cost to the user.",
    blocks: [
      ["How links are disclosed", "When a link is affiliate or may lead to a commission, this should be clearly indicated in the relevant content, footer, product block, article, email or disclosure notice."],
      ["What commission means", "Commission means DaniniNet may receive compensation if a user buys through a disclosed link. This may not change the user's price, but the commercial relationship should be clear."],
      ["Editorial responsibility", "Commission must not be a reason to overstate a product. A recommendation needs context, purpose, limitations, real use and a clear difference between fact, experience and opinion."],
      ["No result guarantees", "Affiliate recommendations do not guarantee income, health, results, sales, investors, profit, SEO rankings, physical effects, medical outcomes or any concrete outcome."],
      ["Health/water products", "For filters, equipment, supplements, habits and products related to water or healthy lifestyle, a recommendation is not medical advice. Users should check ingredients, certifications, local rules and their own health circumstances."],
      ["Digital tools and platforms", "For software, hosting, email tools, checkout systems, AI tools and platforms, users independently review price, terms, availability, compatibility, refund policy and service changes."],
      ["Regional relevance", "For DACH, Balkan and other markets, availability, delivery, price, currency, taxes, warranty, support, local rules and support language should be separated clearly."],
      ["External websites", "When users leave DaniniNet for an external website, that external service's terms, privacy policy and rules apply. DaniniNet does not control their decisions, availability or changes."],
    ],
    final: "Affiliate marketing on DaniniNet must be transparent, editorially responsible and clearly separated from outcome guarantees, medical claims and investment promises.",
  },
} as const;

export default async function AffiliateDisclosurePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];
  return <SiteShell locale={lang} currentPath={`/${lang}/legal/affiliate-disclosure`}><SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} /><section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2">{t.blocks.map(([title,text]) => <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm"><h2 className="text-2xl font-semibold text-[#15130f]">{title}</h2><p className="mt-4 leading-8 text-[#706a5d]">{text}</p></article>)}</section><section className="bg-[#07142b] text-white"><div className="mx-auto max-w-7xl px-6 py-14"><p className="max-w-4xl text-xl leading-9 text-slate-300">{t.final}</p><Link href={`/${lang}/legal`} className="mt-8 inline-flex rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">Legal & Trust</Link></div></section></SiteShell>;
}
