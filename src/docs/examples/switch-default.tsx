import { Switch } from "@/registry/cd/ui/switch";

export default function SwitchDefault() {
  return (
    <div className="flex flex-col gap-4 text-sm">
      <label className="flex items-center justify-between gap-6">
        notificações por e-mail <Switch defaultChecked />
      </label>
      <label className="flex items-center justify-between gap-6">
        modo compacto <Switch />
      </label>
    </div>
  );
}
