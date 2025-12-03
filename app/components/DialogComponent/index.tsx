import { Dialog, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ButtonComponent from "../Button";
import { ReactNode } from "react";

interface IDialogComponent {
  children: ReactNode;
  onSubmit?: () => void;
  dialog: string;
  title: string;
  description: string;
  cancel_text: string;
  submit_text: string;
}

export default function DialogComponent({
  onSubmit,
  children,
  dialog,
  title,
  description,
  cancel_text,
  submit_text,
}: IDialogComponent) {
  return (
    <Dialog>
      <form onSubmit={onSubmit}>
        <DialogTrigger asChild>
          <ButtonComponent variant="outline">{dialog}</ButtonComponent>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {children}
          <DialogFooter>
            <DialogClose asChild>
              <ButtonComponent variant="outline">{cancel_text}</ButtonComponent>
            </DialogClose>
            <ButtonComponent type="submit">{submit_text}</ButtonComponent>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
