import Link from "next/link";

type Locale = "sr" | "de" | "en";
type RouteKey =
  | "home"
  | "method"
  | "products"
  | "dpl"
  | "blog"
  | "guestbook"
  | "support"
  | "legal"
  | "health";

type FooterLink = { label: string; route: RouteKey; note?: string };

type ShellCopy = {
  nav: string[];
  footerText: string;
  footerClaim: string;
  columns: {
    title: string;
    links: FooterLink[];
  }[];
  disclosure: string;
  bottom: string;
};

const navRouteKeys: RouteKey[] = ["method", "products", "blog", "guestbook", "support", "legal"];

const paths: Record<Locale, Record<RouteKey, string>> = {
  sr: {
    home: "",
    method: "daninihub-metod",
    products: "proizvodi",
    dpl: "proizvodi/digitalna-prodaja-lokacije",
    blog: "blog",
    guestbook: "knjiga-utisaka",
    support: "support",
    legal: "legal",
    health: "zdrav-stil-zivota",
  },
  de: {
    home: "",
    method: "methode",
    products: "produkte",
    dpl: "produkte/digitaler-verkauf-von-standorten",
    blog: "blog",
    guestbook: "gaestebuch",
    support: "support",
    legal: "legal",
    health: "gesund-leben-wasser",
  },
  en: {
    home: "",
    method: "method",
    products: "products",
    dpl: "products/digital-location-sales",
    blog: "blog",
    guestbook: "guestbook",
    support: "support",
    legal: "legal",
    health: "healthy-lifestyle-water",
  },
};

const slugToRouteKey: Record<string, RouteKey> = Object.fromEntries(
  Object.values(paths).flatMap((localePaths) =>
    Object.entries(localePaths).map(([key, value]) => [value, key as RouteKey]),
  ),
) as Record<string, RouteKey>;

const copy: Record<Locale, ShellCopy> = {
  sr: {
    nav: ["Metoda", "Proizvodi", "Blog", "Utisci", "Support", "Legal"],
    footerText:
      "DaniniNet povezuje digitalne proizvode, SEO sadržaj, affiliate preporuke i DaniniHub metodu u jedan uredan sistem: ideja, pitanja, dokaz, granica, isporuka i tržišni signal.",
    footerClaim:
      "Platforma nije zamišljena kao katalog linkova. Svaka stranica mora imati jasan razlog, sledeći korak i pošteno objašnjenje šta se ne obećava.",
    columns: [
      {
        title: "Platforma",
        links: [
          { label: "DaniniHub metoda", route: "method", note: "Pitaj AI — AI pita tebe" },
          { label: "Blog / editorial hub", route: "blog", note: "problemi, dokazi, case study" },
          { label: "Knjiga utisaka", route: "guestbook", note: "pitanja, signali, predlozi" },
        ],
      },
      {
        title: "Proizvodi i tokovi",
        links: [
          { label: "Svi proizvodi", route: "products", note: "digitalni proizvodi i roadmap" },
          { label: "Digitalna prodaja lokacije", route: "dpl", note: "PDF vodič + Bonus Pack" },
          { label: "Health / Water pravac", route: "health", note: "odgovoran roadmap" },
        ],
      },
      {
        title: "Trust & support",
        links: [
          { label: "Legal & Trust", route: "legal", note: "disclaimeri, AI, affiliate, GDPR" },
          { label: "Support", route: "support", note: "Gumroad delivery i pitanja" },
        ],
      },
    ],
    disclosure:
      "Edukativni sadržaj · Digitalni proizvodi · Affiliate napomena · AI transparentnost · GDPR/kolačići · Health disclaimer",
    bottom:
      "Sadržaj ne predstavlja pravni, finansijski, poreski, urbanistički, tehnički, zdravstveni ili investicioni savet. Digitalni proizvodi ne garantuju prodaju, profit, izvodljivost, investitora ili rezultate.",
  },
  de: {
    nav: ["Methode", "Produkte", "Blog", "Gästebuch", "Support", "Legal"],
    footerText:
      "DaniniNet verbindet digitale Produkte, SEO-Inhalte, Affiliate-Empfehlungen und die DaniniHub Methode zu einem geordneten System: Idee, Fragen, Beleg, Grenze, Auslieferung und Marktsignal.",
    footerClaim:
      "Die Plattform ist kein Link-Katalog. Jede Seite braucht einen klaren Grund, einen nächsten Schritt und ehrliche Grenzen dessen, was nicht versprochen wird.",
    columns: [
      {
        title: "Plattform",
        links: [
          { label: "DaniniHub Methode", route: "method", note: "Frag die KI — die KI fragt dich" },
          { label: "Blog / Editorial Hub", route: "blog", note: "Probleme, Belege, Case Study" },
          { label: "Gästebuch", route: "guestbook", note: "Fragen, Signale, Vorschläge" },
        ],
      },
      {
        title: "Produkte und Flows",
        links: [
          { label: "Alle Produkte", route: "products", note: "digitale Produkte und Roadmap" },
          { label: "Digitaler Verkauf von Standorten", route: "dpl", note: "PDF-Leitfaden + Bonus Pack" },
          { label: "Health / Water Richtung", route: "health", note: "verantwortliche Roadmap" },
        ],
      },
      {
        title: "Trust & Support",
        links: [
          { label: "Legal & Trust", route: "legal", note: "Disclaimer, KI, Affiliate, DSGVO" },
          { label: "Support", route: "support", note: "Gumroad Delivery und Fragen" },
        ],
      },
    ],
    disclosure:
      "Bildungsinhalt · Digitale Produkte · Affiliate-Hinweis · KI-Transparenz · DSGVO/Cookies · Health Disclaimer",
    bottom:
      "Inhalte sind keine Rechts-, Finanz-, Steuer-, Planungs-, Technik-, Gesundheits- oder Anlageberatung. Digitale Produkte garantieren keine Verkäufe, Gewinne, Machbarkeit, Investoren oder Ergebnisse.",
  },
  en: {
    nav: ["Method", "Products", "Blog", "Guestbook", "Support", "Legal"],
    footerText:
      "DaniniNet connects digital products, SEO content, affiliate recommendations and the DaniniHub method into one structured system: idea, questions, proof, boundary, delivery and market signal.",
    footerClaim:
      "The platform is not a catalog of links. Every page must have a clear reason, a next step and an honest boundary around what is not promised.",
    columns: [
      {
        title: "Platform",
        links: [
          { label: "DaniniHub method", route: "method", note: "Ask AI — AI asks you" },
          { label: "Blog / editorial hub", route: "blog", note: "problems, proof, case study" },
          { label: "Guestbook", route: "guestbook", note: "questions, signals, suggestions" },
        ],
      },
      {
        title: "Products and flows",
        links: [
          { label: "All products", route: "products", note: "digital products and roadmap" },
          { label: "Digital Location Sales", route: "dpl", note: "PDF guide + Bonus Pack" },
          { label: "Health / Water direction", route: "health", note: "responsible roadmap" },
        ],
      },
      {
        title: "Trust & support",
        links: [
          { label: "Legal & Trust", route: "legal", note: "disclaimers, AI, affiliate, GDPR" },
          { label: "Support", route: "support", note: "Gumroad delivery and questions" },
        ],
      },
    ],
    disclosure:
      "Educational content · Digital products · Affiliate disclosure · AI transparency · GDPR/Cookies · Health disclaimer",
    bottom:
      "Content is not legal, financial, tax, planning, technical, health or investment advice. Digital products do not guarantee sales, profit, feasibility, investors or results.",
  },
};

