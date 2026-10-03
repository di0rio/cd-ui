"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/registry/cd/lib/utils";

export type NavGroup = { title: string; links: { href: string; title: string; badge?: string }[] };

/** Navegação das docs. A página atual ganha fundo e um ponto amarelo. */
export function Sidebar({ groups }: { groups: NavGroup[] }) {
  const path = usePathname();
  return (
    <nav aria-label="Documentação" className="flex flex-col gap-6 text-sm">
      {groups.map((group) => (
        <div key={group.title}>
          <p className="mb-1.5 px-2.5 font-medium text-muted-foreground text-xs">{group.title}</p>
          <ul className="flex flex-col">
            {group.links.map((link) => {
              const current = path === link.href;
              return (
                <li key={link.href}>
                  <Link
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-2.5 py-1.5 text-muted-foreground outline-none transition-colors duration-150 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring",
                      current && "bg-accent font-medium text-foreground",
                    )}
                    href={link.href}
                  >
                    <span className="flex-1">{link.title}</span>
                    {link.badge && <span className="font-mono text-[10px] text-muted-foreground">{link.badge}</span>}
                    {current && <span aria-hidden="true" className="size-1.5 rounded-full bg-brand" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
