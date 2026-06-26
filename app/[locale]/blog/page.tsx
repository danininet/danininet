import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const articleSlug = "poziv-za-saradnike-proizvode-i-partnere";
const secondarySlug = "zasto-obicna-affiliate-preporuka-nije-dovoljna";

const copy = {
  sr: {
    eyebrow: "DaniniNet Blog",
    title: "Editorial hub za proizvode, affiliate preporuke i AI-assisted odluke.",
    text: "Blog nije mesto za nasumične tekstove. Svaki članak mora objasniti problem, postaviti do tri AI podpitanja, dati praktičan artifact i jasno označiti affiliate, AI i trust granice.",
    featuredLabel: "Partneri · Proizvodi · Saradnici",
    featuredTitle: "PROJEKAT DANINI otvara prostor za ozbiljne saradnike, proizvode i poslovne partnere",
    featuredText: "Poziv za kompanije, autore, affiliate partnere, dobavljače i stručne saradnike koji žele da uđu u Danini ekosistem kroz kvalitet, transparentnost i dugoročnu vrednost.",
    featuredCta: "Čitaj poziv za saradnju",
    secondaryTitle: "Zašto obična affiliate preporuka nije dovoljna",
    secondaryText: "Affiliate preporuka mora imati kontekst, realnu upotrebu, disclosure, granice tvrdnji i jasan sledeći korak.",
    funnel: ["Problem", "Podpitanja", "Analiza", "Artifact", "Trust"],
    items: [
      ["Affiliate marketing bez guru narativa", "Kako preporučivati alate i proizvode bez quick-money obećanja, pritiska i lažnih rezultata."],
      ["Digitalni proizvodi i delivery", "Kako PDF, bonus, email tok i support treba da rade kao jedan artifact, a ne kao razbacani fajlovi."],
      ["AI dijalog u praksi", "Pitaj AI — AI pita tebe kao metoda za razjašnjenje problema, rizika i odluke, uz maksimalno tri podpitanja."],
      ["Hostinger, alati i infrastruktura", "Hosting, domeni i alati se predstavljaju kroz kontekst upotrebe, ne kao agresivna prodajna lista."],
      ["DaniniLans preview", "Health/water sadržaj se odvaja u poseban authority sloj, uz health disclaimer i odgovorne affiliate preporuke."],
      ["Legal, trust i disclosure", "Svaki affiliate, AI-assisted i health sadržaj mora imati jasne granice pre CTA-a."],
    ],
    cta: "Pogledaj proizvode",
    secondary: "Prijavi interesovanje",
    funnelTitle: "Editorial funnel vodi čitaoca od problema do odgovorne odluke.",
  },
  de: {
    eyebrow: "DaniniNet Blog",
    title: "Editorial Hub für Produkte, Affiliate-Empfehlungen und KI-gestützte Entscheidungen.",
    text: "Der Blog sammelt keine zufälligen Texte. Jeder Artikel erklärt ein Problem, nutzt bis zu drei KI-Rückfragen, liefert ein praktisches Artefakt und markiert Affiliate-, KI- und Trust-Grenzen.",
    featuredLabel: "Partner · Produkte · Kooperation",
    featuredTitle: "PROJEKT DANINI oeffnet den Raum fuer serioese Partner, Produkte und Kooperationen",
    featuredText: "Ein kuratierter Aufruf fuer Unternehmen, Autoren, Affiliate-Partner, Lieferanten und Experten, die in das Danini Oekosystem passen.",
    featuredCta: "Kooperationsaufruf lesen",
    secondaryTitle: "Warum eine normale Affiliate-Empfehlung nicht reicht",
    secondaryText: "Eine Empfehlung braucht Kontext, reale Nutzung, Disclosure und einen relevanten naechsten Schritt.",
    funnel: ["Problem", "Rückfragen", "Analyse", "Artefakt", "Trust"],
    items: [
      ["Affiliate Marketing ohne Guru-Narrativ", "Empfehlungen ohne Quick-Money Versprechen, Druck und falsche Ergebnisse."],
      ["Digitale Produkte und Delivery", "PDF, Bonus, E-Mail-Fluss und Support als ein Artefakt."],
      ["KI-Dialog in der Praxis", "Frag die KI — die KI fragt dich mit maximal drei Rückfragen."],
      ["Hostinger, Tools und Infrastruktur", "Hosting, Domains und Tools im Nutzungskontext, nicht als aggressive Liste."],
      ["DaniniLans Preview", "Health/Water Inhalte werden in einen separaten Authority Layer ausgelagert."],
      ["Legal, Trust und Disclosure", "Affiliate-, KI- und Health-Inhalte brauchen klare Grenzen vor dem CTA."],
    ],
    cta: "Produkte ansehen",
    secondary: "Interesse anmelden",
    funnelTitle: "Der Editorial Funnel führt vom Problem zur verantwortlichen Entscheidung.",
  },
  en: {
    eyebrow: "DaniniNet Blog",
    title: "Editorial hub for products, affiliate recommendations and AI-assisted decisions.",
    text: "The blog is not a collection of random posts. Every article explains a problem, uses up to three AI clarification questions, delivers a practical artifact and clearly marks affiliate, AI and trust boundaries.",
    featuredLabel: "Partners · Products · Collaboration",
    featuredTitle: "PROJECT DANINI opens a curated space for serious partners, products and collaborators",
    featuredText: "A curated invitation for companies, authors, affiliate partners, suppliers and experts who fit the Danini ecosystem.",
    featuredCta: "Read collaboration call",
    secondaryTitle: "Why a standard affiliate recommendation is not enough",
    secondaryText: "A recommendation needs context, real use, disclosure and a relevant next step.",
    funnel: ["Problem", "Questions", "Analysis", "Artifact", "Trust"],
    items: [
      ["Affiliate marketing without guru narratives", "Recommendations without quick-money promises, pressure or fake results."],
      ["Digital products and delivery", "PDF, bonus, email flow and support should work as one artifact."],
      ["AI dialogue in practice", "Ask AI — AI asks you with a maximum of three clarification questions."],
      ["Hostinger, tools and infrastructure", "Hosting, domains and tools presented through usage context, not aggressive lists."],
      ["DaniniLans preview", "Health/water content moves into a separate authority layer with strict disclaimers."],
      ["Legal, trust and disclosure", "Affiliate, AI-assisted and health content needs clear boundaries before the CTA."],
    ],
    cta: "View products",
    secondary: "Register interest",
    funnelTitle: "The editorial funnel leads from problem to responsible decision.",
  },
} as const;

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang} currentPath={localizedPath(lang, "blog")}>
      <SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} />
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <article className="rounded-[2.5rem] bg-[#07142b] p-8 text-white shadow-[0_24px_70px_rgba(7,20,43,0.18)]">
          <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">{t.featuredLabel}</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">{t.featuredTitle}</h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-300">{t.featuredText}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${lang}/blog/${articleSlug}`} className="inline-flex rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">
              {t.featuredCta}
            </Link>
            <Link href={`/${lang}/blog/${secondarySlug}`} className="inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white">
              {t.secondaryTitle}
            </Link>
          </div>
        </article>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2.5rem] bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">Evergreen</p>
          <h2 className="mt-4 text-3xl font-semibold text-[#15130f]">{t.secondaryTitle}</h2>
          <p className="mt-4 max-w-3xl leading-8 text-[#706a5d]">{t.secondaryText}</p>
          <Link href={`/${lang}/blog/${secondarySlug}`} className="mt-6 inline-flex rounded-full bg-[#07142b] px-6 py-3 text-sm font-semibold text-white">{t.secondaryTitle}</Link>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2.5rem] bg-[#07142b] p-6 text-white shadow-[0_24px_70px_rgba(7,20,43,0.18)]">
          <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">Editorial funnel</p>
          <h2 className="mt-4 text-4xl font-semibold">{t.funnelTitle}</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-5">
            {t.funnel.map((item, index) => (
              <span key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-center text-sm text-slate-300">
                <strong className="block text-[#d7b46a]">0{index + 1}</strong>{item}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2 lg:grid-cols-3">
        {t.items.map(([title, text], index) => (
          <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold text-[#226bbf]">0{index + 1}</p>
            <h2 className="mt-3 text-2xl font-semibold">{title}</h2>
            <p className="mt-4 leading-8 text-[#706a5d]">{text}</p>
          </article>
        ))}
      </section>
      <section className="bg-[#07142b] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-14 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-3xl text-4xl font-semibold">{t.funnelTitle}</h2>
          <div className="flex flex-wrap gap-3">
            <Link href={localizedPath(lang, "products")} className="rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">{t.cta}</Link>
            <Link href={`/${lang}/newsletter`} className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white">{t.secondary}</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
