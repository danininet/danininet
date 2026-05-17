import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "Privacy / GDPR",
    title: "Privatnost se tretira kao deo poverenja, ne kao fusnota.",
    text: "DaniniNet koristi podatke štedljivo, jasno i samo za konkretan tok: kontakt, kupovinu, isporuku digitalnog proizvoda, support, newsletter, Brevo/Gumroad tokove ili osnovno razumevanje signala sajta.",
    notice: "Ovo nije pravni savet. Ovo je transparentan radni okvir koji treba dopuniti stvarnim poslovnim podacima, kontakt adresom i tačnim alatima kada budu finalno potvrđeni.",
    blocks: [
      ["Minimalno potrebno", "Traži se samo ono što je razumno potrebno za konkretan kontakt, kupovinu, isporuku ili podršku: ime, email, poruka, status kupovine ili tehnički podaci koji su potrebni da sajt radi sigurno."],
      ["Svrha", "Podaci se ne skupljaju bez razloga. Svaki tok mora imati razumljivu svrhu: isporuku proizvoda, odgovor na zahtev, slanje dozvoljene email komunikacije, tehničku zaštitu ili poboljšanje korisničkog iskustva."],
      ["Gumroad checkout", "Za kupovinu i isporuku digitalnih proizvoda može se koristiti Gumroad. Gumroad tada obrađuje deo podataka za plaćanje, potvrdu, račun, pristup proizvodu i delivery fajlova."],
      ["Brevo email tokovi", "Za newsletter, edukativne email poruke, potvrde, follow-up i segmentaciju može se koristiti Brevo. Korisnik treba da zna zašto prima email i mora imati mogućnost odjave iz marketinške komunikacije."],
      ["Support i kontakt", "Ako korisnik pošalje pitanje, poruku ili zahtev za podršku, ti podaci se koriste za odgovor na konkretan zahtev, a ne za nepovezane svrhe bez jasnog osnova."],
      ["AI i privatnost", "AI može pomoći u strukturi pitanja, nacrtima, analizama i organizaciji sadržaja kroz DaniniHub metodu Pitaj AI — AI pita tebe. Poverljiv materijal ne treba unositi u AI tok bez jasne potrebe, provere i ljudskog nadzora."],
      ["Cookies i analitika", "Ako se koristi osnovna analitika ili cookies, cilj je razumevanje rada sajta, tehničkih problema i interesovanja publike, ne nepotrebno profilisanje. Detalji idu na posebnu Cookies stranicu."],
      ["Prava korisnika", "Korisnik može tražiti informaciju, pristup, ispravku, brisanje, ograničenje obrade ili odjavu iz marketinške email komunikacije kada je to primenljivo."],
    ],
    final: "Princip je jednostavan: dovoljno podataka da sistem radi, dovoljno transparentnosti da korisnik razume tok, i dovoljno discipline da se ne skuplja ono što nije potrebno.",
  },
  de: {
    eyebrow: "Privacy / DSGVO",
    title: "Privatsphäre ist Teil des Vertrauens, keine Fußnote.",
    text: "DaniniNet nutzt Daten sparsam, klar und nur für konkrete Abläufe: Kontakt, Kauf, Produktlieferung, Support, Newsletter, Brevo/Gumroad-Flows oder grundlegende Website-Signale.",
    notice: "Dies ist keine Rechtsberatung. Es ist ein Transparenzrahmen, der mit realen Unternehmensdaten, Kontaktangaben und bestätigten Tools ergänzt werden muss.",
    blocks: [
      ["Minimal erforderlich", "Es wird nur abgefragt, was für Kontakt, Kauf, Lieferung oder Support vernünftig nötig ist: Name, E-Mail, Nachricht, Kaufstatus oder technische Daten für sicheren Website-Betrieb."],
      ["Zweck", "Daten werden nicht ohne Grund gesammelt. Jeder Ablauf braucht einen klaren Zweck: Produktlieferung, Antwort auf Anfrage, erlaubte E-Mail-Kommunikation, technische Sicherheit oder bessere Nutzererfahrung."],
      ["Gumroad Checkout", "Für Kauf und Lieferung digitaler Produkte kann Gumroad genutzt werden. Gumroad verarbeitet dann Daten für Zahlung, Bestätigung, Rechnung, Produktzugang und Dateilieferung."],
      ["Brevo E-Mail-Flows", "Für Newsletter, Bildungs-E-Mails, Bestätigungen, Follow-up und Segmentierung kann Brevo genutzt werden. Nutzer sollten den Kontext kennen und sich von Marketing-Kommunikation abmelden können."],
      ["Support und Kontakt", "Wenn Nutzer eine Frage, Nachricht oder Support-Anfrage senden, werden diese Daten zur Antwort auf die konkrete Anfrage genutzt."],
      ["KI und Privatsphäre", "KI kann bei Fragenstruktur, Entwürfen, Analysen und Inhaltsorganisation helfen. Vertrauliches Material sollte nicht ohne klaren Zweck, Prüfung und menschliche Kontrolle in KI-Flows eingegeben werden."],
      ["Cookies und Analytics", "Wenn Basis-Analytics oder Cookies genutzt werden, ist das Ziel Website-Funktion, technische Probleme und Publikumsinteresse, nicht unnötiges Profiling."],
      ["Nutzerrechte", "Nutzer können Information, Zugang, Berichtigung, Löschung, Einschränkung oder Abmeldung von Marketing-E-Mails verlangen, soweit anwendbar."],
    ],
    final: "Das Prinzip ist einfach: genug Daten für ein funktionierendes System, genug Transparenz für den Nutzer und genug Disziplin, nichts Unnötiges zu sammeln.",
  },
  en: {
    eyebrow: "Privacy / GDPR",
    title: "Privacy is treated as part of trust, not as a footnote.",
    text: "DaniniNet uses data sparingly, clearly and only for a concrete flow: contact, purchase, digital product delivery, support, newsletter, Brevo/Gumroad flows or basic site signals.",
    notice: "This is not legal advice. It is a transparency framework that must be completed with real business details, contact information and confirmed tools.",
    blocks: [
      ["Minimum needed", "Only what is reasonably needed for contact, purchase, delivery or support should be requested: name, email, message, purchase status or technical data needed for secure site operation."],
      ["Purpose", "Data is not collected without a reason. Every flow needs a clear purpose: product delivery, response to a request, permitted email communication, technical safety or improved user experience."],
      ["Gumroad checkout", "Gumroad may be used for purchase and delivery of digital products. Gumroad then processes data for payment, confirmation, invoicing, product access and file delivery."],
      ["Brevo email flows", "Brevo may be used for newsletters, educational emails, confirmations, follow-up and segmentation. Users should understand the context and be able to unsubscribe from marketing communication."],
      ["Support and contact", "If a user sends a question, message or support request, that data is used to respond to the specific request."],
      ["AI and privacy", "AI may help with question structure, drafts, analysis and content organization. Confidential material should not be entered into AI flows without clear need, review and human oversight."],
      ["Cookies and analytics", "If basic analytics or cookies are used, the goal is site function, technical issues and audience interest, not unnecessary profiling."],
      ["User rights", "Users may request information, access, correction, deletion, restriction or unsubscribe from marketing emails where applicable."],
    ],
    final: "The principle is simple: enough data for the system to work, enough transparency for the user to understand the flow, and enough discipline not to collect what is not needed.",
  },
} as const;

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];
  return <SiteShell locale={lang} currentPath={`/${lang}/legal/privacy`}><SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text}/><section className="mx-auto max-w-7xl px-6 pb-10"><div className="rounded-[2rem] border border-[#d7b46a]/40 bg-[#fff8e7] p-7 text-[#3b3426] shadow-sm"><p className="text-sm uppercase tracking-[0.22em] text-[#9a6b1f]">Legal notice</p><p className="mt-3 max-w-5xl leading-8">{t.notice}</p></div></section><section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2">{t.blocks.map(([title,text]) => <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm"><h2 className="text-2xl font-semibold text-[#15130f]">{title}</h2><p className="mt-4 leading-8 text-[#706a5d]">{text}</p></article>)}</section><section className="bg-[#07142b] text-white"><div className="mx-auto max-w-7xl px-6 py-14"><p className="text-sm uppercase tracking-[0.22em] text-[#b9d7f0]">Trust layer</p><p className="mt-4 max-w-4xl text-xl leading-9 text-slate-300">{t.final}</p><Link href={`/${lang}/legal`} className="mt-8 inline-flex rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">Legal & Trust</Link></div></section></SiteShell>;
}
