import { Field, FieldLabel } from "@/registry/cd/ui/field";
import { Select, SelectGroup, SelectGroupLabel, SelectItem, SelectPopup, SelectSeparator, SelectTrigger, SelectValue } from "@/registry/cd/ui/select";

const groups = [
  {
    label: "Americas",
    zones: [
      { value: "america/sao_paulo", label: "Sao Paulo (GMT-3)" },
      { value: "america/new_york", label: "New York (GMT-5)" },
      { value: "america/chicago", label: "Chicago (GMT-6)" },
      { value: "america/denver", label: "Denver (GMT-7)" },
      { value: "america/los_angeles", label: "Los Angeles (GMT-8)" },
    ],
  },
  {
    label: "Europe",
    zones: [
      { value: "europe/london", label: "London (GMT+0)" },
      { value: "europe/paris", label: "Paris (GMT+1)" },
      { value: "europe/berlin", label: "Berlin (GMT+1)" },
      { value: "europe/athens", label: "Athens (GMT+2)" },
      { value: "europe/moscow", label: "Moscow (GMT+3)" },
    ],
  },
  {
    label: "Asia and Pacific",
    zones: [
      { value: "asia/dubai", label: "Dubai (GMT+4)" },
      { value: "asia/kolkata", label: "Kolkata (GMT+5:30)" },
      { value: "asia/singapore", label: "Singapore (GMT+8)" },
      { value: "asia/tokyo", label: "Tokyo (GMT+9)" },
      { value: "australia/sydney", label: "Sydney (GMT+10)" },
      { value: "pacific/auckland", label: "Auckland (GMT+12)" },
    ],
  },
];

const items = groups.flatMap((g) => g.zones);

export default function SelectGrouped() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel>time zone</FieldLabel>
      <Select defaultValue="europe/london" items={items}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectPopup>
          {groups.map((group, i) => (
            <SelectGroup key={group.label}>
              {i > 0 && <SelectSeparator />}
              <SelectGroupLabel>{group.label}</SelectGroupLabel>
              {group.zones.map((zone) => (
                <SelectItem key={zone.value} value={zone.value}>
                  {zone.label}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectPopup>
      </Select>
    </Field>
  );
}
