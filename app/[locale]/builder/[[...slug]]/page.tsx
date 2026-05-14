import Link from "next/link";
import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/lib/plasmic";

type Params = {
  locale: string;
  slug?: string[];
};

function BuilderFallback({
  lang,
  plasmicPath,
  configured,
}: {
  lang: string;
  plasmicPath: string;
  configured: boolean;
}) {
  return (
    <main className="min-h-screen bg-[#06101f] px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <header className="mb-16 flex items-center justify-between border-b border-white/10 pb-6">
          <Link href={`/${lang}`} className="text-xl font-semibold">DaniniNet</Link>
          <nav className="flex gap-4 text-sm text-slate-300">
            <Link href="/sr">SR</Link>
            <Link href="/de">DE</Link>
            <Link href="/en">EN</Link>
          </nav>
        </header>

        <section className="rounded-[2rem] border border-cyan-300/20 bg-white/[0.06] p-8">
          <p className="text-sm uppercase tracking-[0.22em] text-cyan-200">Builder zona</p>
          <h1 className="mt-5 text-4xl font-semibold">Plasmic ruta radi.</h1>
          <p className="mt-6 max-w-2xl leading-8 text-slate-300">
            Tražena Plasmic putanja je: <strong>{plasmicPath}</strong>.
          </p>
          <p className="mt-4 max-w-2xl leading-8 text-slate-300">
            {configured
              ? "Next.js je povezan sa Plasmic projektom, ali u Plasmic-u još nema objavljene stranice na toj putanji. Napravi/publish page sa istim path-om ili promeni path u Plasmic-u."
              : "Dodaj PLASMIC_PROJECT_ID i PLASMIC_PROJECT_TOKEN u environment variables. Posle toga ova zona povlači stranice iz Plasmic-a."}
          </p>
        </section>
      </div>
    </main>
  );
}

export default async function BuilderPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, slug } = await params;
  const lang = locale === "de" || locale === "en" ? locale : "sr";
  const plasmicPath = `/${lang}/builder${slug?.length ? `/${slug.join("/")}` : ""}`;

  if (!PLASMIC) {
    return <BuilderFallback lang={lang} plasmicPath={plasmicPath} configured={false} />;
  }

  const plasmicData = await PLASMIC.maybeFetchComponentData(plasmicPath);

  if (!plasmicData) {
    return <BuilderFallback lang={lang} plasmicPath={plasmicPath} configured={true} />;
  }

  const pageMeta = plasmicData.entryCompMetas[0];

  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );
}
