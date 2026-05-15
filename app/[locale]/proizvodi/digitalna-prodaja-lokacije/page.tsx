import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";
import { SystemMap } from "@/components/visual/SystemMap";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "DaniniNet digitalni proizvod",
    title: "Digitalna prodaja lokacije",
    text: "Vodič za vlasnike lokacija, agente i digitalne marketare koji žele da lokaciju predstave kao ozbiljan digitalni prodajni sistem — ne kao običan oglas.",
    cta: "Kupi na Gumroad-u",
    secondary: "Pogledaj šta dobijaš",
    price: "Launch cena: 29 €",
    regular: "Regularna cena: 49 €",
    problemTitle: "Lokacija ne prodaje samu sebe kada je predstavljena kao običan oglas.",
    problemText: "Fotografije, površina i cena nisu dovoljni kada treba stvoriti poverenje. Potreban je okvir: javni argument, zatvoreni brief, vizuelni dokaz, SEO struktura, email tok i jasne granice komunikacije.",
    outcomeTitle: "Šta vodič pomaže da izgradiš",
    outcomes: [
      "javni digitalni prikaz lokacije sa jasnim razlogom zašto je prostor zanimljiv",
      "zatvoreni brief za ozbiljnije interesente, bez iznošenja poverljivih detalja javno",
      "prodajni tok: stranica, CTA, email isporuka i selekcija ozbiljnijih kontakata",
      "legal/trust sloj koji ne obećava ono što ne sme da se obeća",
      "AI radni okvir: pitanja, rizici, pretpostavke, dokazi i sledeći koraci",
    ],
    audienceTitle: "Kome je namenjeno",
    audience: ["vlasnicima parcela, kuća, stanova i poslovnih lokacija", "agentima koji žele ozbiljniji digitalni argument", "malim investitorima koji žele test tržišta pre velikog troška", "digitalnim marketarima koji žele realan case study"],
    outlineTitle: "Šta je unutar PDF vodiča",
    outline: [
      ["01", "Prodajna pozicija lokacije", "Kako lokaciju predstaviti kroz vrednost, kontekst i dokaz, ne samo kroz površinu i cenu."],
      ["02", "Javni gateway", "Struktura stranice koja privlači interesovanje bez otkrivanja poverljivih detalja."],
      ["03", "Zatvoreni brief", "Šta ide u ozbiljniji dokument za kvalifikovane interesente, a šta ostaje van javnosti."],
      ["04", "AI radni tok", "Kako koristiti pitanja, potpitanja i rizike bez slepog kopiranja promptova."],
      ["05", "Email i delivery tok", "Kako posetioca prevesti ka kupovini, isporuci materijala i sledećem koraku."],
      ["06", "Legal i trust granice", "Kako komunicirati pažljivo: bez garancija, bez investicionih i pravnih tvrdnji."],
    ],
    tableTitle: "Javno vs. zatvoreno",
    table: [
      ["Javna stranica", "Objašnjava kontekst, gradi poverenje i vodi ka jasnom CTA."],
      ["Zatvoreni brief", "Daje ozbiljniji okvir samo kvalifikovanim interesentima ili kupcima."],
      ["Pregovarački detalji", "Ne objavljuju se javno; služe za kontrolisan razgovor."],
    ],
    bonusTitle: "Bonus Pack",
    bonusText: "Uz vodič ide prateći Bonus Pack: radne liste, strukture stranica, pitanja za pripremu brief-a i okvir za prvi digitalni prodajni tok.",
    sampleTitle: "Preview pre kupovine",
    sampleText: "Na ovoj stranici vidiš logiku proizvoda, outline i način primene. Kompletan PDF, radne liste i bonus materijali isporučuju se nakon kupovine preko Gumroad-a.",
    proofTitle: "Zašto ovo nije teorija",
    proofText: "Proizvod je izveden iz rada na Calije Park Residence proof artifact-u: javni gateway, zatvoreni brief, vizuelni sloj, SEO/legal osnova i lead logika. Poverljivi materijali i pregovarački detalji ne objavljuju se javno.",
    disclaimer: "Digitalna isporuka i naplata idu preko Gumroad checkout-a. Proizvod je edukativan i ne predstavlja pravni, finansijski, urbanistički, tehnički ili investicioni savet.",
  },
  de: {
    eyebrow: "DaniniNet digitales Produkt",
    title: "Digitaler Verkauf von Standorten",
    text: "Ein Leitfaden für Eigentümer, Makler und digitale Marketer, die einen Standort als seriöses digitales Verkaufssystem präsentieren möchten — nicht als einfache Anzeige.",
    cta: "Auf Gumroad kaufen",
    secondary: "Inhalt ansehen",
    price: "Launch-Preis: 29 €",
    regular: "Regulärer Preis: 49 €",
    problemTitle: "Ein Standort verkauft sich nicht von selbst, wenn er wie eine normale Anzeige wirkt.",
    problemText: "Fotos, Fläche und Preis reichen nicht aus, wenn Vertrauen entstehen soll. Es braucht Rahmen: öffentliches Argument, geschlossener Brief, visueller Beleg, SEO-Struktur, E-Mail-Fluss und klare Kommunikationsgrenzen.",
    outcomeTitle: "Was der Leitfaden hilft aufzubauen",
    outcomes: ["eine öffentliche digitale Standortpräsentation mit klarem Argument", "einen geschlossenen Brief für ernsthafte Interessenten ohne vertrauliche Details öffentlich zu machen", "Verkaufsfluss: Seite, CTA, E-Mail-Lieferung und Auswahl ernsthafter Kontakte", "Legal/Trust-Ebene ohne unzulässige Versprechen", "KI-Arbeitsrahmen: Fragen, Risiken, Annahmen, Belege und nächste Schritte"],
    audienceTitle: "Für wen es gedacht ist",
    audience: ["Eigentümer von Grundstücken, Häusern, Wohnungen und Standorten", "Makler mit Bedarf an stärkerem digitalem Argument", "kleine Investoren, die Marktinteresse testen möchten", "digitale Marketer, die einen realen Case Study Prozess suchen"],
    outlineTitle: "Was im PDF-Leitfaden enthalten ist",
    outline: [["01", "Positionierung des Standorts", "Wert, Kontext und Beleg statt nur Fläche und Preis."], ["02", "Öffentlicher Gateway", "Seitenstruktur, die Interesse erzeugt, ohne Vertrauliches offenzulegen."], ["03", "Geschlossener Brief", "Was in ein Dokument für qualifizierte Interessenten gehört."], ["04", "KI-Arbeitsfluss", "Fragen, Rückfragen und Risiken ohne blindes Prompt-Kopieren."], ["05", "E-Mail- und Delivery-Fluss", "Vom Besucher zu Kauf, Lieferung und nächstem Schritt."], ["06", "Legal und Trust", "Sorgfältige Kommunikation ohne Garantien oder Beratungsversprechen."]],
    tableTitle: "Öffentlich vs. geschlossen",
    table: [["Öffentliche Seite", "Erklärt Kontext, baut Vertrauen auf und führt zu einem klaren CTA."], ["Geschlossener Brief", "Gibt qualifizierten Interessenten oder Käufern einen ernsthafteren Rahmen."], ["Verhandlungsdetails", "Werden nicht öffentlich gezeigt; sie gehören in kontrollierte Gespräche."]],
    bonusTitle: "Bonus Pack",
    bonusText: "Zum Leitfaden gehört ein Bonus Pack mit Arbeitslisten, Seitenstrukturen, Fragen zur Brief-Vorbereitung und einem Rahmen für den ersten digitalen Verkaufsfluss.",
    sampleTitle: "Preview vor dem Kauf",
    sampleText: "Diese Seite zeigt Logik, Outline und Anwendung des Produkts. Komplettes PDF, Arbeitslisten und Bonusmaterialien werden nach dem Kauf über Gumroad geliefert.",
    proofTitle: "Warum es keine Theorie ist",
    proofText: "Das Produkt basiert auf dem Calije Park Residence Proof Artifact: öffentlicher Gateway, geschlossener Brief, visuelle Ebene, SEO/Legal-Basis und Lead-Logik. Vertrauliche Materialien und Verhandlungsdetails werden nicht öffentlich gemacht.",
    disclaimer: "Digitale Lieferung und Zahlung erfolgen über Gumroad Checkout. Das Produkt ist edukativ und keine Rechts-, Finanz-, Planungs-, Technik- oder Anlageberatung.",
  },
  en: {
    eyebrow: "DaniniNet digital product",
    title: "Digital Location Sales",
    text: "A guide for owners, agents and digital marketers who want to present a location as a serious digital sales system — not as a simple listing.",
    cta: "Buy on Gumroad",
    secondary: "See what is inside",
    price: "Launch price: 29 €",
    regular: "Regular price: 49 €",
    problemTitle: "A location does not sell itself when it is presented like a standard listing.",
    problemText: "Photos, size and price are not enough when trust is needed. You need a frame: public argument, closed brief, visual proof, SEO structure, email flow and clear communication boundaries.",
    outcomeTitle: "What the guide helps you build",
    outcomes: ["a public digital presentation that explains why the location matters", "a closed brief for serious prospects without exposing confidential details", "sales flow: page, CTA, email delivery and selection of serious contacts", "legal/trust layer without promises that should not be made", "AI working frame: questions, risks, assumptions, evidence and next steps"],
    audienceTitle: "Who it is for",
    audience: ["owners of land, houses, apartments and business locations", "agents who need a stronger digital argument", "small investors who want to test market interest", "digital marketers looking for a real case study"],
    outlineTitle: "What is inside the PDF guide",
    outline: [["01", "Location positioning", "How to present value, context and proof, not just size and price."], ["02", "Public gateway", "A page structure that creates interest without exposing confidential details."], ["03", "Closed brief", "What belongs in a serious document for qualified prospects."], ["04", "AI workflow", "Questions, follow-up questions and risks without blindly copying prompts."], ["05", "Email and delivery flow", "From visitor to purchase, delivery and next step."], ["06", "Legal and trust", "Careful communication without guarantees or advisory claims."]],
    tableTitle: "Public vs. closed",
    table: [["Public page", "Explains context, builds trust and leads to a clear CTA."], ["Closed brief", "Gives qualified prospects or buyers a more serious frame."], ["Negotiation details", "Not published publicly; used in controlled conversations."]],
    bonusTitle: "Bonus Pack",
    bonusText: "The guide includes a Bonus Pack with worksheets, page structures, brief-preparation questions and a framework for the first digital sales flow.",
    sampleTitle: "Preview before purchase",
    sampleText: "This page shows the product logic, outline and use case. The complete PDF, worksheets and bonus materials are delivered after purchase through Gumroad.",
    proofTitle: "Why this is not theory",
    proofText: "The product comes from work on the Calije Park Residence proof artifact: public gateway, closed brief, visual layer, SEO/legal foundation and lead logic. Confidential materials and negotiation details are not published publicly.",
    disclaimer: "Digital delivery and payment are handled through Gumroad checkout. The product is educational and is not legal, financial, planning, technical or investment advice.",
  },
} as const;

