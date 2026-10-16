import { Badge } from "@/registry/cd/ui/badge";
import { Button } from "@/registry/cd/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/cd/ui/card";

export default function ComboCartoonSet() {
  return (
    <Card className="w-full max-w-sm [--cartoon-border:3px] [--cartoon-ink:#4c1d95] [--cartoon-offset:6px]" variant="cartoon">
      <CardHeader>
        <CardTitle>One set of tokens</CardTitle>
        <CardDescription>Three variables on the card restyle everything inside it.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-3">
        <Badge variant="cartoon">purple ink</Badge>
        <Button variant="cartoon">Fat shadow</Button>
      </CardContent>
    </Card>
  );
}
