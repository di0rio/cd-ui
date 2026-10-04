import { getLocale } from "@/i18n/generated";
import { type Locale, withLocale } from "@/lib/locale-path";

/** Link interno no idioma atual (só em Server Components). */
export const href = (path: string) => withLocale(getLocale() as Locale, path);
