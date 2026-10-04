import { Button } from "@/registry/cd/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/registry/cd/ui/dialog";

export default function DialogDefault() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>delete project</DialogTrigger>
      <DialogPopup closeLabel="Close">
        <DialogHeader>
          <DialogTitle>delete project?</DialogTitle>
          <DialogDescription>this removes the project and all its files. this cannot be undone.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="ghost" />}>cancel</DialogClose>
          <DialogClose render={<Button variant="destructive" />}>delete</DialogClose>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}
