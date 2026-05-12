"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/locales";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  function hrefFor(nextLocale: Locale) {
    const parts = pathname.split("/");
    if (locales.includes(parts[1] as Locale)) {
      parts[1] = nextLocale;
      return parts.join("/") || `/${nextLocale}`;
    }
    return `/${nextLocale}`;
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1">
      {locales.map((item) => (
        <Link
          key={item}
          href={hrefFor(item)}
          className={
            item === locale
              ? "rounded-full bg-slate-950 px-3 py-1 text-xs font-black uppercase text-white"
              : "rounded-full px-3 py-1 text-xs font-bold uppercase text-slate-500 hover:text-slate-950"
          }
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
