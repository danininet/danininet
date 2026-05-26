"use client";

import { FormEvent, useState } from "react";

type Interest = {
  title: string;
};

type LeadCaptureFormProps = {
  locale: "sr" | "de" | "en";
  interests: Interest[];
  labels: {
    email: string;
    name: string;
    interest: string;
    consent: string;
    submit: string;
    success: string;
    error: string;
  };
};

export function LeadCaptureForm({ locale, interests, labels }: LeadCaptureFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = new FormData(form);

    const response = await fetch("/api/leads/danininet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: String(data.get("email") || ""),
        name: String(data.get("name") || ""),
        interest: String(data.get("interest") || ""),
        source: "danininet-newsletter-page",
        locale,
        consent: data.get("consent") === "on",
      }),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    form.reset();
    setStatus("success");
  }

  return (
    <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        {labels.email}
        <input name="email" type="email" required placeholder="you@example.com" className="rounded-2xl border border-white/10 bg-white px-4 py-3 text-[#07142b] outline-none" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        {labels.name}
        <input name="name" type="text" placeholder="DaniniNet / project" className="rounded-2xl border border-white/10 bg-white px-4 py-3 text-[#07142b] outline-none" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-slate-200">
        {labels.interest}
        <select name="interest" required className="rounded-2xl border border-white/10 bg-white px-4 py-3 text-[#07142b] outline-none">
          {interests.map((item) => <option key={item.title}>{item.title}</option>)}
        </select>
      </label>
      <label className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm leading-6 text-slate-300">
        <input name="consent" type="checkbox" required className="mt-1" />
        <span>{labels.consent}</span>
      </label>
      <button className="rounded-full bg-[#f7fbff] px-7 py-4 text-sm font-semibold text-[#07142b] disabled:opacity-70" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "..." : labels.submit}
      </button>
      {status === "success" ? <p className="rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-900">{labels.success}</p> : null}
      {status === "error" ? <p className="rounded-2xl bg-red-50 p-4 text-sm text-red-900">{labels.error}</p> : null}
    </form>
  );
}
