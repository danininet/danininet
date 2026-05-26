export type LeadLocale = "sr" | "de" | "en";

export type LeadPayload = {
  email: string;
  name?: string;
  interest: string;
  source: string;
  locale: LeadLocale;
  consent: boolean;
};

const supportedLocales: LeadLocale[] = ["sr", "de", "en"];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function validateLeadPayload(input: unknown): { ok: true; data: LeadPayload } | { ok: false; error: string } {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Invalid payload" };
  }

  const payload = input as Partial<LeadPayload>;

  if (!payload.email || typeof payload.email !== "string" || !isValidEmail(payload.email)) {
    return { ok: false, error: "Invalid email" };
  }

  if (!payload.consent) {
    return { ok: false, error: "Consent is required" };
  }

  if (!payload.interest || typeof payload.interest !== "string") {
    return { ok: false, error: "Interest is required" };
  }

  if (!payload.source || typeof payload.source !== "string") {
    return { ok: false, error: "Source is required" };
  }

  if (!payload.locale || !supportedLocales.includes(payload.locale)) {
    return { ok: false, error: "Unsupported locale" };
  }

  return {
    ok: true,
    data: {
      email: payload.email.trim().toLowerCase(),
      name: typeof payload.name === "string" ? payload.name.trim() : undefined,
      interest: payload.interest.trim(),
      source: payload.source.trim(),
      locale: payload.locale,
      consent: true,
    },
  };
}
