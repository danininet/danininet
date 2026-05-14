import Link from "next/link";
import { PortalChrome } from "@/components/layout/PortalChrome";

const copy = {
  sr: {
    hero: "DaniniNet — od ideje do digitalnog artifacta",
    sub: "Informativno-prodajni portal za digitalni marketing, affiliate marketing, AI dijalog, zdrav stil života i vodu kao svakodnevnu rutinu.",
    no: "Bez copy/paste prompt kulture. Bez obećanja brzog uspeha. Kroz DaniniHub metod: Pitaj AI — AI pita tebe.",
    primary: "Pogledaj prvi proizvod",
    secondary: "Knjiga utisaka",
  },
  de: {
    hero: "DaniniNet — von der Idee zum digitalen Artefakt",
    sub: "Informations- und Verkaufsportal für digitales Marketing, Affiliate Marketing, KI-Dialog, gesunden Lebensstil und Wasser als tägliche Routine.",
    no: "Keine Copy/Paste-Prompt-Kultur. Keine schnellen Erfolgsversprechen. Durch die DaniniHub Methode: Frag die KI — die KI fragt dich.",
    primary: "Erstes Produkt ansehen",
    secondary: "Gästebuch",
  },
  en: {
    hero: "DaniniNet — from idea to digital artifact",
    sub: "Information and sales portal for digital marketing, affiliate marketing, AI dialogue, healthy lifestyle and water as a daily routine.",
    no: "No copy/paste prompt culture. No fast-success promises. Through the DaniniHub method: Ask AI — AI asks you.",
    primary: "View first product",
    secondary: "Guestbook",
  },
};

const pillars = [
  ["Income", "Digitalni marketing, affiliate marketing, digitalni proizvodi, alati, prodajni tokovi i online zarada bez manipulacije."],
  ["Intelligence", "AI u praksi, DaniniHub OS, metoda ‘Pitaj AI — AI pita tebe’, case study artifacti i strukturisanje odluka."],
  ["Health", "Zdrav stil života, voda, rutine, stare navike, recepti i odgovorni digitalni proizvodi bez medicinskog hype-a."],
];

