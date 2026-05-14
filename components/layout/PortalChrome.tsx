import Image from "next/image";
import Link from "next/link";

const nav = [
  ["Početna", ""],
  ["DaniniHub", "daninihub-metod"],
  ["Proizvod", "proizvodi/digitalna-prodaja-lokacije"],
  ["Knjiga utisaka", "knjiga-utisaka"],
  ["Support", "support"],
  ["Legal", "legal"],
];

export function PortalChrome({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  const lang = locale === "de" || locale === "en" ? locale : "sr";

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <header className="flex flex-wrap items-center justify-between gap-6 border-b border-[var(--line)] pb-6">
          <Link href={`/${lang}`} className="flex items-center" aria-label="DaniniNet home">
            <Image
              src="/brand/danininet-master-logo-horizontal.svg"
              alt="DaniniNet"
              width={210}
              height={48}
              priority
            />
          </Link>

          <nav className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]" aria-label="Main navigation">
            {nav.map(([label, path]) => (
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
                width={190}
                height={44}
              />
              <p className="mt-5 max-w-3xl">
                DaniniNet je informativno-prodajni portal za digitalni marketing, affiliate marketing,
                AI dijalog, digitalne proizvode, zdrav stil života i vodu kao svakodnevnu rutinu.
                Sadržaj je organizovan kroz jasnoću, dokaz, poverenje i odgovoran odnos prema publici.
              </p>
            </div>
            <div className="grid gap-2">
              <Link href={`/${lang}/legal`}>Legal & Trust</Link>
              <Link href={`/${lang}/knjiga-utisaka`}>Knjiga utisaka</Link>
              <Link href={`/${lang}/support`}>Support</Link>
              <p>Affiliate disclosure · AI transparency · GDPR/Cookies · Health disclaimer</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
