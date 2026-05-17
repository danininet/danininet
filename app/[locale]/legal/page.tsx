import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

type LegalCard = {
  title: string;
  text: string;
  href: string;
  label: string;
};

const copy: Record<Locale, {
  eyebrow: string;
  title: string;
  text: string;
  cards: LegalCard[];
  principleTitle: string;
  principleText: string;
  aiTitle: string;
  aiText: string;
}> = {
  sr: {
    eyebrow: "Legal & Trust Center",
    title: "Transparentan okvir za AI, affiliate, digitalne proizvode i odgovornu komunikaciju.",
    text: "DaniniNet ne krije način rada. AI se koristi kao sofisticiran radni alat u DaniniHub metodi, ali ne kao autoritet koji zamenjuje ljudsku odluku, stručnu proveru ili odgovornost korisnika.",
    cards: [
      { title: "AI transparentnost", text: "Kako koristimo AI kroz metodu Pitaj AI — AI pita tebe: pitanja, dokazi, granice, nacrti i artifacti.", href: "ai-transparentnost", label: "AI use" },
      { title: "Glavni disclaimer", text: "Edukativni karakter sadržaja, digitalnih proizvoda, lokacija, case study materijala i rezultata.", href: "disclaimer", label: "Boundaries" },
      { title: "Affiliate disclosure", text: "Kako označavamo affiliate linkove, preporuke, provizije i granice odgovornosti.", href: "affiliate-disclosure", label: "Affiliate" },
      { title: "Privacy / GDPR", text: "Osnovni principi obrade podataka: minimizacija, svrha, transparentnost, Gumroad/Brevo/support tokovi.", href: "privacy", label: "Data" },
      { title: "Cookies", text: "Kolačići, analitika, tehnička funkcionalnost i budući tracking bez nepotrebnog prikupljanja podataka.", href: "cookies", label: "Tracking" },
      { title: "Terms", text: "Uslovi korišćenja sajta, digitalnih proizvoda, komunikacije i eksternih checkout/delivery kanala.", href: "terms", label: "Terms" },
      { title: "Health disclaimer", text: "Posebne granice za budući health/water pravac: edukacija, navike, affiliate, bez medicinskih obećanja.", href: "health-disclaimer", label: "Health" },
    ],
    principleTitle: "Princip poverenja",
    principleText: "Ako nešto nije provereno, ne predstavlja se kao činjenica. Ako postoji affiliate odnos, jasno se označava. Ako tema zahteva stručnjaka, korisnik se ne gura u neosnovanu odluku. Ako je AI pomogao u strukturi, to se ne krije — objašnjava se normalno i profesionalno.",
    aiTitle: "Zašto je AI ovde važan",
    aiText: "DaniniHub metoda je deo identiteta DaniniNet-a. AI pomaže da se postave bolja pitanja, razdvoje činjenice od pretpostavki, prepoznaju rupe u argumentu i pretvore ideje u proverljive digitalne artifacte. Upravo zato AI transparentnost nije dodatak, nego deo trust sloja.",
  },
  de: {
    eyebrow: "Legal & Trust Center",
    title: "Transparenter Rahmen für KI, Affiliate, digitale Produkte und verantwortliche Kommunikation.",
    text: "DaniniNet versteckt die Arbeitsweise nicht. KI wird in der DaniniHub Methode als anspruchsvolles Arbeitswerkzeug eingesetzt, aber nicht als Autorität, die menschliche Entscheidung, Fachprüfung oder Nutzerverantwortung ersetzt.",
    cards: [
      { title: "KI-Transparenz", text: "Wie KI in der Methode Frag die KI — die KI fragt dich eingesetzt wird: Fragen, Belege, Grenzen, Entwürfe und Artefakte.", href: "ai-transparentnost", label: "KI" },
      { title: "Haupt-Disclaimer", text: "Bildungscharakter von Inhalten, digitalen Produkten, Standortmaterialien, Case Studies und Ergebnissen.", href: "disclaimer", label: "Grenzen" },
      { title: "Affiliate Disclosure", text: "Wie Affiliate-Links, Empfehlungen, Provisionen und Verantwortungsgrenzen gekennzeichnet werden.", href: "affiliate-disclosure", label: "Affiliate" },
      { title: "Privacy / DSGVO", text: "Grundprinzipien der Datenverarbeitung: Minimierung, Zweck, Transparenz, Gumroad/Brevo/Support-Flows.", href: "privacy", label: "Daten" },
      { title: "Cookies", text: "Cookies, Analytics, technische Funktionen und künftiges Tracking ohne unnötige Datenerhebung.", href: "cookies", label: "Tracking" },
      { title: "Terms", text: "Nutzungsbedingungen für Website, digitale Produkte, Kommunikation und externe Checkout-/Delivery-Kanäle.", href: "terms", label: "Terms" },
      { title: "Health Disclaimer", text: "Grenzen für den künftigen Health/Water-Bereich: Bildung, Routinen, Affiliate, keine medizinischen Versprechen.", href: "health-disclaimer", label: "Health" },
    ],
    principleTitle: "Vertrauensprinzip",
    principleText: "Was nicht geprüft ist, wird nicht als Tatsache dargestellt. Affiliate-Beziehungen werden klar gekennzeichnet. Wenn ein Thema Fachleute erfordert, wird der Nutzer nicht zu unbegründeten Entscheidungen gedrängt. Wenn KI bei der Struktur geholfen hat, wird das nicht versteckt, sondern professionell erklärt.",
    aiTitle: "Warum KI hier wichtig ist",
    aiText: "Die DaniniHub Methode gehört zur Identität von DaniniNet. KI hilft, bessere Fragen zu stellen, Fakten von Annahmen zu trennen, Argumentationslücken zu erkennen und Ideen in überprüfbare digitale Artefakte zu verwandeln. Deshalb ist KI-Transparenz kein Zusatz, sondern Teil der Vertrauensebene.",
  },
  en: {
    eyebrow: "Legal & Trust Center",
    title: "A transparent framework for AI, affiliate, digital products and responsible communication.",
    text: "DaniniNet does not hide its working method. AI is used inside the DaniniHub method as a sophisticated working tool, but not as an authority that replaces human decisions, professional review or user responsibility.",
    cards: [
      { title: "AI transparency", text: "How AI is used through the Ask AI — AI asks you method: questions, proof, boundaries, drafts and artifacts.", href: "ai-transparentnost", label: "AI use" },
      { title: "Main disclaimer", text: "Educational nature of content, digital products, location materials, case studies and outcomes.", href: "disclaimer", label: "Boundaries" },
      { title: "Affiliate disclosure", text: "How affiliate links, recommendations, commissions and responsibility boundaries are disclosed.", href: "affiliate-disclosure", label: "Affiliate" },
      { title: "Privacy / GDPR", text: "Core data principles: minimization, purpose, transparency, Gumroad/Brevo/support flows.", href: "privacy", label: "Data" },
      { title: "Cookies", text: "Cookies, analytics, technical functionality and future tracking without unnecessary data collection.", href: "cookies", label: "Tracking" },
      { title: "Terms", text: "Terms for site use, digital products, communication and external checkout/delivery channels.", href: "terms", label: "Terms" },
      { title: "Health disclaimer", text: "Boundaries for the future health/water direction: education, routines, affiliate, no medical promises.", href: "health-disclaimer", label: "Health" },
    ],
    principleTitle: "Trust principle",
    principleText: "If something is not verified, it is not presented as fact. If an affiliate relationship exists, it is clearly disclosed. If a topic requires a professional, users are not pushed into unsupported decisions. If AI helped structure the work, that is not hidden — it is explained clearly and professionally.",
    aiTitle: "Why AI matters here",
    aiText: "The DaniniHub method is part of DaniniNet's identity. AI helps ask better questions, separate facts from assumptions, identify gaps in an argument and turn ideas into verifiable digital artifacts. That is why AI transparency is not an add-on; it is part of the trust layer.",
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
          <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">DaniniHub method layer</p>
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
      <section className="bg-[#07142b] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-sm uppercase tracking-[0.22em] text-[#b9d7f0]">Trust layer</p>
          <h2 className="mt-4 text-4xl font-semibold">{t.principleTitle}</h2>
          <p className="mt-5 max-w-4xl leading-8 text-slate-300">{t.principleText}</p>
        </div>
      </section>
    </SiteShell>
  );
}
