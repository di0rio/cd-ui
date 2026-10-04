import { ArrowUpRightIcon } from "lucide-react";
import { Button } from "@/registry/cd/ui/button";

export default function ButtonLink() {
  return (
    <Button nativeButton={false} render={<a href="https://github.com/di0rio" rel="noopener noreferrer" target="_blank" />} variant="outline">
      open on github <ArrowUpRightIcon aria-hidden="true" />
    </Button>
  );
}
