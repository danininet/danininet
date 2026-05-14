import Link from "next/link";

export default async function SupportPage({
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
          <p className="text-sm uppercase tracking-[0.22em] text-[#b8944d]">Support</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight">Support</h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#706a5d]">
            Podrška za proizvod, preuzimanje, Gumroad kupovinu, bonus materijale
            i osnovna pitanja o DaniniNet sajtu.
          </p>

          <form className="mt-10 grid max-w-2xl gap-4 rounded-3xl border border-black/10 bg-[#fffaf1] p-8">
            <input className="rounded-xl border border-black/10 bg-[#fbf7ef] p-4" placeholder="Ime / Name" />
            <input className="rounded-xl border border-black/10 bg-[#fbf7ef] p-4" placeholder="Email" />
            <input className="rounded-xl border border-black/10 bg-[#fbf7ef] p-4" placeholder="Kategorija / Category" />
            <textarea className="min-h-40 rounded-xl border border-black/10 bg-[#fbf7ef] p-4" placeholder="Pitanje / Question" />
            <button className="rounded-full bg-[#15130f] px-6 py-3 text-sm font-medium text-[#fbf7ef]" type="button">
              Pošalji
            </button>
          </form>
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
