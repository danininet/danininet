import { ContentPage } from "@/components/ContentPage";
import { getPage } from "@/data/pages";

export default function Page() {
  const page = getPage("case-studies");

  return <ContentPage page={page} />;
}
