import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/lib/plasmic";

export default function PlasmicHostPage() {
  return PLASMIC ? <PlasmicCanvasHost /> : null;
}
