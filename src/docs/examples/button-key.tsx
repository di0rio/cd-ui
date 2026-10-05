import { Button } from "@/registry/cd/ui/button";

export default function ButtonKey() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button variant="key">Ctrl</Button>
      <Button variant="key">K</Button>
      <Button size="sm" variant="key">
        Esc
      </Button>
      <Button size="icon" variant="key">
        ↵
      </Button>
    </div>
  );
}
