import { notFound } from "next/navigation";
import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/lib/plasmic";

type Params = {
  locale: string;
  plasmicPath: string[];
};

export const revalidate = 60;

function normalizeLocale(locale: string) {
  return locale === "de" || locale === "en" ? locale : "sr";
}

function getPlasmicPath(locale: string, plasmicPath: string[]) {
  const lang = normalizeLocale(locale);
  return `/${lang}/${plasmicPath.join("/")}`;
}

export default async function PlasmicCatchAllPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, plasmicPath } = await params;
  const path = getPlasmicPath(locale, plasmicPath);

  if (!PLASMIC) {
    notFound();
  }

  const plasmicData = await PLASMIC.maybeFetchComponentData(path);

  if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
    notFound();
  }

  const pageMeta = plasmicData.entryCompMetas[0];

  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );
}
