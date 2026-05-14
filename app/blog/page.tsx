import { ContentPage } from "@/components/ContentPage";
import { getPage } from "@/data/pages";

export default function Page() {
  const page = getPage("blog");

  return <ContentPage page={page} />;
}
