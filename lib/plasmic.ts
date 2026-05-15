import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server";

export const PLASMIC_PROJECT_ID = process.env.PLASMIC_PROJECT_ID || "";
export const PLASMIC_PROJECT_TOKEN = process.env.PLASMIC_PROJECT_TOKEN || "";
export const PLASMIC_PREVIEW = process.env.PLASMIC_PREVIEW === "true";

export const hasPlasmicConfig = Boolean(PLASMIC_PROJECT_ID && PLASMIC_PROJECT_TOKEN);

export const PLASMIC = hasPlasmicConfig
  ? initPlasmicLoader({
      projects: [
        {
          id: PLASMIC_PROJECT_ID,
          token: PLASMIC_PROJECT_TOKEN,
        },
      ],
      preview: PLASMIC_PREVIEW,
    })
  : null;
