import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "Privacy / GDPR",
    title: "Privatnost se tretira kao deo poverenja, ne kao fusnota.",
    text: "DaniniNet treba da koristi podatke štedljivo, jasno i samo za konkretan tok: komunikaciju, isporuku proizvoda, support, newsletter ili osnovno razumevanje signala sajta.",
    blocks: [
      ["Minimalno potrebno", "Traži se samo ono što je razumno potrebno za konkretan kontakt, kupovinu, isporuku ili podršku."],
      ["Svrha", "Podaci se ne skupljaju bez razloga. Svaki tok mora imati razumljivu svrhu i očekivan sledeći korak."],
      ["Servisi", "Za kupovinu i isporuku može se koristiti Gumroad. Za email komunikaciju i liste može se koristiti Brevo."],
      ["AI i privatnost", "AI može pomoći u strukturi pitanja i sadržaja, ali poverljiv materijal ne treba unositi u AI tok bez jasne potrebe."],
    ],
    final: "Cilj je jednostavan: dovoljno podataka za funkcionalan sistem, bez nepotrebnog prikupljanja i bez skrivanja svrhe.",
  },
  de: {
    eyebrow: "Privacy / DSGVO",
    title: "Privatsphäre ist Teil des Vertrauens, keine Fußnote.",
    text: "DaniniNet sollte Daten sparsam, klar und nur für konkrete Abläufe nutzen: Kommunikation, Produktlieferung, Support, Newsletter oder grundlegendes Verständnis von Website-Signalen.",
    blocks: [
      ["Minimal erforderlich", "Es wird nur das abgefragt, was für Kontakt, Kauf, Lieferung oder Support vernünftig nötig ist."],
      ["Zweck", "Daten werden nicht ohne Grund gesammelt. Jeder Ablauf braucht einen verständlichen Zweck und nächsten Schritt."],
      ["Dienste", "Für Kauf und Lieferung kann Gumroad genutzt werden. Für E-Mail-Kommunikation und Listen kann Brevo genutzt werden."],
      ["KI und Privatsphäre", "KI kann bei Struktur und Inhalt helfen; vertrauliches Material sollte nicht ohne klaren Zweck in KI-Flows eingegeben werden."],
    ],
    final: "Das Ziel ist einfach: genug Daten für ein funktionierendes System, ohne unnötige Erhebung und ohne versteckten Zweck.",
  },
  en: {
    eyebrow: "Privacy / GDPR",
    title: "Privacy is treated as part of trust, not as a footnote.",
    text: "DaniniNet should use data sparingly, clearly and only for a concrete flow: communication, product delivery, support, newsletter or basic understanding of site signals.",
    blocks: [
      ["Minimum needed", "Only what is reasonably needed for a specific contact, purchase, delivery or support flow should be requested."],
      ["Purpose", "Data is not collected without a reason. Every flow needs an understandable purpose and next step."],
      ["Services", "Gumroad may be used for purchase and delivery. Brevo may be used for email communication and lists."],
      ["AI and privacy", "AI may help with structure and content, but confidential material should not be entered into AI flows without a clear need."],
    ],
    final: "The goal is simple: enough data for a working system, without unnecessary collection and without hidden purpose.",
  },
} as const;

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];
  return <SiteShell locale={lang} currentPath={`/${lang}/legal/privacy`}><SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text}/><section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2">{t.blocks.map(([title,text]) => <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm"><h2 className="text-2xl font-semibold">{title}</h2><p className="mt-4 leading-8 text-[#706a5d]">{text}</p></article>)}</section><section className="bg-[#07142b] text-white"><div className="mx-auto max-w-7xl px-6 py-14"><p className="max-w-4xl text-xl leading-9 text-slate-300">{t.final}</p><Link href={`/${lang}/legal`} className="mt-8 inline-flex rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">Legal & Trust</Link></div></section></SiteShell>;
}
