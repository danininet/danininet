import { ContentPage } from "@/components/ContentPage";
import { getPage } from "@/data/pages";

export default function AffiliateMarketingPage() {
  const page = getPage("affiliate-marketing");

  return <ContentPage page={page} />;
}
