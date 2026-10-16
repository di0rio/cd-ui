import { Badge } from "@/registry/cd/ui/badge";
import { Button } from "@/registry/cd/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/registry/cd/ui/card";

export default function CardCartoon() {
  return (
    <Card className="w-full max-w-sm" variant="cartoon">
      <CardHeader>
        <CardTitle>Daily quest</CardTitle>
        <CardDescription>Finish three tasks before midnight.</CardDescription>
      </CardHeader>
      <CardContent>
        <Badge variant="cartoon">2 of 3 done</Badge>
      </CardContent>
      <CardFooter>
        <Button variant="cartoon">Keep going</Button>
      </CardFooter>
    </Card>
  );
}
