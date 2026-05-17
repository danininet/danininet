import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";
type VisualType = "hero" | "ad" | "gateway" | "video" | "due" | "case";

type Section = {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
  visual?: VisualType;
};

type ArticleCopy = {
  seoTitle: string;
  seoDescription: string;
  ogTitle: string;
  ogDescription: string;
  label: string;
  h1: string;
  intro: string;
  tags: string[];
  openGateway: string;
  productCta: string;
  lead: string[];
  sections: Section[];
  conclusionTitle: string;
  conclusion: string[];
  toc: string;
  publicBoundary: string;
  publicBoundaryText: string;
  visualCaption: string;
  visuals: Record<VisualType, { title: string; labels: string[] }>;
};

const slug = "kako-se-lokacija-pretvara-u-investitorski-argument";

const article: Record<Locale, ArticleCopy> = {
  sr: {
    seoTitle: "Kako se lokacija pretvara u investitorski argument | Calije Park Residence",
    seoDescription: "Calije Park Residence case study: kako se lokacija u Nišu predstavlja kroz javni gateway, video uvod, višejezični sadržaj i zatvoreni Investor Brief.",
    ogTitle: "Kako se lokacija pretvara u investitorski argument",
    ogDescription: "Calije Park Residence pokazuje kako se lokacija u Nišu može predstaviti kroz javni gateway, video, višejezični sadržaj i zatvoreni Investor Brief za kvalifikovan razgovor.",
    label: "Calije Park Residence · DaniniNet case study",
    h1: "Kako se lokacija pretvara u investitorski argument: Calije Park Residence case study",
    intro: "Calije Park Residence pokazuje kako se građevinska lokacija u Nišu može predstaviti kroz javni gateway, video uvod, višejezični sadržaj i zatvoreni Investor Brief — kao investitorski argument, a ne običan oglas.",
    tags: ["Digitalna prodaja lokacije", "Investitorski gateway", "Niš · Pantelej · Čalije"],
    openGateway: "Pogledaj javni gateway projekta",
    productCta: "Digitalna prodaja lokacije",
    lead: [
      "Većina lokacija za prodaju predstavlja se na isti način: površina, lokacija, cena i kontakt. Takav oglas može biti dovoljan za osnovnu informaciju, ali često nije dovoljan za ozbiljan investitorski razgovor.",
      "Investitor ne traži samo parcelu. On traži kontekst, potencijal, rizike, razvojnu logiku, tržišni signal i jasan sledeći korak.",
      "Upravo iz tog razloga nastao je Calije Park Residence — kao primer kako se jedna lokacija u Nišu može predstaviti ne samo kao zemljište, već kao strukturisan investitorski argument.",
    ],
    sections: [
      {
        id: "zasto-oglas-nije-dovoljan",
        title: "1. Zašto običan oglas nije dovoljan",
        body: [
          "Klasičan oglas za parcelu najčešće odgovara na nekoliko osnovnih pitanja: gde se lokacija nalazi, kolika je površina, koja je okvirna cena i kome se treba javiti.",
          "To jeste početak, ali nije dovoljno ako se želi ozbiljan razgovor sa investitorom, razvojnim partnerom ili profesionalnim saradnikom.",
          "Investitor razmatra mogućnost, rizik, vreme, dokumentaciju, tržišni potencijal i komunikacioni okvir.",
        ],
        visual: "ad",
      },
      {
        id: "od-oglasa-do-argumenta",
        title: "2. Od oglasa do investitorskog argumenta",
        body: [
          "Investitorski argument nije isto što i reklama. Reklama pokušava da privuče pažnju. Investitorski argument pokušava da objasni zašto lokacija zaslužuje ozbiljniji razgovor.",
          "Kod lokacije kao što je Calije Park Residence, argument se ne gradi jednom rečenicom, već kroz više povezanih slojeva.",
        ],
        bullets: ["javni opis lokacije", "video uvod", "višejezični sadržaj", "karakter okruženja", "kvalifikacioni tok", "zatvoreni Investor Brief"],
      },
      {
        id: "digitalni-investitorski-gateway",
        title: "3. Šta je digitalni investitorski gateway",
        body: [
          "Digitalni investitorski gateway je javni ulazni sloj za ozbiljniji razgovor o lokaciji. To nije samo landing stranica i nije samo online brošura.",
          "Njegov zadatak je da prikaže lokaciju, osnovni narativ, video, kontakt i mogućnost zahteva za dodatnim informacijama, bez otkrivanja privatnih pregovaračkih detalja.",
          "Javni sajt otvara vrata; zatvoreni poslovni razgovor i Investor Brief nose dublje informacije.",
        ],
        bullets: ["predstavi lokaciju", "objasni karakter", "pokaže vizuelni kontekst", "razdvoji javno i privatno", "usmeri ozbiljne kontakte", "pokaže strukturisan pristup"],
        visual: "gateway",
      },
      {
        id: "calije-park-residence-case-study",
        title: "4. Calije Park Residence kao case study",
        body: [
          "Calije Park Residence je lokacija u zoni Čalije / Pantelej / Niš. Umesto da bude predstavljena samo kroz oglas, projekat je postavljen kao javni gateway sa jasnim poslovnim slojem.",
          "Cilj nije da javni sajt zameni dokumentaciju, pravnu proveru ili pregovore. Cilj je da napravi prvi ozbiljan okvir za kvalifikovan razgovor.",
          "Ovaj case study je važan za DaniniNet jer pokazuje kako digitalni marketing, nekretnine i investitorska komunikacija mogu raditi zajedno.",
        ],
      },
      {
        id: "public-gateway-private-brief",
        title: "5. Public Gateway vs. Private Investor Brief",
        body: [
          "Jedna od najvažnijih odluka u ovom modelu jeste razdvajanje javnog i privatnog sloja.",
          "Javni sloj prikazuje lokaciju, osnovni kontekst, video uvod, karakter okruženja i kontakt putanju. Zatvoreni Investor Brief je namenjen kvalifikovanom razgovoru sa ozbiljnim investitorima, partnerima ili saradnicima.",
          "Ovakvo razdvajanje štiti projekat od nepotrebnog javnog rasipanja osetljivih informacija.",
        ],
        bullets: ["Javni gateway gradi interesovanje.", "Zatvoreni Brief otvara detalje.", "Privatni materijali se ne objavljuju javno."],
        visual: "gateway",
      },
      {
        id: "zasto-video",
        title: "6. Zašto video ima važnu ulogu",
        body: [
          "Kod lokacije nije dovoljna samo mapa. Ljudi bolje razumeju prostor kada ga vide.",
          "Video uvod pomaže da se prikažu ambijent, pristup, osećaj lokacije, mirniji rezidencijalni ritam, prvi vizuelni utisak i emocija buduće adrese.",
          "Video nije dekoracija. On je deo investitorskog argumenta.",
        ],
        visual: "video",
      },
      {
        id: "visejezicni-sadrzaj",
        title: "7. Višejezični sadržaj kao signal ozbiljnosti",
        body: [
          "Calije Park Residence je postavljen kroz višejezični okvir zato što projekat ne cilja samo lokalnu publiku, već i širi krug potencijalnih partnera, investitora i saradnika.",
          "Višejezični sajt ne znači samo prevod. On pokazuje da je lokacija pripremljena za ozbiljniju komunikaciju.",
          "Takav pristup ne obećava ishod, ali gradi poverenje kroz strukturu.",
        ],
        bullets: ["jasan javni sloj", "razumljiv poslovni kontekst", "oprezan pravni ton", "zatvoreni Brief", "lokalne stručne provere"],
        visual: "due",
      },
      {
        id: "seo-i-deljenje",
        title: "8. SEO i deljenje kao deo infrastrukture",
        body: [
          "Ako lokacija ima ozbiljan javni gateway, SEO nije sporedna stvar. SEO pomaže da projekat bude razumljiv ljudima, platformama, pretraživačima i društvenim mrežama.",
          "Kada neko pošalje link investitoru, agentu ili saradniku, stranica mora brzo da objasni zašto link vredi otvoriti.",
        ],
        bullets: ["jasan naslov", "meta description", "Open Graph preview", "slika za deljenje", "sitemap", "višejezične rute", "oprezan javni tekst"],
      },
      {
        id: "pregovaracki-detalji",
        title: "9. Zašto se pregovarački detalji ne objavljuju javno",
        body: [
          "Jedna česta greška u promociji lokacija jeste prerano iznošenje detalja koji pripadaju privatnom razgovoru.",
          "Pregovarački uslovi, procenti, ugovorni modeli i privatna dokumentacija ne treba da budu materijal za javne komentare.",
          "Javno se prikazuje ono što gradi interesovanje i poverenje. Privatno se otvara ono što pripada ozbiljnom procesu.",
        ],
        bullets: ["pregovarački uslovi", "procenti i avansi", "ugovorni modeli", "privatna dokumentacija", "direktni PDF linkovi", "osetljivi poslovni detalji"],
        visual: "case",
      },
      {
        id: "sta-vlasnici-mogu-nauciti",
        title: "10. Šta vlasnici lokacija mogu naučiti",
        body: [
          "Calije Park Residence nije samo pojedinačan projekat. On je i primer metode.",
          "Vlasnici parcela, stanova, objekata ili lokacija mogu iz ovog primera videti da lokacija ne mora ostati pasivan oglas. Može postati strukturisan komunikacioni sistem.",
        ],
        bullets: ["Lokacija se ne prodaje samo informacijom, već argumentom.", "Investitor mora razumeti širi kontekst.", "Video može dati osećaj prostora.", "Javno i privatno treba razdvojiti.", "Zatvoreni Brief povećava ozbiljnost komunikacije.", "Višejezični pristup otvara širu publiku."],
      },
      {
        id: "agenti-i-digitalni-marketari",
        title: "11. Šta agenti i digitalni marketari mogu naučiti",
        body: [
          "Za agente i digitalne marketare, Calije Park Residence pokazuje da prodaja lokacije ne mora biti ograničena na portale i oglase.",
          "Moguće je napraviti sloj koji kombinuje SEO, video, landing stranicu, lead formu, social sharing, zatvoreni Brief, email komunikaciju i kvalifikaciju kontakata.",
          "Sajt postaje centralna tačka, a društvene mreže služe kao kanali za privlačenje pažnje.",
        ],
      },
      {
        id: "danininet-case-study",
        title: "12. Calije Park Residence kao DaniniNet case study",
        body: [
          "Za DaniniNet, ovaj projekat pokazuje kako digitalni marketing, nekretnine i investitorska komunikacija mogu raditi zajedno.",
          "Calije Park Residence je case study za model Digitalna prodaja lokacije.",
          "Cilj nije stvaranje generičkog oglasa, već sistema koji lokaciji daje jasniju tržišnu poziciju.",
        ],
      },
    ],
    conclusionTitle: "13. Zaključak",
    conclusion: [
      "Calije Park Residence pokazuje da lokacija može biti predstavljena kao investitorski argument sa javnim gateway-em, video uvodom, višejezičnim sadržajem, zatvorenim Brief-om i kvalifikovanim razgovorom.",
      "To ne garantuje ishod i ne zamenjuje pravnu, tehničku, urbanističku ili finansijsku proveru. Ali podiže nivo komunikacije i otvara ozbiljniji put ka razgovoru.",
    ],
    toc: "Sadržaj",
    publicBoundary: "Javna granica",
    publicBoundaryText: "Privatni Brief, token link i direktan PDF link ne objavljuju se javno. Zatvoreni materijal se šalje samo kvalifikovanom kontaktu na zahtev.",
    visualCaption: "Calije Park Residence — javni gateway koji lokaciju predstavlja kao investitorski argument, a ne kao običan oglas.",
    visuals: {
      hero: { title: "Kako se lokacija pretvara u investitorski argument", labels: ["Javni gateway", "Video uvod", "Zatvoreni Brief", "SEO sloj", "Kvalifikacija", "Case study"] },
      ad: { title: "Običan oglas nije isto što i investitorski argument", labels: ["Površina", "Cena", "Kontakt", "Kontekst", "Video", "Brief"] },
      gateway: { title: "Javni gateway / zatvoreni Investor Brief", labels: ["Lokacija", "Priča", "Video", "Dokumentacija", "Due diligence", "Razgovor"] },
      video: { title: "Video nije dekoracija", labels: ["Ambijent", "Pristup", "Ritam života", "Prvi utisak", "Budući kupac", "Adresa"] },
      due: { title: "Due diligence mapa za strane investitore", labels: ["Katastar", "Urbanizam", "Pravo", "Porezi", "Infrastruktura", "Lokalni tim"] },
      case: { title: "Calije Park Residence kao DaniniNet case study", labels: ["Gateway", "SEO", "Video", "Lead forma", "Brief", "Distribucija"] },
    },
  },
  de: {
    seoTitle: "Wie ein Standort zum Investorenargument wird | Calije Park Residence",
    seoDescription: "Calije Park Residence als Case Study: Wie ein Standort in Niš über öffentlichen Gateway, Video, mehrsprachige Inhalte und geschlossenen Investor Brief professioneller präsentiert wird.",
    ogTitle: "Wie ein Standort zum Investorenargument wird",
    ogDescription: "Calije Park Residence zeigt, wie ein Standort in Niš über öffentlichen Gateway, Video, mehrsprachige Inhalte und geschlossenen Investor Brief für einen qualifizierten Dialog präsentiert werden kann.",
    label: "Calije Park Residence · DaniniNet Case Study",
    h1: "Wie ein Standort zum Investorenargument wird: Calije Park Residence Case Study",
    intro: "Calije Park Residence zeigt, wie ein Entwicklungsstandort in Niš über einen öffentlichen Gateway, Videoeinführung, mehrsprachige Inhalte und einen geschlossenen Investor Brief präsentiert werden kann — als Investorenargument, nicht als einfache Anzeige.",
    tags: ["Digitaler Verkauf von Standorten", "Investor Gateway", "Niš · Pantelej · Čalije"],
    openGateway: "Öffentlichen Projekt-Gateway ansehen",
    productCta: "Digitaler Verkauf von Standorten",
    lead: [
      "Die meisten Standorte werden sehr ähnlich präsentiert: Fläche, Lage, Preis und Kontakt. Das reicht für eine erste Information, aber oft nicht für ein ernsthaftes Investoren- oder Partnergespräch.",
      "Ein Investor sucht nicht nur ein Grundstück. Er prüft Kontext, Potenzial, Risiken, Entwicklungslogik, Marktsignal und den nächsten sinnvollen Schritt.",
      "Aus diesem Grund wurde Calije Park Residence als Beispiel aufgebaut: ein Standort in Niš wird nicht nur als Grundstück, sondern als strukturiertes Investorenargument dargestellt.",
    ],
    sections: [
      {
        id: "zasto-oglas-nije-dovoljan",
        title: "1. Warum eine einfache Anzeige nicht ausreicht",
        body: [
          "Eine klassische Anzeige für ein Grundstück beantwortet meist nur Grundfragen: Wo liegt der Standort, wie groß ist die Fläche, welcher Preis wird erwartet und wer ist zu kontaktieren.",
          "Das ist ein Anfang. Für ein ernsthaftes Gespräch mit Investoren, Entwicklungspartnern oder professionellen Vermittlern reicht es jedoch oft nicht.",
          "Ein Investor betrachtet Möglichkeit, Risiko, Zeit, Dokumentation, Marktpotenzial und die Kommunikationsstruktur.",
        ],
        visual: "ad",
      },
      {
        id: "od-oglasa-do-argumenta",
        title: "2. Von der Anzeige zum Investorenargument",
        body: [
          "Ein Investorenargument ist keine Werbung. Werbung zieht Aufmerksamkeit an. Ein Investorenargument erklärt, warum ein Standort ein ernsthafteres Gespräch verdient.",
          "Bei einem Standort wie Calije Park Residence entsteht dieses Argument nicht durch einen Satz, sondern durch mehrere miteinander verbundene Ebenen.",
        ],
        bullets: ["öffentliche Standortbeschreibung", "Videoeinführung", "mehrsprachige Inhalte", "Charakter der Umgebung", "Qualifizierungsprozess", "geschlossener Investor Brief"],
      },
      {
        id: "digitalni-investitorski-gateway",
        title: "3. Was ein digitaler Investor Gateway ist",
        body: [
          "Ein digitaler Investor Gateway ist die öffentliche Eingangsebene für ein ernsthafteres Gespräch über einen Standort. Er ist nicht nur eine Landingpage und nicht nur eine Online-Broschüre.",
          "Er zeigt Standort, Grundnarrativ, Video, Kontakt und die Möglichkeit, weitere Informationen anzufordern — ohne private Verhandlungsdetails offenzulegen.",
          "Die öffentliche Website öffnet die Tür; der geschlossene Geschäftsprozess und der Investor Brief liefern die tieferen Informationen.",
        ],
        bullets: ["Standort präsentieren", "Charakter erklären", "visuellen Kontext zeigen", "öffentlich und privat trennen", "ernsthafte Kontakte führen", "strukturierten Ansatz zeigen"],
        visual: "gateway",
      },
      {
        id: "calije-park-residence-case-study",
        title: "4. Calije Park Residence als Case Study",
        body: [
          "Calije Park Residence ist ein Standort im Bereich Čalije / Pantelej / Niš. Statt nur als Anzeige wurde das Projekt als öffentlicher Gateway mit klarer Business-Ebene aufgebaut.",
          "Die öffentliche Seite ersetzt keine Dokumentation, rechtliche Prüfung oder Verhandlung. Sie schafft den ersten seriösen Rahmen für einen qualifizierten Dialog.",
          "Diese Case Study ist für DaniniNet wichtig, weil sie zeigt, wie digitales Marketing, Immobilien und Investorenkommunikation zusammenarbeiten können.",
        ],
      },
      {
        id: "public-gateway-private-brief",
        title: "5. Public Gateway vs. Private Investor Brief",
        body: [
          "Eine der wichtigsten Entscheidungen in diesem Modell ist die klare Trennung zwischen öffentlicher und privater Ebene.",
          "Die öffentliche Ebene zeigt Standort, Grundkontext, Video, Umgebung und Kontaktpfad. Der geschlossene Investor Brief ist für qualifizierte Gespräche mit ernsthaften Investoren, Partnern oder Fachkontakten gedacht.",
          "Diese Trennung schützt das Projekt davor, sensible Informationen unnötig öffentlich zu streuen.",
        ],
        bullets: ["Der öffentliche Gateway baut Interesse auf.", "Der geschlossene Brief öffnet Details.", "Private Materialien werden nicht öffentlich veröffentlicht."],
        visual: "gateway",
      },
      {
        id: "zasto-video",
        title: "6. Warum Video eine wichtige Rolle spielt",
        body: [
          "Bei einem Standort reicht eine Karte allein oft nicht aus. Menschen verstehen Raum besser, wenn sie ihn sehen.",
          "Eine Videoeinführung zeigt Atmosphäre, Zugang, Standortgefühl, ruhigeren Wohnrhythmus, den ersten visuellen Eindruck und die emotionale Qualität einer künftigen Adresse.",
          "Video ist keine Dekoration. Es ist Teil des Investorenarguments.",
        ],
        visual: "video",
      },
      {
        id: "visejezicni-sadrzaj",
        title: "7. Mehrsprachige Inhalte als Seriositätssignal",
        body: [
          "Calije Park Residence wurde mehrsprachig aufgebaut, weil das Projekt nicht nur ein lokales Publikum, sondern auch einen breiteren Kreis potenzieller Partner, Investoren und Fachkontakte anspricht.",
          "Eine mehrsprachige Website ist nicht nur Übersetzung. Sie zeigt, dass der Standort für eine ernsthaftere Kommunikation vorbereitet ist.",
          "Dieser Ansatz verspricht kein Ergebnis, baut aber Vertrauen durch Struktur auf.",
        ],
        bullets: ["klare öffentliche Ebene", "verständlicher Business-Kontext", "vorsichtiger rechtlicher Ton", "geschlossener Brief", "lokale Fachprüfungen"],
        visual: "due",
      },
      {
        id: "seo-i-deljenje",
        title: "8. SEO und Teilen als Infrastruktur",
        body: [
          "Wenn ein Standort einen seriösen öffentlichen Gateway hat, ist SEO keine Nebensache. SEO hilft, dass das Projekt für Menschen, Plattformen, Suchmaschinen und soziale Netzwerke verständlich wird.",
          "Wenn jemand den Link an einen Investor, Makler oder Partner sendet, muss die Seite schnell erklären, warum sich das Öffnen lohnt.",
        ],
        bullets: ["klarer Seitentitel", "Meta Description", "Open Graph Preview", "Sharing-Bild", "Sitemap", "mehrsprachige Routen", "vorsichtiger öffentlicher Text"],
      },
      {
        id: "pregovaracki-detalji",
        title: "9. Warum Verhandlungsdetails nicht öffentlich gehören",
        body: [
          "Ein häufiger Fehler bei der Standortvermarktung ist die zu frühe Veröffentlichung von Details, die in ein privates Gespräch gehören.",
          "Verhandlungsbedingungen, Prozentsätze, Vertragsmodelle und private Dokumentation sollten kein Material für öffentliche Kommentare sein.",
          "Öffentlich wird gezeigt, was Interesse und Vertrauen aufbaut. Privat wird geöffnet, was in einen seriösen Prozess gehört.",
        ],
        bullets: ["Verhandlungsbedingungen", "Prozentsätze und Anzahlungen", "Vertragsmodelle", "private Dokumentation", "direkte PDF-Links", "sensible Geschäftsdetails"],
        visual: "case",
      },
      {
        id: "sta-vlasnici-mogu-nauciti",
        title: "10. Was Eigentümer aus diesem Beispiel lernen können",
        body: [
          "Calije Park Residence ist nicht nur ein einzelnes Projekt. Es ist ein Beispiel für eine Methode.",
          "Eigentümer von Grundstücken, Wohnungen, Objekten oder Standorten können erkennen, dass ein Standort nicht als passive Anzeige stehen bleiben muss. Er kann zu einem strukturierten Kommunikationssystem werden.",
        ],
        bullets: ["Ein Standort wird nicht nur mit Information verkauft, sondern mit Argumentation.", "Investoren brauchen breiteren Kontext.", "Video kann Raumgefühl vermitteln.", "Öffentlich und privat müssen getrennt werden.", "Ein geschlossener Brief erhöht die Seriosität.", "Mehrsprachigkeit öffnet ein breiteres Publikum."],
      },
      {
        id: "agenti-i-digitalni-marketari",
        title: "11. Was Makler und digitale Marketer lernen können",
        body: [
          "Für Makler und digitale Marketer zeigt Calije Park Residence, dass Standortvermarktung nicht auf Portale und Anzeigen begrenzt sein muss.",
          "Möglich ist eine Ebene aus SEO, Video, Landingpage, Lead-Formular, Social Sharing, geschlossenem Brief, E-Mail-Kommunikation und Kontaktqualifizierung.",
          "Die Website wird zur zentralen Stelle; soziale Netzwerke dienen als Kanäle für Aufmerksamkeit.",
        ],
      },
      {
        id: "danininet-case-study",
        title: "12. Calije Park Residence als DaniniNet Case Study",
        body: [
          "Für DaniniNet zeigt dieses Projekt, wie digitales Marketing, Immobilien und Investorenkommunikation zusammenarbeiten können.",
          "Calije Park Residence ist eine Case Study für das Modell Digitaler Verkauf von Standorten.",
          "Ziel ist keine generische Anzeige, sondern ein System, das dem Standort eine klarere Marktposition gibt.",
        ],
      },
    ],
    conclusionTitle: "13. Fazit",
    conclusion: [
      "Calije Park Residence zeigt, dass ein Standort als Investorenargument präsentiert werden kann: mit öffentlichem Gateway, Videoeinführung, mehrsprachigen Inhalten, geschlossenem Brief und qualifiziertem Gespräch.",
      "Das garantiert kein Ergebnis und ersetzt keine rechtliche, technische, planerische oder finanzielle Prüfung. Es hebt jedoch die Qualität der Kommunikation und eröffnet einen seriöseren Gesprächsweg.",
    ],
    toc: "Inhalt",
    publicBoundary: "Öffentliche Grenze",
    publicBoundaryText: "Der private Brief, Token-Link und direkte PDF-Link werden nicht öffentlich veröffentlicht. Geschlossene Materialien werden nur qualifizierten Kontakten auf Anfrage bereitgestellt.",
    visualCaption: "Calije Park Residence — ein öffentlicher Gateway, der einen Standort als Investorenargument präsentiert, nicht als einfache Anzeige.",
    visuals: {
      hero: { title: "Wie ein Standort zum Investorenargument wird", labels: ["Öffentlicher Gateway", "Videoeinführung", "Geschlossener Brief", "SEO-Ebene", "Qualifizierung", "Case Study"] },
      ad: { title: "Eine Anzeige ist nicht dasselbe wie ein Investorenargument", labels: ["Fläche", "Preis", "Kontakt", "Kontext", "Video", "Brief"] },
      gateway: { title: "Öffentlicher Gateway / geschlossener Investor Brief", labels: ["Standort", "Narrativ", "Video", "Dokumentation", "Due Diligence", "Gespräch"] },
      video: { title: "Video ist keine Dekoration", labels: ["Atmosphäre", "Zugang", "Wohnrhythmus", "Ersteindruck", "Künftiger Käufer", "Adresse"] },
      due: { title: "Due-Diligence-Karte für externe Investoren", labels: ["Kataster", "Planung", "Recht", "Steuern", "Infrastruktur", "Lokales Team"] },
      case: { title: "Calije Park Residence als DaniniNet Case Study", labels: ["Gateway", "SEO", "Video", "Lead-Formular", "Brief", "Distribution"] },
    },
  },
  en: {
    seoTitle: "How a Location Becomes an Investor Argument | Calije Park Residence",
    seoDescription: "Calije Park Residence case study: how a location in Niš can be presented through a public gateway, video, multilingual content and a closed Investor Brief.",
    ogTitle: "How a Location Becomes an Investor Argument",
    ogDescription: "Calije Park Residence shows how a location in Niš can be presented through a public gateway, video, multilingual content and a closed Investor Brief for a qualified conversation.",
    label: "Calije Park Residence · DaniniNet case study",
    h1: "How a Location Becomes an Investor Argument: Calije Park Residence Case Study",
    intro: "Calije Park Residence shows how a development location in Niš can be presented through a public gateway, video introduction, multilingual content and a closed Investor Brief — as an investor argument, not as a simple listing.",
    tags: ["Digital Location Sales", "Investor gateway", "Niš · Pantelej · Čalije"],
    openGateway: "View public project gateway",
    productCta: "Digital Location Sales",
    lead: [
      "Most locations for sale are presented in the same way: size, location, price and contact. That may be enough for basic information, but often not enough for a serious investor or partner conversation.",
      "An investor is not looking only at a plot of land. They evaluate context, potential, risk, development logic, market signal and the next meaningful step.",
      "That is why Calije Park Residence was built as an example of how a location in Niš can be presented not only as land, but as a structured investor argument.",
    ],
    sections: [
      {
        id: "zasto-oglas-nije-dovoljan",
        title: "1. Why a standard listing is not enough",
        body: [
          "A classic listing for land usually answers a few basic questions: where the location is, how large it is, what the expected price is and who to contact.",
          "That is a start. But it is often not enough for a serious conversation with an investor, development partner or professional collaborator.",
          "An investor considers opportunity, risk, timing, documentation, market potential and the communication framework.",
        ],
        visual: "ad",
      },
      {
        id: "od-oglasa-do-argumenta",
        title: "2. From listing to investor argument",
        body: [
          "An investor argument is not the same as advertising. Advertising tries to attract attention. An investor argument explains why a location deserves a more serious conversation.",
          "For a location such as Calije Park Residence, that argument is not built with one sentence. It is built through several connected layers.",
        ],
        bullets: ["public location description", "video introduction", "multilingual content", "character of the surroundings", "qualification flow", "closed Investor Brief"],
      },
      {
        id: "digitalni-investitorski-gateway",
        title: "3. What a digital investor gateway is",
        body: [
          "A digital investor gateway is the public entry layer for a more serious conversation about a location. It is not just a landing page and not just an online brochure.",
          "Its role is to show the location, core narrative, video, contact path and the option to request more information — without exposing private negotiation details.",
          "The public website opens the door; the closed business conversation and Investor Brief carry the deeper information.",
        ],
        bullets: ["present the location", "explain its character", "show visual context", "separate public and private", "route serious contacts", "show structured preparation"],
        visual: "gateway",
      },
      {
        id: "calije-park-residence-case-study",
        title: "4. Calije Park Residence as a case study",
        body: [
          "Calije Park Residence is a location in the Čalije / Pantelej / Niš area. Instead of being presented only as a listing, the project was built as a public gateway with a clear business layer.",
          "The public website does not replace documentation, legal review or negotiations. It creates the first serious frame for a qualified conversation.",
          "This case study matters for DaniniNet because it shows how digital marketing, real estate and investor communication can work together.",
        ],
      },
      {
        id: "public-gateway-private-brief",
        title: "5. Public Gateway vs. Private Investor Brief",
        body: [
          "One of the most important decisions in this model is the separation of public and private layers.",
          "The public layer shows the location, basic context, video introduction, surroundings and contact path. The closed Investor Brief is meant for qualified conversations with serious investors, partners or professional collaborators.",
          "This separation protects the project from unnecessary public exposure of sensitive information.",
        ],
        bullets: ["The public gateway builds interest.", "The closed Brief opens details.", "Private materials are not published publicly."],
        visual: "gateway",
      },
      {
        id: "zasto-video",
        title: "6. Why video matters",
        body: [
          "For a location, a map alone is often not enough. People understand space better when they can see it.",
          "A video introduction helps show atmosphere, access, the feel of the location, a calmer residential rhythm, the first visual impression and the emotional quality of a future address.",
          "Video is not decoration. It is part of the investor argument.",
        ],
        visual: "video",
      },
      {
        id: "visejezicni-sadrzaj",
        title: "7. Multilingual content as a seriousness signal",
        body: [
          "Calije Park Residence was built with a multilingual framework because the project does not address only a local audience, but also a wider circle of potential partners, investors and professional collaborators.",
          "A multilingual website is not only translation. It shows that the location is prepared for more serious communication.",
          "This approach does not promise an outcome, but it builds trust through structure.",
        ],
        bullets: ["clear public layer", "understandable business context", "careful legal tone", "closed Brief", "local professional checks"],
        visual: "due",
      },
      {
        id: "seo-i-deljenje",
        title: "8. SEO and sharing as infrastructure",
        body: [
          "If a location has a serious public gateway, SEO is not a side issue. SEO helps the project become understandable to people, platforms, search engines and social networks.",
          "When someone sends the link to an investor, agent or collaborator, the page must quickly explain why the link is worth opening.",
        ],
        bullets: ["clear page title", "meta description", "Open Graph preview", "sharing image", "sitemap", "multilingual routes", "careful public text"],
      },
      {
        id: "pregovaracki-detalji",
        title: "9. Why negotiation details are not published publicly",
        body: [
          "A common mistake in location promotion is publishing details too early that belong in a private conversation.",
          "Negotiation terms, percentages, contract models and private documentation should not become material for public comments.",
          "Public content shows what builds interest and trust. Private content opens what belongs to a serious process.",
        ],
        bullets: ["negotiation terms", "percentages and advances", "contract models", "private documentation", "direct PDF links", "sensitive business details"],
        visual: "case",
      },
      {
        id: "sta-vlasnici-mogu-nauciti",
        title: "10. What location owners can learn",
        body: [
          "Calije Park Residence is not only a single project. It is also an example of a method.",
          "Owners of land, apartments, buildings or locations can see that a location does not have to remain a passive listing. It can become a structured communication system.",
        ],
        bullets: ["A location is not sold only with information, but with argumentation.", "Investors need broader context.", "Video can communicate the feeling of space.", "Public and private layers should be separated.", "A closed Brief raises communication quality.", "Multilingual presentation opens a wider audience."],
      },
      {
        id: "agenti-i-digitalni-marketari",
        title: "11. What agents and digital marketers can learn",
        body: [
          "For agents and digital marketers, Calije Park Residence shows that location promotion does not have to be limited to portals and listings.",
          "It is possible to build a layer combining SEO, video, landing page, lead form, social sharing, closed Brief, email communication and contact qualification.",
          "The website becomes the central point; social networks serve as channels for attention.",
        ],
      },
      {
        id: "danininet-case-study",
        title: "12. Calije Park Residence as a DaniniNet case study",
        body: [
          "For DaniniNet, this project shows how digital marketing, real estate and investor communication can work together.",
          "Calije Park Residence is a case study for the Digital Location Sales model.",
          "The goal is not to create a generic listing, but a system that gives the location a clearer market position.",
        ],
      },
    ],
    conclusionTitle: "13. Conclusion",
    conclusion: [
      "Calije Park Residence shows that a location can be presented as an investor argument with a public gateway, video introduction, multilingual content, closed Brief and qualified conversation.",
      "This does not guarantee an outcome and does not replace legal, technical, planning or financial review. But it raises the level of communication and opens a more serious path to conversation.",
    ],
    toc: "Contents",
    publicBoundary: "Public boundary",
    publicBoundaryText: "The private Brief, token link and direct PDF link are not published publicly. Closed material is shared only with qualified contacts on request.",
    visualCaption: "Calije Park Residence — a public gateway that presents a location as an investor argument, not as a standard listing.",
    visuals: {
      hero: { title: "How a location becomes an investor argument", labels: ["Public gateway", "Video intro", "Closed Brief", "SEO layer", "Qualification", "Case study"] },
      ad: { title: "A standard listing is not the same as an investor argument", labels: ["Size", "Price", "Contact", "Context", "Video", "Brief"] },
      gateway: { title: "Public gateway / closed Investor Brief", labels: ["Location", "Story", "Video", "Documentation", "Due diligence", "Conversation"] },
      video: { title: "Video is not decoration", labels: ["Atmosphere", "Access", "Living rhythm", "First impression", "Future buyer", "Address"] },
      due: { title: "Due diligence map for external investors", labels: ["Cadastre", "Planning", "Legal", "Taxes", "Infrastructure", "Local team"] },
      case: { title: "Calije Park Residence as a DaniniNet case study", labels: ["Gateway", "SEO", "Video", "Lead form", "Brief", "Distribution"] },
    },
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = article[lang];
  const url = `https://danininet.daninihub.com/${lang}/blog/${slug}`;

  return {
    title: t.seoTitle,
    description: t.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      type: "article",
      url,
    },
  };
}

