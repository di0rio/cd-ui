import { Spinner } from "@/registry/cd/ui/spinner";

export default function SpinnerDefault() {
  return (
    <div className="flex items-center gap-6 text-muted-foreground">
      <Spinner />
      <Spinner className="size-6" />
      <span className="flex items-center gap-2 text-sm">
        <Spinner className="text-brand-foreground" label="Saving" /> saving…
      </span>
    </div>
  );
}
