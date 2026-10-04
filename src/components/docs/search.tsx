"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { CornerDownLeftIcon, FileTextIcon, SearchIcon, SquareIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Kbd } from "@/registry/cd/ui/kbd";
import { cn } from "@/registry/cd/lib/utils";

export type SearchItem = { href: string; title: string; description: string; group: string };

const normalize = (s: string) => s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

/**
 * Busca com ⌘K / Ctrl+K. Aberta pelo teclado centenas de vezes por dia, então abre e fecha
 * sem animação nenhuma (a regra do Raycast).
 */
export function Search({ items }: { items: SearchItem[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const list = useRef<HTMLUListElement>(null);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    return q ? items.filter((i) => normalize(`${i.title} ${i.description}`).includes(q)) : items;
  }, [items, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    list.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const go = (item: SearchItem | undefined) => {
    if (!item) return;
    setOpen(false);
    router.push(item.href);
  };

  return (
    <DialogPrimitive.Root
      onOpenChange={(next) => {
        setOpen(next);
        if (next) {
          setQuery("");
          setActive(0);
        }
      }}
      open={open}
    >
      <DialogPrimitive.Trigger className="flex h-8 cursor-pointer items-center gap-2 rounded-lg border bg-background pr-1.5 pl-2.5 text-muted-foreground text-sm outline-none transition-colors duration-150 hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring">
        <SearchIcon aria-hidden="true" className="size-3.5" />
        <span className="hidden md:inline">buscar docs…</span>
        <span className="hidden gap-0.5 sm:flex">
          <Kbd>Ctrl</Kbd>
          <Kbd>K</Kbd>
        </span>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Backdrop className="fixed inset-0 z-50 bg-black/40" />
        <DialogPrimitive.Popup
          aria-label="Buscar na documentação"
          className="fixed top-[12vh] left-1/2 z-50 flex max-h-[70vh] w-[min(560px,calc(100vw-32px))] -translate-x-1/2 flex-col overflow-hidden rounded-2xl border bg-popover text-popover-foreground shadow-lg/10 outline-none"
        >
          <div className="flex items-center gap-2 border-b px-4">
            <SearchIcon aria-hidden="true" className="size-4 text-muted-foreground" />
            <input
              aria-activedescendant={results[active] ? `search-${active}` : undefined}
              aria-controls="search-results"
              aria-label="Buscar"
              autoFocus
              className="h-12 flex-1 bg-transparent text-[15px] outline-none placeholder:text-muted-foreground"
              onChange={(e) => {
                setQuery(e.target.value);
                setActive(0);
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setActive((a) => Math.min(a + 1, results.length - 1));
                } else if (e.key === "ArrowUp") {
                  e.preventDefault();
                  setActive((a) => Math.max(a - 1, 0));
                } else if (e.key === "Enter") {
                  e.preventDefault();
                  go(results[active]);
                }
              }}
              placeholder="componente ou assunto…"
              role="combobox"
              aria-expanded="true"
              value={query}
            />
            <Kbd>Esc</Kbd>
          </div>
          <ul className="overflow-y-auto p-2" id="search-results" ref={list} role="listbox">
            {results.length === 0 && <li className="px-3 py-8 text-center text-muted-foreground text-sm">Não achei nada pra “{query}”.</li>}
            {results.map((item, i) => (
              <li
                aria-selected={i === active}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm",
                  i === active && "bg-accent",
                )}
                data-index={i}
                id={`search-${i}`}
                key={item.href}
                onClick={() => go(item)}
                onKeyDown={() => {}}
                onMouseMove={() => setActive(i)}
                role="option"
              >
                {item.group === "Guias" ? (
                  <FileTextIcon aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
                ) : (
                  <SquareIcon aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
                )}
                <span className="min-w-0 flex-1">
                  <span className="block font-medium">{item.title}</span>
                  <span className="block truncate text-muted-foreground text-xs">{item.description}</span>
                </span>
                {i === active && <CornerDownLeftIcon aria-hidden="true" className="size-3.5 text-muted-foreground" />}
              </li>
            ))}
          </ul>
        </DialogPrimitive.Popup>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
