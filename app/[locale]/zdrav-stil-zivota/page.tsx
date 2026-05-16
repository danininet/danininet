import { SectionIntro, SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";
import Link from "next/link";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "Health / Water pravac",
    title: "Zdrav stil života i voda — pravac koji se gradi pažljivo, bez medicinskih obećanja.",
    text: "Ova oblast je deo budućeg DaniniNet sistema, ali se ne otvara kao prodajni kanal dok ne postoji odgovoran content okvir, affiliate disclosure, health disclaimer i jasna urednička politika.",
    cards: [
      ["Voda kao svakodnevna rutina", "Navike, hidratacija, kvalitet vode, filteri i dnevni rituali — edukativno, oprezno i bez tvrdnji da proizvod leči ili garantuje ishod."],
      ["Praktično znanje i porodične navike", "Stari recepti, rituali i rutine mogu biti vredni, ali moraju biti predstavljeni kao iskustvo i edukacija, ne kao zamena za stručnu procenu."],
      ["Odgovoran affiliate okvir", "Preporuke proizvoda dolaze tek kada su jasno označene, regionalno relevantne i odvojene od medicinskih ili rezultatskih obećanja."],
    ],
    stepsTitle: "Pre otvaranja ovog pravca moraju postojati",
    steps: ["Health disclaimer", "Affiliate disclosure", "Content standard", "Lista dozvoljenih i zabranjenih tvrdnji", "Regionalna dostupnost proizvoda", "Veza sa DaniniHub metodom"],
    noteTitle: "Zašto se ne žuri",
    noteText: "Health/water teme nose veći rizik od pogrešnih tvrdnji, zato se ovaj pravac gradi tek kada postoji jasna granica između edukacije, iskustva, affiliate preporuke i stručnog saveta.",
    cta: "Vrati se na proizvode",
  },
  de: {
    eyebrow: "Health / Water Richtung",
    title: "Gesunder Lebensstil und Wasser — ein Bereich, der vorsichtig aufgebaut wird.",
    text: "Dieser Bereich gehört zur künftigen DaniniNet Struktur, wird aber erst als Kanal geöffnet, wenn Content-Rahmen, Affiliate Disclosure, Health Disclaimer und redaktionelle Regeln sauber stehen.",
    cards: [
      ["Wasser als tägliche Routine", "Gewohnheiten, Hydration, Wasserqualität, Filter und Rituale — edukativ, vorsichtig und ohne Heil- oder Ergebnisversprechen."],
      ["Praktisches Wissen und Familienroutinen", "Alte Rezepte und Routinen können wertvoll sein, müssen aber als Erfahrung und Bildung dargestellt werden, nicht als Fachberatung."],
      ["Verantwortlicher Affiliate-Rahmen", "Empfehlungen erst mit klarer Kennzeichnung, regionaler Relevanz und ohne medizinische oder Ergebnisversprechen."],
    ],
    stepsTitle: "Vor dem Start müssen vorhanden sein",
    steps: ["Health Disclaimer", "Affiliate Disclosure", "Content Standard", "Erlaubte und verbotene Claims", "Regionale Verfügbarkeit", "Verbindung zur DaniniHub Methode"],
    noteTitle: "Warum es nicht überstürzt wird",
    noteText: "Health/Water Themen haben höhere Risiken. Der Bereich wird erst aufgebaut, wenn Bildung, Erfahrung, Affiliate-Empfehlung und Fachberatung klar getrennt sind.",
    cta: "Zurück zu Produkten",
  },
  en: {
    eyebrow: "Health / Water direction",
    title: "Healthy lifestyle and water — a direction built carefully, without medical promises.",
    text: "This area belongs to the future DaniniNet system, but it does not open as a sales channel until there is a responsible content framework, affiliate disclosure, health disclaimer and editorial policy.",
    cards: [
      ["Water as daily routine", "Habits, hydration, water quality, filters and daily rituals — educational, careful and without claims that a product heals or guarantees outcomes."],
      ["Practical knowledge and family routines", "Old recipes and routines may be valuable, but must be presented as experience and education, not as professional advice."],
      ["Responsible affiliate framework", "Product recommendations come only when clearly disclosed, regionally relevant and separated from medical or result promises."],
    ],
    stepsTitle: "Before opening this direction, these must exist",
    steps: ["Health disclaimer", "Affiliate disclosure", "Content standard", "Allowed and forbidden claims", "Regional product availability", "Connection with DaniniHub method"],
    noteTitle: "Why this is not rushed",
    noteText: "Health/water topics carry higher risk of wrong claims, so this direction is built only when education, experience, affiliate recommendation and professional advice are clearly separated.",
    cta: "Back to products",
  },
} as const;

export default async function HealthWaterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang} currentPath={localizedPath(lang, "health")}>
      <SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-3">
        {t.cards.map(([title, text]) => (
          <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-4 leading-8 text-[#706a5d]">{text}</p>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2.5rem] bg-[#07142b] p-8 text-white shadow-[0_24px_70px_rgba(7,20,43,0.18)]">
          <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">Readiness gate</p>
          <h2 className="mt-4 text-4xl font-semibold">{t.stepsTitle}</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
            {t.steps.map((step, index) => (
              <span key={step} className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-center text-sm text-slate-300">
                <strong className="block text-[#d7b46a]">0{index + 1}</strong>{step}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#07142b] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[#b9d7f0]">Responsible growth</p>
            <h2 className="mt-4 text-4xl font-semibold">{t.noteTitle}</h2>
            <p className="mt-5 max-w-3xl leading-8 text-slate-300">{t.noteText}</p>
          </div>
          <Link href={localizedPath(lang, "products")} className="rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">
            {t.cta}
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