function ArticleVisual({ type, copy }: { type: VisualType; copy: ArticleCopy }) {
  const visual = copy.visuals[type];

  return (
    <figure className="my-10 overflow-hidden rounded-[2rem] border border-[#d7b46a]/25 bg-[#07142b] p-6 text-white shadow-[0_24px_70px_rgba(7,20,43,0.18)]">
      <div className="relative min-h-[260px] rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_85%_5%,rgba(215,180,106,0.16),transparent_30%),linear-gradient(135deg,#05070a,#07142b)] p-7">
        <p className="text-xs uppercase tracking-[0.24em] text-[#d7b46a]">Calije Park Residence</p>
        <h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">{visual.title}</h2>
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {visual.labels.map((label) => (
            <span key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-slate-300">
              {label}
            </span>
          ))}
        </div>
      </div>
      <figcaption className="mt-4 text-sm leading-6 text-slate-300">{copy.visualCaption}</figcaption>
    </figure>
  );
}

function JsonLd({ lang, copy }: { lang: Locale; copy: ArticleCopy }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: copy.h1,
    description: copy.seoDescription,
    author: { "@type": "Person", name: "Dragan Zdravkovic" },
    publisher: { "@type": "Organization", name: "DaniniNet" },
    mainEntityOfPage: `https://danininet.daninihub.com/${lang}/blog/${slug}`,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default async function CalijeEvergreenArticlePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = article[lang];

  return (
    <SiteShell locale={lang} currentPath={`/${lang}/blog/${slug}`}>
      <JsonLd lang={lang} copy={t} />
      <article className="bg-[#f4efe5] text-[#15130f]">
        <header className="bg-[#07142b] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <p className="text-sm uppercase tracking-[0.24em] text-[#d7b46a]">{t.label}</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">{t.h1}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">{t.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3 text-sm text-slate-300">
              {t.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-4 py-2">{tag}</span>)}
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[0.72fr_0.28fr]">
          <main className="min-w-0">
            <ArticleVisual type="hero" copy={t} />
            <section className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
              <div className="space-y-5 text-xl leading-9 text-[#3c372f]">
                {t.lead.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <Link href="https://calije.daninihub.com/sr" className="mt-8 inline-flex rounded-full bg-[#07142b] px-6 py-3 text-sm font-semibold text-white">
                {t.openGateway}
              </Link>
            </section>

            {t.sections.map((section) => (
              <section key={section.id} id={section.id} className="mt-10 rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm scroll-mt-28">
                {section.visual ? <ArticleVisual type={section.visual} copy={t} /> : null}
                <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{section.title}</h2>
                <div className="mt-6 space-y-5 text-lg leading-9 text-[#4f493f]">
                  {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                {section.bullets ? (
                  <ul className="mt-7 grid gap-3 md:grid-cols-2">
                    {section.bullets.map((item) => (
                      <li key={item} className="rounded-2xl bg-[#fffaf1] px-5 py-4 leading-7 text-[#5f594f]">{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section className="mt-10 rounded-[2rem] bg-[#07142b] p-8 text-white shadow-[0_24px_70px_rgba(7,20,43,0.18)]">
              <h2 className="text-4xl font-semibold">{t.conclusionTitle}</h2>
              <div className="mt-6 space-y-5 text-lg leading-9 text-slate-300">
                {t.conclusion.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="https://calije.daninihub.com/sr" className="rounded-full bg-[#d9ecff] px-6 py-3 text-sm font-semibold text-[#07142b]">
                  {t.openGateway}
                </Link>
                <Link href={localizedPath(lang, "dpl")} className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white">
                  {t.productCta}
                </Link>
              </div>
            </section>
          </main>

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">{t.toc}</p>
              <nav className="mt-5 grid gap-3 text-sm leading-6 text-[#5f594f]">
                {t.sections.slice(0, 9).map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="rounded-xl bg-[#fffaf1] px-4 py-3 hover:bg-[#f1e7d8]">
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
            <div className="mt-6 rounded-[2rem] bg-[#07142b] p-6 text-white shadow-sm">
              <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">{t.publicBoundary}</p>
              <p className="mt-4 leading-7 text-slate-300">{t.publicBoundaryText}</p>
            </div>
          </aside>
        </div>
      </article>
    </SiteShell>
  );
}
