import Link from "next/link";

const copy = {
  sr: {
    badge: "DaniniNet · od ideje do digitalnog artifacta",
    title: "Digitalni projekti koji ne ostaju samo na ideji.",
    subtitle:
      "Affiliate marketing, SEO, digitalni proizvodi, AI dijalog i realni case study projekti zasnovani na DaniniHub metodu.",
    primary: "Pogledaj prvi proizvod",
    secondary: "Razumi DaniniHub metod",
    pillarsTitle: "Tri stuba DaniniNet portala",
    productTitle: "Prvi proizvod: Digitalna prodaja lokacije",
    productText:
      "Praktičan vodič koji pokazuje kako lokaciju, parcelu, stan, kuću ili projekat predstaviti ozbiljnije od običnog oglasa.",
    guestbookTitle: "Knjiga utisaka",
    guestbookText:
      "Moderisan prostor za pitanja, utiske i iskustva. AI može pomoći u moderaciji, ali čovek donosi konačnu odluku.",
  },
  de: {
    badge: "DaniniNet · von der Idee zum digitalen Artefakt",
    title: "Digitale Projekte, die nicht bei der Idee stehen bleiben.",
    subtitle:
      "Affiliate Marketing, SEO, digitale Produkte, KI-Dialog und reale Case-Study-Projekte auf Basis der DaniniHub Methode.",
    primary: "Erstes Produkt ansehen",
    secondary: "DaniniHub Methode verstehen",
    pillarsTitle: "Drei Säulen des DaniniNet Portals",
    productTitle: "Erstes Produkt: Digitaler Verkauf von Standorten",
    productText:
      "Ein praktischer Leitfaden, wie Grundstücke, Immobilien, Standorte oder Projekte seriöser als eine einfache Anzeige präsentiert werden können.",
    guestbookTitle: "Gästebuch",
    guestbookText:
      "Ein moderierter Raum für Fragen, Eindrücke und Erfahrungen. KI kann bei der Moderation helfen, die finale Entscheidung trifft ein Mensch.",
  },
  en: {
    badge: "DaniniNet · from idea to digital artifact",
    title: "Digital projects that do not stay at the idea stage.",
    subtitle:
      "Affiliate marketing, SEO, digital products, AI dialogue and real case-study projects based on the DaniniHub method.",
    primary: "View first product",
    secondary: "Understand the DaniniHub method",
    pillarsTitle: "Three pillars of the DaniniNet portal",
    productTitle: "First product: Digital Location Sales",
    productText:
      "A practical guide for presenting land, property, locations or projects more seriously than a simple listing.",
    guestbookTitle: "Guestbook",
    guestbookText:
      "A moderated space for questions, impressions and experiences. AI can support moderation, but the final decision is made by a human.",
  },
};

type Locale = keyof typeof copy;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang: Locale = locale === "de" || locale === "en" ? locale : "sr";
  const t = copy[lang];

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-10">
        <header className="flex flex-wrap items-center justify-between gap-6 border-b border-[var(--line)] pb-6">
          <Link href={`/${lang}`} className="text-xl font-semibold tracking-tight">
            DaniniNet
          </Link>

          <nav className="flex flex-wrap gap-4 text-sm text-[var(--muted)]">
            <Link href="/sr">SR</Link>
            <Link href="/de">DE</Link>
            <Link href="/en">EN</Link>
          </nav>
        </header>

        <section className="grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-[var(--line-gold)] px-4 py-2 text-sm text-[var(--muted)]">
              {t.badge}
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              {t.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              {t.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={`/${lang}/proizvodi/digitalna-prodaja-lokacije`}
                className="rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-medium text-[var(--paper)]"
              >
                {t.primary}
              </Link>
              <Link
                href={`/${lang}/daninihub-metod`}
                className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-medium"
              >
                {t.secondary}
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--gold)]">
              DaniniHub Method
            </p>
            <p className="mt-6 text-2xl font-medium leading-9">
              Pitaj AI — AI pita tebe.
            </p>
            <p className="mt-6 leading-7 text-[var(--muted)]">
              AI pomaže da se odvoje činjenice, pretpostavke, rizici i sledeći
              koraci. Odluke donosi čovek.
            </p>
          </aside>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {["Income", "Intelligence", "Health"].map((item) => (
            <article
              key={item}
              className="rounded-3xl border border-[var(--line)] bg-[var(--paper)] p-8"
            >
              <h2 className="text-2xl font-semibold">{item}</h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                {item === "Income" &&
                  "Affiliate marketing, SEO, digitalni proizvodi i odgovorna monetizacija."}
                {item === "Intelligence" &&
                  "AI dijalog, DaniniHub metod, pitanja, struktura i realni artifacti."}
                {item === "Health" &&
                  "Budući kanal za vodu, rutine, stara znanja i zdrav stil života bez medicinskog hype-a."}
              </p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--gold)]">
              Product
            </p>
            <h2 className="mt-4 text-3xl font-semibold">{t.productTitle}</h2>
            <p className="mt-5 leading-8 text-[var(--muted)]">{t.productText}</p>
          </article>

          <article className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--gold)]">
              Trust signal
            </p>
            <h2 className="mt-4 text-3xl font-semibold">{t.guestbookTitle}</h2>
            <p className="mt-5 leading-8 text-[var(--muted)]">{t.guestbookText}</p>
          </article>
        </section>

        <footer className="border-t border-[var(--line)] py-8 text-sm leading-7 text-[var(--muted)]">
          <p>
            DaniniNet sadržaj je edukativnog i informativnog karaktera. Ne
            predstavlja pravni, finansijski, investicioni, zdravstveni ili
            profesionalni savet. AI pomaže u strukturisanju; čovek donosi odluke.
          </p>
        </footer>
      </section>
    </main>
  );
}
