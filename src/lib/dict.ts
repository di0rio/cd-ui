import type { translations } from "@/i18n/generated";

/** Translations of one language, from `getT()` in src/i18n/server.ts. */
export type Dict = (typeof translations)[keyof typeof translations];
