import { Alert, AlertDescription, AlertTitle } from "@/registry/cd/ui/alert";

export default function AlertCompact() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-1.5">
      <Alert compact variant="info">
        <AlertTitle>3 files changed</AlertTitle>
      </Alert>
      <Alert compact variant="success">
        <AlertTitle>saved</AlertTitle>
        <AlertDescription>just now</AlertDescription>
      </Alert>
      <Alert compact icon={false} variant="error">
        <AlertTitle>email already in use</AlertTitle>
      </Alert>
    </div>
  );
}
