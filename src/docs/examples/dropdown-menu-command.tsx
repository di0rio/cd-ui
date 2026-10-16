"use client";

import { BellIcon, ChevronDownIcon, FileTextIcon, FolderPlusIcon, GitBranchIcon, SettingsIcon, UploadIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/cd/ui/button";
import {
  DropdownMenu,
  DropdownMenuEmpty,
  DropdownMenuFooter,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPopup,
  DropdownMenuSearch,
  DropdownMenuTrigger,
  matchesMenuQuery,
  useRecentItems,
} from "@/registry/cd/ui/dropdown-menu";

const actions = [
  { id: "file", label: "New file", description: "Start from a blank page", icon: <FileTextIcon />, shortcut: "N" },
  { id: "folder", label: "New folder", description: "Group files together", icon: <FolderPlusIcon />, shortcut: "Shift N" },
  { id: "upload", label: "Upload", description: "From your computer", icon: <UploadIcon />, shortcut: "U" },
  { id: "branch", label: "Create branch", description: "Work on a copy", icon: <GitBranchIcon />, shortcut: "B" },
  { id: "alerts", label: "Notifications", description: "Choose what reaches you", icon: <BellIcon />, shortcut: "G N" },
  { id: "settings", label: "Settings", description: "Workspace preferences", icon: <SettingsIcon />, shortcut: "," },
];

export default function DropdownMenuCommand() {
  const [query, setQuery] = useState("");
  const { recent, push } = useRecentItems<string>(2);

  const matches = actions.filter((a) => matchesMenuQuery(`${a.label} ${a.description}`, query));
  const last = query ? [] : matches.filter((a) => recent.includes(a.id));
  const rest = matches.filter((a) => !last.includes(a));

  const renderItem = (a: (typeof actions)[number]) => (
    <DropdownMenuItem description={a.description} icon={a.icon} key={a.id} label={a.label} onClick={() => push(a.id)} shortcut={a.shortcut}>
      {a.label}
    </DropdownMenuItem>
  );

  return (
    <DropdownMenu onOpenChange={(open) => open || setQuery("")}>
      <DropdownMenuTrigger render={<Button variant="outline" />}>
        quick actions <ChevronDownIcon aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuPopup className="w-72">
        <DropdownMenuSearch aria-label="Filter actions" onChange={(e) => setQuery(e.target.value)} placeholder="Filter actions" value={query} />
        {last.length > 0 && (
          <DropdownMenuGroup>
            <DropdownMenuLabel>Recent</DropdownMenuLabel>
            {last.map(renderItem)}
          </DropdownMenuGroup>
        )}
        <DropdownMenuGroup>
          {last.length > 0 && rest.length > 0 && <DropdownMenuLabel>All actions</DropdownMenuLabel>}
          {rest.map(renderItem)}
        </DropdownMenuGroup>
        {matches.length === 0 && <DropdownMenuEmpty>{`Nothing matches "${query}".`}</DropdownMenuEmpty>}
        <DropdownMenuFooter />
      </DropdownMenuPopup>
    </DropdownMenu>
  );
}
