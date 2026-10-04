import type { translations } from "@/i18n/generated";

/** Traduções de um idioma. Em componentes async (depois de um `await`) o `t` não funciona: use `translations[locale]`. */
export type Dict = (typeof translations)[keyof typeof translations];
