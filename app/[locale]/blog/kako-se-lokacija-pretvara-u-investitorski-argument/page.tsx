import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

type Section = {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
  visual?: "hero" | "ad" | "gateway" | "video" | "due" | "case";
};

const slug = "kako-se-lokacija-pretvara-u-investitorski-argument";

const seo = {
  title: "Kako se lokacija pretvara u investitorski argument | Calije Park Residence",
  description:
    "Calije Park Residence case study: kako se lokacija u Nišu predstavlja kroz javni gateway, video uvod, višejezični sadržaj i zatvoreni Investor Brief.",
};

const sections: Section[] = [
  {
    id: "zasto-oglas-nije-dovoljan",
    title: "1. Zašto običan oglas nije dovoljan",
    body: [
      "Klasičan oglas za parcelu najčešće odgovara na nekoliko osnovnih pitanja: gde se lokacija nalazi, kolika je površina, koja je okvirna cena i kome se treba javiti. To jeste početak, ali nije dovoljno ako se želi ozbiljan razgovor sa investitorom, razvojnim partnerom ili profesionalnim saradnikom.",
      "Investitor razmišlja šire. Njega zanima kako se lokacija uklapa u okolinu, kakav je pristup, šta može biti budući proizvod, kako lokaciju može razumeti krajnji kupac i da li postoji jasan tok za dalje korake.",
      "Drugim rečima, investitor ne kupuje samo zemljište. On razmatra mogućnost, rizik, vreme, dokumentaciju, tržišni potencijal i komunikacioni okvir.",
    ],
    visual: "ad",
  },
  {
    id: "od-oglasa-do-argumenta",
    title: "2. Od oglasa do investitorskog argumenta",
    body: [
      "Investitorski argument nije isto što i reklama. Reklama pokušava da privuče pažnju. Investitorski argument pokušava da objasni zašto lokacija zaslužuje ozbiljniji razgovor.",
      "Kod lokacije kao što je Calije Park Residence, argument se ne gradi samo jednom rečenicom. On se gradi kroz više slojeva.",
    ],
    bullets: [
      "javni opis lokacije",
      "video uvod",
      "višejezični sadržaj",
      "objašnjenje karaktera okruženja",
      "jasan kontakt i kvalifikacioni tok",
      "odvajanje javnog i zatvorenog sadržaja",
      "zatvoreni Investor Brief za ozbiljne sagovornike",
    ],
  },
  {
    id: "digitalni-investitorski-gateway",
    title: "3. Šta je digitalni investitorski gateway",
    body: [
      "Digitalni investitorski gateway je javni ulazni sloj za ozbiljniji razgovor o lokaciji. To nije samo landing stranica i nije samo online brošura.",
      "Kod Calije Park Residence, javni gateway funkcioniše kao prvi sloj. On ne otkriva sve detalje i ne ulazi u pregovaračke elemente. Umesto toga, prikazuje lokaciju, video, osnovni narativ, kontakt i mogućnost zahteva za dodatnim informacijama.",
      "To je važno zato što javni sajt ne treba da bude mesto za sve osetljive informacije. Njegov zadatak je da otvori vrata, a ne da zameni zatvoreni poslovni razgovor.",
    ],
    bullets: [
      "predstavi lokaciju",
      "objasni njen karakter",
      "pokaže prvi vizuelni kontekst",
      "razdvoji javne informacije od privatnih",
      "usmeri ozbiljne kontakte ka kvalifikovanom razgovoru",
      "pokaže da iza lokacije postoji strukturisan pristup",
    ],
    visual: "gateway",
  },
  {
    id: "calije-park-residence-case-study",
    title: "4. Calije Park Residence kao case study",
    body: [
      "Calije Park Residence je lokacija u zoni Čalije / Pantelej / Niš. Umesto da bude predstavljena samo kroz oglas, projekat je postavljen kao javni gateway sa jasnim poslovnim slojem.",
      "Cilj nije da javni sajt zameni dokumentaciju, pravnu proveru ili pregovore. Cilj je da napravi prvi ozbiljan okvir: gde je lokacija, zašto je zanimljiva, kakav je njen rezidencijalni karakter, kako se može razumeti kroz budući proizvod i zašto investitor treba da uđe u kvalifikovan razgovor.",
      "Ovaj case study je važan i za DaniniNet, jer pokazuje kako digitalni marketing, nekretnine i investitorska komunikacija mogu raditi zajedno.",
    ],
  },
  {
    id: "public-gateway-private-brief",
    title: "5. Public Gateway vs. Private Investor Brief",
    body: [
      "Jedna od najvažnijih odluka u ovom modelu jeste razdvajanje javnog i privatnog sloja.",
      "Javni sloj treba da bude dostupan svima. On prikazuje lokaciju, osnovni kontekst, video uvod, karakter okruženja, razlog za interesovanje i kontakt putanju.",
      "Zatvoreni Investor Brief ne treba da bude običan javni PDF. On je namenjen kvalifikovanom razgovoru sa ozbiljnim investitorima, razvojnim partnerima ili profesionalnim saradnicima.",
      "Ovakvo razdvajanje štiti projekat od toga da se osetljive informacije nepotrebno rasipaju javno, a istovremeno omogućava ozbiljnim kontaktima da dobiju dublji uvid.",
    ],
    bullets: [
      "Javni gateway gradi interesovanje.",
      "Zatvoreni Brief otvara detalje.",
      "Privatni materijali se ne objavljuju javno.",
    ],
    visual: "gateway",
  },
  {
    id: "zasto-video",
    title: "6. Zašto video ima važnu ulogu",
    body: [
      "Kod lokacije nije dovoljna samo mapa. Ljudi bolje razumeju prostor kada ga vide.",
      "Video uvod pomaže da se prikažu ambijent, pristup, osećaj lokacije, mirniji rezidencijalni ritam, prvi vizuelni utisak i emocija buduće adrese.",
      "Investitor ne razmišlja samo o parceli. On razmišlja o budućem kupcu. A budući kupac ne kupuje samo kvadrate — kupuje ritam života, svetlo, pristup, osećaj doma i vrednost adrese.",
      "Zato video nije dekoracija. On je deo investitorskog argumenta.",
    ],
    visual: "video",
  },
  {
    id: "visejezicni-sadrzaj",
    title: "7. Višejezični sadržaj kao signal ozbiljnosti",
    body: [
      "Calije Park Residence je postavljen kroz višejezični okvir. To je važno jer projekat ne cilja samo lokalnu publiku, već i širi krug potencijalnih partnera, investitora i saradnika.",
      "Višejezični sajt ne znači samo prevod. On pokazuje da je lokacija pripremljena za ozbiljniju komunikaciju.",
      "Takav pristup ne obećava ishod. On gradi poverenje kroz strukturu.",
    ],
    bullets: [
      "jasan javni sloj",
      "razumljiv poslovni kontekst",
      "oprezan pravni i informativni ton",
      "jasno odvojeni zatvoreni Brief",
      "napomena da se sve mora proveriti kroz lokalne stručnjake",
    ],
    visual: "due",
  },
  {
    id: "seo-i-deljenje",
    title: "8. SEO i deljenje kao deo infrastrukture",
    body: [
      "Ako lokacija ima ozbiljan javni gateway, onda SEO nije sporedna stvar. SEO pomaže da projekat bude razumljiv ne samo ljudima, već i platformama, pretraživačima i društvenim mrežama.",
      "Social sharing nije samo dugme za deljenje. On je deo distribucije. Kada neko pošalje link investitoru, agentu ili saradniku, sajt mora odmah da objasni zašto link vredi otvoriti.",
    ],
    bullets: [
      "jasan naslov stranice",
      "meta description",
      "Open Graph preview",
      "slika za deljenje",
      "sitemap i robots pravila",
      "višejezične canonical i alternate rute",
      "tekst koji objašnjava lokaciju bez preteranih tvrdnji",
    ],
  },
  {
    id: "pregovaracki-detalji",
    title: "9. Zašto se pregovarački detalji ne objavljuju javno",
    body: [
      "Jedna česta greška u promociji lokacija jeste prerano iznošenje detalja koji pripadaju privatnom razgovoru.",
      "Takve informacije ne treba da budu materijal za komentare na društvenim mrežama. One pripadaju zatvorenom razgovoru, gde postoji kontekst, ozbiljnost i mogućnost provere.",
      "Zato Calije Park Residence koristi princip javnog gateway-a i zatvorenog Brief-a. Javno se prikazuje ono što gradi interesovanje i poverenje. Privatno se otvara ono što pripada ozbiljnom procesu.",
    ],
    bullets: [
      "pregovarački uslovi",
      "procenti i avansi",
      "ugovorni modeli",
      "privatna dokumentacija",
      "direktni PDF linkovi",
      "osetljivi poslovni detalji",
    ],
    visual: "case",
  },
  {
    id: "sta-vlasnici-mogu-nauciti",
    title: "10. Šta vlasnici lokacija mogu naučiti iz ovog primera",
    body: [
      "Calije Park Residence nije samo pojedinačan projekat. On je i primer metode.",
      "Vlasnici parcela, stanova, objekata ili lokacija mogu iz ovog primera izvući nekoliko važnih lekcija.",
      "Drugim rečima, lokacija ne mora ostati pasivan oglas. Može postati strukturisan komunikacioni sistem.",
    ],
    bullets: [
      "Lokacija se ne prodaje samo informacijom, već argumentom.",
      "Investitor mora razumeti širi kontekst, ne samo površinu.",
      "Video može pomoći da lokacija dobije osećaj i priču.",
      "Javni sadržaj i privatni sadržaj treba jasno razdvojiti.",
      "Zatvoreni Brief povećava ozbiljnost komunikacije.",
      "Višejezični pristup otvara prostor za širu publiku.",
      "Digitalni gateway može postati osnova za buduću prodajnu infrastrukturu.",
    ],
  },
  {
    id: "agenti-i-digitalni-marketari",
    title: "11. Šta agenti i digitalni marketari mogu naučiti",
    body: [
      "Za agente i digitalne marketare, Calije Park Residence pokazuje da prodaja lokacije ne mora biti ograničena na portale i oglase.",
      "Moguće je napraviti sloj koji kombinuje SEO, video, landing stranicu, lead formu, social sharing, zatvoreni Brief, email komunikaciju, kvalifikaciju kontakata i kasniju prodajnu infrastrukturu.",
      "To je ozbiljniji pristup od običnog 'postavi oglas i čekaj'. Posebno je važno što ovakav model ne zavisi samo od jedne platforme. Sajt postaje centralna tačka, a društvene mreže služe kao kanali za privlačenje pažnje.",
    ],
  },
  {
    id: "danininet-case-study",
    title: "12. Calije Park Residence kao DaniniNet case study",
    body: [
      "Za DaniniNet, ovaj projekat je važan jer pokazuje kako digitalni marketing, nekretnine i investitorska komunikacija mogu raditi zajedno.",
      "Calije Park Residence nije samo promocija jedne lokacije. To je case study za model: Digitalna prodaja lokacije.",
      "Model se može primeniti na građevinske parcele, stanove, objekte, turističke lokacije, poslovne prostore, investitorske projekte i lokalne razvojne prilike. Cilj nije stvaranje generičkog oglasa. Cilj je stvaranje sistema koji lokaciji daje jasniju tržišnu poziciju.",
    ],
  },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const url = `https://danininet.daninihub.com/${lang}/blog/${slug}`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: url },
    openGraph: {
      title: "Kako se lokacija pretvara u investitorski argument",
      description:
        "Calije Park Residence pokazuje kako se lokacija u Nišu može predstaviti kroz javni gateway, video, višejezični sadržaj i zatvoreni Investor Brief za kvalifikovan razgovor.",
      type: "article",
      url,
    },
  };
}

