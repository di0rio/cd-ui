"use client";

import { ChevronDownIcon, CopyIcon, LinkIcon, MailIcon, PencilIcon, Share2Icon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/cd/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuFooter,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPopup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/cd/ui/dropdown-menu";

export default function DropdownMenuDefault() {
  const [grid, setGrid] = useState(true);
  const [sort, setSort] = useState("name");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        options <ChevronDownIcon aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuPopup>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Project</DropdownMenuLabel>
          <DropdownMenuItem description="Change the name and the slug" icon={<PencilIcon />} shortcut="F2">
            Rename
          </DropdownMenuItem>
          <DropdownMenuItem icon={<CopyIcon />} shortcut="Ctrl D">
            Duplicate
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger icon={<Share2Icon />}>Share</DropdownMenuSubTrigger>
            <DropdownMenuPopup>
              <DropdownMenuItem icon={<LinkIcon />}>Copy link</DropdownMenuItem>
              <DropdownMenuItem icon={<MailIcon />}>Send by email</DropdownMenuItem>
            </DropdownMenuPopup>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={grid} onCheckedChange={setGrid}>
          Grid view
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup onValueChange={setSort} value={sort}>
          <DropdownMenuLabel>Sort by</DropdownMenuLabel>
          <DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="date">Date</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem confirm icon={<Trash2Icon />} variant="destructive">
          Delete
        </DropdownMenuItem>
        <DropdownMenuFooter />
      </DropdownMenuPopup>
    </DropdownMenu>
  );
}
