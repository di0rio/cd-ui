import { Switch } from "@/registry/cd/ui/switch";

export default function SwitchDefault() {
  return (
    <div className="flex flex-col gap-4 text-sm">
      <label className="flex items-center justify-between gap-6">
        email notifications <Switch defaultChecked />
      </label>
      <label className="flex items-center justify-between gap-6">
        compact mode <Switch />
      </label>
    </div>
  );
}
