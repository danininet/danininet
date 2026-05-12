"use client";

import { useState } from "react";

type Props = {
  locale: string;
  labels: {
    formName: string;
    formEmail: string;
    formMessage: string;
    consent: string;
    publishConsent: string;
    submit: string;
    success: string;
    error: string;
  };
};

export function GuestbookForm({ locale, labels }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      locale,
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
      consent: formData.get("consent") === "on",
      publishConsent: formData.get("publishConsent") === "on"
    };

    const response = await fetch("/api/guestbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-5">
        <label className="grid gap-2">
          <span className="text-sm font-bold text-slate-800">{labels.formName}</span>
          <input name="name" required maxLength={80} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-500" />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-bold text-slate-800">{labels.formEmail}</span>
          <input name="email" type="email" required maxLength={140} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-500" />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-bold text-slate-800">{labels.formMessage}</span>
          <textarea name="message" required minLength={10} maxLength={1400} rows={7} className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-500" />
        </label>

        <label className="flex gap-3 text-sm leading-6 text-slate-600">
          <input name="consent" type="checkbox" required className="mt-1" />
          <span>{labels.consent}</span>
        </label>

        <label className="flex gap-3 text-sm leading-6 text-slate-600">
          <input name="publishConsent" type="checkbox" className="mt-1" />
          <span>{labels.publishConsent}</span>
        </label>

        <button disabled={status === "loading"} className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white hover:bg-slate-800 disabled:opacity-60">
          {status === "loading" ? "..." : labels.submit}
        </button>

        {status === "success" && <p className="rounded-2xl bg-emerald-50 p-4 text-sm font-medium text-emerald-900">{labels.success}</p>}
        {status === "error" && <p className="rounded-2xl bg-red-50 p-4 text-sm font-medium text-red-900">{labels.error}</p>}
      </div>
    </form>
  );
}
