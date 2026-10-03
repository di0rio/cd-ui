import { Badge } from "@/registry/cd/ui/badge";

export default function BadgeDefault() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge>padrão</Badge>
      <Badge variant="brand">novo</Badge>
      <Badge variant="outline">rascunho</Badge>
      <Badge variant="muted">arquivado</Badge>
      <Badge variant="destructive">falhou</Badge>
    </div>
  );
}
