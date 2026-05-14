import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";

const projectId = process.env.PLASMIC_PROJECT_ID;
const projectToken = process.env.PLASMIC_PROJECT_TOKEN;

if (!projectId || !projectToken) {
  throw new Error("Missing PLASMIC_PROJECT_ID or PLASMIC_PROJECT_TOKEN in .env");
}

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: projectId,
      token: projectToken,
    },
  ],
  preview: process.env.NODE_ENV === "development",
});
