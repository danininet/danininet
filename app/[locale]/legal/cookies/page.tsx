import Link from "next/link";
import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "Cookies / GDPR",
    title: "Kolačići se koriste samo kada imaju jasnu i potrebnu svrhu.",
    text: "DaniniNet trenutno ne uvodi cookie banner dok nisu potvrđene analytics, advertising, marketing ili druge ne-esencijalne skripte. Ako takve skripte budu dodate, biće uveden odgovarajući consent tok pre njihovog učitavanja.",
    notice: "Ovo nije pravni savet, već transparentan radni okvir za DACH/Balkan publiku. Finalni tekst treba uskladiti sa stvarnim alatima, poslovnim podacima i stručnom pravnom proverom.",
    blocks: [
      ["Neophodna funkcionalnost", "Tehnički neophodni kolačići ili slične tehnologije mogu se koristiti da sajt radi stabilno, bezbedno, da zapamti jezik ili podrži osnovne funkcije. Oni ne smeju biti šire profilisanje korisnika."],
      ["Analitika", "Osnovna analitika se ne sme učitavati kao skriveni tracking. Ako se uvede GA4, Plausible, Matomo ili sličan alat, svrha, opseg i način pristanka moraju biti jasno opisani."],
      ["Marketing i retargeting", "Marketing cookies, pixels, retargeting, affiliate tracking skripte ili slični alati ne treba da se aktiviraju bez jasne informacije i važećeg osnova/pristanka tamo gde je potreban."],
      ["Ugrađeni sadržaj", "Ako se kasnije koriste YouTube, društvene mreže, forme ili eksterni checkout/widget elementi, njihov uticaj na privatnost mora biti objašnjen pre ili uz aktivaciju takvog sadržaja."],
      ["Bez banner-a dok nema potrebe", "Cookie banner se ne uvodi samo radi forme. Uvodi se kada postoje ne-esencijalne skripte ili tehnologije koje zahtevaju informisan izbor korisnika."],
      ["Princip", "Ne prikupljati više nego što je potrebno. Ne koristiti tracking kao zamenu za poverenje. Sve promene alata moraju se odraziti u Privacy i Cookie tekstu."],
    ],
  },
  de: {
    eyebrow: "Cookies / DSGVO",
    title: "Cookies werden nur eingesetzt, wenn sie einen klaren und notwendigen Zweck haben.",
    text: "DaniniNet führt derzeit kein Cookie-Banner ein, solange keine bestätigten Analytics-, Advertising-, Marketing- oder sonstigen nicht notwendigen Skripte aktiv sind. Wenn solche Skripte ergänzt werden, muss vor deren Laden ein passender Consent-Prozess eingerichtet werden.",
    notice: "Dies ist keine Rechtsberatung, sondern ein Transparenzrahmen für DACH/Balkan-Nutzer. Der finale Text muss mit den tatsächlich eingesetzten Tools, Unternehmensdaten und rechtlicher Prüfung abgeglichen werden.",
    blocks: [
      ["Erforderliche Funktion", "Technisch notwendige Cookies oder ähnliche Technologien können genutzt werden, damit die Website stabil und sicher funktioniert, Spracheinstellungen merkt oder Grundfunktionen unterstützt. Sie dürfen kein erweitertes Nutzerprofiling ersetzen."],
      ["Analytics", "Basis-Analytics darf nicht als verstecktes Tracking geladen werden. Wenn GA4, Plausible, Matomo oder ein ähnliches Tool eingesetzt wird, müssen Zweck, Umfang und Consent-Modell klar erklärt werden."],
      ["Marketing und Retargeting", "Marketing-Cookies, Pixel, Retargeting, Affiliate-Tracking-Skripte oder ähnliche Tools sollten nicht ohne klare Information und gültige Rechtsgrundlage bzw. Einwilligung aktiviert werden, sofern diese erforderlich ist."],
      ["Eingebettete Inhalte", "Wenn später YouTube, soziale Netzwerke, Formulare oder externe Checkout-/Widget-Elemente genutzt werden, muss deren Einfluss auf die Privatsphäre vor oder bei Aktivierung erklärt werden."],
      ["Kein Banner ohne Bedarf", "Ein Cookie-Banner wird nicht nur als Formalität eingeführt. Es wird eingesetzt, wenn nicht notwendige Skripte oder Technologien eine informierte Nutzerentscheidung erfordern."],
      ["Prinzip", "Nicht mehr erfassen als nötig. Tracking ersetzt kein Vertrauen. Änderungen an Tools müssen in Privacy- und Cookie-Texten nachgeführt werden."],
    ],
  },
  en: {
    eyebrow: "Cookies / GDPR",
    title: "Cookies are used only when they have a clear and necessary purpose.",
    text: "DaniniNet does not introduce a cookie banner while analytics, advertising, marketing or other non-essential scripts are not confirmed. If such scripts are added later, an appropriate consent flow must be implemented before they load.",
    notice: "This is not legal advice. It is a transparency framework for DACH/Balkan audiences and must be aligned with the actual tools, business details and professional legal review.",
    blocks: [
      ["Necessary functionality", "Technically necessary cookies or similar technologies may be used so the site works securely and reliably, remembers language preference or supports basic functions. They must not become broader user profiling."],
      ["Analytics", "Basic analytics must not load as hidden tracking. If GA4, Plausible, Matomo or a similar tool is introduced, its purpose, scope and consent model must be explained clearly."],
      ["Marketing and retargeting", "Marketing cookies, pixels, retargeting, affiliate tracking scripts or similar tools should not activate without clear information and a valid legal basis or consent where required."],
      ["Embedded content", "If YouTube, social networks, forms or external checkout/widget elements are used later, their privacy impact must be explained before or alongside activation."],
      ["No banner without need", "A cookie banner is not introduced just for appearance. It is introduced when non-essential scripts or technologies require an informed user choice."],
      ["Principle", "Do not collect more than needed. Tracking is not a replacement for trust. Tool changes must be reflected in the Privacy and Cookie texts."],
    ],
  },
} as const;

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang} currentPath={`/${lang}/legal/cookies`}>
      <SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} />
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-[2rem] border border-[#d7b46a]/40 bg-[#fff8e7] p-7 text-[#3b3426] shadow-sm">
          <p className="text-sm uppercase tracking-[0.22em] text-[#9a6b1f]">Legal notice</p>
          <p className="mt-3 max-w-5xl leading-8">{t.notice}</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-2">
        {t.blocks.map(([title, text]) => (
          <article key={title} className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-4 leading-8 text-[#706a5d]">{text}</p>
          </article>
        ))}
      </section>
      <section className="bg-[#07142b] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <Link href={`/${lang}/legal`} className="inline-flex rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">
            Legal & Trust
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
