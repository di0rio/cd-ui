import { Input } from "@/registry/cd/ui/input";

export default function InputDefault() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Input aria-label="Name" placeholder="your name" />
      <Input aria-label="File" type="file" />
      <Input aria-label="Disabled" disabled placeholder="disabled" />
    </div>
  );
}
