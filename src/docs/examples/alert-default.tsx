import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/registry/cd/ui/alert";
import { Button } from "@/registry/cd/ui/button";

export default function AlertDefault() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-2">
      <Alert variant="info" time="09:41:07">
        <AlertTitle>deploy queued</AlertTitle>
        <AlertDescription>build 482 waits behind 2 others</AlertDescription>
      </Alert>
      <Alert variant="success" time="09:41:52">
        <AlertTitle>deploy finished</AlertTitle>
        <AlertDescription>live on cd-ui.dev in 38s</AlertDescription>
      </Alert>
      <Alert variant="warn" time="09:42:15">
        <AlertTitle>disk almost full</AlertTitle>
        <AlertDescription>14 GB left on /dev/sda1</AlertDescription>
        <AlertAction>
          <Button size="sm" variant="outline">
            Clean up
          </Button>
        </AlertAction>
      </Alert>
      <Alert variant="error" tag="fatal" time="09:43:01">
        <AlertTitle>payment failed</AlertTitle>
        <AlertDescription>card declined, retry in 3 attempts</AlertDescription>
      </Alert>
    </div>
  );
}
