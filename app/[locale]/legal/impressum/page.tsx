import { SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "Impressum",
    title: "Podaci o vlasniku i odgovornom licu.",
    intro: "Ova stranica je identifikaciona stranica za DaniniNet i DACH trust sloj. Podaci moraju biti provereni i dopunjeni pre intenzivne javne promocije.",
    rows: [
      ["Vlasnik / odgovorno lice", "Dragan Zdravkovic"],
      ["Brend / sajt", "DaniniNet"],
      ["Kontakt", "dragangaganet@gmail.com"],
      ["Adresa", "Uneti punu poslovnu ili zakonski dozvoljenu kontakt adresu pre finalne DACH promocije."],
      ["Odgovornost za sadržaj", "Dragan Zdravkovic je odgovorno lice za sadržaj ovog sajta, osim kada je drugačije navedeno."],
    ],
    note: "Ovaj Impressum nije pravni savet. Za Nemačku, Austriju i Švajcarsku potrebno je proveriti lokalne obaveze sa kvalifikovanim stručnjakom pre finalne upotrebe.",
  },
  de: {
    eyebrow: "Impressum",
    title: "Angaben zum Anbieter und Verantwortlichen.",
    intro: "Diese Seite ist die Anbieterkennzeichnung für DaniniNet und Teil der DACH-Vertrauensebene. Die Angaben müssen vor intensiver öffentlicher Vermarktung geprüft und vervollständigt werden.",
    rows: [
      ["Anbieter / verantwortliche Person", "Dragan Zdravkovic"],
      ["Marke / Website", "DaniniNet"],
      ["Kontakt", "dragangaganet@gmail.com"],
      ["Anschrift", "Bitte vollständige geschäftliche oder rechtlich zulässige Kontaktanschrift vor finaler DACH-Vermarktung eintragen."],
      ["Verantwortlich für den Inhalt", "Dragan Zdravkovic ist für die Inhalte dieser Website verantwortlich, sofern nicht anders angegeben."],
    ],
    note: "Dieses Impressum ist keine Rechtsberatung. Für Deutschland, Österreich und die Schweiz sollten die lokalen Anbieterkennzeichnungs- und Informationspflichten vor finaler Nutzung fachlich geprüft werden.",
  },
  en: {
    eyebrow: "Imprint",
    title: "Provider and responsible person information.",
    intro: "This page is the provider identification page for DaniniNet and part of the DACH trust layer. Details must be reviewed and completed before intensive public promotion.",
    rows: [
      ["Provider / responsible person", "Dragan Zdravkovic"],
      ["Brand / website", "DaniniNet"],
      ["Contact", "dragangaganet@gmail.com"],
      ["Address", "Insert the full business or legally acceptable contact address before final DACH promotion."],
      ["Responsible for content", "Dragan Zdravkovic is responsible for this website's content unless otherwise stated."],
    ],
    note: "This imprint is not legal advice. For Germany, Austria and Switzerland, local provider identification and information obligations should be reviewed by a qualified professional before final use.",
  },
} as const;

export default async function ImpressumPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang} currentPath={`/${lang}/legal/impressum`}>
      <section className="bg-[#07142b] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm uppercase tracking-[0.24em] text-[#d7b46a]">{t.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">{t.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">{t.intro}</p>
        </div>
      </section>
      <section className="bg-[#f4efe5] text-[#15130f]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white">
            {t.rows.map(([label, value]) => (
              <div key={label} className="grid gap-2 border-b border-black/10 p-6 last:border-b-0 md:grid-cols-[0.32fr_0.68fr]">
                <h2 className="font-semibold text-[#15130f]">{label}</h2>
                <p className="leading-8 text-[#706a5d]">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#07142b] text-white">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <p className="max-w-4xl leading-8 text-slate-300">{t.note}</p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