export default async function ProductPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];
  const checkoutUrl = process.env.NEXT_PUBLIC_GUMROAD_DPL_URL || "https://danininet.gumroad.com/";

  return (
    <SiteShell locale={lang} currentPath={localizedPath(lang, "dpl")}>
      <SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-[2.5rem] border border-black/10 bg-white p-8 shadow-sm">
          <h2 className="text-4xl font-semibold">{t.problemTitle}</h2>
          <p className="mt-5 leading-8 text-[#706a5d]">{t.problemText}</p>
        </article>
        <aside className="rounded-[2.5rem] bg-[#07142b] p-8 text-white shadow-[0_24px_70px_rgba(7,20,43,0.20)]">
          <p className="text-sm uppercase tracking-[0.22em] text-[#b9d7f0]">PDF + Bonus Pack</p>
          <p className="mt-5 text-4xl font-semibold">{t.price}</p>
          <p className="mt-3 text-slate-300">{t.regular}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={checkoutUrl} className="rounded-full bg-[#d9ecff] px-7 py-4 text-sm font-semibold text-[#07142b] shadow-[0_12px_34px_rgba(217,236,255,0.18)]">
              {t.cta}
            </Link>
            <a href="#outline" className="rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white">
              {t.secondary}
            </a>
          </div>
        </aside>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-black/10 bg-[#fffaf1] p-8">
          <h2 className="text-3xl font-semibold">{t.outcomeTitle}</h2>
          <ul className="mt-6 grid gap-4 text-[#706a5d]">
            {t.outcomes.map((item) => <li key={item} className="border-b border-black/10 pb-4 last:border-0">{item}</li>)}
          </ul>
        </article>
        <SystemMap variant="light" />
      </section>
      <section id="outline" className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2rem] border border-black/10 bg-white p-8">
          <h2 className="text-3xl font-semibold">{t.outlineTitle}</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {t.outline.map(([num, title, text]) => (
              <article key={num} className="rounded-2xl border border-black/10 bg-[#fffaf1] p-5">
                <p className="text-sm font-semibold text-[#226bbf]">{num}</p>
                <h3 className="mt-2 text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-[#706a5d]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-[2rem] bg-[#07142b] p-8 text-white">
          <p className="text-sm uppercase tracking-[0.22em] text-[#b9d7f0]">Bonus</p>
          <h2 className="mt-4 text-3xl font-semibold">{t.bonusTitle}</h2>
          <p className="mt-5 leading-8 text-slate-300">{t.bonusText}</p>
          <div className="mt-7 grid gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/10 px-4 py-2">Worksheets</span>
            <span className="rounded-full border border-white/10 px-4 py-2">Page structures</span>
            <span className="rounded-full border border-white/10 px-4 py-2">Brief questions</span>
          </div>
        </article>
        <article className="rounded-[2rem] border border-black/10 bg-white p-8">
          <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">Preview</p>
          <h2 className="mt-4 text-3xl font-semibold">{t.sampleTitle}</h2>
          <p className="mt-5 leading-8 text-[#706a5d]">{t.sampleText}</p>
        </article>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-black/10 bg-white p-8">
          <h2 className="text-3xl font-semibold">{t.tableTitle}</h2>
          <div className="mt-6 grid gap-3">
            {t.table.map(([title, text]) => (
              <div key={title} className="grid gap-3 rounded-2xl border border-black/10 bg-[#fffaf1] p-5 md:grid-cols-[0.35fr_0.65fr]">
                <strong>{title}</strong>
                <span className="text-[#706a5d]">{text}</span>
              </div>
            ))}
          </div>
        </article>
        <article className="rounded-[2rem] border border-black/10 bg-white p-8">
          <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">Proof artifact</p>
          <h2 className="mt-4 text-3xl font-semibold">{t.proofTitle}</h2>
          <p className="mt-5 leading-8 text-[#706a5d]">{t.proofText}</p>
        </article>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2rem] border border-black/10 bg-[#fffaf1] p-8 text-sm leading-7 text-[#706a5d]">
          {t.disclaimer}
        </div>
      </section>
    </SiteShell>
  );
}
