import Link from "next/link";
import { SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale="sr"|"de"|"en";

const copy={
  sr:{
    eyebrow:"DaniniNet · Autonomous Revenue OS",
    title:"Ne gradimo još jedan sajt. Gradimo sistem koji mora da pronađe razlog da neko plati.",
    lead:"DaniniNet pronalazi realan problem, pravi ponudu, testira je na tržištu i meri dokaz: upit, rezervaciju, uplatu i ponovljenu uplatu. AI vodi digitalni rad; čovek potvrđuje važne odluke.",
    cta:"Pošalji resurs ili problem", caseCta:"Otvori Case 01 — Čalije",
    whyTitle:"Jedno pravilo pre svega", why:"Ništa ne proglašavamo uspehom dok tržište ne da merljiv signal. Poseta nije prihod. Ideja nije proizvod. Automatizacija nije rezultat.",
    flowTitle:"Operativni tok",
    flow:[
      ["01","SIGNAL","Tražimo problem za koji kupac već troši vreme, novac ili živce."],
      ["02","OFFER","Pravimo najkraću ponudu koju možemo testirati bez velikog ulaganja."],
      ["03","SELL","Izlazimo pred stvarne kupce pre izgradnje velike platforme."],
      ["04","EXECUTE","AI agenti izvršavaju istraživanje, pripremu, follow-up i operativne korake."],
      ["05","APPROVE","Čovek potvrđuje novac, ugovore, pravno važne i rizične radnje."],
      ["06","EVIDENCE","Sistem meri rezultat i odlučuje: SCALE, CHANGE ili KILL."]
    ],
    rolesTitle:"Podela odgovornosti", aiTitle:"AI operator", aiText:"Istraživanje tržišta, analiza konkurencije, prospecting, personalizacija ponude, sadržaj, CRM logika, praćenje i optimizacija.", humanTitle:"Human controller", humanText:"Budžet, ugovori, identitet, pravno važne radnje, konačna cena i odluke sa stvarnim posledicama.",
    firstTitle:"Prvi tržišni pravac", firstText:"Početna hipoteza je AI Office 24/7 za lokalne DACH firme: prijem i kvalifikacija upita, booking, follow-up i uredniji tok do ponude. Ne gradimo SaaS unapred; prvo tražimo prve kupce.",
    caseTitle:"Case 01 ostaje živ dokaz", caseText:"Čalije parking ostaje odvojen realni asset: isti metod, druga vrsta resursa. Administrativna potvrda, test potražnje, minimalni MVP, prva transakcija, pa tek onda ulaganje i širenje.",
    closeTitle:"Ulaz u sistem", closeText:"Počni od onoga što već postoji: znanje, plac, oprema, proces, kontakt, publika ili problem. Sistem treba da pronađe najkraći put do tržišne provere.",
    status:"Sistem se trenutno konsoliduje na jednu javnu operativnu tačku."
  },
  de:{
    eyebrow:"DaniniNet · Autonomous Revenue OS",
    title:"Wir bauen nicht noch eine Website. Wir bauen ein System, das einen Grund finden muss, warum jemand bezahlt.",
    lead:"DaniniNet findet ein reales Problem, baut ein Angebot, testet es am Markt und misst Beweise: Anfrage, Reservierung, Zahlung und Wiederholung. KI führt die digitale Arbeit; der Mensch bestätigt wichtige Entscheidungen.",
    cta:"Ressource oder Problem senden",caseCta:"Case 01 — Čalije öffnen",
    whyTitle:"Eine Regel zuerst",why:"Nichts gilt als Erfolg, bevor der Markt ein messbares Signal liefert. Traffic ist kein Umsatz. Eine Idee ist kein Produkt. Automatisierung ist kein Ergebnis.",
    flowTitle:"Operativer Ablauf",
    flow:[["01","SIGNAL","Ein Problem finden, für das Kunden bereits Zeit, Geld oder Nerven verlieren."],["02","OFFER","Das kleinste testbare Angebot bauen."],["03","SELL","Vor einer großen Plattform mit echten Käufern testen."],["04","EXECUTE","KI-Agenten übernehmen Recherche, Vorbereitung, Follow-up und operative Schritte."],["05","APPROVE","Der Mensch bestätigt Geld, Verträge sowie rechtlich wichtige und riskante Aktionen."],["06","EVIDENCE","Das System misst und entscheidet: SCALE, CHANGE oder KILL."]],
    rolesTitle:"Verantwortung",aiTitle:"AI operator",aiText:"Marktrecherche, Wettbewerbsanalyse, Prospecting, Personalisierung, Inhalte, CRM-Logik, Tracking und Optimierung.",humanTitle:"Human controller",humanText:"Budget, Verträge, Identität, rechtlich wichtige Aktionen, Endpreis und Entscheidungen mit realen Folgen.",
    firstTitle:"Erste Markthypothese",firstText:"AI Office 24/7 für lokale DACH-Betriebe: Anfragen annehmen und qualifizieren, Termine buchen, Follow-up und ein sauberer Weg bis zum Angebot. Kein SaaS vor dem Verkauf; zuerst echte Kunden.",
    caseTitle:"Case 01 bleibt der reale Beweis",caseText:"Čalije Parking bleibt ein separater realer Vermögenswert: gleiche Methode, andere Ressource. Verwaltungsweg, Nachfrage, Minimal-MVP und erste Transaktion vor größerem Investment.",
    closeTitle:"Eingang ins System",closeText:"Starte mit dem, was bereits existiert: Wissen, Grundstück, Ausrüstung, Prozess, Kontakte, Publikum oder Problem. Das System sucht den kürzesten Weg zum Markttest.",
    status:"Das System wird derzeit auf einen öffentlichen operativen Einstieg konsolidiert."
  },
  en:{
    eyebrow:"DaniniNet · Autonomous Revenue OS",
    title:"We are not building another website. We are building a system that must find a reason for someone to pay.",
    lead:"DaniniNet finds a real problem, creates an offer, tests it in the market and measures evidence: inquiry, reservation, payment and repeat payment. AI runs the digital work; humans approve important decisions.",
    cta:"Send a resource or problem",caseCta:"Open Case 01 — Čalije",
    whyTitle:"One rule first",why:"Nothing counts as success until the market produces a measurable signal. Traffic is not revenue. An idea is not a product. Automation is not an outcome.",
    flowTitle:"Operating flow",
    flow:[["01","SIGNAL","Find a problem already costing buyers time, money or friction."],["02","OFFER","Build the smallest offer worth testing."],["03","SELL","Test with real buyers before building a large platform."],["04","EXECUTE","AI agents handle research, preparation, follow-up and operating steps."],["05","APPROVE","Humans approve money, contracts, legally important and risky actions."],["06","EVIDENCE","Measure the outcome and decide: SCALE, CHANGE or KILL."]],
    rolesTitle:"Responsibility split",aiTitle:"AI operator",aiText:"Market research, competitor analysis, prospecting, offer personalization, content, CRM logic, tracking and optimization.",humanTitle:"Human controller",humanText:"Budget, contracts, identity, legally important actions, final pricing and decisions with real-world consequences.",
    firstTitle:"First market direction",firstText:"The opening hypothesis is AI Office 24/7 for local DACH service firms: intake and qualification, booking, follow-up and a cleaner path to quotes. We do not build SaaS first; we look for paying customers first.",
    caseTitle:"Case 01 remains the real-world proof",caseText:"Čalije parking remains a separate physical asset: same method, different resource. Administrative confirmation, demand validation, minimal MVP and first transaction before larger investment.",
    closeTitle:"Enter the system",closeText:"Start with something that already exists: knowledge, land, equipment, a process, contacts, an audience or a problem. The system looks for the shortest path to market evidence.",
    status:"The system is currently being consolidated into one public operating entry point."
  }
} as const;

export default async function Home({params}:{params:Promise<{locale:string}>}){
  const {locale}=await params; const lang:Locale=normalizeLocale(locale); const t=copy[lang];
  const start=lang==="sr"?"/sr/pocni":`/${lang}/start`;
  return <SiteShell locale={lang} currentPath={`/${lang}`}>
    <section className="bg-[#07142b] text-white"><div className="mx-auto max-w-7xl px-6 py-24">
      <p className="text-sm uppercase tracking-[.24em] text-[#c9a85f]">{t.eyebrow}</p>
      <h1 className="mt-7 max-w-6xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">{t.title}</h1>
      <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-300">{t.lead}</p>
      <div className="mt-10 flex flex-wrap gap-4"><Link href={start} className="rounded-full bg-white px-7 py-4 font-semibold text-[#07142b]">{t.cta}</Link><a href="https://calije.daninihub.com/" className="rounded-full border border-white/20 px-7 py-4 font-semibold text-white">{t.caseCta}</a></div>
      <p className="mt-10 max-w-3xl border-l border-[#c9a85f] pl-5 text-sm leading-7 text-slate-400">{t.status}</p>
    </div></section>

    <section className="mx-auto max-w-7xl px-6 py-16"><p className="text-sm uppercase tracking-[.2em] text-[#8b6a2e]">{t.whyTitle}</p><p className="mt-5 max-w-5xl text-3xl font-medium leading-12">{t.why}</p></section>

    <section className="border-y border-black/10 bg-[#efe6d6]"><div className="mx-auto max-w-7xl px-6 py-16"><h2 className="text-4xl font-semibold">{t.flowTitle}</h2><div className="mt-10 divide-y divide-black/10 border-y border-black/10">{t.flow.map(([n,k,d])=><div key={n} className="grid gap-3 py-6 md:grid-cols-[80px_180px_1fr] md:items-start"><span className="text-sm font-semibold text-[#8b6a2e]">{n}</span><strong>{k}</strong><p className="max-w-3xl leading-7 text-[#625d52]">{d}</p></div>)}</div></div></section>

    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2"><div><p className="text-sm uppercase tracking-[.2em] text-[#8b6a2e]">{t.rolesTitle}</p><h2 className="mt-4 text-4xl font-semibold">{t.aiTitle}</h2><p className="mt-5 text-lg leading-8 text-[#625d52]">{t.aiText}</p></div><div className="border-l border-black/15 pl-0 lg:pl-10"><h2 className="text-4xl font-semibold">{t.humanTitle}</h2><p className="mt-5 text-lg leading-8 text-[#625d52]">{t.humanText}</p></div></section>

    <section className="bg-white"><div className="mx-auto max-w-7xl px-6 py-16"><div className="max-w-4xl"><p className="text-sm uppercase tracking-[.2em] text-[#226bbf]">REVENUE UNIT #1</p><h2 className="mt-4 text-4xl font-semibold">{t.firstTitle}</h2><p className="mt-6 text-lg leading-8 text-[#625d52]">{t.firstText}</p></div><div className="mt-14 max-w-4xl border-t border-black/10 pt-10"><p className="text-sm uppercase tracking-[.2em] text-[#226bbf]">REAL ASSET · CASE 01</p><h2 className="mt-4 text-4xl font-semibold">{t.caseTitle}</h2><p className="mt-6 text-lg leading-8 text-[#625d52]">{t.caseText}</p></div></div></section>

    <section className="mx-auto max-w-7xl px-6 py-20"><h2 className="max-w-4xl text-5xl font-semibold leading-tight">{t.closeTitle}</h2><p className="mt-6 max-w-3xl text-xl leading-9 text-[#625d52]">{t.closeText}</p><Link href={start} className="mt-9 inline-flex rounded-full bg-[#07142b] px-8 py-4 font-semibold text-white">{t.cta} →</Link></section>
  </SiteShell>;
}
