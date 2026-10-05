"use client";

import { createContext, type ReactNode, use } from "react";
import type { Locale } from "@/lib/locale-path";

/** Texts for Client Components, resolved on the server (so the client bundle does not carry the translations). */
export type Ui = {
  search: { open: string; label: string; input: string; placeholder: string; empty: string };
  sidebar: { label: string };
  toc: { label: string; title: string };
  home: string;
  copy: { copy: string; copied: string };
  theme: { toLight: string; toDark: string };
  install: { packageManager: string };
  preview: { view: string; preview: string; code: string };
  language: { label: string; en: string; pt: string };
};

const Context = createContext<{ locale: Locale; ui: Ui } | null>(null);

export function LocaleProvider({ locale, ui, children }: { locale: Locale; ui: Ui; children: ReactNode }) {
  return <Context value={{ locale, ui }}>{children}</Context>;
}

export function useLocale() {
  const value = use(Context);
  if (!value) throw new Error("useLocale precisa estar dentro de <LocaleProvider>.");
  return value;
}
