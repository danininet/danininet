import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

type Copy = {
  route: string;
  title: string;
  description: string;
  eyebrow: string;
  subtitle: string;
  primary: string;
  secondary: string;
  price: string;
  introTitle: string;
  introText: string;
  checksTitle: string;
  checks: string[];
  deliverTitle: string;
  deliver: string[];
  notTitle: string;
  not: string[];
  intakeTitle: string;
  intakeText: string;
  fields: string[];
  nextTitle: string;
  nextText: string;
  trustTitle: string;
  disclaimer: string;
  trustLinks: { label: string; href: string }[];
};

const copy: Record<Locale, Copy> = {
  sr: {
    route: "/sr/usluge/mini-audit",
    title: "Mini Audit za lokaciju, projekat ili postojeći oglas",
    description: "Kratka DaniniNet procena za parcelu, stan, kuću, lokaciju, projekat ili oglas: šta je javno, šta ide u brief, šta fali i koji je sledeći digitalni prodajni korak.",
    eyebrow: "DaniniNet usluga · 49 EUR",
    subtitle: "Mini Audit je fokusirana procena pre većeg ulaganja u sajt, brief, kampanju ili affiliate/partner tok. Cilj nije da obeća rezultat, nego da razdvoji dokaz, pretpostavku, rizik i sledeći korak.",
    primary: "Zatraži Mini Audit",
    secondary: "Pogledaj Digitalna prodaja lokacije",
    price: "49 EUR · fokusirana procena",
    introTitle: "Šta je Mini Audit",
    introText: "Mini Audit je prvi plaćeni servisni korak posle vodiča. Koristi DaniniHub metodu ‘Pitaj AI — AI pita tebe’ da od postojeće ideje, oglasa ili materijala napravi kratku mapu: šta korisnik već ima, šta nedostaje, šta ne sme da tvrdi i koji prodajni tok ima najviše smisla za prvi pokušaj.",
    checksTitle: "Šta proveravamo",
    checks: ["da li je lokacija objašnjena samo kao oglas ili kao argument", "koji dokazi postoje: fotografije, mape, dokumenti, video, opis", "šta može biti javno, a šta pripada zatvorenom brief-u", "koji su rizični delovi: profit, dozvole, izvodljivost, medicinske/pravne tvrdnje", "koji je prvi realan sledeći korak: vodič, gateway, brief, forma ili kampanja"],
    deliverTitle: "Šta dobijaš",
    deliver: ["kratak audit zaključak", "prioritetnu listu rupa u prezentaciji", "predlog javnog toka", "predlog privatnog brief sloja ako je potreban", "preporuku sledećeg DaniniNet koraka bez garancije ishoda"],
    notTitle: "Šta Mini Audit nije",
    not: ["nije pravni, finansijski, poreski, urbanistički, tehnički ili investicioni savet", "ne garantuje prodaju, profit, investitora ili dozvole", "ne zamenjuje stručnu proveru dokumentacije", "ne uključuje kompletnu izradu sajta, brief-a ili kampanje"],
    intakeTitle: "Šta treba da pošalješ",
    intakeText: "Forma treba da prikupi samo ono što je potrebno za procenu. Brevo se koristi za isporuku, potvrdu i komunikaciju — ne za nasumično skupljanje emailova bez jasne svrhe.",
    fields: ["ime i email", "zemlja/region", "tip: parcela, stan, kuća, lokacija, projekat, postojeći oglas ili drugo", "jezik: SR, DE ili EN", "link do postojećeg oglasa ili materijala", "šta želiš: prodaja, prezentacija, investitor, partner, bolji oglas ili ne znaš", "saglasnost za obradu podataka u svrhu Mini Audit-a"],
    nextTitle: "Posle Mini Audit-a",
    nextText: "Ako audit pokaže da postoji dovoljno materijala i smisla, sledeći korak može biti Gateway Brief ili Full Gateway Setup. Ako nema dovoljno dokaza, rezultat može biti i preporuka da se prvo dopune fotografije, opis, dokumentacija ili legal/trust blokovi.",
    trustTitle: "Trust i granice",
    disclaimer: "Mini Audit je edukativna i operativna procena prezentacije. Ne predstavlja pravni, finansijski, poreski, urbanistički, tehnički ili investicioni savet i ne garantuje komercijalni rezultat.",
    trustLinks: [{ label: "AI transparentnost", href: "/sr/legal/ai-transparentnost" }, { label: "Affiliate disclosure", href: "/sr/legal/affiliate-disclosure" }, { label: "Health disclaimer", href: "/sr/legal/health-disclaimer" }, { label: "DaniniHub metod", href: "/sr/daninihub-metod" }],
  },
  de: {
    route: "/de/services/mini-audit",
    title: "Mini-Audit für Standort, Projekt oder bestehendes Inserat",
    description: "Kurze DaniniNet-Einschätzung für Grundstück, Immobilie, Standort, Projekt oder Inserat: was öffentlich ist, was in einen Brief gehört, was fehlt und welcher digitale Verkaufsschritt sinnvoll ist.",
    eyebrow: "DaniniNet Service · 49 EUR",
    subtitle: "Der Mini-Audit ist ein fokussierter Schritt vor größerem Aufwand in Website, Brief, Kampagne oder Partner-Flow. Ziel ist kein Ergebnisversprechen, sondern die Trennung von Beleg, Annahme, Risiko und nächstem Schritt.",
    primary: "Mini-Audit anfragen",
    secondary: "Digitaler Verkauf von Standorten",
    price: "49 EUR · fokussierte Einschätzung",
    introTitle: "Was ist der Mini-Audit",
    introText: "Der Mini-Audit ist der erste bezahlte Serviceschritt nach dem Leitfaden. Er nutzt die DaniniHub-Methode ‘Frag die KI — die KI fragt dich’, um aus Idee, Inserat oder Material eine kurze Karte zu machen: was vorhanden ist, was fehlt, was nicht behauptet werden darf und welcher Verkaufsfluss zuerst Sinn ergibt.",
    checksTitle: "Was geprüft wird",
    checks: ["ob der Standort nur als Inserat oder als Argument erklärt wird", "welche Belege existieren: Fotos, Karten, Dokumente, Video, Beschreibung", "was öffentlich sein kann und was in einen geschlossenen Brief gehört", "welche Aussagen riskant sind: Profit, Genehmigungen, Machbarkeit, rechtliche/medizinische Aussagen", "welcher nächste Schritt realistisch ist: Leitfaden, Gateway, Brief, Formular oder Kampagne"],
    deliverTitle: "Was du erhältst",
    deliver: ["kurze Audit-Zusammenfassung", "priorisierte Lückenliste", "Vorschlag für öffentlichen Flow", "Vorschlag für privaten Brief-Layer falls nötig", "Empfehlung für den nächsten DaniniNet-Schritt ohne Ergebnisgarantie"],
    notTitle: "Was der Mini-Audit nicht ist",
    not: ["keine Rechts-, Finanz-, Steuer-, Planungs-, Technik- oder Anlageberatung", "keine Garantie für Verkauf, Profit, Investor oder Genehmigungen", "kein Ersatz für fachliche Dokumentenprüfung", "keine komplette Website-, Brief- oder Kampagnenerstellung"],
    intakeTitle: "Was du senden solltest",
    intakeText: "Das Formular sammelt nur, was für die Einschätzung nötig ist. Brevo dient Bestätigung, Lieferung und Kommunikation — nicht dem wahllosen Sammeln von E-Mails ohne klaren Zweck.",
    fields: ["Name und E-Mail", "Land/Region", "Typ: Grundstück, Wohnung, Haus, Standort, Projekt, bestehendes Inserat oder anderes", "Sprache: SR, DE oder EN", "Link zu Inserat oder Material", "Ziel: Verkauf, Präsentation, Investor, Partner, besseres Inserat oder unklar", "Einwilligung zur Verarbeitung für den Mini-Audit"],
    nextTitle: "Nach dem Mini-Audit",
    nextText: "Wenn genug Material und Sinn vorhanden sind, kann der nächste Schritt Gateway Brief oder Full Gateway Setup sein. Wenn Belege fehlen, kann die Empfehlung lauten: zuerst Fotos, Beschreibung, Dokumentation oder Trust-Blöcke ergänzen.",
    trustTitle: "Trust und Grenzen",
    disclaimer: "Der Mini-Audit ist eine edukative und operative Einschätzung der Präsentation. Er ist keine Rechts-, Finanz-, Steuer-, Planungs-, Technik- oder Anlageberatung und garantiert kein kommerzielles Ergebnis.",
    trustLinks: [{ label: "KI-Transparenz", href: "/de/legal/ki-transparenz" }, { label: "Affiliate Disclosure", href: "/de/legal/affiliate-disclosure" }, { label: "Health Disclaimer", href: "/de/legal/health-disclaimer" }, { label: "DaniniHub Methode", href: "/de/methode" }],
  },
  en: {
    route: "/en/services/mini-audit",
    title: "Mini Audit for a location, project or existing listing",
    description: "A short DaniniNet assessment for land, property, location, project or listing: what should be public, what belongs in a brief, what is missing and which digital sales step comes next.",
    eyebrow: "DaniniNet service · 49 EUR",
    subtitle: "Mini Audit is a focused step before investing more into a website, brief, campaign or partner flow. It does not promise results. It separates proof, assumptions, risk and next action.",
    primary: "Request Mini Audit",
    secondary: "See Digital Location Sales",
    price: "49 EUR · focused assessment",
    introTitle: "What Mini Audit is",
    introText: "Mini Audit is the first paid service step after the guide. It uses the DaniniHub method ‘Ask AI — AI asks you’ to turn an idea, listing or material set into a short map: what exists, what is missing, what must not be claimed and which sales flow makes sense first.",
    checksTitle: "What we check",
    checks: ["whether the location is explained only as a listing or as an argument", "which proof exists: photos, maps, documents, video, description", "what can be public and what belongs in a closed brief", "which claims are risky: profit, permits, feasibility, legal/medical claims", "which next step is realistic: guide, gateway, brief, form or campaign"],
    deliverTitle: "What you receive",
    deliver: ["short audit conclusion", "prioritized presentation gaps", "public flow suggestion", "private brief layer suggestion if needed", "next DaniniNet step recommendation without outcome guarantee"],
    notTitle: "What Mini Audit is not",
    not: ["not legal, financial, tax, planning, technical or investment advice", "not a guarantee of sale, profit, investor or permits", "not a replacement for professional document review", "not full website, brief or campaign production"],
    intakeTitle: "What you should send",
    intakeText: "The form should collect only what is needed for the assessment. Brevo is used for confirmation, delivery and communication — not random email capture without a clear purpose.",
    fields: ["name and email", "country/region", "type: land, apartment, house, location, project, existing listing or other", "language: SR, DE or EN", "link to current listing or material", "goal: sale, presentation, investor, partner, better listing or unknown", "consent for processing data for Mini Audit"],
    nextTitle: "After Mini Audit",
    nextText: "If enough material and logic exist, the next step can be Gateway Brief or Full Gateway Setup. If proof is missing, the recommendation may be to improve photos, description, documentation or trust blocks first.",
    trustTitle: "Trust and boundaries",
    disclaimer: "Mini Audit is an educational and operational assessment of presentation quality. It is not legal, financial, tax, planning, technical or investment advice and does not guarantee commercial results.",
    trustLinks: [{ label: "AI transparency", href: "/en/legal/ai-transparency" }, { label: "Affiliate disclosure", href: "/en/legal/affiliate-disclosure" }, { label: "Health disclaimer", href: "/en/legal/health-disclaimer" }, { label: "DaniniHub method", href: "/en/method" }],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang = normalizeLocale(locale);
  const t = copy[lang];
  return {
    title: `${t.title} | DaniniNet`,
    description: t.description,
    alternates: {
      canonical: t.route,
      languages: { sr: copy.sr.route, de: copy.de.route, en: copy.en.route },
    },
    openGraph: {
      title: `${t.title} | DaniniNet`,
      description: t.description,
      type: "website",
      url: t.route,
    },
  };
}

function Card({ title, items, tone = "light" }: { title: string; items: string[]; tone?: "light" | "dark" }) {
  return (
    <article className={tone === "dark" ? "rounded-[2rem] border border-white/10 bg-white/[0.06] p-8" : "rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm"}>
      <h2 className="text-3xl font-semibold">{title}</h2>
      <ul className="mt-6 grid gap-3">
        {items.map((item, index) => (
          <li key={item} className={tone === "dark" ? "rounded-2xl border border-white/10 bg-[#07142b] p-4 text-slate-300" : "rounded-2xl bg-[#fffaf1] p-4 text-[#706a5d]"}>
            <strong className={tone === "dark" ? "mr-3 text-[#d7b46a]" : "mr-3 text-[#07142b]"}>0{index + 1}</strong>{item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default async function MiniAuditPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];
  const dplPath = lang === "sr" ? "/sr/proizvodi/digitalna-prodaja-lokacije" : lang === "de" ? "/de/produkte/digitaler-verkauf-von-standorten" : "/en/products/digital-location-sales";

  return (
    <SiteShell locale={lang} currentPath={t.route}>
      <section className="bg-[#07142b] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#d7b46a]">{t.eyebrow}</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">{t.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">{t.subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#intake" className="rounded-full bg-[#f7fbff] px-7 py-4 text-sm font-semibold text-[#07142b]">{t.primary}</a>
              <Link href={dplPath} className="rounded-full border border-white/15 px-7 py-4 text-sm font-medium text-white">{t.secondary}</Link>
            </div>
          </div>
          <aside className="rounded-[2.2rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#d7b46a]">{t.price}</p>
            <h2 className="mt-5 text-3xl font-semibold">{t.introTitle}</h2>
            <p className="mt-5 leading-8 text-slate-300">{t.introText}</p>
          </aside>
        </div>
      </section>

      <section className="bg-[#f4efe5] text-[#15130f]"><div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-2"><Card title={t.checksTitle} items={t.checks} /><Card title={t.deliverTitle} items={t.deliver} /></div></section>
      <section className="bg-[#fffaf1] text-[#15130f]"><div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr]"><Card title={t.notTitle} items={t.not} /><article id="intake" className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm"><h2 className="text-3xl font-semibold">{t.intakeTitle}</h2><p className="mt-5 leading-8 text-[#706a5d]">{t.intakeText}</p><div className="mt-7 grid gap-3">{t.fields.map((field, index) => <div key={field} className="rounded-2xl bg-[#fffaf1] p-4 text-[#706a5d]"><strong className="mr-3 text-[#07142b]">0{index + 1}</strong>{field}</div>)}</div></article></div></section>
      <section className="bg-[#07142b] text-white"><div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-[1fr_1fr]"><article className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8"><h2 className="text-3xl font-semibold">{t.nextTitle}</h2><p className="mt-5 leading-8 text-slate-300">{t.nextText}</p><div className="mt-7 flex flex-wrap gap-3"><Link href={dplPath} className="rounded-full bg-[#f7fbff] px-6 py-3 text-sm font-semibold text-[#07142b]">{t.secondary}</Link><a href="#intake" className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white">{t.primary}</a></div></article><article className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8"><h2 className="text-3xl font-semibold">{t.trustTitle}</h2><p className="mt-5 leading-8 text-slate-300">{t.disclaimer}</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{t.trustLinks.map((link) => <Link key={link.href} href={link.href} className="rounded-2xl border border-white/10 bg-[#07142b] p-4 text-sm font-semibold text-[#f4d58a]">{link.label}</Link>)}</div></article></div></section>
    </SiteShell>
  );
}
