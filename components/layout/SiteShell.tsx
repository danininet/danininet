import Link from "next/link";

type Locale = "sr" | "de" | "en";

type ShellCopy = {
  nav: string[];
  footerText: string;
  legal: string;
  guestbook: string;
  support: string;
  disclosure: string;
};

const navHrefs = [
  "daninihub-metod",
  "proizvodi",
  "blog",
  "knjiga-utisaka",
  "support",
  "legal",
];

const copy: Record<Locale, ShellCopy> = {
  sr: {
    nav: ["Metoda", "Proizvodi", "Blog", "Utisci", "Support", "Legal"],
    footerText:
      "DaniniNet je krovna platforma za digitalni, affiliate, content i SEO marketing — povezana sa DaniniHub OS metodom, realnim case study projektima i budućim health/water pravcem.",
    legal: "Legal & Trust",
    guestbook: "Knjiga utisaka",
    support: "Support",
    disclosure: "Affiliate napomena · AI transparentnost · GDPR/kolačići · Health disclaimer",
  },
  de: {
    nav: ["Methode", "Produkte", "Blog", "Gästebuch", "Support", "Legal"],
    footerText:
      "DaniniNet ist die Dachplattform für Digital-, Affiliate-, Content- und SEO-Marketing — verbunden mit DaniniHub OS, realen Case Studies und dem späteren Health/Water-Bereich.",
    legal: "Legal & Trust",
    guestbook: "Gästebuch",
    support: "Support",
    disclosure: "Affiliate-Hinweis · KI-Transparenz · DSGVO/Cookies · Health Disclaimer",
  },
  en: {
    nav: ["Method", "Products", "Blog", "Guestbook", "Support", "Legal"],
    footerText:
      "DaniniNet is the umbrella platform for digital, affiliate, content and SEO marketing — connected with DaniniHub OS, real case studies and the future health/water direction.",
    legal: "Legal & Trust",
    guestbook: "Guestbook",
    support: "Support",
    disclosure: "Affiliate disclosure · AI transparency · GDPR/Cookies · Health disclaimer",
  },
};

export function normalizeLocale(locale: string): Locale {
  return locale === "de" || locale === "en" ? locale : "sr";
}

function switchLocalePath(currentLocale: Locale, targetLocale: Locale, pathname?: string) {
  const clean = pathname?.replace(/^\//, "") || "";
  if (!clean) return `/${targetLocale}`;
  const parts = clean.split("/");
  if (parts[0] === currentLocale || parts[0] === "sr" || parts[0] === "de" || parts[0] === "en") {
    parts[0] = targetLocale;
    return `/${parts.join("/")}`;
  }
  return `/${targetLocale}/${clean}`;
}

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-[#8db6d8]/40 bg-white/5 text-sm font-bold text-[#e7f3ff] shadow-[0_0_24px_rgba(34,107,191,0.18)]">
        <span className="absolute left-2 top-3 h-px w-8 rotate-[-18deg] bg-[#b8944d]" />
        <span className="absolute bottom-3 left-2 h-px w-8 rotate-[18deg] bg-[#7db7e8]" />
        DN
      </span>
      {!compact && (
        <span>
          <span className="block text-2xl font-semibold tracking-tight">DaniniNet</span>
          <span className="block text-[11px] uppercase tracking-[0.26em] text-[#b9d7f0]">
            Income · Intelligence · Health
          </span>
        </span>
      )}
    </span>
  );
}

export function SiteShell({
  locale,
  currentPath,
  children,
}: {
  locale: string;
  currentPath?: string;
  children: React.ReactNode;
}) {
  const lang = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <main className="min-h-screen bg-[#f4efe5] text-[#15130f]">
      <header className="bg-[#07142b] text-[#f7fbff]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-7">
          <Link href={`/${lang}`} aria-label="DaniniNet home">
            <BrandMark />
          </Link>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300" aria-label="Main navigation">
            {t.nav.map((label, index) => (
              <Link key={label} href={`/${lang}/${navHrefs[index]}`}>
                {label}
              </Link>
            ))}
            <span className="mx-1 h-4 w-px bg-white/15" />
            <Link href={switchLocalePath(lang, "sr", currentPath)} hrefLang="sr">SR</Link>
            <Link href={switchLocalePath(lang, "de", currentPath)} hrefLang="de">DE</Link>
            <Link href={switchLocalePath(lang, "en", currentPath)} hrefLang="en">EN</Link>
          </nav>
        </div>
      </header>
      {children}
      <footer className="bg-[#07142b] text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <BrandMark />
            <p className="mt-5 max-w-3xl leading-8">{t.footerText}</p>
          </div>
          <div className="grid content-start gap-2 text-sm leading-7">
            <Link href={`/${lang}/legal`}>{t.legal}</Link>
            <Link href={`/${lang}/proizvodi`}>{t.nav[1]}</Link>
            <Link href={`/${lang}/blog`}>Blog</Link>
            <Link href={`/${lang}/knjiga-utisaka`}>{t.guestbook}</Link>
            <Link href={`/${lang}/support`}>{t.support}</Link>
            <Link href={`/${lang}/zdrav-stil-zivota`}>Health / Water</Link>
            <p className="pt-2 text-slate-400">{t.disclosure}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-sm uppercase tracking-[0.24em] text-[#226bbf]">{eyebrow}</p>
      <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
        {title}
      </h1>
      <p className="mt-7 max-w-3xl text-lg leading-8 text-[#706a5d]">{text}</p>
    </section>
  );
}
