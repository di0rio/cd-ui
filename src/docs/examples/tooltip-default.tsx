import { BoldIcon, ItalicIcon, LinkIcon, UnderlineIcon } from "lucide-react";
import { Button } from "@/registry/cd/ui/button";
import { Tip, TooltipProvider } from "@/registry/cd/ui/tooltip";

const tools = [
  { label: "Bold", Icon: BoldIcon },
  { label: "Italic", Icon: ItalicIcon },
  { label: "Underline", Icon: UnderlineIcon },
  { label: "Link", Icon: LinkIcon },
];

export default function TooltipDefault() {
  return (
    <TooltipProvider>
      <div className="flex gap-1 rounded-lg border bg-background p-1">
        {tools.map(({ label, Icon }) => (
          <Tip content={label} key={label}>
            <Button aria-label={label} size="icon-sm" variant="ghost">
              <Icon aria-hidden="true" />
            </Button>
          </Tip>
        ))}
      </div>
    </TooltipProvider>
  );
}
