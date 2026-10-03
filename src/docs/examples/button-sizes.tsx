import { PlusIcon } from "lucide-react";
import { Button } from "@/registry/cd/ui/button";

export default function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button size="sm">pequeno</Button>
      <Button size="md">médio</Button>
      <Button size="lg">grande</Button>
      <Button aria-label="Adicionar" size="icon" variant="outline">
        <PlusIcon aria-hidden="true" />
      </Button>
    </div>
  );
}
