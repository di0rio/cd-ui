import { Input } from "@/registry/cd/ui/input";

export default function InputDefault() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Input aria-label="Nome" placeholder="seu nome" />
      <Input aria-label="Arquivo" type="file" />
      <Input aria-label="Desativado" disabled placeholder="desativado" />
    </div>
  );
}
