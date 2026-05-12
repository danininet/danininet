import type { Locale } from "@/lib/locales";
import { getDictionary } from "@/content/dictionary";
import { site } from "@/lib/site";

type LegalKey = "legal" | "privacy" | "terms" | "refund" | "affiliate" | "ai";

export function LegalTextPage({ locale, pageKey }: { locale: Locale; pageKey: LegalKey }) {
  const dict = getDictionary(locale);
  const [title, paragraphs] = dict.legalPages[pageKey];

  return (
    <main className="px-5 py-16">
      <section className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl">{title}</h1>
        <div className="mt-8 grid gap-6 text-lg leading-8 text-slate-700">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            Email: <a className="font-bold text-slate-950" href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </section>
    </main>
  );
}
