import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { ReactNode } from "react";
import ButtonComponent from "../Button";

interface IDialogComponent {
  children: ReactNode;
  onSubmit?: () => void;
  dialog: string;
  title: string;
  description: string;
  cancel_text: string;
  submit_text: string;
}

export default function DialogModal({
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
          <ButtonComponent
            className="border-[#2B2C42] bg-[#262332] hover:bg-[#2B2C42]"
            variant="outline"
          >
            {dialog}
          </ButtonComponent>
        </DialogTrigger>
        <DialogContent className=" max-w-[340px] md:max-w-[500px] text-white bg-[#262332] border-[#2B2C42] rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-start">{title}</DialogTitle>
            <DialogDescription className="text-start text-white">
              {description}
            </DialogDescription>
          </DialogHeader>
          {children}
          <DialogFooter className="gap-4 md:gap-2">
            <DialogClose asChild>
              <ButtonComponent>{cancel_text}</ButtonComponent>
            </DialogClose>
            <ButtonComponent
              className="text-[#262332]"
              variant="outline"
              type="submit"
            >
              {submit_text}
            </ButtonComponent>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
