import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "Legal & Trust",
    title: "Jasne granice za edukaciju, AI, affiliate i digitalne proizvode.",
    text: "Ova stranica objašnjava kako DaniniNet komunicira edukativni sadržaj, affiliate preporuke, AI transparentnost, digitalnu isporuku, GDPR/kolačiće i ograničenja odgovornosti.",
    sections: [
      ["Edukativni karakter", "Sadržaj na DaniniNet-u je informativan i edukativan. Ne predstavlja pravni, finansijski, investicioni, urbanistički, tehnički, zdravstveni ili profesionalni savet."],
      ["AI transparentnost", "AI se koristi kao pomoćni alat za strukturisanje pitanja, ideja, rizika, nacrta i sledećih koraka. AI nije autoritet koji donosi odluke umesto korisnika."],
      ["Affiliate napomena", "Pojedini linkovi mogu biti affiliate linkovi. To znači da DaniniNet može ostvariti proviziju ako korisnik kupi preko takvog linka, bez dodatnog troška za korisnika."],
      ["Digitalni proizvodi", "Digitalni proizvodi mogu biti isporučeni preko eksternog checkout/delivery provajdera. Uslovi kupovine, povraćaja i pristupa zavise od konkretne ponude i provajdera."],
      ["Health / Water disclaimer", "Sadržaj o vodi, navikama, rutinama i zdravom stilu života je informativan. Ne zamenjuje lekara, nutricionistu ili kvalifikovanog zdravstvenog stručnjaka."],
      ["Privatnost i kolačići", "DaniniNet treba da koristi samo neophodne podatke za formu, isporuku, support i analitiku u skladu sa GDPR principima: minimizacija, transparentnost i svrha obrade."],
    ],
    finalTitle: "Princip poverenja",
    finalText: "Ako nešto nije provereno, ne predstavlja se kao činjenica. Ako postoji affiliate odnos, mora biti jasno označen. Ako tema zahteva stručnjaka, korisnik se ne sme gurati u neosnovanu odluku.",
  },
  de: {
    eyebrow: "Legal & Trust",
    title: "Klare Grenzen für Bildung, KI, Affiliate und digitale Produkte.",
    text: "Diese Seite erklärt, wie DaniniNet edukative Inhalte, Affiliate-Empfehlungen, KI-Transparenz, digitale Lieferung, DSGVO/Cookies und Haftungsgrenzen kommuniziert.",
    sections: [
      ["Edukative Inhalte", "Die Inhalte auf DaniniNet dienen Informations- und Bildungszwecken. Sie sind keine Rechts-, Finanz-, Anlage-, Bau-, Planungs-, Gesundheits- oder professionelle Beratung."],
      ["KI-Transparenz", "KI wird als Hilfswerkzeug zur Strukturierung von Fragen, Ideen, Risiken, Entwürfen und nächsten Schritten eingesetzt. KI trifft keine Entscheidungen für Nutzer."],
      ["Affiliate-Hinweis", "Einige Links können Affiliate-Links sein. DaniniNet kann eine Provision erhalten, wenn Nutzer über solche Links kaufen, ohne zusätzliche Kosten für Nutzer."],
      ["Digitale Produkte", "Digitale Produkte können über externe Checkout-/Delivery-Anbieter bereitgestellt werden. Kauf-, Erstattungs- und Zugangsbedingungen hängen vom konkreten Angebot und Anbieter ab."],
      ["Health / Water Disclaimer", "Inhalte zu Wasser, Routinen und gesundem Lebensstil sind informativ. Sie ersetzen keinen Arzt, Ernährungsberater oder qualifizierten Gesundheitsexperten."],
      ["Datenschutz und Cookies", "DaniniNet sollte nur notwendige Daten für Formulare, Lieferung, Support und Analyse nach DSGVO-Grundsätzen nutzen: Minimierung, Transparenz und Zweckbindung."],
    ],
    finalTitle: "Vertrauensprinzip",
    finalText: "Was nicht geprüft ist, wird nicht als Tatsache dargestellt. Affiliate-Beziehungen werden klar markiert. Wenn ein Thema Fachleute erfordert, wird der Nutzer nicht zu unbegründeten Entscheidungen gedrängt.",
  },
  en: {
    eyebrow: "Legal & Trust",
    title: "Clear boundaries for education, AI, affiliate and digital products.",
    text: "This page explains how DaniniNet communicates educational content, affiliate recommendations, AI transparency, digital delivery, GDPR/cookies and liability boundaries.",
    sections: [
      ["Educational nature", "Content on DaniniNet is informational and educational. It is not legal, financial, investment, planning, technical, health or professional advice."],
      ["AI transparency", "AI is used as an assistive tool for structuring questions, ideas, risks, drafts and next steps. AI does not make decisions for users."],
      ["Affiliate disclosure", "Some links may be affiliate links. DaniniNet may earn a commission if users buy through such links, at no additional cost to the user."],
      ["Digital products", "Digital products may be delivered through external checkout/delivery providers. Purchase, refund and access terms depend on the specific offer and provider."],
      ["Health / Water disclaimer", "Content about water, routines and healthy lifestyle is informational. It does not replace a doctor, nutritionist or qualified health professional."],
      ["Privacy and cookies", "DaniniNet should use only necessary data for forms, delivery, support and analytics under GDPR principles: minimization, transparency and purpose limitation."],
    ],
    finalTitle: "Trust principle",
    finalText: "If something is not verified, it is not presented as fact. Affiliate relationships must be clearly marked. If a topic requires a professional, users should not be pushed into unsupported decisions.",
  },
} as const;

export default async function LegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang}>
      <SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2">
        {t.sections.map(([title, text]) => (
          <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-4 leading-8 text-[#706a5d]">{text}</p>
          </article>
        ))}
      </section>
      <section className="bg-[#07142b] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-sm uppercase tracking-[0.22em] text-[#b9d7f0]">Trust layer</p>
          <h2 className="mt-4 text-4xl font-semibold">{t.finalTitle}</h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-300">{t.finalText}</p>
        </div>
      </section>
    </SiteShell>
  );
}
