"use client";

import { FormEvent, useState } from "react";

type Locale = "sr" | "de" | "en";

const copy = {
  sr: {
    title: "Šta imaš što trenutno ne zarađuje?",
    intro: "Pošalji stvarni resurs, iskustvo ili problem. Ovo nije kviz: cilj je da od ulaza napravimo prvi tržišni test.",
    name: "Ime", email: "Email", resource: "Šta imaš?", experience: "Šta znaš / šta si radio?", constraints: "Ograničenja", goal: "Cilj prihoda ili rezultata", budget: "Budžet za prvi test", time: "Koliko vremena nedeljno imaš?", consent: "Saglasan sam da DaniniNet obradi ove podatke radi odgovora na moj zahtev.", submit: "Pošalji slučaj", success: "Primljeno. Sledeći korak je provera slučaja i najkraći tržišni test.", error: "Slanje nije uspelo. Pokušaj ponovo."
  },
  de: {
    title: "Was hast du, das aktuell kein Geld verdient?", intro: "Sende eine reale Ressource, Erfahrung oder ein Problem. Ziel ist ein erster Markttest, kein Quiz.",
    name:"Name",email:"E-Mail",resource:"Was hast du?",experience:"Was kannst du / was hast du gemacht?",constraints:"Grenzen",goal:"Einkommens- oder Ergebnisziel",budget:"Budget für den ersten Test",time:"Verfügbare Stunden pro Woche",consent:"Ich stimme der Verarbeitung dieser Angaben zur Bearbeitung meiner Anfrage zu.",submit:"Fall senden",success:"Erhalten. Nächster Schritt: Fit-Prüfung und der kürzeste sinnvolle Markttest.",error:"Senden fehlgeschlagen. Bitte erneut versuchen."
  },
  en: {
    title:"What do you have that is not earning yet?",intro:"Send a real resource, experience or problem. The goal is a first market test, not a quiz.",
    name:"Name",email:"Email",resource:"What do you have?",experience:"What do you know / what have you done?",constraints:"Constraints",goal:"Income or outcome target",budget:"Budget for the first test",time:"Hours available per week",consent:"I consent to DaniniNet processing these details to respond to my request.",submit:"Send case",success:"Received. Next step is fit review and the shortest useful market test.",error:"Submission failed. Please try again."
  }
} as const;

export function ZeroToOneIntake({ locale }: { locale: Locale }) {
  const t=copy[locale]; const [status,setStatus]=useState<"idle"|"loading"|"success"|"error">("idle");
  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault(); setStatus("loading"); const form=e.currentTarget; const d=new FormData(form);
    const details=["RESOURCE: "+d.get("resource"),"EXPERIENCE: "+d.get("experience"),"CONSTRAINTS: "+d.get("constraints"),"GOAL: "+d.get("goal"),"BUDGET: "+d.get("budget"),"TIME: "+d.get("time")].join("\n");
    const r=await fetch("/api/leads/danininet",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:String(d.get("email")||""),name:String(d.get("name")||""),interest:details,source:"danininet-zero-to-one-intake",locale,consent:d.get("consent")==="on"})});
    if(!r.ok){setStatus("error");return;} form.reset();setStatus("success");
  }
  const field="rounded-xl border border-black/15 bg-white px-4 py-3 text-[#07142b] outline-none focus:border-[#8b6a2e]";
  return <section id="zero-to-one" className="mt-12 border-y border-black/10 bg-[#f3ede2] py-14"><div className="mx-auto max-w-5xl px-6"><p className="text-sm font-semibold uppercase tracking-[.18em] text-[#8b6a2e]">Danini Zero→One · INPUT</p><h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight">{t.title}</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-[#706a5d]">{t.intro}</p>
  <form onSubmit={submit} className="mt-8 grid gap-5 rounded-2xl border border-black/10 bg-white p-6 md:grid-cols-2">
    <label className="grid gap-2 font-semibold">{t.name}<input className={field} name="name" required /></label>
    <label className="grid gap-2 font-semibold">{t.email}<input className={field} name="email" type="email" required /></label>
    <label className="grid gap-2 font-semibold md:col-span-2">{t.resource}<textarea className={field} name="resource" rows={3} required /></label>
    <label className="grid gap-2 font-semibold md:col-span-2">{t.experience}<textarea className={field} name="experience" rows={3} required /></label>
    <label className="grid gap-2 font-semibold">{t.constraints}<textarea className={field} name="constraints" rows={3} required /></label>
    <label className="grid gap-2 font-semibold">{t.goal}<textarea className={field} name="goal" rows={3} required /></label>
    <label className="grid gap-2 font-semibold">{t.budget}<input className={field} name="budget" /></label>
    <label className="grid gap-2 font-semibold">{t.time}<input className={field} name="time" /></label>
    <label className="flex gap-3 text-sm leading-6 text-[#706a5d] md:col-span-2"><input className="mt-1" name="consent" type="checkbox" required/><span>{t.consent}</span></label>
    <button disabled={status==="loading"} className="rounded-full bg-[#07142b] px-7 py-4 font-semibold text-white md:col-span-2">{status==="loading"?"…":t.submit}</button>
    {status==="success"?<p className="rounded-xl bg-emerald-50 p-4 text-emerald-900 md:col-span-2">{t.success}</p>:null}
    {status==="error"?<p className="rounded-xl bg-red-50 p-4 text-red-900 md:col-span-2">{t.error}</p>:null}
  </form></div></section>;
}
