import { Kbd } from "@/registry/cd/ui/kbd";

export default function KbdDefault() {
  return (
    <p className="text-muted-foreground text-sm">
      aperte <Kbd>Ctrl</Kbd> <Kbd>K</Kbd> pra buscar, ou <Kbd>Esc</Kbd> pra fechar.
    </p>
  );
}
