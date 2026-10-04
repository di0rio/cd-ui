export type Locale = "en" | "pt";

const PREFIX = /^\/(en|pt)(?=\/|$)/;

/** Tira o prefixo de idioma de um caminho (`/pt/docs` → `/docs`). */
export const stripLocale = (path: string) => path.replace(PREFIX, "") || "/";

/** Põe o prefixo de idioma: `/docs` → `/pt/docs`, `/` → `/pt`, `/#x` → `/pt#x`. */
export function withLocale(locale: Locale, path: string) {
  if (path === "/") return `/${locale}`;
  if (path.startsWith("/#")) return `/${locale}${path.slice(1)}`;
  return `/${locale}${path}`;
}
