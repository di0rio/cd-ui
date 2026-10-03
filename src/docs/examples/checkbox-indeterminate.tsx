"use client";

import { useState } from "react";
import { Checkbox } from "@/registry/cd/ui/checkbox";

const items = ["agenda", "prontuário", "financeiro"];

export default function CheckboxIndeterminate() {
  const [checked, setChecked] = useState<string[]>(["agenda"]);
  const all = checked.length === items.length;

  return (
    <div className="flex flex-col gap-3 text-sm">
      <label className="flex items-center gap-2 font-medium">
        <Checkbox
          checked={all}
          indeterminate={!all && checked.length > 0}
          onCheckedChange={(value) => setChecked(value ? items : [])}
        />
        todos os módulos
      </label>
      <div className="flex flex-col gap-3 pl-6">
        {items.map((item) => (
          <label className="flex items-center gap-2" key={item}>
            <Checkbox
              checked={checked.includes(item)}
              onCheckedChange={(value) => setChecked((prev) => (value ? [...prev, item] : prev.filter((i) => i !== item)))}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
}
