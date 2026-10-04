import { CircleAlertIcon, InfoIcon, SparklesIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/registry/cd/ui/alert";

export default function AlertDefault() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Alert>
        <InfoIcon aria-hidden="true" />
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>You can add components to your app with the CLI.</AlertDescription>
      </Alert>
      <Alert variant="brand">
        <SparklesIcon aria-hidden="true" />
        <AlertTitle>New version available</AlertTitle>
        <AlertDescription>Update to get the latest components and fixes.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <CircleAlertIcon aria-hidden="true" />
        <AlertTitle>Payment failed</AlertTitle>
        <AlertDescription>Your card was declined. Check the details and try again.</AlertDescription>
      </Alert>
    </div>
  );
}
