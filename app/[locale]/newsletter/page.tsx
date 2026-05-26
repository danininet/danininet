import Link from "next/link";
import { LeadCaptureForm } from "@/components/leads/LeadCaptureForm";
import { SectionIntro, SiteShell, normalizeLocale, localizedPath } from "@/components/layout/SiteShell";

type Locale = "sr" | "de" | "en";

type Interest = {
  title: string;
  text: string;
  badge: string;
};

const copy: Record<Locale, {
  eyebrow: string;
  title: string;
  text: string;
  artifactNote: string;
  formTitle: string;
  formText: string;
  emailLabel: string;
  nameLabel: string;
  interestLabel: string;
  consent: string;
  submit: string;
  success: string;
  error: string;
  support: string;
  interests: Interest[];
  methodTitle: string;
  methodSteps: [string, string][];
  trustTitle: string;
  trustItems: string[];
}> = {
  sr: {
    eyebrow: "DaniniNet lead artifact",
    title: "Prijava nije običan newsletter. To je ulaz u DaniniHub OS interesni tok.",
    text: "Ova forma služi da se posetilac ne gura u generičku listu, nego da se pravilno segmentira prema interesovanju: digitalni proizvodi, affiliate, AI metoda, voda/zdravlje ili case study projekti.",
    artifactNote: "Radni princip: prvo interesovanje, zatim podpitanje, zatim relevantan artifact — ne spam, ne generička kampanja.",
    formTitle: "Izaberi pravac koji te zanima",
    formText: "Forma je povezana sa Brevo lead flow-om preko server-side API rute. Podaci ne idu kroz mailto link, a API ključ nije izložen u browseru.",
    emailLabel: "Email adresa",
    nameLabel: "Ime / projekat",
    interestLabel: "Primarno interesovanje",
    consent: "Saglasan/na sam da dobijem relevantne DaniniNet informacije za izabrani pravac. Razumem da sadržaj može sadržati edukativne, affiliate i AI-assisted materijale uz jasne disclaimere.",
    submit: "Prijavi interesovanje",
    success: "Prijava je primljena. Sledeći korak je relevantan DaniniNet artifact, ne generički spam.",
    error: "Prijava trenutno nije uspela. Proveri email i saglasnost ili pokušaj kasnije.",
    support: "Za kupovine i delivery support idi na support stranicu.",
    interests: [
      { badge: "Income", title: "Digitalni proizvodi", text: "PDF, e-knjige, kursevi, template-i, delivery i monetizacija kroz DaniniNet artifact tok." },
      { badge: "Income", title: "Affiliate marketing", text: "Odgovorne preporuke, disclosure, DACH/Balkan razdvajanje i long-term content engine." },
      { badge: "Intelligence", title: "AI u praksi", text: "Pitaj AI — AI pita tebe, agent workflow, decision engine i artifact output." },
      { badge: "Health", title: "DaniniLans / voda i zdrav stil života", text: "Budući DaniniLans health/water/lifestyle sloj sa jasnim health disclaimer okvirom." },
      { badge: "Product", title: "Digitalna prodaja lokacije", text: "Interesovanje za DPL proizvod, PDF vodič, Bonus Pack i digital gateway logiku." },
      { badge: "Partner", title: "Saradnja / partnerstvo", text: "Signal za partnere, affiliate saradnike i projekte koji mogu postati DaniniHub artifact." },
    ],
    methodTitle: "Kako se lead obrađuje po DaniniHub logici",
    methodSteps: [["01", "Korisnik bira interesovanje."], ["02", "Sistem ne šalje sve svima, nego segmentira pravac."], ["03", "Sledeće pitanje razjašnjava potrebu bez pritiska."], ["04", "Korisnik dobija relevantan artifact: vodič, članak, case study, ponudu ili support tok."]],
    trustTitle: "Granice i poverenje",
    trustItems: ["Bez quick-money obećanja", "Bez medicinskih tvrdnji", "Affiliate linkovi moraju biti označeni", "AI output zahteva ljudsku proveru", "Odjava mora biti jasna kada se email sistem poveže"],
  },
  de: {
    eyebrow: "DaniniNet Lead Artifact",
    title: "Das ist kein normaler Newsletter. Es ist ein Einstieg in den DaniniHub OS Interessen-Flow.",
    text: "Die Form segmentiert Besucher nach Interesse: digitale Produkte, Affiliate, KI-Methode, Wasser/Health oder Case Studies.",
    artifactNote: "Prinzip: zuerst Interesse, dann Rückfrage, dann relevantes Artifact — kein Spam, keine generische Kampagne.",
    formTitle: "Wählen Sie den passenden Bereich",
    formText: "Das Formular läuft über eine serverseitige Brevo API Route. Kein mailto-Link, kein API-Key im Browser.",
    emailLabel: "E-Mail-Adresse",
    nameLabel: "Name / Projekt",
    interestLabel: "Primäres Interesse",
    consent: "Ich stimme zu, relevante DaniniNet Informationen zum gewählten Bereich zu erhalten. Inhalte können edukative, Affiliate- und KI-unterstützte Materialien mit klaren Disclaimern enthalten.",
    submit: "Interesse senden",
    success: "Die Anmeldung wurde empfangen. Der nächste Schritt ist ein relevantes DaniniNet Artifact, keine generische Kampagne.",
    error: "Die Anmeldung war nicht erfolgreich. Bitte E-Mail und Zustimmung prüfen oder später erneut versuchen.",
    support: "Für Kauf- und Delivery-Support bitte die Support-Seite nutzen.",
    interests: [
      { badge: "Income", title: "Digitale Produkte", text: "PDFs, E-Books, Kurse, Templates, Delivery und Monetarisierung." },
      { badge: "Income", title: "Affiliate Marketing", text: "Verantwortliche Empfehlungen, Disclosure und Content Engine." },
      { badge: "Intelligence", title: "KI in der Praxis", text: "Frag die KI — die KI fragt dich, Agent Workflow und Artifact Output." },
      { badge: "Health", title: "DaniniLans / Wasser und gesunder Lebensstil", text: "Künftiger DaniniLans Health/Water/Lifestyle Layer mit klarem Disclaimer." },
      { badge: "Product", title: "Digitaler Verkauf von Standorten", text: "Interesse am DPL Produkt, PDF Leitfaden, Bonus Pack und Digital Gateway Logik." },
      { badge: "Partner", title: "Kooperation / Partnerschaft", text: "Signal für Partner, Affiliate-Kooperationen und Projekte mit Artifact-Potenzial." },
    ],
    methodTitle: "Wie Leads nach DaniniHub Logik verarbeitet werden",
    methodSteps: [["01", "Interesse wählen."], ["02", "Segmentieren statt alles an alle."], ["03", "Nächste Rückfrage klärt Bedarf."], ["04", "Relevantes Artifact liefern: Leitfaden, Artikel, Case Study, Angebot oder Support."]],
    trustTitle: "Grenzen und Vertrauen",
    trustItems: ["Keine Quick-Money Versprechen", "Keine medizinischen Behauptungen", "Affiliate Links müssen markiert werden", "KI Output braucht menschliche Prüfung", "Abmeldung muss klar sein"],
  },
  en: {
    eyebrow: "DaniniNet lead artifact",
    title: "This is not a generic newsletter. It is an entry into the DaniniHub OS interest flow.",
    text: "The form segments visitors by interest: digital products, affiliate, AI method, water/health or case studies.",
    artifactNote: "Principle: interest first, then clarification, then relevant artifact — not spam, not a generic campaign.",
    formTitle: "Choose your direction",
    formText: "The form is connected through a server-side Brevo API route. No mailto link and no API key in the browser.",
    emailLabel: "Email address",
    nameLabel: "Name / project",
    interestLabel: "Primary interest",
    consent: "I agree to receive relevant DaniniNet information for the chosen direction. I understand content may include educational, affiliate and AI-assisted materials with clear disclaimers.",
    submit: "Register interest",
    success: "Your registration was received. The next step is a relevant DaniniNet artifact, not a generic campaign.",
    error: "Registration failed. Please check your email and consent or try again later.",
    support: "For purchase and delivery support, use the support page.",
    interests: [
      { badge: "Income", title: "Digital products", text: "PDFs, e-books, courses, templates, delivery and monetization." },
      { badge: "Income", title: "Affiliate marketing", text: "Responsible recommendations, disclosure and content engine." },
      { badge: "Intelligence", title: "AI in practice", text: "Ask AI — AI asks you, agent workflow and artifact output." },
      { badge: "Health", title: "DaniniLans / water and healthy lifestyle", text: "Future DaniniLans health/water/lifestyle layer with clear disclaimers." },
      { badge: "Product", title: "Digital Location Sales", text: "Interest in DPL product, PDF guide, Bonus Pack and Digital Gateway logic." },
      { badge: "Partner", title: "Collaboration / partnership", text: "Signal for partners, affiliate collaborators and projects with artifact potential." },
    ],
    methodTitle: "How leads are handled by DaniniHub logic",
    methodSteps: [["01", "Choose interest."], ["02", "Segment instead of sending everything to everyone."], ["03", "Next question clarifies need."], ["04", "Deliver relevant artifact: guide, article, case study, offer or support flow."]],
    trustTitle: "Boundaries and trust",
    trustItems: ["No quick-money promises", "No medical claims", "Affiliate links must be disclosed", "AI output requires human review", "Unsubscribe must be clear"],
  },
};

