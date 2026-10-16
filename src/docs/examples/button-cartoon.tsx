import { Button } from "@/registry/cd/ui/button";

export default function ButtonCartoon() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Button size="sm" variant="cartoon">
        Small
      </Button>
      <Button variant="cartoon">Press me</Button>
      <Button size="lg" variant="cartoon">
        Big one
      </Button>
      <Button className="bg-card text-foreground hover:bg-card" variant="cartoon">
        Your color
      </Button>
      <Button size="icon" variant="cartoon">
        ★
      </Button>
    </div>
  );
}
