import Link from "next/link";

type Locale = "sr" | "de" | "en";
type RouteKey =
  | "home"
  | "method"
  | "products"
  | "dpl"
  | "blog"
  | "newsletter"
  | "guestbook"
  | "support"
  | "legal"
  | "health";

type ShellCopy = {
  nav: string[];
  footerText: string;
  legal: string;
  guestbook: string;
  support: string;
  disclosure: string;
  platform: string;
  products: string;
  trust: string;
  dpl: string;
  health: string;
  newsletter: string;
  privacy: string;
  cookies: string;
  terms: string;
  disclaimer: string;
  affiliate: string;
  ai: string;
  impressum: string;
  refund: string;
};

const navRouteKeys: RouteKey[] = ["method", "products", "blog", "newsletter", "support", "legal"];

const paths: Record<Locale, Record<RouteKey, string>> = {
  sr: { home: "", method: "daninihub-metod", products: "proizvodi", dpl: "proizvodi/digitalna-prodaja-lokacije", blog: "blog", newsletter: "newsletter", guestbook: "knjiga-utisaka", support: "support", legal: "legal", health: "zdrav-stil-zivota" },
  de: { home: "", method: "methode", products: "produkte", dpl: "produkte/digitaler-verkauf-von-standorten", blog: "blog", newsletter: "newsletter", guestbook: "gaestebuch", support: "support", legal: "legal", health: "gesund-leben-wasser" },
  en: { home: "", method: "method", products: "products", dpl: "products/digital-location-sales", blog: "blog", newsletter: "newsletter", guestbook: "guestbook", support: "support", legal: "legal", health: "healthy-lifestyle-water" },
};

const legalSubPaths: Record<string, string> = {
  impressum: "impressum",
  privacy: "privacy",
  cookies: "cookies",
  terms: "terms",
  disclaimer: "disclaimer",
  "affiliate-disclosure": "affiliate-disclosure",
  "ai-transparentnost": "ai-transparentnost",
  "health-disclaimer": "health-disclaimer",
  "refund-policy": "refund-policy",
};

const slugToRouteKey: Record<string, RouteKey> = Object.fromEntries(
  Object.values(paths).flatMap((localePaths) => Object.entries(localePaths).map(([key, value]) => [value, key as RouteKey])),
) as Record<string, RouteKey>;

const copy: Record<Locale, ShellCopy> = {
  sr: {
    nav: ["Metoda", "Proizvodi", "Blog", "Lead gate", "Support", "Legal"],
    footerText: "DaniniNet je platforma za digitalne proizvode, affiliate i content marketing — sa jasnim trust slojem, AI transparentnošću i DACH-ready pravnim okvirom.",
    legal: "Legal & Trust", guestbook: "Knjiga utisaka", support: "Support",
    disclosure: "Affiliate napomena · AI transparentnost · GDPR/kolačići · Health disclaimer",
    platform: "Platforma", products: "Proizvodi", trust: "Legal & Trust", dpl: "Digitalna prodaja lokacije", health: "Zdrav stil života / voda", newsletter: "Lead gate / newsletter",
    privacy: "Privacy / GDPR", cookies: "Cookies", terms: "Terms", disclaimer: "Disclaimer", affiliate: "Affiliate disclosure", ai: "AI transparentnost", impressum: "Impressum", refund: "Refund policy",
  },
  de: {
    nav: ["Methode", "Produkte", "Blog", "Lead Gate", "Support", "Legal"],
    footerText: "DaniniNet ist eine Plattform für digitale Produkte, Affiliate- und Content-Marketing — mit Trust-Layer, KI-Transparenz und DACH-orientiertem Rechtsrahmen.",
    legal: "Legal & Trust", guestbook: "Gästebuch", support: "Support",
    disclosure: "Affiliate-Hinweis · KI-Transparenz · DSGVO/Cookies · Health Disclaimer",
    platform: "Plattform", products: "Produkte", trust: "Legal & Trust", dpl: "Digitaler Verkauf von Standorten", health: "Gesund leben / Wasser", newsletter: "Lead Gate / Newsletter",
    privacy: "Privacy / DSGVO", cookies: "Cookies", terms: "Terms", disclaimer: "Disclaimer", affiliate: "Affiliate Disclosure", ai: "KI-Transparenz", impressum: "Impressum", refund: "Refund Policy",
  },
  en: {
    nav: ["Method", "Products", "Blog", "Lead gate", "Support", "Legal"],
    footerText: "DaniniNet is a platform for digital products, affiliate and content marketing — with a trust layer, AI transparency and DACH-aware legal structure.",
    legal: "Legal & Trust", guestbook: "Guestbook", support: "Support",
    disclosure: "Affiliate disclosure · AI transparency · GDPR/Cookies · Health disclaimer",
    platform: "Platform", products: "Products", trust: "Legal & Trust", dpl: "Digital Location Sales", health: "Healthy lifestyle / water", newsletter: "Lead gate / newsletter",
    privacy: "Privacy / GDPR", cookies: "Cookies", terms: "Terms", disclaimer: "Disclaimer", affiliate: "Affiliate disclosure", ai: "AI transparency", impressum: "Imprint", refund: "Refund policy",
  },
};

