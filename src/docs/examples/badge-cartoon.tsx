import { Badge } from "@/registry/cd/ui/badge";

export default function BadgeCartoon() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Badge variant="cartoon">New</Badge>
      <Badge variant="cartoon">Level 7</Badge>
      <Badge className="bg-card text-foreground" variant="cartoon">
        Your color
      </Badge>
    </div>
  );
}
