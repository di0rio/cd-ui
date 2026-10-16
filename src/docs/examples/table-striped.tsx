import { Avatar, AvatarFallback } from "@/registry/cd/ui/avatar";
import { Badge } from "@/registry/cd/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/cd/ui/table";

const team = [
  { name: "Marina Alves", email: "marina@northwind.dev", role: "Owner", seen: "2 min ago" },
  { name: "Tiago Ferraz", email: "tiago@northwind.dev", role: "Admin", seen: "1 hour ago" },
  { name: "Joana Reis", email: "joana@northwind.dev", role: "Editor", seen: "Yesterday" },
  { name: "Caio Mendes", email: "caio@northwind.dev", role: "Editor", seen: "3 days ago" },
  { name: "Lara Costa", email: "lara@northwind.dev", role: "Viewer", seen: "Last week" },
] as const;

export default function TableStriped() {
  return (
    <Table aria-label="Team members" variant="striped">
      <TableHeader>
        <TableRow>
          <TableHead>Member</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Last seen</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {team.map((m) => (
          <TableRow key={m.email}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar className="size-8">
                  <AvatarFallback>{m.name.slice(0, 1)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col leading-tight">
                  <span className="font-medium">{m.name}</span>
                  <span className="text-muted-foreground text-xs">{m.email}</span>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge variant={m.role === "Owner" ? "brand" : "outline"}>{m.role}</Badge>
            </TableCell>
            <TableCell className="text-muted-foreground">{m.seen}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
