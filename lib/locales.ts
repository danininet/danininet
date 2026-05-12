export const locales = ["sr", "de", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function normalizeLocale(value: string): Locale {
  return isLocale(value) ? value : "sr";
}
