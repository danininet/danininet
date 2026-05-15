import { SectionIntro, SiteShell, normalizeLocale } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    eyebrow: "DaniniNet Support",
    title: "Podrška za proizvode, isporuku i sledeći korak.",
    text: "Support stranica je za kupce, čitaoce i partnere koji imaju pitanje o digitalnim proizvodima, preuzimanju, bonus materijalima, affiliate preporukama ili DaniniHub metodi.",
    processTitle: "Kako obrađujemo upit",
    process: [
      ["1", "Kategorija", "Razdvajamo pitanje: proizvod, isporuka, tehnički problem, affiliate saradnja ili predlog sadržaja."],
      ["2", "Kontekst", "Tražimo samo informacije koje su potrebne da se problem razume. Ne šalji lozinke, kartice ili privatne dokumente."],
      ["3", "Odgovor", "Ako se može rešiti direktno, ide praktičan odgovor. Ako traži stručnu procenu, jasno se kaže da je potreban odgovarajući profesionalac."],
    ],
    fields: ["Ime", "Email", "Kategorija", "Pitanje"],
    button: "Pošalji support upit",
    note: "Za kupovine preko eksternog checkout provajdera može biti potreban email korišćen pri kupovini i naziv proizvoda. Ne šalji podatke platne kartice.",
    cards: [
      ["Proizvod i preuzimanje", "Pitanja o vodiču, bonus materijalima, linkovima za preuzimanje i ažuriranjima."],
      ["Affiliate i alati", "Pitanja o preporukama, dostupnosti po regionima i transparentnosti affiliate odnosa."],
      ["DaniniHub metoda", "Pitanja o AI dijalogu, case study procesu i primeni metode u digitalnim projektima."],
    ],
  },
  de: {
    eyebrow: "DaniniNet Support",
    title: "Support für Produkte, Lieferung und den nächsten Schritt.",
    text: "Diese Seite ist für Käufer, Leser und Partner mit Fragen zu digitalen Produkten, Downloads, Bonusmaterialien, Affiliate-Empfehlungen oder der DaniniHub Methode.",
    processTitle: "Wie wir Anfragen bearbeiten",
    process: [
      ["1", "Kategorie", "Wir trennen Produkt, Lieferung, technisches Problem, Affiliate-Kooperation oder Content-Vorschlag."],
      ["2", "Kontext", "Wir benötigen nur Informationen, die zum Verstehen des Problems nötig sind. Keine Passwörter, Karten- oder private Dokumentdaten senden."],
      ["3", "Antwort", "Wenn möglich, folgt eine praktische Antwort. Wenn Fachberatung nötig ist, wird das klar gesagt."],
    ],
    fields: ["Name", "E-Mail", "Kategorie", "Frage"],
    button: "Support-Anfrage senden",
    note: "Bei Käufen über externe Checkout-Anbieter können Kauf-E-Mail und Produktname nötig sein. Keine Kartendaten senden.",
    cards: [
      ["Produkt und Download", "Fragen zu Leitfäden, Bonusmaterialien, Download-Links und Updates."],
      ["Affiliate und Tools", "Fragen zu Empfehlungen, regionaler Verfügbarkeit und Affiliate-Transparenz."],
      ["DaniniHub Methode", "Fragen zu KI-Dialog, Case Study Prozess und Anwendung in digitalen Projekten."],
    ],
  },
  en: {
    eyebrow: "DaniniNet Support",
    title: "Support for products, delivery and the next step.",
    text: "This page is for buyers, readers and partners with questions about digital products, downloads, bonus materials, affiliate recommendations or the DaniniHub method.",
    processTitle: "How we handle requests",
    process: [
      ["1", "Category", "We separate product, delivery, technical issue, affiliate collaboration or content suggestion."],
      ["2", "Context", "We only need information required to understand the issue. Do not send passwords, card data or private documents."],
      ["3", "Response", "If it can be solved directly, you get a practical answer. If professional advice is needed, we say so clearly."],
    ],
    fields: ["Name", "Email", "Category", "Question"],
    button: "Send support request",
    note: "For purchases through external checkout providers, purchase email and product name may be needed. Do not send card details.",
    cards: [
      ["Product and download", "Questions about guides, bonus materials, download links and updates."],
      ["Affiliate and tools", "Questions about recommendations, regional availability and affiliate transparency."],
      ["DaniniHub method", "Questions about AI dialogue, case study process and use in digital projects."],
    ],
  },
} as const;

export default async function SupportPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang}>
      <SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 lg:grid-cols-[0.95fr_1.05fr]">
        <aside className="rounded-[2rem] bg-[#07142b] p-8 text-white">
          <p className="text-sm uppercase tracking-[0.22em] text-[#b9d7f0]">Support process</p>
          <h2 className="mt-4 text-3xl font-semibold">{t.processTitle}</h2>
          <div className="mt-7 grid gap-4">
            {t.process.map(([num, title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                <p className="text-sm text-[#b9d7f0]">{num} · {title}</p>
                <p className="mt-2 leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </aside>
        <form className="grid gap-4 rounded-[2rem] border border-black/10 bg-white p-8">
          <input className="rounded-xl border border-black/10 bg-[#fbf7ef] p-4" placeholder={t.fields[0]} />
          <input className="rounded-xl border border-black/10 bg-[#fbf7ef] p-4" placeholder={t.fields[1]} />
          <input className="rounded-xl border border-black/10 bg-[#fbf7ef] p-4" placeholder={t.fields[2]} />
          <textarea className="min-h-40 rounded-xl border border-black/10 bg-[#fbf7ef] p-4" placeholder={t.fields[3]} />
          <p className="text-sm leading-6 text-[#706a5d]">{t.note}</p>
          <button className="rounded-full bg-[#07142b] px-6 py-3 text-sm font-medium text-white" type="button">
            {t.button}
          </button>
        </form>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 md:grid-cols-3">
        {t.cards.map(([title, text]) => (
          <article key={title} className="rounded-[2rem] border border-black/10 bg-[#fffaf1] p-8">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-4 leading-8 text-[#706a5d]">{text}</p>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}
