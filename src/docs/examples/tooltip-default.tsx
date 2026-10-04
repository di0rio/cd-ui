import { BoldIcon, ItalicIcon, LinkIcon, UnderlineIcon } from "lucide-react";
import { Button } from "@/registry/cd/ui/button";
import { Tooltip, TooltipPopup, TooltipProvider, TooltipTrigger } from "@/registry/cd/ui/tooltip";

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
          <Tooltip key={label}>
            <TooltipTrigger render={<Button aria-label={label} size="icon-sm" variant="ghost" />}>
              <Icon aria-hidden="true" />
            </TooltipTrigger>
            <TooltipPopup>{label}</TooltipPopup>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
