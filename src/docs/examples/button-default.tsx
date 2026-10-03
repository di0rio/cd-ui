import { Button } from "@/registry/cd/ui/button";

export default function ButtonDefault() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button>salvar</Button>
      <Button variant="brand">começar</Button>
      <Button variant="outline">cancelar</Button>
      <Button variant="ghost">ignorar</Button>
      <Button variant="destructive">apagar</Button>
      <Button variant="link">ver mais</Button>
    </div>
  );
}
