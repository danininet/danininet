import { LegalPage } from "@/components/LegalPage";
import { getLegalPage } from "@/data/legal";

export default function Page() {
  const page = getLegalPage("agb");

  return <LegalPage {...page} />;
}
