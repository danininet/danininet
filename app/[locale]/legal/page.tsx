import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";
type LegalCard = { title: string; text: string; href: string; label: string };

type LegalCopy = {
  eyebrow: string;
  title: string;
  text: string;
  cards: LegalCard[];
  principleTitle: string;
  principleText: string;
  aiTitle: string;
  aiText: string;
};

const copy: Record<Locale, LegalCopy> = {
  sr: {
    eyebrow: "Legal & Trust Center",
    title: "Transparentan okvir za AI, digitalne proizvode, refund, GDPR, affiliate i odgovornu komunikaciju.",
    text: "DaniniNet mora jasno pokazati šta korisnik kupuje, šta ne kupuje, kako je proizvod nastao, kako se koristi AI, kako funkcionišu isporuka, povrat, podaci i podrška.",
    cards: [
      { title: "DaniniHub OS", text: "Sistemsko poreklo DaniniNet proizvoda: Pitaj AI - AI pita tebe, artifact proces i realan rad, ne generički AI sadržaj.", href: "daninihub-os", label: "System" },
      { title: "Product transparency", text: "Šta proizvod jeste, šta nije, kako je kreiran, šta se isporučuje i koja očekivanja su realna pre kupovine.", href: "product-transparency", label: "Product" },
      { title: "Refund / Rückgabe", text: "Fer pravila za digitalne proizvode: pristup, tehnički problemi, dupla kupovina, kulanca i granice povrata.", href: "refund", label: "Refund" },
      { title: "AI transparentnost", text: "Kako koristimo AI kroz metodu Pitaj AI - AI pita tebe: pitanja, dokazi, granice, nacrti i artifacti.", href: "ai-transparentnost", label: "AI use" },
      { title: "Glavni disclaimer", text: "Edukativni karakter sadržaja, digitalnih proizvoda, lokacija, case study materijala i rezultata.", href: "disclaimer", label: "Boundaries" },
      { title: "Affiliate disclosure", text: "Kako označavamo affiliate linkove, preporuke, provizije i granice odgovornosti.", href: "affiliate-disclosure", label: "Affiliate" },
      { title: "Privacy / GDPR", text: "Principi obrade podataka: minimizacija, svrha, transparentnost, Gumroad/Brevo/support tokovi.", href: "privacy", label: "Data" },
      { title: "Cookies", text: "Kolačići, analitika, tehnička funkcionalnost i budući tracking bez nepotrebnog prikupljanja podataka.", href: "cookies", label: "Tracking" },
      { title: "Terms", text: "Uslovi korišćenja sajta, digitalnih proizvoda, komunikacije i eksternih checkout/delivery kanala.", href: "terms", label: "Terms" },
      { title: "Impressum", text: "Identitet projekta, kontakt okvir i poslovne informacije za javnu upotrebu.", href: "impressum", label: "Contact" },
      { title: "Health disclaimer", text: "Granice za health/water pravac: edukacija, navike, affiliate, bez medicinskih obećanja.", href: "health-disclaimer", label: "Health" },
    ],
    principleTitle: "Princip poverenja",
    principleText: "Neprovereno se ne predstavlja kao činjenica. AI-assisted rad se objašnjava. Affiliate se označava. Digitalni proizvod ne obećava rezultate. Problem kupca se rešava fer, prvo kroz isporuku i podršku.",
    aiTitle: "DaniniHub OS je izvor, DaniniNet je kanal",
    aiText: "DaniniNet proizvodi su nus-proizvodi realnog DaniniHub OS rada i metode Pitaj AI - AI pita tebe. Zato su transparentnost, refund, GDPR i disclaimer deo proizvoda, ne naknadna dekoracija.",
  },
  de: {
    eyebrow: "Legal & Trust Center",
    title: "Transparenter Rahmen für KI, digitale Produkte, Rückgabe, DSGVO, Affiliate und verantwortliche Kommunikation.",
    text: "DaniniNet muss klar zeigen, was Nutzer kaufen, was sie nicht kaufen, wie das Produkt entstanden ist, wie KI eingesetzt wird und wie Lieferung, Rückgabe, Daten und Support funktionieren.",
    cards: [
      { title: "DaniniHub OS", text: "Systemischer Ursprung der DaniniNet Produkte: Frag die KI - die KI fragt dich, Artifact-Prozess und reale Arbeit statt generischem AI-Inhalt.", href: "daninihub-os", label: "System" },
      { title: "Produkttransparenz", text: "Was das Produkt ist, was es nicht ist, wie es erstellt wurde, was geliefert wird und welche Erwartungen realistisch sind.", href: "product-transparency", label: "Produkt" },
      { title: "Rückgabe / Refund", text: "Faire Regeln für digitale Produkte: Zugriff, technische Probleme, Doppelkauf, Kulanz und Grenzen der Rückgabe.", href: "refund", label: "Refund" },
      { title: "KI-Transparenz", text: "Wie KI in der Methode Frag die KI - die KI fragt dich eingesetzt wird: Fragen, Belege, Grenzen, Entwürfe und Artefakte.", href: "ai-transparentnost", label: "KI" },
      { title: "Haupt-Disclaimer", text: "Bildungscharakter von Inhalten, digitalen Produkten, Standortmaterialien, Case Studies und Ergebnissen.", href: "disclaimer", label: "Grenzen" },
      { title: "Affiliate Disclosure", text: "Wie Affiliate-Links, Empfehlungen, Provisionen und Verantwortungsgrenzen gekennzeichnet werden.", href: "affiliate-disclosure", label: "Affiliate" },
      { title: "Privacy / DSGVO", text: "Grundprinzipien der Datenverarbeitung: Minimierung, Zweck, Transparenz, Gumroad/Brevo/Support-Flows.", href: "privacy", label: "Daten" },
      { title: "Cookies", text: "Cookies, Analytics, technische Funktionen und künftiges Tracking ohne unnötige Datenerhebung.", href: "cookies", label: "Tracking" },
      { title: "Terms", text: "Nutzungsbedingungen für Website, digitale Produkte, Kommunikation und externe Checkout-/Delivery-Kanäle.", href: "terms", label: "Terms" },
      { title: "Impressum", text: "Projektidentität, Kontaktstruktur und Geschäftsinformationen für öffentliche Nutzung.", href: "impressum", label: "Kontakt" },
      { title: "Health Disclaimer", text: "Grenzen für den Health/Water-Bereich: Bildung, Routinen, Affiliate, keine medizinischen Versprechen.", href: "health-disclaimer", label: "Health" },
    ],
    principleTitle: "Vertrauensprinzip",
    principleText: "Ungeprüftes wird nicht als Tatsache dargestellt. AI-assisted Arbeit wird erklärt. Affiliate wird gekennzeichnet. Digitale Produkte versprechen keine Ergebnisse. Kundenprobleme werden fair zuerst über Lieferung und Support behandelt.",
    aiTitle: "DaniniHub OS ist der Ursprung, DaniniNet ist der Kanal",
    aiText: "DaniniNet Produkte sind Nebenprodukte realer DaniniHub OS Arbeit und der Methode Frag die KI - die KI fragt dich. Deshalb sind Transparenz, Rückgabe, DSGVO und Disclaimer Teil des Produkts, nicht Dekoration.",
  },
  en: {
    eyebrow: "Legal & Trust Center",
    title: "A transparent framework for AI, digital products, refunds, GDPR, affiliate and responsible communication.",
    text: "DaniniNet must clearly show what users buy, what they do not buy, how the product was created, how AI is used and how delivery, refunds, data and support work.",
    cards: [
      { title: "DaniniHub OS", text: "System origin of DaniniNet products: Ask AI - AI asks you, artifact process and real work instead of generic AI content.", href: "daninihub-os", label: "System" },
      { title: "Product transparency", text: "What the product is, what it is not, how it was created, what is delivered and what expectations are realistic.", href: "product-transparency", label: "Product" },
      { title: "Refund", text: "Fair rules for digital products: access, technical issues, duplicate purchase, goodwill review and refund boundaries.", href: "refund", label: "Refund" },
      { title: "AI transparency", text: "How AI is used through the Ask AI - AI asks you method: questions, proof, boundaries, drafts and artifacts.", href: "ai-transparentnost", label: "AI use" },
      { title: "Main disclaimer", text: "Educational nature of content, digital products, location materials, case studies and outcomes.", href: "disclaimer", label: "Boundaries" },
      { title: "Affiliate disclosure", text: "How affiliate links, recommendations, commissions and responsibility boundaries are disclosed.", href: "affiliate-disclosure", label: "Affiliate" },
      { title: "Privacy / GDPR", text: "Core data principles: minimization, purpose, transparency, Gumroad/Brevo/support flows.", href: "privacy", label: "Data" },
      { title: "Cookies", text: "Cookies, analytics, technical functionality and future tracking without unnecessary data collection.", href: "cookies", label: "Tracking" },
      { title: "Terms", text: "Terms for site use, digital products, communication and external checkout/delivery channels.", href: "terms", label: "Terms" },
      { title: "Impressum", text: "Project identity, contact structure and business information for public use.", href: "impressum", label: "Contact" },
      { title: "Health disclaimer", text: "Boundaries for the health/water direction: education, routines, affiliate, no medical promises.", href: "health-disclaimer", label: "Health" },
    ],
    principleTitle: "Trust principle",
    principleText: "Unverified information is not presented as fact. AI-assisted work is explained. Affiliate is disclosed. Digital products do not promise outcomes. Customer issues are handled fairly through delivery and support first.",
    aiTitle: "DaniniHub OS is the origin, DaniniNet is the channel",
    aiText: "DaniniNet products are by-products of real DaniniHub OS work and the Ask AI - AI asks you method. That is why transparency, refunds, GDPR and disclaimers are part of the product, not decoration.",
  },
};

