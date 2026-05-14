import { LegalPage } from "@/components/LegalPage";
import { getLegalPage } from "@/data/legal";

export default function Page() {
  const page = getLegalPage("ai-transparency");

  return <LegalPage {...page} />;
}
