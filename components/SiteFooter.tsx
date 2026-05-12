import Link from "next/link";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/locales";
import { getDictionary } from "@/content/dictionary";

export function SiteFooter({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <p className="text-xl font-black text-white">{site.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
            {site.name} · {dict.hero.eyebrow}. {dict.sections.caseText2}
          </p>
        </div>

        <div>
          <p className="font-bold text-white">{dict.nav.product}</p>
          <div className="mt-3 grid gap-2 text-sm">
            <Link href={`/${locale}`}>{dict.nav.product}</Link>
            <Link href={`/${locale}/clanci/digitalni-gateway-calije-case-study`}>{dict.nav.article}</Link>
            <Link href={`/${locale}/utisci`}>{dict.nav.guestbook}</Link>
            <Link href={`/${locale}/kontakt`}>{dict.nav.contact}</Link>
          </div>
        </div>

        <div>
          <p className="font-bold text-white">Legal</p>
          <div className="mt-3 grid gap-2 text-sm">
            <Link href={`/${locale}/legal`}>Legal</Link>
            <Link href={`/${locale}/privacy`}>Privacy</Link>
            <Link href={`/${locale}/terms`}>Terms</Link>
            <Link href={`/${locale}/refund`}>Refund</Link>
            <Link href={`/${locale}/affiliate-disclosure`}>Affiliate</Link>
            <Link href={`/${locale}/ai-disclosure`}>AI Disclosure</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} DaniniNet · {site.email}
      </div>
    </footer>
  );
}
