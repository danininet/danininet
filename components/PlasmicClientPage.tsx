"use client";

import {
  PlasmicComponent,
  PlasmicRootProvider,
} from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/plasmic-init";

type PlasmicClientPageProps = {
  component: string;
  prefetchedData?: Parameters<typeof PlasmicRootProvider>[0]['prefetchedData'];
};

export function PlasmicClientPage({
  component,
  prefetchedData,
}: PlasmicClientPageProps) {
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={prefetchedData}>
      <PlasmicComponent component={component} />
    </PlasmicRootProvider>
  );
}
