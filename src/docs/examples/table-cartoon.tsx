import { Badge } from "@/registry/cd/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/cd/ui/table";

const scores = [
  { rank: 1, player: "Pixel Fox", quest: "Dragon cave", status: "legend", points: 9840 },
  { rank: 2, player: "Mochi", quest: "Cloud castle", status: "hero", points: 8715 },
  { rank: 3, player: "Bruno B.", quest: "Candy swamp", status: "hero", points: 7302 },
  { rank: 4, player: "Zeca", quest: "Dragon cave", status: "rookie", points: 5190 },
] as const;

export default function TableCartoon() {
  return (
    <Table aria-label="Leaderboard" containerClassName="mb-1 me-1" variant="cartoon">
      <TableHeader>
        <TableRow>
          <TableHead numeric>#</TableHead>
          <TableHead>Player</TableHead>
          <TableHead>Quest</TableHead>
          <TableHead>Title</TableHead>
          <TableHead numeric>Points</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {scores.map((s) => (
          <TableRow key={s.player}>
            <TableCell className="font-bold" numeric>
              {s.rank}
            </TableCell>
            <TableCell className="font-bold">{s.player}</TableCell>
            <TableCell>{s.quest}</TableCell>
            <TableCell>
              <Badge variant="cartoon">{s.status}</Badge>
            </TableCell>
            <TableCell className="font-bold" numeric>
              {s.points.toLocaleString("en-US")}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
