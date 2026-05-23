"use client";

import { FormEvent, useState } from "react";

type Locale = "sr" | "de" | "en";

type FormCopy = {
  name: string;
  email: string;
  region: string;
  assetType: string;
  materialUrl: string;
  goal: string;
  message: string;
  consent: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
  assetOptions: string[];
  goalOptions: string[];
};

const copy: Record<Locale, FormCopy> = {
  sr: {
    name: "Ime",
    email: "Email",
    region: "Zemlja / region",
    assetType: "Šta želiš da proverimo?",
    materialUrl: "Link do oglasa, materijala ili stranice",
    goal: "Glavni cilj",
    message: "Kratak kontekst",
    consent: "Saglasan/saglasna sam da se podaci koriste za Mini Audit komunikaciju i procenu.",
    submit: "Pošalji Mini Audit prijavu",
    sending: "Slanje...",
    success: "Prijava je poslata. Proveri email za potvrdu.",
    error: "Prijava trenutno nije poslata. Proveri polja ili pokušaj ponovo.",
    assetOptions: ["Parcela", "Stan", "Kuća", "Lokacija", "Projekat", "Postojeći oglas", "Drugo"],
    goalOptions: ["Prodaja", "Prezentacija", "Investitor", "Partner", "Bolji oglas", "Ne znam još"],
  },
  de: {
    name: "Name",
    email: "E-Mail",
    region: "Land / Region",
    assetType: "Was soll geprüft werden?",
    materialUrl: "Link zu Inserat, Material oder Seite",
    goal: "Hauptziel",
    message: "Kurzer Kontext",
    consent: "Ich stimme zu, dass die Daten für Mini-Audit Kommunikation und Einschätzung genutzt werden.",
    submit: "Mini-Audit Anfrage senden",
    sending: "Senden...",
    success: "Die Anfrage wurde gesendet. Bitte prüfe deine E-Mail für die Bestätigung.",
    error: "Die Anfrage konnte nicht gesendet werden. Bitte Felder prüfen oder erneut versuchen.",
    assetOptions: ["Grundstück", "Wohnung", "Haus", "Standort", "Projekt", "Bestehendes Inserat", "Anderes"],
    goalOptions: ["Verkauf", "Präsentation", "Investor", "Partner", "Besseres Inserat", "Noch unklar"],
  },
  en: {
    name: "Name",
    email: "Email",
    region: "Country / region",
    assetType: "What should be checked?",
    materialUrl: "Link to listing, material or page",
    goal: "Main goal",
    message: "Short context",
    consent: "I agree that the data is used for Mini Audit communication and assessment.",
    submit: "Send Mini Audit request",
    sending: "Sending...",
    success: "Request sent. Check your email for confirmation.",
    error: "Request could not be sent right now. Check the fields or try again.",
    assetOptions: ["Land", "Apartment", "House", "Location", "Project", "Existing listing", "Other"],
    goalOptions: ["Sale", "Presentation", "Investor", "Partner", "Better listing", "Not sure yet"],
  },
};

export function MiniAuditForm({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      region: String(form.get("region") || ""),
      assetType: String(form.get("assetType") || ""),
      language: locale,
      materialUrl: String(form.get("materialUrl") || ""),
      goal: String(form.get("goal") || ""),
      message: String(form.get("message") || ""),
      consent: form.get("consent") === "on",
    };

    try {
      const response = await fetch("/api/mini-audit-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Mini Audit request failed");
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass = "w-full rounded-2xl border border-black/10 bg-[#fffaf1] px-4 py-3 text-[#15130f] outline-none transition focus:border-[#d7b46a]";
  const labelClass = "grid gap-2 text-sm font-semibold text-[#15130f]";

  return (
    <form onSubmit={submit} className="mt-8 grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className={labelClass}>{t.name}<input name="name" required minLength={2} className={inputClass} /></label>
        <label className={labelClass}>{t.email}<input name="email" required type="email" className={inputClass} /></label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className={labelClass}>{t.region}<input name="region" required className={inputClass} /></label>
        <label className={labelClass}>{t.assetType}<select name="assetType" required className={inputClass}><option value="" />{t.assetOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
      </div>
      <label className={labelClass}>{t.materialUrl}<input name="materialUrl" type="url" placeholder="https://" className={inputClass} /></label>
      <label className={labelClass}>{t.goal}<select name="goal" required className={inputClass}><option value="" />{t.goalOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
      <label className={labelClass}>{t.message}<textarea name="message" rows={5} className={inputClass} /></label>
      <label className="flex gap-3 rounded-2xl border border-black/10 bg-[#fffaf1] p-4 text-sm leading-7 text-[#706a5d]"><input name="consent" type="checkbox" required className="mt-1" /><span>{t.consent}</span></label>
      <button disabled={status === "sending"} className="rounded-full bg-[#07142b] px-7 py-4 text-sm font-semibold text-white disabled:opacity-60" type="submit">{status === "sending" ? t.sending : t.submit}</button>
      {status === "success" ? <p className="rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">{t.success}</p> : null}
      {status === "error" ? <p className="rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-800">{t.error}</p> : null}
    </form>
  );
}
