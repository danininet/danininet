import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";

export async function appendJsonl(fileName: string, payload: unknown) {
  const dataDir = path.join(process.cwd(), "data");
  await mkdir(dataDir, { recursive: true });

  const record = {
    loggedAt: new Date().toISOString(),
    ...((payload && typeof payload === "object") ? payload : { value: payload }),
  };

  await appendFile(
    path.join(dataDir, fileName),
    JSON.stringify(record) + "\n",
    "utf8"
  );
}
