import { Badge } from "@/registry/cd/ui/badge";
import { Button } from "@/registry/cd/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/registry/cd/ui/card";

export default function CardDefault() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle>loopvet</CardTitle>
          <Badge variant="brand">in production</Badge>
        </div>
        <CardDescription>management system for veterinary clinics.</CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground">scheduling, records, and billing on a single screen.</CardContent>
      <CardFooter>
        <Button size="sm">open</Button>
        <Button size="sm" variant="ghost">
          details
        </Button>
      </CardFooter>
    </Card>
  );
}
