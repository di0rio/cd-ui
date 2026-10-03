import { Switch } from "@/registry/cd/ui/switch";

export default function SwitchDefault() {
  return (
    <div className="flex flex-col gap-4 text-sm">
      <label htmlFor="email" className="flex items-center justify-between gap-6">
        notificações por e-mail <Switch defaultChecked />
      </label>
      <label htmlFor="compacto" className="flex items-center justify-between gap-6">
        modo compacto <Switch />
      </label>
    </div>
  );
}
