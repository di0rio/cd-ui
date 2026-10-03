"use client";

import type { ReactNode } from "react";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/registry/cd/ui/tabs";

/** Alterna entre o componente rodando e o código do exemplo (os dois já vêm prontos do servidor). */
export function PreviewTabs({ preview, code }: { preview: ReactNode; code: ReactNode }) {
  return (
    <Tabs className="gap-3" defaultValue="preview">
      <TabsList aria-label="Ver">
        <TabsTab className="h-7 px-3 text-[13px]" value="preview">
          preview
        </TabsTab>
        <TabsTab className="h-7 px-3 text-[13px]" value="code">
          código
        </TabsTab>
      </TabsList>
      <TabsPanel keepMounted value="preview">
        {preview}
      </TabsPanel>
      <TabsPanel keepMounted value="code">
        {code}
      </TabsPanel>
    </Tabs>
  );
}