export default async function NewsletterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang: Locale = normalizeLocale(locale);
  const t = copy[lang];

  return (
    <SiteShell locale={lang} currentPath={`/${lang}/newsletter`}>
      <SectionIntro eyebrow={t.eyebrow} title={t.title} text={t.text} />

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-[2rem] border border-[#226bbf]/20 bg-[#e8f4ff] p-6 text-[#07142b]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#226bbf]">DaniniHub OS lead gate</p>
          <p className="mt-3 text-lg leading-8">{t.artifactNote}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[2.25rem] bg-[#07142b] p-8 text-white shadow-sm">
          <p className="text-sm uppercase tracking-[0.22em] text-[#d7b46a]">Lead form</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight">{t.formTitle}</h2>
          <p className="mt-4 leading-8 text-slate-300">{t.formText}</p>
          <LeadCaptureForm
            locale={lang}
            interests={t.interests}
            labels={{
              email: t.emailLabel,
              name: t.nameLabel,
              interest: t.interestLabel,
              consent: t.consent,
              submit: t.submit,
              success: t.success,
              error: t.error,
            }}
          />
          <p className="mt-5 text-sm leading-6 text-slate-400"><Link href={localizedPath(lang, "support")} className="underline decoration-[#d7b46a] underline-offset-4">{t.support}</Link></p>
        </article>

        <div className="grid gap-5 md:grid-cols-2">
          {t.interests.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-[#226bbf]">{item.badge}</p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#706a5d]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f4efe5] text-[#15130f]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[#226bbf]">DaniniHub method</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">{t.methodTitle}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {t.methodSteps.map(([num, text]) => <div key={num} className="rounded-2xl bg-white p-5 shadow-sm"><span className="text-sm font-semibold text-[#226bbf]">{num}</span><p className="mt-2 leading-7 text-[#706a5d]">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-semibold">{t.trustTitle}</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-5">
            {t.trustItems.map((item) => <span key={item} className="rounded-2xl bg-[#fffaf1] p-4 text-sm leading-6 text-[#706a5d]">{item}</span>)}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