export function normalizeLocale(locale: string): Locale { return locale === "de" || locale === "en" ? locale : "sr"; }
export function localizedPath(locale: Locale, routeKey: RouteKey) { const path = paths[locale][routeKey]; return path ? `/${locale}/${path}` : `/${locale}`; }

function switchLocalePath(currentLocale: Locale, targetLocale: Locale, pathname?: string) {
  const clean = pathname?.replace(/^\//, "") || "";
  const parts = clean.split("/").filter(Boolean);
  const withoutLocale = parts[0] === currentLocale || parts[0] === "sr" || parts[0] === "de" || parts[0] === "en" ? parts.slice(1) : parts;
  const rest = withoutLocale.join("/");
  if (!rest) return `/${targetLocale}`;
  if (rest.startsWith("legal/")) {
    const sub = rest.split("/").slice(1).join("/");
    if (legalSubPaths[sub]) return `/${targetLocale}/legal/${legalSubPaths[sub]}`;
  }
  return localizedPath(targetLocale, slugToRouteKey[rest] || "home");
}

function legalPath(lang: Locale, sub: string) { return `/${lang}/legal/${sub}`; }

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-[#8db6d8]/40 bg-white/5 text-sm font-bold text-[#e7f3ff] shadow-[0_0_24px_rgba(34,107,191,0.18)]">
        <span className="absolute left-2 top-3 h-px w-8 rotate-[-18deg] bg-[#b8944d]" />
        <span className="absolute bottom-3 left-2 h-px w-8 rotate-[18deg] bg-[#7db7e8]" />DN
      </span>
      {!compact && <span><span className="block text-2xl font-semibold tracking-tight">DaniniNet</span><span className="block text-[11px] uppercase tracking-[0.26em] text-[#b9d7f0]">Income · Intelligence · Health</span></span>}
    </span>
  );
}

export function SiteShell({ locale, currentPath, children }: { locale: string; currentPath?: string; children: React.ReactNode }) {
  const lang = normalizeLocale(locale);
  const t = copy[lang];
  return (
    <main className="min-h-screen bg-[#f4efe5] text-[#15130f]">
      <header className="bg-[#07142b] text-[#f7fbff]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-7">
          <Link href={localizedPath(lang, "home")} aria-label="DaniniNet home"><BrandMark /></Link>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300" aria-label="Main navigation">
            {t.nav.map((label, index) => <Link key={label} href={localizedPath(lang, navRouteKeys[index])}>{label}</Link>)}
            <span className="mx-1 h-4 w-px bg-white/15" />
            <Link href={switchLocalePath(lang, "sr", currentPath)} hrefLang="sr">SR</Link>
            <Link href={switchLocalePath(lang, "de", currentPath)} hrefLang="de">DE</Link>
            <Link href={switchLocalePath(lang, "en", currentPath)} hrefLang="en">EN</Link>
          </nav>
        </div>
      </header>
      {children}
      <footer className="bg-[#07142b] text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.05fr_1.95fr]">
          <div>
            <BrandMark />
            <p className="mt-5 max-w-xl leading-8 text-slate-300">{t.footerText}</p>
            <p className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-7 text-slate-400">{t.disclosure}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            <div><h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b9d7f0]">{t.platform}</h3><div className="mt-4 grid gap-3 text-sm"><Link href={localizedPath(lang, "method")}>{t.nav[0]}</Link><Link href={localizedPath(lang, "blog")}>Blog</Link><Link href={localizedPath(lang, "newsletter")}>{t.newsletter}</Link><Link href={localizedPath(lang, "guestbook")}>{t.guestbook}</Link><Link href={localizedPath(lang, "support")}>{t.support}</Link></div></div>
            <div><h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b9d7f0]">{t.products}</h3><div className="mt-4 grid gap-3 text-sm"><Link href={localizedPath(lang, "products")}>{t.products}</Link><Link href={localizedPath(lang, "dpl")}>{t.dpl}</Link><Link href={localizedPath(lang, "health")}>{t.health}</Link></div></div>
            <div><h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b9d7f0]">{t.trust}</h3><div className="mt-4 grid gap-3 text-sm"><Link href={localizedPath(lang, "legal")}>{t.legal}</Link><Link href={legalPath(lang, "impressum")}>{t.impressum}</Link><Link href={legalPath(lang, "privacy")}>{t.privacy}</Link><Link href={legalPath(lang, "cookies")}>{t.cookies}</Link><Link href={legalPath(lang, "terms")}>{t.terms}</Link><Link href={legalPath(lang, "disclaimer")}>{t.disclaimer}</Link><Link href={legalPath(lang, "affiliate-disclosure")}>{t.affiliate}</Link><Link href={legalPath(lang, "ai-transparentnost")}>{t.ai}</Link><Link href={legalPath(lang, "refund-policy")}>{t.refund}</Link></div></div>
          </div>
        </div>
        <div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-slate-500"><span>© DaniniNet</span><span>Income · Intelligence · Health</span></div></div>
      </footer>
    </main>
  );
}

export function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="mx-auto max-w-7xl px-6 py-16"><p className="text-sm uppercase tracking-[0.24em] text-[#226bbf]">{eyebrow}</p><h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">{title}</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-[#706a5d]">{text}</p></section>;
}
