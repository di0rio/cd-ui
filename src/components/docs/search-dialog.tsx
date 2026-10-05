"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { CornerDownLeftIcon, FileTextIcon, LayoutTemplateIcon, SearchIcon, SquareIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import type { SearchItem } from "@/components/docs/search";
import { useLocale } from "@/components/locale-provider";
import { Kbd } from "@/registry/cd/ui/kbd";
import { cn } from "@/registry/cd/lib/utils";

const normalize = (s: string) => s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

/** The search dialog itself: loaded on the first open (see search.tsx). */
export default function SearchDialog({ items, open, onOpenChange }: { items: SearchItem[]; open: boolean; onOpenChange: (open: boolean) => void }) {
  const { ui } = useLocale();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const list = useRef<HTMLUListElement>(null);

  const results = useMemo(() => {
    const q = normalize(query.trim());
    return q ? items.filter((i) => normalize(`${i.title} ${i.description}`).includes(q)) : items;
  }, [items, query]);

  useEffect(() => {
    list.current?.querySelector(`[data-index="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const go = (item: SearchItem | undefined) => {
    if (!item) return;
    onOpenChange(false);
    router.push(item.href);
  };

  return (
    <DialogPrimitive.Root
      onOpenChange={(next) => {
        onOpenChange(next);
        if (next) {
          setQuery("");
          setActive(0);
        }
      }}
      open={open}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Backdrop className="fixed inset-0 z-50 bg-black/40" />
        <DialogPrimitive.Popup
          aria-label={ui.search.label}
          className="fixed top-[12vh] left-1/2 z-50 flex max-h-[70vh] w-[min(560px,calc(100vw-32px))] -translate-x-1/2 flex-col overflow-hidden rounded-2xl border bg-popover text-popover-foreground shadow-lg/10 outline-none"
        >
          <div className="flex items-center gap-2 border-b px-4">
            <SearchIcon aria-hidden="true" className="size-4 text-muted-foreground" />
            <input
              aria-activedescendant={results[active] ? `search-${active}` : undefined}
              aria-controls="search-results"
              aria-label={ui.search.input}
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
              placeholder={ui.search.placeholder}
              role="combobox"
              aria-expanded="true"
              value={query}
            />
            <Kbd>Esc</Kbd>
          </div>
          <ul className="overflow-y-auto p-2" id="search-results" ref={list} role="listbox">
            {results.length === 0 && <li className="px-3 py-8 text-center text-muted-foreground text-sm">{ui.search.empty} “{query}”.</li>}
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
                {item.group === "guide" ? (
                  <FileTextIcon aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
                ) : item.group === "block" ? (
                  <LayoutTemplateIcon aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
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
