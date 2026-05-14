import { notFound } from "next/navigation";
import { PLASMIC } from "@/plasmic-init";
import { PlasmicClientPage } from "@/components/PlasmicClientPage";

type PageProps = {
  params: Promise<{
    catchall?: string[];
  }>;
};

export const revalidate = 60;

export default async function PlasmicPage({ params }: PageProps) {
  const resolvedParams = await params;
  const catchall = resolvedParams.catchall ?? [];

  const plasmicPath = `/${catchall.join("/")}`;
  const componentPath = plasmicPath === "/" ? "/home" : plasmicPath;

  const plasmicData = await PLASMIC.maybeFetchComponentData(componentPath);

  if (!plasmicData) {
    notFound();
  }

  return (
    <PlasmicClientPage
      component={componentPath}
      prefetchedData={plasmicData}
    />
  );
}
