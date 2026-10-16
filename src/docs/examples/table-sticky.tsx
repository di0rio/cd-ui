import { Badge } from "@/registry/cd/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/cd/ui/table";

const branches = ["main", "main", "feat/billing", "fix/login", "main", "feat/search"];
const envs = ["production", "preview", "preview", "preview", "production", "preview"];
const states = ["ready", "ready", "building", "error", "ready", "ready"] as const;
const variant = { ready: "brand", building: "muted", error: "destructive" } as const;

const deploys = Array.from({ length: 30 }, (_, i) => ({
  id: `dpl_${(7340 - i * 13).toString(36)}${i}`,
  state: states[i % states.length],
  branch: branches[i % branches.length],
  env: envs[i % envs.length],
  commit: (0xa13f09 + i * 7919).toString(16),
  duration: 24 + ((i * 17) % 61),
  size: 1.2 + ((i * 7) % 18) / 10,
}));

export default function TableSticky() {
  return (
    <Table aria-label="Deploys" containerClassName="max-h-80" density="compact" stickyFirstColumn stickyHeader>
      <TableHeader>
        <TableRow>
          <TableHead>Deploy</TableHead>
          <TableHead>State</TableHead>
          <TableHead>Branch</TableHead>
          <TableHead>Environment</TableHead>
          <TableHead>Commit</TableHead>
          <TableHead numeric>Duration</TableHead>
          <TableHead numeric>Bundle</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {deploys.map((d) => (
          <TableRow key={d.id}>
            <TableCell className="whitespace-nowrap font-medium font-mono">{d.id}</TableCell>
            <TableCell>
              <Badge variant={variant[d.state]}>{d.state}</Badge>
            </TableCell>
            <TableCell className="whitespace-nowrap font-mono text-xs">{d.branch}</TableCell>
            <TableCell>{d.env}</TableCell>
            <TableCell className="font-mono text-muted-foreground text-xs">{d.commit}</TableCell>
            <TableCell numeric>{d.duration}s</TableCell>
            <TableCell numeric>{d.size.toFixed(1)} MB</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
