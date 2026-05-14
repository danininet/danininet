import { ContentPage } from "@/components/ContentPage";
import { getPage } from "@/data/pages";

export default function Page() {
  const page = getPage("ai-u-praksi");

  return <ContentPage page={page} />;
}
