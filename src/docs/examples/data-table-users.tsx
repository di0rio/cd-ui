"use client";

import { KeyRoundIcon, MailIcon, PlusIcon, UserXIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/cd/ui/button";
import {
  ColumnToggle,
  type CsvColumn,
  ExportCsvButton,
  matchesQuery,
  rowArrowKeys,
  SortableHead,
  TableBulkBar,
  TableFilterChips,
  TablePagination,
  TableRelativeDate,
  TableRowActions,
  TableSearch,
  TableSelectCell,
  TableSelectHead,
  TableStatus,
  TableToolbar,
  TableUser,
  usePagination,
  useSelection,
  useSort,
} from "@/registry/cd/ui/data-table";
import { DropdownMenuItem, DropdownMenuSeparator } from "@/registry/cd/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableEmpty, TableHead, TableHeader, TableRow } from "@/registry/cd/ui/table";

const hour = 3_600_000;
const ago = (hours: number) => Date.now() - hours * hour;

type User = { id: string; name: string; email: string; role: string; status: "active" | "invited" | "suspended"; seen: number };

const initial: User[] = [
  { id: "u1", name: "Marina Alves", email: "marina@helio.studio", role: "Admin", status: "active", seen: ago(0.2) },
  { id: "u2", name: "Tiago Ferraz", email: "tiago@orbit.foods", role: "Editor", status: "active", seen: ago(5) },
  { id: "u3", name: "Joana Reis", email: "joana@northwind.dev", role: "Editor", status: "invited", seen: ago(30) },
  { id: "u4", name: "Caio Mendes", email: "caio@acme.co", role: "Viewer", status: "active", seen: ago(52) },
  { id: "u5", name: "Lara Costa", email: "lara@brightside.co", role: "Viewer", status: "suspended", seen: ago(400) },
  { id: "u6", name: "Davi Souza", email: "davi@helio.studio", role: "Admin", status: "active", seen: ago(3) },
  { id: "u7", name: "Inês Duarte", email: "ines@orbit.foods", role: "Editor", status: "invited", seen: ago(96) },
  { id: "u8", name: "Rui Lopes", email: "rui@northwind.dev", role: "Viewer", status: "active", seen: ago(210) },
];

const tone = { active: "success", invited: "warning", suspended: "danger" } as const;

const columns = [
  { id: "role", label: "Role" },
  { id: "status", label: "Status" },
  { id: "seen", label: "Last seen" },
] as const;

const csv: CsvColumn<User>[] = [
  { header: "Name", value: (u) => u.name },
  { header: "Email", value: (u) => u.email },
  { header: "Role", value: (u) => u.role },
  { header: "Status", value: (u) => u.status },
  { header: "Last seen", value: (u) => new Date(u.seen) },
];

export default function DataTableUsers() {
  const [users, setUsers] = useState(initial);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const hidden = useSelection<string>();
  const show = (id: string) => !hidden.has(id);

  const filtered = users.filter((u) => (filter === "all" || u.status === filter) && matchesQuery(u, query));
  const { rows, toggle, directionOf } = useSort(filtered, { key: "seen", direction: "desc" });
  const pager = usePagination(rows.length, 6);
  const page = pager.slice(rows);
  const selection = useSelection(page.map((u) => u.id));

  const remove = (ids: string[]) => {
    setUsers((all) => all.filter((u) => !ids.includes(u.id)));
    selection.clear();
  };
  const duplicate = (u: User) => setUsers((all) => [{ ...u, id: `${u.id}-copy`, name: `${u.name} (copy)`, status: "invited", seen: Date.now() }, ...all]);
  const count = (status: string) => users.filter((u) => status === "all" || u.status === status).length;

  return (
    <div className="flex w-full flex-col gap-3">
      <TableToolbar>
        <TableSearch label="Search users" onValueChange={setQuery} placeholder="Search users" value={query} />
        <TableFilterChips
          label="Filter by status"
          onValueChange={(id) => {
            setFilter(id);
            pager.setPage(0);
          }}
          options={[
            { id: "all", label: "All", count: count("all") },
            { id: "active", label: "Active", count: count("active") },
            { id: "invited", label: "Invited", count: count("invited") },
            { id: "suspended", label: "Suspended", count: count("suspended") },
          ]}
          value={filter}
        />
        <div className="flex flex-wrap items-center gap-2 sm:ms-auto">
          <ColumnToggle columns={columns} hidden={hidden.selected} onToggle={hidden.toggle} />
          <ExportCsvButton columns={csv} filename="users.csv" rows={rows} />
          <Button className="rounded-md" size="sm" variant="brand">
            <PlusIcon aria-hidden="true" />
            Invite user
          </Button>
        </div>
      </TableToolbar>
      <TableBulkBar count={selection.selected.size} onClear={selection.clear}>
        <Button className="rounded-md text-background hover:bg-background/15" onClick={() => remove([...selection.selected])} size="sm" variant="ghost">
          Remove
        </Button>
      </TableBulkBar>
      <Table aria-label="Users" density="comfortable">
        <TableHeader>
          <TableRow>
            <TableSelectHead checked={selection.allSelected} indeterminate={selection.someSelected} onCheckedChange={selection.toggleAll} />
            <SortableHead direction={directionOf("name")} onSort={() => toggle("name")}>
              User
            </SortableHead>
            {show("role") && (
              <SortableHead direction={directionOf("role")} onSort={() => toggle("role")}>
                Role
              </SortableHead>
            )}
            {show("status") && <TableHead>Status</TableHead>}
            {show("seen") && (
              <SortableHead direction={directionOf("seen")} onSort={() => toggle("seen")}>
                Last seen
              </SortableHead>
            )}
            <TableHead className="w-px">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody onKeyDown={rowArrowKeys}>
          {page.length === 0 && <TableEmpty colSpan={6}>No user matches.</TableEmpty>}
          {page.map((u) => (
            <TableRow data-state={selection.has(u.id) ? "selected" : undefined} key={u.id}>
              <TableSelectCell checked={selection.has(u.id)} label={`Select ${u.name}`} onCheckedChange={() => selection.toggle(u.id)} />
              <TableCell>
                <TableUser description={u.email} name={u.name} />
              </TableCell>
              {show("role") && <TableCell>{u.role}</TableCell>}
              {show("status") && (
                <TableCell>
                  <TableStatus tone={tone[u.status]}>{u.status}</TableStatus>
                </TableCell>
              )}
              {show("seen") && (
                <TableCell>
                  <TableRelativeDate date={u.seen} />
                </TableCell>
              )}
              <TableRowActions
                label={u.name}
                menu={
                  <>
                    <DropdownMenuItem icon={<MailIcon />}>Resend invite</DropdownMenuItem>
                    <DropdownMenuItem icon={<KeyRoundIcon />}>Reset password</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem confirm icon={<UserXIcon />} variant="destructive">
                      Suspend
                    </DropdownMenuItem>
                  </>
                }
                onDelete={() => remove([u.id])}
                onDuplicate={() => duplicate(u)}
                onEdit={() => setQuery(u.name)}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination end={pager.end} onPageChange={pager.setPage} page={pager.page} pageCount={pager.pageCount} start={pager.start} total={rows.length} />
    </div>
  );
}
