import Link from "next/link";

export default async function DigitalnaProdajaLokacijePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale === "de" || locale === "en" ? locale : "sr";
  const gumroadUrl = process.env.NEXT_PUBLIC_GUMROAD_DPL_URL || "#";

  const title =
    lang === "de"
      ? "Digitaler Verkauf von Standorten"
      : lang === "en"
        ? "Digital Location Sales"
        : "Digitalna prodaja lokacije";

  const subtitle =
    lang === "de"
      ? "Ein praktischer Leitfaden, wie Standorte, Grundstücke, Immobilien oder Projekte seriöser als eine einfache Anzeige präsentiert werden können."
      : lang === "en"
        ? "A practical guide for presenting land, property, locations or projects more seriously than a simple listing."
        : "Praktičan vodič za pretvaranje lokacije, parcele, stana, kuće ili projekta u ozbiljniji digitalni prodajni tok.";

  return (
    <main className="min-h-screen bg-[#f4efe5] px-6 py-10 text-[#15130f]">
      <div className="mx-auto max-w-5xl">
        <Header lang={lang} />

        <section className="py-10">
          <p className="text-sm uppercase tracking-[0.22em] text-[#b8944d]">First proof product</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight">{title}</h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#706a5d]">{subtitle}</p>

          <div className="mt-10 rounded-3xl border border-black/10 bg-[#fffaf1] p-8">
            <p className="text-3xl font-semibold">Launch: 29 €</p>
            <p className="mt-3 text-[#706a5d]">Regular: 49 €</p>

            <Link
              href={gumroadUrl}
              className="mt-8 inline-flex rounded-full bg-[#15130f] px-6 py-3 text-sm font-medium text-[#fbf7ef]"
            >
              {lang === "de" ? "Über Gumroad kaufen" : lang === "en" ? "Buy via Gumroad" : "Kupi preko Gumroad-a"}
            </Link>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#706a5d]">
              Proizvod je edukativnog karaktera. Ne garantuje prodaju, profit,
              investitora, dozvole, vrednost lokacije ili izvodljivost projekta.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

function Header({ lang }: { lang: string }) {
  return (
    <header className="mb-16 flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-6">
      <Link href={`/${lang}`} className="text-xl font-semibold">DaniniNet</Link>
      <nav className="flex gap-4 text-sm text-[#706a5d]">
        <Link href="/sr">SR</Link>
        <Link href="/de">DE</Link>
        <Link href="/en">EN</Link>
      </nav>
    </header>
  );
}
