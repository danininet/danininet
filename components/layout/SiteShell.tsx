import Link from "next/link";

type Locale = "sr" | "de" | "en";
type RouteKey =
  | "home" | "start" | "cases" | "method" | "products" | "dpl" | "blog"
  | "newsletter" | "guestbook" | "support" | "legal" | "health";

type ShellCopy = {
  nav: string[]; footerText: string; disclosure: string;
  platform: string; legal: string; support: string;
  privacy: string; terms: string; disclaimer: string; ai: string; impressum: string;
};

const navRouteKeys: RouteKey[] = ["start", "cases", "support", "legal"];

const paths: Record<Locale, Record<RouteKey, string>> = {
  sr: { home:"", start:"pocni", cases:"case-studies", method:"daninihub-metod", products:"proizvodi", dpl:"proizvodi/digitalna-prodaja-lokacije", blog:"blog", newsletter:"newsletter", guestbook:"knjiga-utisaka", support:"support", legal:"legal", health:"zdrav-stil-zivota" },
  de: { home:"", start:"start", cases:"case-studies", method:"methode", products:"produkte", dpl:"produkte/digitaler-verkauf-von-standorten", blog:"blog", newsletter:"newsletter", guestbook:"gaestebuch", support:"support", legal:"legal", health:"gesund-leben-wasser" },
  en: { home:"", start:"start", cases:"case-studies", method:"method", products:"products", dpl:"products/digital-location-sales", blog:"blog", newsletter:"newsletter", guestbook:"guestbook", support:"support", legal:"legal", health:"healthy-lifestyle-water" },
};

const legalSubPaths: Record<string,string> = {
  impressum:"impressum", privacy:"privacy", cookies:"cookies", terms:"terms",
  disclaimer:"disclaimer", "affiliate-disclosure":"affiliate-disclosure",
  "ai-transparentnost":"ai-transparentnost", "health-disclaimer":"health-disclaimer",
  "refund-policy":"refund-policy",
};

const slugToRouteKey: Record<string, RouteKey> = Object.fromEntries(
  Object.values(paths).flatMap(localePaths => Object.entries(localePaths).map(([key,value]) => [value,key as RouteKey]))
) as Record<string,RouteKey>;

const copy: Record<Locale,ShellCopy> = {
  sr: {
    nav:["Počni","Case 01","Podrška","Legal"],
    footerText:"DaniniNet je operativni Human + AI sistem za pronalaženje, testiranje i izvršavanje tržišnih prilika. Merimo stvarne signale: upit, rezervaciju, uplatu i ponovljenu uplatu.",
    disclosure:"AI ubrzava istraživanje i izvršenje. Čovek zadržava odluke, odgovornost i potvrdu važnih radnji.",
    platform:"Sistem", legal:"Legal & Trust", support:"Podrška",
    privacy:"Privacy / GDPR", terms:"Terms", disclaimer:"Disclaimer", ai:"AI transparentnost", impressum:"Impressum",
  },
  de: {
    nav:["Start","Case 01","Support","Legal"],
    footerText:"DaniniNet ist ein operatives Human+AI-System, das Marktchancen findet, testet und umsetzt. Gemessen werden reale Signale: Anfrage, Reservierung, Zahlung und Wiederholung.",
    disclosure:"KI beschleunigt Recherche und Ausführung. Entscheidungen, Verantwortung und Freigaben wichtiger Aktionen bleiben beim Menschen.",
    platform:"System", legal:"Legal & Trust", support:"Support",
    privacy:"Privacy / DSGVO", terms:"Terms", disclaimer:"Disclaimer", ai:"KI-Transparenz", impressum:"Impressum",
  },
  en: {
    nav:["Start","Case 01","Support","Legal"],
    footerText:"DaniniNet is an operational Human + AI system for finding, testing and executing market opportunities. We measure real signals: inquiry, reservation, payment and repeat payment.",
    disclosure:"AI accelerates research and execution. Humans retain decisions, responsibility and approval of important actions.",
    platform:"System", legal:"Legal & Trust", support:"Support",
    privacy:"Privacy / GDPR", terms:"Terms", disclaimer:"Disclaimer", ai:"AI transparency", impressum:"Imprint",
  },
};

export function normalizeLocale(locale:string): Locale { return locale==="de" || locale==="en" ? locale : "sr"; }
export function localizedPath(locale:Locale, routeKey:RouteKey){ const path=paths[locale][routeKey]; return path ? `/${locale}/${path}` : `/${locale}`; }

