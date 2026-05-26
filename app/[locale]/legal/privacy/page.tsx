import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "Privacy / GDPR",
    title: "Privatnost je deo poverenja.",
    text: "DaniniNet koristi podatke jasno i ograničeno za kontakt, kupovinu, isporuku digitalnih proizvoda, newsletter i osnovnu funkcionalnost sajta.",
    notice: "Ovo nije pravni savet. Tekst predstavlja GDPR-aware okvir za DACH/Balkan publiku i treba ga uskladiti sa stvarnim poslovnim podacima i alatima.",
    blocks: [
      ["Minimalno potrebno", "Prikupljaju se samo podaci potrebni za kontakt, kupovinu, podršku ili isporuku proizvoda."],
      ["Svrha", "Svaki tok obrade treba da ima jasnu svrhu: odgovor na zahtev, isporuku proizvoda ili tehničku funkcionalnost."],
      ["Newsletter", "Prijava na newsletter ne znači automatski promotivne email kampanje. Korisnik mora razumeti šta prima i imati mogućnost odjave."],
      ["Gumroad", "Gumroad može obrađivati podatke vezane za kupovinu, plaćanje i delivery digitalnih proizvoda."],
      ["Brevo", "Brevo može biti korišćen za newsletter i email komunikaciju uz transparentan pristup i mogućnost odjave."],
      ["AI i privatnost", "AI može pomagati u strukturi sadržaja i organizaciji informacija uz ljudski nadzor i proveru."],
      ["Cookies", "Ako se koriste analytics ili cookies, cilj treba da bude funkcionalnost i razumevanje sadržaja, ne skriveno profilisanje."],
      ["Prava korisnika", "Korisnik može tražiti pristup, ispravku, brisanje ili ograničenje obrade kada je to primenljivo."],
    ],
    final: "Dovoljno podataka da sistem funkcioniše i dovoljno transparentnosti da korisnik razume tok.",
  },
  de: {
    eyebrow: "Privacy / DSGVO",
    title: "Privatsphäre ist Teil des Vertrauens.",
    text: "DaniniNet nutzt Daten klar und begrenzt für Kontakt, Kauf, digitale Produktlieferung, Newsletter und grundlegende Website-Funktionen.",
    notice: "Dies ist keine Rechtsberatung. Der Text ist ein DSGVO-orientierter Rahmen für DACH/Balkan-Nutzer.",
    blocks: [
      ["Minimal erforderlich", "Es werden nur Daten erhoben, die für Kontakt, Kauf, Support oder Lieferung nötig sind."],
      ["Zweck", "Jeder Verarbeitungsvorgang sollte einen klaren Zweck haben."],
      ["Newsletter", "Eine Newsletter-Anmeldung bedeutet nicht automatisch Werbekampagnen. Nutzer müssen verstehen, was sie erhalten."],
      ["Gumroad", "Gumroad kann Daten für Kauf und digitale Produktlieferung verarbeiten."],
      ["Brevo", "Brevo kann für Newsletter und E-Mail-Kommunikation genutzt werden."],
      ["KI und Privatsphäre", "KI kann bei Struktur und Organisation unterstützen, jedoch mit menschlicher Kontrolle."],
      ["Cookies", "Analytics oder Cookies sollten Funktionalität und Inhaltsverständnis unterstützen."],
      ["Nutzerrechte", "Nutzer können Zugang, Berichtigung oder Löschung verlangen."],
    ],
    final: "Genug Daten für ein funktionierendes System und genug Transparenz für den Nutzer.",
  },
  en: {
    eyebrow: "Privacy / GDPR",
    title: "Privacy is part of trust.",
    text: "DaniniNet uses data in a limited and transparent way for contact, purchases, digital product delivery, newsletters and core website functionality.",
    notice: "This is not legal advice. The text is a GDPR-aware framework for DACH/Balkan audiences.",
    blocks: [
      ["Minimum necessary", "Only data needed for contact, support, purchases or delivery should be collected."],
      ["Purpose", "Every processing flow should have a clear purpose."],
      ["Newsletter", "Newsletter signup does not automatically mean promotional campaigns. Users should understand what they receive."],
      ["Gumroad", "Gumroad may process data related to purchases and digital product delivery."],
      ["Brevo", "Brevo may be used for newsletters and email communication."],
      ["AI and privacy", "AI may help with structure and organization with human review and oversight."],
      ["Cookies", "Analytics or cookies should support functionality and understanding content."],
      ["User rights", "Users may request access, correction or deletion where applicable."],
    ],
    final: "Enough data for the system to work and enough transparency for the user to understand the flow.",
  },
} as const;

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return <SiteShell locale={lang} currentPath={`/${lang}/legal/privacy`}><SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text}/><section className="mx-auto max-w-7xl px-6 pb-10"><div className="rounded-[2rem] border border-[#d7b46a]/40 bg-[#fff8e7] p-7 text-[#3b3426] shadow-sm"><p className="text-sm uppercase tracking-[0.22em] text-[#9a6b1f]">Legal notice</p><p className="mt-3 max-w-5xl leading-8">{t.notice}</p></div></section><section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2">{t.blocks.map(([title,text]) => <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm"><h2 className="text-2xl font-semibold text-[#15130f]">{title}</h2><p className="mt-4 leading-8 text-[#706a5d]">{text}</p></article>)}</section><section className="bg-[#07142b] text-white"><div className="mx-auto max-w-7xl px-6 py-14"><p className="text-sm uppercase tracking-[0.22em] text-[#b9d7f0]">Trust layer</p><p className="mt-4 max-w-4xl text-xl leading-9 text-slate-300">{t.final}</p><Link href={`/${lang}/legal`} className="mt-8 inline-flex rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">Legal & Trust</Link></div></section></SiteShell>;
}
