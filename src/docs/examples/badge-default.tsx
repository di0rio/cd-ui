import { Badge } from "@/registry/cd/ui/badge";

export default function BadgeDefault() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge>default</Badge>
      <Badge variant="brand">new</Badge>
      <Badge variant="outline">draft</Badge>
      <Badge variant="muted">archived</Badge>
      <Badge variant="destructive">failed</Badge>
    </div>
  );
}
