import Link from "next/link";
import { SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    title: "Zašto obična affiliate preporuka nije dovoljna",
    eyebrow: "Evergreen · DaniniNet metoda",
    intro: "Affiliate preporuka nije samo link. Ako nema kontekst, realnu upotrebu, disclosure i jasne granice tvrdnji, ona ne gradi poverenje nego samo pritiska korisnika ka kliku.",
    points: [
      ["Problem", "Obična preporuka često preskače najvažnije pitanje: zašto je baš taj alat, proizvod ili vodič relevantan za konkretnu situaciju korisnika."],
      ["Podpitanja", "DaniniNet pristup prvo postavlja do tri pitanja: šta korisnik pokušava da reši, koji rizik treba izbeći i koji sledeći korak ima smisla bez pritiska."],
      ["Artifact", "Dobra preporuka treba da ostavi trag: kratak pregled, upotrebni kontekst, ograničenja, alternativu ako proizvod nije dobar izbor i jasan disclosure."],
      ["Trust", "Affiliate odnos mora biti vidljiv pre CTA-a. Korisnik treba da zna kada link može doneti proviziju i da preporuka nije garancija rezultata."],
    ],
    dplTitle: "Veza sa DPL proizvodom",
    dplText: "Digitalna prodaja lokacije koristi isti princip: javna prezentacija, jasno razdvajanje informacija, lead logika i trust okvir pre poziva na kupovinu ili kontakt.",
    cta: "Pogledaj DPL proizvod",
    newsletter: "Prijavi interesovanje",
    disclaimer: "Ovaj članak je edukativan i informativan. Affiliate linkovi, ako se koriste, moraju biti jasno označeni i ne predstavljaju garanciju zarade, rezultata ili prikladnosti za svakog korisnika.",
  },
  de: {
    title: "Warum eine normale Affiliate-Empfehlung nicht reicht",
    eyebrow: "Evergreen · DaniniNet Methode",
    intro: "Eine Affiliate-Empfehlung ist nicht nur ein Link. Ohne Kontext, reale Nutzung, Disclosure und klare Grenzen entsteht kein Vertrauen, sondern nur Klickdruck.",
    points: [
      ["Problem", "Eine normale Empfehlung überspringt oft die wichtigste Frage: Warum ist genau dieses Tool, Produkt oder dieser Leitfaden für die konkrete Situation relevant?"],
      ["Rückfragen", "Der DaniniNet Ansatz stellt zuerst bis zu drei Fragen: Was soll gelöst werden, welches Risiko muss vermieden werden und welcher nächste Schritt ist ohne Druck sinnvoll?"],
      ["Artefakt", "Eine gute Empfehlung hinterlässt ein Artefakt: Kurzüberblick, Nutzungskontext, Grenzen, Alternative und klare Offenlegung."],
      ["Trust", "Eine Affiliate-Beziehung muss vor dem CTA erkennbar sein. Nutzer sollen wissen, ob ein Link eine Provision auslösen kann."],
    ],
    dplTitle: "Bezug zum DPL Produkt",
    dplText: "Digitaler Verkauf von Standorten nutzt denselben Grundsatz: öffentliche Präsentation, klare Informationsgrenzen, Lead-Logik und Trust-Rahmen vor Kauf- oder Kontaktaufruf.",
    cta: "DPL Produkt ansehen",
    newsletter: "Interesse anmelden",
    disclaimer: "Dieser Artikel ist edukativ und informativ. Affiliate-Links müssen klar gekennzeichnet werden und garantieren keine Einnahmen, Ergebnisse oder Eignung für jede Situation.",
  },
  en: {
    title: "Why a standard affiliate recommendation is not enough",
    eyebrow: "Evergreen · DaniniNet method",
    intro: "An affiliate recommendation is not just a link. Without context, real use, disclosure and clear claim boundaries, it creates click pressure instead of trust.",
    points: [
      ["Problem", "A standard recommendation often skips the key question: why is this tool, product or guide relevant for this user situation?"],
      ["Questions", "The DaniniNet approach starts with up to three questions: what needs to be solved, what risk should be avoided and what next step makes sense without pressure?"],
      ["Artifact", "A good recommendation leaves an artifact: short overview, usage context, limits, alternative and clear disclosure."],
      ["Trust", "An affiliate relationship must be visible before the CTA. Users should know whether a link may generate a commission."],
    ],
    dplTitle: "Connection to the DPL product",
    dplText: "Digital Location Sales uses the same principle: public presentation, clear information boundaries, lead logic and a trust frame before a purchase or contact CTA.",
    cta: "View DPL product",
    newsletter: "Register interest",
    disclaimer: "This article is educational and informational. Affiliate links, when used, must be clearly disclosed and do not guarantee income, results or suitability for every situation.",
  },
} as const;

export default async function AffiliateTrustArticle({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang} currentPath={`/${lang}/blog/zasto-obicna-affiliate-preporuka-nije-dovoljna`}>
      <article>
        <section className="bg-[#07142b] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">{t.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight">{t.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{t.intro}</p>
          </div>
        </section>
        <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-2">
          {t.points.map(([title, text], index) => (
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
              <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">DaniniHub artifact logic</p>
              <h2 className="mt-4 text-4xl font-semibold">{t.dplTitle}</h2>
              <p className="mt-5 max-w-4xl leading-8 text-[#706a5d]">{t.dplText}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={localizedPath(lang, "dpl")} className="rounded-full bg-[#07142b] px-6 py-3 text-sm font-semibold text-white">{t.cta}</Link>
                <Link href={`/${lang}/newsletter`} className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-[#07142b]">{t.newsletter}</Link>
              </div>
              <p className="mt-8 rounded-2xl border border-black/10 bg-[#f4efe5] p-5 leading-8 text-[#706a5d]">{t.disclaimer}</p>
            </div>
          </div>
        </section>
      </article>
    </SiteShell>
  );
}
