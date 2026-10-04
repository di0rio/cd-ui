import { Button } from "@/registry/cd/ui/button";

export default function ButtonDefault() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button>save</Button>
      <Button variant="brand">get started</Button>
      <Button variant="outline">cancel</Button>
      <Button variant="ghost">dismiss</Button>
      <Button variant="destructive">delete</Button>
      <Button variant="link">learn more</Button>
    </div>
  );
}
