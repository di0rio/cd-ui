"use client";

import { useState } from "react";
import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/registry/cd/ui/alert";
import { Button } from "@/registry/cd/ui/button";

export default function AlertDismissible() {
  const [round, setRound] = useState(0);
  return (
    <div className="flex w-full max-w-xl flex-col items-start gap-2">
      <Alert key={round} onDismiss={() => {}} variant="warn">
        <AlertTitle>disk almost full</AlertTitle>
        <AlertDescription>14 GB left</AlertDescription>
        <AlertAction>
          <Button size="sm" variant="outline">
            Delete old builds
          </Button>
        </AlertAction>
      </Alert>
      <Alert autoHide={5000} key={`auto-${round}`} variant="success">
        <AlertTitle>settings saved</AlertTitle>
        <AlertDescription>this one closes by itself in 5s</AlertDescription>
      </Alert>
      <Button onClick={() => setRound((n) => n + 1)} size="sm" variant="outline">
        Show again
      </Button>
    </div>
  );
}
