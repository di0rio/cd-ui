import { Separator } from "@/registry/cd/ui/separator";

export default function SeparatorDefault() {
  return (
    <div className="w-full max-w-xs text-sm">
      <p className="font-medium">cd/ui</p>
      <p className="text-muted-foreground">lightweight components on Base UI.</p>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-muted-foreground">
        <span>docs</span>
        <Separator orientation="vertical" />
        <span>components</span>
        <Separator orientation="vertical" />
        <span>github</span>
      </div>
    </div>
  );
}
