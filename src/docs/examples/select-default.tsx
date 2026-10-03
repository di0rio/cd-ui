import { Field, FieldLabel } from "@/registry/cd/ui/field";
import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from "@/registry/cd/ui/select";

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "astro", label: "Astro" },
  { value: "remix", label: "React Router" },
  { value: "vite", label: "Vite" },
];

export default function SelectDefault() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel>framework</FieldLabel>
      <Select defaultValue="next" items={frameworks}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectPopup>
          {frameworks.map((f) => (
            <SelectItem key={f.value} value={f.value}>
              {f.label}
            </SelectItem>
          ))}
        </SelectPopup>
      </Select>
    </Field>
  );
}
