import { Button } from "@/registry/cd/ui/button";
import { Input } from "@/registry/cd/ui/input";
import { Popover, PopoverDescription, PopoverPopup, PopoverTitle, PopoverTrigger } from "@/registry/cd/ui/popover";

export default function PopoverDefault() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>dimensions</PopoverTrigger>
      <PopoverPopup>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <PopoverTitle>Dimensions</PopoverTitle>
            <PopoverDescription>Set the size of the layer.</PopoverDescription>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Input aria-label="Width" defaultValue="320" inputMode="numeric" />
            <Input aria-label="Height" defaultValue="240" inputMode="numeric" />
          </div>
        </div>
      </PopoverPopup>
    </Popover>
  );
}
