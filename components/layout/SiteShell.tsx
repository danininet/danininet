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
  "proizvodi/digitalna-prodaja-lokacije",
  "blog",
  "knjiga-utisaka",
  "support",
  "legal",
];

const copy: Record<Locale, ShellCopy> = {
  sr: {
    nav: ["Metoda", "Proizvod", "Blog", "Utisci", "Support", "Legal"],
    footerText:
      "DaniniNet povezuje digitalni marketing, affiliate modele, AI dijalog, digitalne proizvode i odgovoran health/water pravac kroz jasnoću, dokaz i poverenje.",
    legal: "Legal & Trust",
    guestbook: "Knjiga utisaka",
    support: "Support",
    disclosure: "Affiliate napomena · AI transparentnost · GDPR/kolačići · Health disclaimer",
  },
  de: {
    nav: ["Methode", "Produkt", "Blog", "Gästebuch", "Support", "Legal"],
    footerText:
      "DaniniNet verbindet digitales Marketing, Affiliate-Modelle, KI-Dialog, digitale Produkte und verantwortliche Health/Water-Themen durch Klarheit, Belege und Vertrauen.",
    legal: "Legal & Trust",
    guestbook: "Gästebuch",
    support: "Support",
    disclosure: "Affiliate-Hinweis · KI-Transparenz · DSGVO/Cookies · Health Disclaimer",
  },
  en: {
    nav: ["Method", "Product", "Blog", "Guestbook", "Support", "Legal"],
    footerText:
      "DaniniNet connects digital marketing, affiliate models, AI dialogue, digital products and responsible health/water topics through clarity, evidence and trust.",
    legal: "Legal & Trust",
    guestbook: "Guestbook",
    support: "Support",
    disclosure: "Affiliate disclosure · AI transparency · GDPR/Cookies · Health disclaimer",
  },
};

export function normalizeLocale(locale: string): Locale {
  return locale === "de" || locale === "en" ? locale : "sr";
}

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-[#8db6d8]/40 bg-white/5 text-sm font-bold text-[#e7f3ff] shadow-[0_0_24px_rgba(34,107,191,0.18)]">
        <span className="absolute inset-x-2 bottom-2 h-px bg-[#b8944d]" />
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
  children,
}: {
  locale: string;
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
            <Link href="/sr" hrefLang="sr">SR</Link>
            <Link href="/de" hrefLang="de">DE</Link>
            <Link href="/en" hrefLang="en">EN</Link>
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
