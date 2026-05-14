import Link from "next/link";

export default async function DaniniHubMetodPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale === "de" || locale === "en" ? locale : "sr";

  return (
    <main className="min-h-screen bg-[#f4efe5] px-6 py-10 text-[#15130f]">
      <div className="mx-auto max-w-5xl">
        <Header lang={lang} />
        <PageIntro
          label="DaniniHub Method"
          title={
            lang === "de"
              ? "Frag die KI — die KI fragt dich."
              : lang === "en"
                ? "Ask AI — AI asks you."
                : "Pitaj AI — AI pita tebe."
          }
          text={
            lang === "de"
              ? "Die DaniniHub Methode nutzt KI als Werkzeug zur Strukturierung von Fragen, Fakten, Annahmen, Risiken und nächsten Schritten. Die Entscheidung trifft der Mensch."
              : lang === "en"
                ? "The DaniniHub method uses AI as a tool for structuring questions, facts, assumptions, risks and next steps. The human makes the decision."
                : "DaniniHub metod koristi AI kao alat za strukturisanje pitanja, činjenica, pretpostavki, rizika i sledećih koraka. AI ne odlučuje umesto čoveka."
          }
        />
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

function PageIntro({ label, title, text }: { label: string; title: string; text: string }) {
  return (
    <section className="py-10">
      <p className="text-sm uppercase tracking-[0.22em] text-[#b8944d]">{label}</p>
      <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight">{title}</h1>
      <p className="mt-8 max-w-3xl text-lg leading-8 text-[#706a5d]">{text}</p>
    </section>
  );
}
