import Link from "next/link";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/locales";
import { getDictionary } from "@/content/dictionary";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function SiteHeader({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  const navItems = [
    { href: `/${locale}`, label: dict.nav.product },
    { href: `/${locale}/clanci/digitalni-gateway-calije-case-study`, label: dict.nav.article },
    { href: `/${locale}/utisci`, label: dict.nav.guestbook },
    { href: `/${locale}/kontakt`, label: dict.nav.contact }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-sm">
            DN
          </div>
          <div>
            <p className="text-base font-black tracking-tight text-slate-950">{site.name}</p>
            <p className="hidden text-xs text-slate-500 sm:block">DaniniHub artifact system</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <a href={`mailto:${site.email}`} className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white hover:bg-slate-800 sm:inline-flex">
            {dict.nav.contact}
          </a>
        </div>
      </div>
    </header>
  );
}
