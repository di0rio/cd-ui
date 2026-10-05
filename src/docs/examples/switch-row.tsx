import { SwitchRow } from "@/registry/cd/ui/switch";

export default function SwitchRowExample() {
  return (
    <div className="flex w-full max-w-sm flex-col divide-y">
      <SwitchRow className="py-3" defaultChecked description="A summary of activity, once a week." title="Weekly digest" />
      <SwitchRow className="py-3" description="Only for sign-ins from a new device." title="Security alerts" />
      <SwitchRow className="py-3" description="Unavailable on your plan." disabled title="Priority support" />
    </div>
  );
}