function switchLocalePath(currentLocale:Locale,targetLocale:Locale,pathname?:string){
  const clean=pathname?.replace(/^\//,"")||"";
  const parts=clean.split("/").filter(Boolean);
  const withoutLocale=["sr","de","en"].includes(parts[0]) ? parts.slice(1) : parts;
  const rest=withoutLocale.join("/");
  if(!rest) return `/${targetLocale}`;
  if(rest.startsWith("legal/")){
    const sub=rest.split("/").slice(1).join("/");
    if(legalSubPaths[sub]) return `/${targetLocale}/legal/${legalSubPaths[sub]}`;
  }
  return localizedPath(targetLocale,slugToRouteKey[rest]||"home");
}
function legalPath(lang:Locale,sub:string){return `/${lang}/legal/${sub}`;}

export function BrandMark({compact=false}:{compact?:boolean}){
  return <span className="flex items-center gap-3">
    <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-xl border border-[#8db6d8]/40 bg-white/5 text-sm font-bold text-[#e7f3ff]">
      <span className="absolute left-2 top-3 h-px w-8 rotate-[-18deg] bg-[#b8944d]" />
      <span className="absolute bottom-3 left-2 h-px w-8 rotate-[18deg] bg-[#7db7e8]" />DN
    </span>
    {!compact && <span><span className="block text-2xl font-semibold tracking-tight">DaniniNet</span><span className="block text-[11px] uppercase tracking-[0.24em] text-[#b9d7f0]">Human + AI · Revenue OS</span></span>}
  </span>;
}

export function SiteShell({locale,currentPath,children}:{locale:string;currentPath?:string;children:React.ReactNode}){
  const lang=normalizeLocale(locale); const t=copy[lang];
  return <main className="min-h-screen bg-[#f4efe5] text-[#15130f]">
    <header className="bg-[#07142b] text-[#f7fbff]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-7">
        <Link href={localizedPath(lang,"home")} aria-label="DaniniNet home"><BrandMark /></Link>
        <nav className="flex flex-wrap items-center gap-5 text-sm text-slate-300" aria-label="Main navigation">
          {t.nav.map((label,index)=><Link key={label} href={localizedPath(lang,navRouteKeys[index])}>{label}</Link>)}
          <span className="mx-1 h-4 w-px bg-white/15" />
          <Link href={switchLocalePath(lang,"sr",currentPath)} hrefLang="sr">SR</Link>
          <Link href={switchLocalePath(lang,"de",currentPath)} hrefLang="de">DE</Link>
          <Link href={switchLocalePath(lang,"en",currentPath)} hrefLang="en">EN</Link>
        </nav>
      </div>
    </header>
    {children}
    <footer className="bg-[#07142b] text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.3fr_.7fr]">
        <div><BrandMark/><p className="mt-5 max-w-2xl leading-8">{t.footerText}</p><p className="mt-5 max-w-2xl border-l border-[#b8944d] pl-4 text-sm leading-7 text-slate-400">{t.disclosure}</p></div>
        <div className="grid gap-3 text-sm">
          <Link href={localizedPath(lang,"start")}>{t.nav[0]}</Link>
          <Link href={localizedPath(lang,"cases")}>{t.nav[1]}</Link>
          <Link href={localizedPath(lang,"support")}>{t.support}</Link>
          <Link href={localizedPath(lang,"legal")}>{t.legal}</Link>
          <Link href={legalPath(lang,"impressum")}>{t.impressum}</Link>
          <Link href={legalPath(lang,"privacy")}>{t.privacy}</Link>
          <Link href={legalPath(lang,"terms")}>{t.terms}</Link>
          <Link href={legalPath(lang,"disclaimer")}>{t.disclaimer}</Link>
          <Link href={legalPath(lang,"ai-transparentnost")}>{t.ai}</Link>
        </div>
      </div>
      <div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-6 py-5 text-xs text-slate-500"><span>© DaniniNet</span><span>Market signal → transaction → evidence</span></div></div>
    </footer>
  </main>;
}

export function SectionIntro({eyebrow,title,text}:{eyebrow:string;title:string;text:string}){
  return <section className="mx-auto max-w-7xl px-6 py-16"><p className="text-sm uppercase tracking-[0.24em] text-[#226bbf]">{eyebrow}</p><h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">{title}</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-[#706a5d]">{text}</p></section>;
}
