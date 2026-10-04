import { PlusIcon } from "lucide-react";
import { Button } from "@/registry/cd/ui/button";

export default function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button size="sm">small</Button>
      <Button size="md">medium</Button>
      <Button size="lg">large</Button>
      <Button aria-label="Add" size="icon" variant="outline">
        <PlusIcon aria-hidden="true" />
      </Button>
    </div>
  );
}
