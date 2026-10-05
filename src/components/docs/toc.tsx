"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { cn } from "@/registry/cd/lib/utils";

export type TocItem = { id: string; title: string; depth?: 1 | 2 };

/** "On this page": follows the visible section while you scroll. */
export function Toc({ items }: { items: TocItem[] }) {
  const { ui } = useLocale();
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-80px 0px -65% 0px" },
    );
    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label={ui.toc.label} className="text-sm">
      <p className="mb-2 font-medium text-muted-foreground text-xs">{ui.toc.title}</p>
      <ul className="flex flex-col border-l">
        {items.map((item) => (
          <li key={item.id}>
            <a
              aria-current={active === item.id ? "location" : undefined}
              className={cn(
                "-ml-px block border-transparent border-l py-1 text-muted-foreground transition-colors duration-150 hover:text-foreground",
                item.depth === 2 ? "pl-6 text-[13px]" : "pl-3",
                active === item.id && "border-foreground text-foreground",
              )}
              href={`#${item.id}`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
