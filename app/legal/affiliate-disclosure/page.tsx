import { LegalPage } from "@/components/LegalPage";
import { getLegalPage } from "@/data/legal";

export default function Page() {
  const page = getLegalPage("affiliate-disclosure");

  return <LegalPage {...page} />;
}