export function normalizeLocale(locale: string): Locale {
  return locale === "de" || locale === "en" ? locale : "sr";
}

export function localizedPath(locale: Locale, routeKey: RouteKey) {
  const path = paths[locale][routeKey];
  return path ? `/${locale}/${path}` : `/${locale}`;
}

function routeKeyFromPath(currentLocale: Locale, pathname?: string): RouteKey {
  const clean = pathname?.replace(/^\//, "") || "";
  if (!clean) return "home";

  const parts = clean.split("/");
  const rest = parts[0] === currentLocale || parts[0] === "sr" || parts[0] === "de" || parts[0] === "en"
    ? parts.slice(1).join("/")
    : parts.join("/");

  return slugToRouteKey[rest] || "home";
}

function switchLocalePath(currentLocale: Locale, targetLocale: Locale, pathname?: string) {
  return localizedPath(targetLocale, routeKeyFromPath(currentLocale, pathname));
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
          <Link href={localizedPath(lang, "home")} aria-label="DaniniNet home">
            <BrandMark />
          </Link>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300" aria-label="Main navigation">
            {t.nav.map((label, index) => (
              <Link key={label} href={localizedPath(lang, navRouteKeys[index])}>
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
      <footer className="border-t border-white/10 bg-[#07142b] text-slate-300">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1.55fr]">
            <div>
              <BrandMark />
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">{t.footerText}</p>
              <p className="mt-5 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-slate-400">
                {t.footerClaim}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {t.columns.map((column) => (
                <div key={column.title}>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d7b46a]">{column.title}</h2>
                  <div className="mt-4 grid gap-3">
                    {column.links.map((item) => (
                      <Link key={item.label} href={localizedPath(lang, item.route)} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:bg-white/[0.07]">
                        <span className="block text-sm font-semibold text-[#f7fbff] group-hover:text-white">{item.label}</span>
                        {item.note ? <span className="mt-1 block text-xs leading-5 text-slate-400">{item.note}</span> : null}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 text-sm leading-7 text-slate-400 lg:grid-cols-[1fr_1.2fr]">
            <p>{t.disclosure}</p>
            <p className="lg:text-right">{t.bottom}</p>
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
