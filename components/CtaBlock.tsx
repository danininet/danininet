import { site } from "@/lib/site";
import type { Locale } from "@/lib/locales";
import { getDictionary } from "@/content/dictionary";
import { CheckoutButton } from "@/components/CheckoutButton";

export function CtaBlock({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-12">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-200">
        {dict.cta.eyebrow}
      </p>
      <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight md:text-5xl">
        {dict.cta.title}
      </h2>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
        {dict.cta.text}
      </p>
      <div className="mt-7 flex flex-wrap items-start gap-3">
        <CheckoutButton
          locale={locale}
          label={`${dict.cta.button} — ${site.launchPrice}`}
          className="rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 hover:bg-slate-100 disabled:opacity-60"
        />
        <span className="rounded-full border border-white/20 px-5 py-3 text-sm">
          Launch: {site.launchPrice}
        </span>
        <span className="rounded-full border border-white/20 px-5 py-3 text-sm">
          Regular: {site.regularPrice}
        </span>
      </div>
    </section>
  );
}
