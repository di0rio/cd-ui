import { Button } from "@/registry/cd/ui/button";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/registry/cd/ui/tooltip";

export default function TooltipParts() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger render={<Button variant="outline" />}>{side}</TooltipTrigger>
          <TooltipPopup arrow side={side}>
            Tooltip on the {side}
          </TooltipPopup>
        </Tooltip>
      ))}
    </div>
  );
}
