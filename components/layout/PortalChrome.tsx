import Image from "next/image";
import Link from "next/link";

type Locale = "sr" | "de" | "en";

const labels = {
  sr: {
    nav: [
      ["Početna", ""],
      ["Metoda", "daninihub-metod"],
      ["Proizvod", "proizvodi/digitalna-prodaja-lokacije"],
      ["Utisci", "knjiga-utisaka"],
      ["Support", "support"],
      ["Legal", "legal"],
    ],
    footer:
      "DaniniNet povezuje digitalni marketing, affiliate modele, AI dijalog, digitalne proizvode i odgovoran health/water pravac kroz jasan editorial sistem, dokaz i poverenje.",
    legal: "Legal & Trust",
    guestbook: "Knjiga utisaka",
    support: "Support",
    disclosure: "Affiliate napomena · AI transparentnost · GDPR/kolačići · Health disclaimer",
  },
  de: {
    nav: [
      ["Start", ""],
      ["Methode", "daninihub-metod"],
      ["Produkt", "proizvodi/digitalna-prodaja-lokacije"],
      ["Gästebuch", "knjiga-utisaka"],
      ["Support", "support"],
      ["Legal", "legal"],
    ],
    footer:
      "DaniniNet verbindet digitales Marketing, Affiliate-Modelle, KI-Dialog, digitale Produkte und verantwortliche Health/Water-Themen in einem klaren Editorial-System mit Belegen und Vertrauen.",
    legal: "Legal & Trust",
    guestbook: "Gästebuch",
    support: "Support",
    disclosure: "Affiliate-Hinweis · KI-Transparenz · DSGVO/Cookies · Health Disclaimer",
  },
  en: {
    nav: [
      ["Home", ""],
      ["Method", "daninihub-metod"],
      ["Product", "proizvodi/digitalna-prodaja-lokacije"],
      ["Guestbook", "knjiga-utisaka"],
      ["Support", "support"],
      ["Legal", "legal"],
    ],
    footer:
      "DaniniNet connects digital marketing, affiliate models, AI dialogue, digital products and responsible health/water topics through a clear editorial system, evidence and trust.",
    legal: "Legal & Trust",
    guestbook: "Guestbook",
    support: "Support",
    disclosure: "Affiliate disclosure · AI transparency · GDPR/Cookies · Health disclaimer",
  },
} as const;

export function PortalChrome({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  const lang: Locale = locale === "de" || locale === "en" ? locale : "sr";
  const t = labels[lang];

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <header className="flex flex-wrap items-center justify-between gap-6 border-b border-[var(--line)] pb-6">
          <Link href={`/${lang}`} className="flex items-center" aria-label="DaniniNet home">
            <Image
              src="/brand/danininet-master-logo-horizontal.svg"
              alt="DaniniNet"
              width={218}
              height={50}
              priority
            />
          </Link>

          <nav className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]" aria-label="Main navigation">
            {t.nav.map(([label, path]) => (
              <Link key={path || "home"} href={`/${lang}${path ? `/${path}` : ""}`}>
                {label}
              </Link>
            ))}
            <span className="mx-1 h-4 w-px bg-[var(--line)]" />
            <Link href="/sr" hrefLang="sr">SR</Link>
            <Link href="/de" hrefLang="de">DE</Link>
            <Link href="/en" hrefLang="en">EN</Link>
          </nav>
        </header>

        {children}

        <footer className="mt-20 border-t border-[var(--line)] py-8 text-sm leading-7 text-[var(--muted)]">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Image
                src="/brand/danininet-master-logo-horizontal.svg"
                alt="DaniniNet"
                width={198}
                height={46}
              />
              <p className="mt-5 max-w-3xl">{t.footer}</p>
            </div>
            <div className="grid gap-2">
              <Link href={`/${lang}/legal`}>{t.legal}</Link>
              <Link href={`/${lang}/knjiga-utisaka`}>{t.guestbook}</Link>
              <Link href={`/${lang}/support`}>{t.support}</Link>
              <p>{t.disclosure}</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
