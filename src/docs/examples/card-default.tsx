import { Badge } from "@/registry/cd/ui/badge";
import { Button } from "@/registry/cd/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/registry/cd/ui/card";

export default function CardDefault() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle>loopvet</CardTitle>
          <Badge variant="brand">em produção</Badge>
        </div>
        <CardDescription>sistema de gestão pra clínica veterinária.</CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground">agenda, prontuário e financeiro numa tela só.</CardContent>
      <CardFooter>
        <Button size="sm">abrir</Button>
        <Button size="sm" variant="ghost">
          detalhes
        </Button>
      </CardFooter>
    </Card>
  );
}
