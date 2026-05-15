import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server";

const projectId = process.env.PLASMIC_PROJECT_ID;
const projectToken = process.env.PLASMIC_PROJECT_TOKEN;

export const hasPlasmicConfig = Boolean(projectId && projectToken);

export const PLASMIC = hasPlasmicConfig
  ? initPlasmicLoader({
      projects: [
        {
          id: projectId!,
          token: projectToken!,
        },
      ],
      preview: process.env.PLASMIC_PREVIEW === "true",
    })
  : null;
