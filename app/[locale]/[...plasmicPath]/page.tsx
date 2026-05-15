import { notFound } from "next/navigation";
import {
  PLASMIC,
  PLASMIC_PREVIEW,
  PLASMIC_PROJECT_ID,
  PLASMIC_PROJECT_TOKEN,
} from "@/lib/plasmic";
import { PlasmicPageClient } from "@/components/plasmic/PlasmicPageClient";

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

  if (!PLASMIC || !PLASMIC_PROJECT_ID || !PLASMIC_PROJECT_TOKEN) {
    notFound();
  }

  const plasmicData = await PLASMIC.maybeFetchComponentData(path);

  if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
    notFound();
  }

  const pageMeta = plasmicData.entryCompMetas[0];

  return (
    <PlasmicPageClient
      plasmicData={plasmicData}
      component={pageMeta.displayName}
      projectId={PLASMIC_PROJECT_ID}
      projectToken={PLASMIC_PROJECT_TOKEN}
      preview={PLASMIC_PREVIEW}
    />
  );
}
