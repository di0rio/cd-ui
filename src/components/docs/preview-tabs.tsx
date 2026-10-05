"use client";

import type { ReactNode } from "react";
import { useLocale } from "@/components/locale-provider";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/registry/cd/ui/tabs";

/** Switches between the running component and the example code (both come ready from the server). */
export function PreviewTabs({ preview, code }: { preview: ReactNode; code: ReactNode }) {
  const { ui } = useLocale();
  return (
    <Tabs className="gap-3" defaultValue="preview">
      <TabsList aria-label={ui.preview.view} className="[&_[data-slot=tabs-indicator]]:duration-150">
        <TabsTab className="h-7 px-3 text-[13px] duration-150" value="preview">
          {ui.preview.preview}
        </TabsTab>
        <TabsTab className="h-7 px-3 text-[13px] duration-150" value="code">
          {ui.preview.code}
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
