import { Radio, RadioGroup } from "@/registry/cd/ui/radio-group";

const plans = [
  { value: "free", label: "Free" },
  { value: "pro", label: "Pro" },
  { value: "team", label: "Team" },
];

export default function RadioGroupDefault() {
  return (
    <RadioGroup aria-label="Plan" className="text-sm" defaultValue="pro">
      {plans.map((p) => (
        <label className="flex items-center gap-2" htmlFor={p.value} key={p.value}>
          <Radio id={p.value} value={p.value} /> {p.label}
        </label>
      ))}
      <label className="flex items-center gap-2 text-muted-foreground" htmlFor="enterprise">
        <Radio disabled id="enterprise" value="enterprise" /> Enterprise (contact us)
      </label>
    </RadioGroup>
  );
}
