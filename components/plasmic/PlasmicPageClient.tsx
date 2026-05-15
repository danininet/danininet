"use client";

import { useMemo } from "react";
import {
  initPlasmicLoader,
  PlasmicComponent,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";

type PlasmicPageClientProps = {
  plasmicData: unknown;
  component: string;
  projectId: string;
  projectToken: string;
  preview: boolean;
};

export function PlasmicPageClient({
  plasmicData,
  component,
  projectId,
  projectToken,
  preview,
}: PlasmicPageClientProps) {
  const loader = useMemo(
    () =>
      initPlasmicLoader({
        projects: [
          {
            id: projectId,
            token: projectToken,
          },
        ],
        preview,
      }),
    [projectId, projectToken, preview],
  );

  return (
    <PlasmicRootProvider loader={loader} prefetchedData={plasmicData}>
      <PlasmicComponent component={component} />
    </PlasmicRootProvider>
  );
}
