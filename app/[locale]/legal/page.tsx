import Link from "next/link";

export default async function LegalPage({
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

        <section className="py-10">
          <p className="text-sm uppercase tracking-[0.22em] text-[#b8944d]">Legal & Trust</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight">Legal & Trust</h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#706a5d]">
            Edukativni sadržaj, AI transparentnost, affiliate napomena, GDPR,
            kolačići i ograničenja odgovornosti.
          </p>

          <div className="mt-10 grid gap-5">
            {[
              "DaniniNet sadržaj je edukativnog i informativnog karaktera.",
              "Sadržaj ne predstavlja pravni, finansijski, investicioni, zdravstveni ili profesionalni savet.",
              "Pojedini linkovi mogu biti affiliate linkovi.",
              "AI se koristi kao pomoćni alat za strukturisanje, ne kao autoritet koji donosi odluke.",
              "Kupovina proizvoda ne znači automatsku prijavu na newsletter.",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-black/10 bg-[#fffaf1] p-6 text-[#706a5d]">
                {item}
              </div>
            ))}
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
