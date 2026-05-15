import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/lib/plasmic";

type Params = {
  locale: string;
  plasmicPath: string[];
};

function normalizeLocale(locale: string) {
  return locale === "de" || locale === "en" ? locale : "sr";
}

function getPlasmicPath(locale: string, plasmicPath: string[]) {
  const lang = normalizeLocale(locale);
  return `/${lang}/${plasmicPath.join("/")}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, plasmicPath } = await params;
  const path = getPlasmicPath(locale, plasmicPath);

  if (!PLASMIC) {
    return {};
  }

  const plasmicData = await PLASMIC.maybeFetchComponentData(path);
  const pageMeta = plasmicData?.entryCompMetas?.[0];

  if (!pageMeta) {
    return {};
  }

  const title = pageMeta.title || pageMeta.displayName || "DaniniNet";
  const description = pageMeta.description || "DaniniNet digital, affiliate, content and SEO marketing page.";

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      siteName: "DaniniNet",
    },
  };
}

export async function generateStaticParams() {
  if (!PLASMIC) {
    return [];
  }

  const pages = await PLASMIC.fetchPages();

  return pages
    .map((page) => page.path.replace(/^\//, "").split("/"))
    .filter((parts) => parts.length >= 2)
    .map((parts) => ({
      locale: normalizeLocale(parts[0]),
      plasmicPath: parts.slice(1),
    }));
}

export default async function PlasmicCatchAllPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, plasmicPath } = await params;
  const path = getPlasmicPath(locale, plasmicPath);

  if (!PLASMIC) {
    notFound();
  }

  const plasmicData = await PLASMIC.maybeFetchComponentData(path);

  if (!plasmicData || plasmicData.entryCompMetas.length === 0) {
    notFound();
  }

  const pageMeta = plasmicData.entryCompMetas[0];

  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component={pageMeta.displayName} />
    </PlasmicRootProvider>
  );
}
