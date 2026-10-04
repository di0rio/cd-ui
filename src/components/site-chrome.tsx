"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { stripLocale } from "@/lib/locale-path";

/** Header e footer do site. A página cheia de um bloco (/blocks/x/view) renderiza sozinha, sem eles. */
export function SiteChrome({ header, footer, children }: { header: ReactNode; footer: ReactNode; children: ReactNode }) {
  const bare = /^\/blocks\/[^/]+\/view\/?$/.test(stripLocale(usePathname()));
  if (bare) return <>{children}</>;
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}
