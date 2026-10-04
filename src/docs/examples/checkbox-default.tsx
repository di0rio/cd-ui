import { Checkbox } from "@/registry/cd/ui/checkbox";

export default function CheckboxDefault() {
  return (
    <div className="flex flex-col gap-3 text-sm">
      <label htmlFor="email" className="flex items-center gap-2">
        <Checkbox defaultChecked /> get product updates by email
      </label>
      <label htmlFor="device" className="flex items-center gap-2">
        <Checkbox /> remember this device
      </label>
      <label htmlFor="disabled" className="flex items-center gap-2 text-muted-foreground">
        <Checkbox disabled /> disabled option
      </label>
    </div>
  );
}
