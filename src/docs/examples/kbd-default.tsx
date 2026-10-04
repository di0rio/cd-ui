import { Kbd } from "@/registry/cd/ui/kbd";

export default function KbdDefault() {
  return (
    <p className="text-muted-foreground text-sm">
      press <Kbd>Ctrl</Kbd> <Kbd>K</Kbd> to search, or <Kbd>Esc</Kbd> to close.
    </p>
  );
}
