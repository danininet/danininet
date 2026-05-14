import siteContent from "@/data/site-content.json";

export type SiteSection = {
  title: string;
  text: string;
};

export type SiteContent = {
  site: {
    brand: string;
    tagline: string;
    description: string;
  };
  home: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
  };
  dpl: {
    eyebrow: string;
    title: string;
    subtitle: string;
    lead: string;
    launchPrice: string;
    regularPrice: string;
    checkoutHref: string;
    coverSr: string;
    coverDe: string;
    disclaimer: string;
    sections: SiteSection[];
  };
  bonus: {
    title: string;
    lead: string;
    items: string[];
  };
  blog: {
    title: string;
    lead: string;
  };
};

export function getSiteContent() {
  return siteContent as SiteContent;
}
