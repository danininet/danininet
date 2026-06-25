import { SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const provider = {
  name: "Dragan Zdravkovic",
  brand: "DaniniNet",
  address: "Fischerstr. 54, 47055 Duisburg, Deutschland",
  email: "dragangaganet@gmail.com",
};

const copy = {
  sr: {
    eyebrow: "Impressum",
    title: "Podaci o vlasniku i odgovornom licu.",
    intro: "Ova stranica je identifikaciona stranica za DaniniNet i DACH trust sloj. Podaci su usklađeni kao javni kontakt okvir za PROJEKAT DANINI.",
    rows: [
      ["Vlasnik / odgovorno lice", provider.name],
      ["Brend / sajt", provider.brand],
      ["Kontakt", provider.email],
      ["Adresa", provider.address],
      ["Odgovornost za sadržaj", `${provider.name} je odgovorno lice za sadržaj ovog sajta, osim kada je drugačije navedeno.`],
    ],
    note: "Ovaj Impressum predstavlja javni identifikacioni i kontakt okvir za DaniniNet. Za posebne ugovorne, poreske, potrošačke ili regulativne obaveze u DACH regionu potrebna je nezavisna stručna provera pre zaključivanja konkretnih poslova.",
  },
  de: {
    eyebrow: "Impressum",
    title: "Angaben zum Anbieter und Verantwortlichen.",
    intro: "Diese Seite bildet die Anbieterkennzeichnung für DaniniNet und die Vertrauensebene des PROJEKT DANINI.",
    rows: [
      ["Anbieter / verantwortliche Person", provider.name],
      ["Marke / Website", provider.brand],
      ["Kontakt", provider.email],
      ["Anschrift", provider.address],
      ["Verantwortlich für den Inhalt", `${provider.name} ist für die Inhalte dieser Website verantwortlich, sofern nicht anders angegeben.`],
    ],
    note: "Dieses Impressum bildet den öffentlichen Identifikations- und Kontaktbereich für DaniniNet. Besondere vertragliche, steuerliche, verbraucherschutzrechtliche oder regulatorische Pflichten im DACH-Raum sollten vor konkreten Geschäften fachlich geprüft werden.",
  },
  en: {
    eyebrow: "Imprint",
    title: "Provider and responsible person information.",
    intro: "This page provides the provider identification and trust layer for DaniniNet within PROJECT DANINI.",
    rows: [
      ["Provider / responsible person", provider.name],
      ["Brand / website", provider.brand],
      ["Contact", provider.email],
      ["Address", provider.address],
      ["Responsible for content", `${provider.name} is responsible for this website's content unless otherwise stated.`],
    ],
    note: "This imprint provides the public identification and contact framework for DaniniNet. Specific contractual, tax, consumer protection or regulatory obligations in the DACH region should be professionally reviewed before concrete business use.",
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
