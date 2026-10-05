import { locale as localeParam } from "next/root-params";
import { type Locale, withLocale } from "@/lib/locale-path";
import { translations } from "./generated";

export const locales = Object.keys(translations) as Locale[];

/** Translations and link helper for the URL locale (`/en`, `/pt`), usable in any Server Component. */
export async function getT() {
  const locale = (await localeParam()) as Locale;
  return { locale, tr: translations[locale], href: (path: string) => withLocale(locale, path) };
}
