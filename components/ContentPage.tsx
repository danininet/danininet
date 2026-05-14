import Link from "next/link";
import type { PortalPage } from "@/data/pages";

type FlexibleSection = {
  title?: string;
  text?: string;
  description?: string;
  content?: string;
  body?: string;
  items?: string[];
  bullets?: string[];
};

type DirectContentPageProps = Omit<PortalPage, "sections"> & {
  sections?: FlexibleSection[];
};

type ContentPageProps =
  | DirectContentPageProps
  | {
      page: PortalPage;
    };

function hasPageProp(props: ContentPageProps): props is { page: PortalPage } {
  return "page" in props;
}

function normalizeSectionText(section: FlexibleSection) {
  return (
    section.text ??
    section.description ??
    section.content ??
    section.body ??
    ""
  );
}

function normalizeSectionItems(section: FlexibleSection) {
  return section.items ?? section.bullets ?? [];
}

export function ContentPage(props: ContentPageProps) {
  const page = hasPageProp(props) ? props.page : props;
  const sections = page.sections ?? [];

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="mb-14">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          {page.eyebrow}
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
          {page.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
          {page.description}
        </p>

        {page.cta ? (
          <div className="mt-8">
            <Link
              href={page.cta.href}
              className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              {page.cta.label}
            </Link>
          </div>
        ) : null}
      </section>

      <section className="grid gap-6">
        {sections.map((section, index) => {
          const text = normalizeSectionText(section);
          const items = normalizeSectionItems(section);

          return (
            <article
              key={`${section.title ?? "section"}-${index}`}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              {section.title ? (
                <h2 className="text-2xl font-semibold text-slate-950">
                  {section.title}
                </h2>
              ) : null}

              {text ? (
                <p className="mt-4 leading-8 text-slate-700">{text}</p>
              ) : null}

              {items.length > 0 ? (
                <ul className="mt-5 grid gap-3 text-slate-700">
                  {items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-950" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          );
        })}
      </section>
    </main>
  );
}