export default async function LegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang} currentPath={`/${lang}/legal`}>
      <SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} />
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2.5rem] bg-[#07142b] p-8 text-white shadow-[0_24px_70px_rgba(7,20,43,0.18)]">
          <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">DaniniHub OS method layer</p>
          <h2 className="mt-4 text-4xl font-semibold">{t.aiTitle}</h2>
          <p className="mt-5 max-w-4xl leading-8 text-slate-300">{t.aiText}</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2 lg:grid-cols-3">
        {t.cards.map((card) => (
          <Link key={card.href} href={`/${lang}/legal/${card.href}`} className="group rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(7,20,43,0.12)]">
            <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">{card.label}</p>
            <h2 className="mt-4 text-2xl font-semibold text-[#15130f]">{card.title}</h2>
            <p className="mt-4 leading-8 text-[#706a5d]">{card.text}</p>
            <span className="mt-6 inline-flex text-sm font-semibold text-[#07142b]">→</span>
          </Link>
        ))}
      </section>
      <section className="bg-[#07142b] text-white"><div className="mx-auto max-w-7xl px-6 py-14"><p className="text-sm uppercase tracking-[0.22em] text-[#b9d7f0]">Trust layer</p><h2 className="mt-4 text-4xl font-semibold">{t.principleTitle}</h2><p className="mt-5 max-w-4xl leading-8 text-slate-300">{t.principleText}</p></div></section>
    </SiteShell>
  );
}
