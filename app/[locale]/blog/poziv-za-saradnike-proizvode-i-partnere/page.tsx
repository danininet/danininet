import Link from "next/link";
import { SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "Partneri · Proizvodi · Saradnici",
    title: "PROJEKAT DANINI otvara prostor za ozbiljne saradnike, proizvode i poslovne partnere",
    intro: "PROJEKAT DANINI razvija digitalni ekosistem koji povezuje AI metodologiju, edukaciju, digitalne proizvode, zdrav stil zivota, vodu, affiliate marketing i realne poslovne studije slucaja. Cilj nije masovno oglasavanje bez kriterijuma, vec okupljanje saradnika i proizvoda koji mogu doprineti poverenju, kvalitetu i dugorocnoj vrednosti sistema.",
    blocks: [
      ["Sta gradimo", "DaniniHub je operativni AI sistem i metodologija Pitaj AI - AI pita tebe. DaniniNet je poslovni, affiliate i prodajni portal. DaniniLans je edukativni prostor za vodu, rutinu i zdrav stil zivota. Calije Park Residence je DPL Case Study za digitalnu prezentaciju lokacije."],
      ["Koga trazimo", "Otvoreni smo za saradnike iz oblasti zdravog stila zivota, vode, filtracije, kuhinjskih sistema, digitalnih alata, hostinga, AI edukacije, affiliate proizvoda, marketinga, dizajna, videa, gradjevinarstva, projektovanja, nekretnina i lokalnih usluga."],
      ["Sta mora da prodje proveru", "Svaki proizvod mora imati jasan kvalitet, realnu upotrebu, transparentnu cenu, pouzdanu isporuku, korektne uslove kupovine i jasnu politiku reklamacije. Ne promovisemo proizvode samo zato sto nude proviziju."],
      ["Modeli saradnje", "Saradnja moze obuhvatiti affiliate promociju, partnerski profil, product showcase, sponzorisani clanak, preporuku proizvoda, zajednicki edukativni sadrzaj, video promociju, poslovni katalog ili regionalnu kampanju."],
      ["Pravilo poverenja", "Poverenje se ne gradi agresivnom prodajom. Gradi se jasnim sadrzajem, dokazima, transparentnoscu, odgovornim disclosure-om i proizvodima koji imaju prirodnu vezu sa temom sajta."],
    ],
    checklistTitle: "Provera proizvoda pre promocije",
    checklist: ["Da li proizvod ima realnu vezu sa temom sajta?", "Da li je profesionalno predstavljen?", "Da li ima jasnu cenu i uslove kupovine?", "Da li se moze promovisati bez preteranih tvrdnji?", "Da li affiliate provizija ne kvari objektivnost?", "Da li proizvod jaca poverenje u PROJEKAT DANINI?"],
    ctaTitle: "Predlozite saradnju ili proizvod",
    ctaText: "Posaljite kratak opis firme, proizvoda, usluge, link ka sajtu i predlog modela saradnje. Prvo radimo proveru smisla i kvaliteta, pa tek onda dogovor o objavi, showcase-u ili affiliate poziciji.",
    email: "info@daninihub.com",
    disclaimer: "Ovaj poziv nije javna ponuda, garancija objave, garancija prodaje ili automatsko prihvatanje saradnje. Svaki predlog prolazi rucnu proveru relevantnosti, kvaliteta, pravnog okvira i uklapanja u Danini sistem.",
  },
  de: {
    eyebrow: "Partner · Produkte · Kooperation",
    title: "PROJEKT DANINI oeffnet den Raum fuer serioese Partner, Produkte und Kooperationen",
    intro: "PROJEKT DANINI entwickelt ein digitales Oekosystem aus AI-Methodik, Bildung, digitalen Produkten, gesundem Lebensstil, Wasser, Affiliate Marketing und realen Business Case Studies. Ziel ist keine beliebige Werbung, sondern ein kuratierter Raum fuer Partner und Produkte mit echter Relevanz.",
    blocks: [
      ["Was wir bauen", "DaniniHub ist das operative AI-System und die Methode Frag die KI - die KI fragt dich. DaniniNet ist Business-, Affiliate- und Sales-Portal. DaniniLans ist der Bildungsraum fuer Wasser, Routine und gesunden Lebensstil. Calije Park Residence ist DPL Case Study fuer digitale Standortpraesentation."],
      ["Wen wir suchen", "Wir sind offen fuer Partner aus Wasser, Filtration, Kueche, digitalen Tools, Hosting, AI-Bildung, Affiliate-Produkten, Marketing, Design, Video, Bau, Planung, Immobilien und lokalen Dienstleistungen."],
      ["Was geprueft wird", "Jedes Produkt braucht klare Qualitaet, realen Nutzen, transparente Preise, verlaessliche Lieferung, faire Kaufbedingungen und eine nachvollziehbare Reklamationslogik."],
      ["Kooperationsmodelle", "Moeglich sind Affiliate-Promotion, Partnerprofil, Product Showcase, Sponsored Article, Produktempfehlung, gemeinsamer Bildungsinhalt, Video, Business Directory oder regionale Kampagne."],
      ["Vertrauensregel", "Vertrauen entsteht nicht durch aggressive Verkaufslogik, sondern durch Kontext, Belege, Transparenz, Disclosure und Produkte, die wirklich zur jeweiligen Seite passen."],
    ],
    checklistTitle: "Produktpruefung vor Promotion",
    checklist: ["Passt das Produkt natuerlich zum Thema?", "Ist es professionell dargestellt?", "Sind Preis und Kaufbedingungen klar?", "Kann es ohne uebertriebene Versprechen beworben werden?", "Bleibt die Empfehlung trotz Provision objektiv?", "Staerkt das Produkt das Vertrauen in PROJEKT DANINI?"],
    ctaTitle: "Kooperation oder Produkt vorschlagen",
    ctaText: "Senden Sie eine kurze Beschreibung des Unternehmens, Produkts, der Dienstleistung, einen Website-Link und den gewuenschten Kooperationsrahmen. Erst pruefen wir Relevanz und Qualitaet, dann folgt die Entscheidung ueber Veroeffentlichung, Showcase oder Affiliate-Position.",
    email: "info@daninihub.com",
    disclaimer: "Dieser Aufruf ist kein oeffentliches Angebot, keine Veroeffentlichungsgarantie und keine automatische Annahme einer Kooperation. Jeder Vorschlag wird manuell geprueft.",
  },
  en: {
    eyebrow: "Partners · Products · Collaboration",
    title: "PROJECT DANINI opens a curated space for serious partners, products and collaborators",
    intro: "PROJECT DANINI is building a digital ecosystem connecting AI methodology, education, digital products, healthy lifestyle, water, affiliate marketing and real business case studies. The goal is not random advertising, but a professional partner layer built on trust, relevance and long-term value.",
    blocks: [
      ["What we are building", "DaniniHub is the operating AI system and Ask AI - AI asks you method. DaniniNet is the business, affiliate and sales portal. DaniniLans is the educational space for water, routine and healthy lifestyle. Calije Park Residence is a DPL Case Study for digital location presentation."],
      ["Who we are looking for", "We are open to partners from healthy lifestyle, water, filtration, kitchen systems, digital tools, hosting, AI education, affiliate products, marketing, design, video, construction, planning, real estate and local services."],
      ["What must be checked", "Every product needs clear quality, real use, transparent pricing, reliable delivery, fair purchase terms and a reasonable complaint or refund process."],
      ["Collaboration models", "Collaboration may include affiliate promotion, partner profile, product showcase, sponsored article, product recommendation, joint educational content, video, business directory or regional campaign."],
      ["Trust rule", "Trust is not built through aggressive selling. It is built through useful context, proof, transparency, disclosure and products that naturally fit the topic."],
    ],
    checklistTitle: "Product check before promotion",
    checklist: ["Does the product fit the topic naturally?", "Is it presented professionally?", "Are price and purchase terms clear?", "Can it be promoted without exaggerated claims?", "Does commission not damage objectivity?", "Does the product strengthen trust in PROJECT DANINI?"],
    ctaTitle: "Suggest a collaboration or product",
    ctaText: "Send a short description of the company, product, service, website link and preferred cooperation model. We first check relevance and quality, then decide about publication, showcase or affiliate placement.",
    email: "info@daninihub.com",
    disclaimer: "This invitation is not a public offer, publication guarantee, sales guarantee or automatic acceptance of cooperation. Every proposal is manually reviewed.",
  },
} as const;

