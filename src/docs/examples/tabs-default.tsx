import { Tabs, TabsList, TabsPanel, TabsTab } from "@/registry/cd/ui/tabs";

const periods = [
  { value: "dia", label: "hoje", text: "12 contribuições hoje." },
  { value: "semana", label: "semana", text: "48 contribuições nesta semana." },
  { value: "mes", label: "mês", text: "190 contribuições neste mês." },
];

export default function TabsDefault() {
  return (
    <Tabs className="items-center" defaultValue="semana">
      <TabsList aria-label="Período">
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
