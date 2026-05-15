import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "Health / Water pravac",
    title: "Zdrav stil života i voda — budući DaniniNet poddomen.",
    text: "Ova oblast je namerno postavljena kao placeholder dok ne definišemo poseban sadržajni sistem, affiliate okvir, pravne granice i organsku vezu sa DaniniHub metodom.",
    cards: [
      ["Voda kao rutina", "Navike, hidratacija, kvalitet vode, filteri i svakodnevni rituali — bez medicinskih obećanja i bez zamene za stručni savet."],
      ["Stara znanja i recepti", "Prostor za proverljive stare navike, recepte, rituale i porodično/praktično znanje koje se mora pažljivo predstaviti."],
      ["Affiliate okvir", "Fizički i digitalni proizvodi iz health/water oblasti tek nakon jasnog disclosure-a, dostupnosti po regionu i odgovorne formulacije."],
    ],
    noteTitle: "Zašto je ovo posebno odvojeno",
    noteText: "Health/water pravac ima posebne rizike: zdravstvene tvrdnje, očekivanja publike, affiliate proizvode i regulatorne granice. Zato ga ne guramo u glavni portal dok ne napravimo poseban content i legal okvir.",
  },
  de: {
    eyebrow: "Health / Water Richtung",
    title: "Gesunder Lebensstil und Wasser — künftige DaniniNet Subdomain.",
    text: "Dieser Bereich ist bewusst als Placeholder angelegt, bis Content-System, Affiliate-Rahmen, rechtliche Grenzen und die Verbindung zur DaniniHub Methode sauber definiert sind.",
    cards: [
      ["Wasser als Routine", "Gewohnheiten, Hydration, Wasserqualität, Filter und tägliche Rituale — ohne medizinische Versprechen und ohne Ersatz für Fachberatung."],
      ["Altes Wissen und Rezepte", "Raum für überprüfbare alte Gewohnheiten, Rezepte, Rituale und praktisches Wissen, das vorsichtig dargestellt werden muss."],
      ["Affiliate-Rahmen", "Physische und digitale Produkte aus Health/Water erst nach klarem Disclosure, regionaler Verfügbarkeit und verantwortlicher Formulierung."],
    ],
    noteTitle: "Warum dieser Bereich getrennt bleibt",
    noteText: "Health/Water hat besondere Risiken: gesundheitsbezogene Aussagen, Erwartungen der Nutzer, Affiliate-Produkte und regulatorische Grenzen. Deshalb wird dieser Bereich erst nach einem separaten Content- und Legal-Rahmen ausgebaut.",
  },
  en: {
    eyebrow: "Health / Water direction",
    title: "Healthy lifestyle and water — future DaniniNet subdomain.",
    text: "This area is intentionally kept as a placeholder until the content system, affiliate framework, legal boundaries and connection with the DaniniHub method are defined properly.",
    cards: [
      ["Water as routine", "Habits, hydration, water quality, filters and daily rituals — without medical promises and without replacing professional advice."],
      ["Old knowledge and recipes", "A space for verifiable old habits, recipes, rituals and practical knowledge that must be presented carefully."],
      ["Affiliate framework", "Physical and digital health/water products only after clear disclosure, regional availability and responsible wording."],
    ],
    noteTitle: "Why this area is separate",
    noteText: "Health/water has specific risks: health claims, audience expectations, affiliate products and regulatory boundaries. It stays separate until a dedicated content and legal framework is ready.",
  },
} as const;

export default async function HealthWaterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang}>
      <SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-3">
        {t.cards.map(([title, text]) => (
          <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-4 leading-8 text-[#706a5d]">{text}</p>
          </article>
        ))}
      </section>
      <section className="bg-[#07142b] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-sm uppercase tracking-[0.22em] text-[#b9d7f0]">Responsible growth</p>
          <h2 className="mt-4 text-4xl font-semibold">{t.noteTitle}</h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-300">{t.noteText}</p>
        </div>
      </section>
    </SiteShell>
  );
}