const categories = [
  ["Digitalni marketing", "Landing stranice, SEO, email tokovi, lead forme, conversion bez manipulacije i javni/privatni sloj ponude."],
  ["Affiliate marketing", "Affiliate preporuke kao editorial sistem: kome je namenjeno, kada ima smisla, kada nema smisla i jasan disclosure."],
  ["AI u praksi", "Dijalog umesto promptova: činjenice, pretpostavke, dokazi, rizici i sledeći korak."],
  ["Zdrav stil života", "Rutine, stare navike, recepti, voda i svakodnevna disciplina bez lažnih zdravstvenih tvrdnji."],
  ["Voda i zdravlje", "Hidratacija, kvalitet vode, filteri, navike i affiliate vodiči uz odgovorne health disclaimere."],
  ["Case studies", "Calije Park Residence, DPL i budući artifacti kao dokaz procesa, ne kao prazna teorija."],
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale === "de" || locale === "en" ? locale : "sr";
  const t = copy[lang];

  return (
    <PortalChrome locale={lang}>
      <section className="grid gap-12 py-20 lg:grid-cols-[1.14fr_0.86fr] lg:items-end">
        <div>
          <p className="mb-6 inline-flex rounded-full border border-[var(--line-gold)] px-4 py-2 text-sm text-[var(--muted)]">
            Income · Intelligence · Health
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            {t.hero}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">{t.sub}</p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--ink)]">{t.no}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href={`/${lang}/proizvodi/digitalna-prodaja-lokacije`} className="rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-medium text-[var(--paper)]">
              {t.primary}
            </Link>
            <Link href={`/${lang}/knjiga-utisaka`} className="rounded-full border border-[var(--line)] px-6 py-3 text-sm font-medium">
              {t.secondary}
            </Link>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.22em] text-[var(--gold)]">DaniniHub OS</p>
          <h2 className="mt-6 text-3xl font-semibold leading-tight">Pitaj AI — AI pita tebe.</h2>
          <p className="mt-6 leading-8 text-[var(--muted)]">
            AI ne zamenjuje čoveka. AI pomaže da se razdvoje činjenice, pretpostavke, dokazi, rizici i sledeći koraci. Odluku donosi korisnik.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-3 text-center text-xs text-[var(--muted)]">
            <span className="rounded-full border border-[var(--line)] py-2">Facts</span>
            <span className="rounded-full border border-[var(--line)] py-2">Risks</span>
            <span className="rounded-full border border-[var(--line)] py-2">Next</span>
          </div>
        </aside>
      </section>

      <section className="py-10">
        <p className="text-sm uppercase tracking-[0.22em] text-[var(--gold)]">Šta je DaniniNet</p>
        <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight">
          Portal koji povezuje digitalni marketing, affiliate model, AI dijalog, digitalne proizvode i odgovoran health/water pravac.
        </h2>
        <p className="mt-6 max-w-3xl leading-8 text-[var(--muted)]">
          DaniniNet je javni kanal DaniniHub filozofije i prostor gde se ideje, znanje, lokacije, navike i proizvodi pretvaraju u strukturisane digitalne ponude sa jasnim granicama, dokazima i poverenjem.
        </p>
      </section>

      <section className="py-10">
        <h2 className="text-3xl font-semibold">Tri stuba portala</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pillars.map(([title, text]) => (
            <article key={title} className="rounded-[2rem] border border-[var(--line)] bg-[var(--paper)] p-8">
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--gold)]">{title}</p>
              <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
              <p className="mt-4 leading-7 text-[var(--muted)]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 py-12 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-8">
          <p className="text-sm uppercase tracking-[0.22em] text-[var(--gold)]">Prvi dokazni proizvod</p>
          <h2 className="mt-4 text-3xl font-semibold">Digitalna prodaja lokacije</h2>
          <p className="mt-5 leading-8 text-[var(--muted)]">
            Praktičan PDF vodič koji pokazuje kako se lokacija, parcela, stan, kuća ili budući projekat mogu predstaviti ozbiljnije od običnog oglasa — kroz javni sajt, zatvoreni brief, vizuale, lead formu, email delivery i tržišni signal.
          </p>
          <Link href={`/${lang}/proizvodi/digitalna-prodaja-lokacije`} className="mt-8 inline-flex rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-medium text-[var(--paper)]">
            Pogledaj DPL
          </Link>
        </article>

        <article className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-8">
          <p className="text-sm uppercase tracking-[0.22em] text-[var(--gold)]">Proof artifact</p>
          <h2 className="mt-4 text-3xl font-semibold">Calije Park Residence</h2>
          <p className="mt-5 leading-8 text-[var(--muted)]">
            Realaan dokaz procesa: javni gateway, private brief logika, video/vizuali, lead tok, SEO/legal sloj i digitalni proizvod izveden iz realnog slučaja. Privatni brief sadržaj i pregovarački detalji ne idu javno.
          </p>
        </article>
      </section>

      <section className="py-12">
        <p className="text-sm uppercase tracking-[0.22em] text-[var(--gold)]">Portal kategorije</p>
        <h2 className="mt-4 max-w-4xl text-3xl font-semibold">Sadržaj koji gradi poverenje, SEO strukturu i prodajni tok.</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(([title, text]) => (
            <article key={title} className="rounded-3xl border border-[var(--line)] bg-[var(--paper)] p-6">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--ink)] p-8 text-[var(--paper)]">
          <p className="text-sm uppercase tracking-[0.22em] text-[var(--gold-soft)]">Newsletter</p>
          <h2 className="mt-4 text-3xl font-semibold">Jedno korisno pitanje nedeljno.</h2>
          <p className="mt-5 leading-8 text-[#d8d0c1]">Jedan praktičan DaniniNet/DaniniHub signal, jedno AI pitanje za razmišljanje i jedan resurs. Kupovina proizvoda ne znači automatsku prijavu.</p>
        </div>
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-8">
          <p className="text-sm uppercase tracking-[0.22em] text-[var(--gold)]">Trust layer</p>
          <h2 className="mt-4 text-3xl font-semibold">Bez garancija. Bez lažnog pritiska. Bez skrivenog affiliate tona.</h2>
          <p className="mt-5 leading-8 text-[var(--muted)]">Svaka preporuka mora imati kontekst: šta alat radi, kome je namenjen, kada ima smisla, kada nema smisla, region dostupnosti i affiliate napomenu.</p>
        </div>
      </section>
    </PortalChrome>
  );
}
