import { LegalPage } from "@/components/LegalPage";
import { getLegalPage } from "@/data/legal";

export default function Page() {
  const page = getLegalPage("impressum");

  return <LegalPage {...page} />;
}