export default async function PartnerArticle({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang} currentPath={`/${lang}/blog/poziv-za-saradnike-proizvode-i-partnere`}>
      <article>
        <section className="bg-[#07142b] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">{t.eyebrow}</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-tight">{t.title}</h1>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">{t.intro}</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-2">
          {t.blocks.map(([title, text], index) => (
            <section key={title} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-[#226bbf]">0{index + 1}</p>
              <h2 className="mt-3 text-2xl font-semibold text-[#15130f]">{title}</h2>
              <p className="mt-4 leading-8 text-[#706a5d]">{text}</p>
            </section>
          ))}
        </section>

        <section className="bg-[#fffaf1] text-[#15130f]">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="rounded-[2.5rem] bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">Partner filter</p>
              <h2 className="mt-4 text-4xl font-semibold">{t.checklistTitle}</h2>
              <ul className="mt-8 grid gap-4 md:grid-cols-2">
                {t.checklist.map((item) => <li key={item} className="rounded-2xl border border-black/10 bg-[#f4efe5] p-5 leading-8 text-[#706a5d]">{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#07142b] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="text-4xl font-semibold">{t.ctaTitle}</h2>
            <p className="mt-5 max-w-4xl leading-8 text-slate-300">{t.ctaText}</p>
            <p className="mt-8 text-2xl font-semibold text-[#d7b46a]">{t.email}</p>
            <p className="mt-8 max-w-4xl rounded-2xl border border-white/10 bg-white/[0.06] p-5 leading-8 text-slate-300">{t.disclaimer}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/${lang}/legal/affiliate-disclosure`} className="rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">Affiliate disclosure</Link>
              <Link href={`/${lang}/legal`} className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white">Legal & Trust</Link>
            </div>
          </div>
        </section>
      </article>
    </SiteShell>
  );
}
