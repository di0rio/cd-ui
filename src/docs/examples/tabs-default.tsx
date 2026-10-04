import { Tabs, TabsList, TabsPanel, TabsTab } from "@/registry/cd/ui/tabs";

const periods = [
  { value: "day", label: "today", text: "12 contributions today." },
  { value: "week", label: "week", text: "48 contributions this week." },
  { value: "month", label: "month", text: "190 contributions this month." },
];

export default function TabsDefault() {
  return (
    <Tabs className="items-center" defaultValue="week">
      <TabsList aria-label="Period">
        {periods.map((p) => (
          <TabsTab key={p.value} value={p.value}>
            {p.label}
          </TabsTab>
        ))}
      </TabsList>
      {periods.map((p) => (
        <TabsPanel className="text-muted-foreground text-sm" key={p.value} value={p.value}>
          {p.text}
        </TabsPanel>
      ))}
    </Tabs>
  );
}