function ArticleVisual({ type }: { type: NonNullable<Section["visual"]> }) {
  const title = {
    hero: "Kako se lokacija pretvara u investitorski argument",
    ad: "Običan oglas nije isto što i investitorski argument",
    gateway: "Javni gateway / zatvoreni Investor Brief",
    video: "Video nije dekoracija",
    due: "Due diligence mapa za strane investitore",
    case: "Calije Park Residence kao DaniniNet case study",
  }[type];
  const labels = {
    hero: ["Javni gateway", "Video uvod", "Zatvoreni Brief", "SEO sloj", "Kvalifikacija", "Case study"],
    ad: ["Površina", "Cena", "Kontakt", "Kontekst", "Video", "Brief"],
    gateway: ["Lokacija", "Priča", "Video", "Dokumentacija", "Due diligence", "Razgovor"],
    video: ["Ambijent", "Pristup", "Ritam života", "Prvi utisak", "Budući kupac", "Adresa"],
    due: ["Katastar", "Urbanizam", "Pravo", "Porezi", "Infrastruktura", "Lokalni tim"],
    case: ["Gateway", "SEO", "Video", "Lead forma", "Brief", "Distribucija"],
  }[type];

  return (
    <figure className="my-10 overflow-hidden rounded-[2rem] border border-[#d7b46a]/25 bg-[#07142b] p-6 text-white shadow-[0_24px_70px_rgba(7,20,43,0.18)]">
      <div className="relative min-h-[260px] rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_85%_5%,rgba(215,180,106,0.16),transparent_30%),linear-gradient(135deg,#05070a,#07142b)] p-7">
        <p className="text-xs uppercase tracking-[0.24em] text-[#d7b46a]">Calije Park Residence</p>
        <h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {labels.map((label) => (
            <span key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-slate-300">
              {label}
            </span>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-sm leading-6 text-slate-300">
        Calije Park Residence — javni gateway koji lokaciju predstavlja kao investitorski argument, a ne kao običan oglas.
      </figcaption>
    </figure>
  );
}

function JsonLd({ lang }: { lang: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Kako se lokacija pretvara u investitorski argument: Calije Park Residence case study",
    description: seo.description,
    author: { "@type": "Person", name: "Dragan Zdravkovic" },
    publisher: { "@type": "Organization", name: "DaniniNet" },
    mainEntityOfPage: `https://danininet.daninihub.com/${lang}/blog/${slug}`,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default async function CalijeEvergreenArticlePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);

  return (
    <SiteShell locale={lang} currentPath={`/${lang}/blog/${slug}`}>
      <JsonLd lang={lang} />
      <article className="bg-[#f4efe5] text-[#15130f]">
        <header className="bg-[#07142b] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <p className="text-sm uppercase tracking-[0.24em] text-[#d7b46a]">Calije Park Residence · DaniniNet case study</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
              Kako se lokacija pretvara u investitorski argument: Calije Park Residence case study
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              Calije Park Residence pokazuje kako se građevinska lokacija u Nišu može predstaviti kroz javni gateway, video uvod, višejezični sadržaj i zatvoreni Investor Brief — kao investitorski argument, a ne običan oglas.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-white/10 px-4 py-2">Digitalna prodaja lokacije</span>
              <span className="rounded-full border border-white/10 px-4 py-2">Investitorski gateway</span>
              <span className="rounded-full border border-white/10 px-4 py-2">Niš · Pantelej · Čalije</span>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[0.72fr_0.28fr]">
          <main className="min-w-0">
            <ArticleVisual type="hero" />
            <section className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
              <p className="text-xl leading-9 text-[#3c372f]">
                Većina lokacija za prodaju predstavlja se na isti način: površina, lokacija, cena i kontakt. Takav oglas može biti dovoljan za osnovnu informaciju, ali često nije dovoljan za ozbiljan investitorski razgovor.
              </p>
              <p className="mt-5 text-xl leading-9 text-[#3c372f]">
                Investitor ne traži samo parcelu. On traži kontekst, potencijal, rizike, razvojnu logiku, tržišni signal i jasan sledeći korak. Ako lokacija ostane predstavljena samo kroz nekoliko tehničkih podataka, ona često ostaje nedovoljno objašnjena.
              </p>
              <p className="mt-5 text-xl leading-9 text-[#3c372f]">
                Upravo iz tog razloga nastao je Calije Park Residence — kao primer kako se jedna lokacija u Nišu može predstaviti ne samo kao zemljište, već kao strukturisan investitorski argument.
              </p>
              <Link href="https://calije.daninihub.com/sr" className="mt-8 inline-flex rounded-full bg-[#07142b] px-6 py-3 text-sm font-semibold text-white">
                Pogledaj javni gateway projekta
              </Link>
            </section>

            {sections.map((section) => (
              <section key={section.id} id={section.id} className="mt-10 rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm scroll-mt-28">
                {section.visual ? <ArticleVisual type={section.visual} /> : null}
                <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{section.title}</h2>
                <div className="mt-6 space-y-5 text-lg leading-9 text-[#4f493f]">
                  {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                {section.bullets ? (
                  <ul className="mt-7 grid gap-3 md:grid-cols-2">
                    {section.bullets.map((item) => (
                      <li key={item} className="rounded-2xl bg-[#fffaf1] px-5 py-4 leading-7 text-[#5f594f]">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="mt-10 rounded-[2rem] bg-[#07142b] p-8 text-white shadow-[0_24px_70px_rgba(7,20,43,0.18)]">
              <h2 className="text-4xl font-semibold">13. Zaključak</h2>
              <p className="mt-6 text-lg leading-9 text-slate-300">
                Calije Park Residence pokazuje da lokacija može biti predstavljena drugačije: ne samo kao parcela, ne samo kao oglas i ne samo kao površina i kontakt, već kao investitorski argument sa javnim gateway-em, video uvodom, višejezičnim sadržajem, zatvorenim Brief-om i kvalifikovanim razgovorom.
              </p>
              <p className="mt-5 text-lg leading-9 text-slate-300">
                To ne garantuje ishod. Ne zamenjuje pravnu, tehničku, urbanističku ili finansijsku proveru. Ali podiže nivo komunikacije i otvara ozbiljniji put ka razgovoru.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="https://calije.daninihub.com/sr" className="rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">
                  Otvori Calije Park Residence
                </Link>
                <Link href={localizedPath(lang, "dpl")} className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white">
                  Digitalna prodaja lokacije
                </Link>
              </div>
            </section>
          </main>

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">Sadržaj</p>
              <nav className="mt-5 grid gap-3 text-sm leading-6 text-[#5f594f]">
                {sections.slice(0, 9).map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="rounded-xl bg-[#fffaf1] px-4 py-3 hover:bg-[#f1e7d8]">
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
            <div className="mt-6 rounded-[2rem] bg-[#07142b] p-6 text-white shadow-sm">
              <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">Javna granica</p>
              <p className="mt-4 leading-7 text-slate-300">
                Privatni Brief, token link i direktan PDF link ne objavljuju se javno. Zatvoreni materijal se šalje samo kvalifikovanom kontaktu na zahtev.
              </p>
            </div>
          </aside>
        </div>
      </article>
    </SiteShell>
  );
}
