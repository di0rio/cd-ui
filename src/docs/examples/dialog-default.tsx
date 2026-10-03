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
      <DialogTrigger render={<Button variant="outline" />}>apagar projeto</DialogTrigger>
      <DialogPopup closeLabel="Fechar">
        <DialogHeader>
          <DialogTitle>apagar projeto?</DialogTitle>
          <DialogDescription>isso remove o projeto e todos os arquivos. não dá pra desfazer.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="ghost" />}>cancelar</DialogClose>
          <DialogClose render={<Button variant="destructive" />}>apagar</DialogClose>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}
