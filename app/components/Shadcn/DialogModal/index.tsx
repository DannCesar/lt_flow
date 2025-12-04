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
  onCancel?: () => void;
  dialog: string;
  title: string;
  description: string;
  cancel_text: string;
  submit_text: string;
  open?: boolean;
  onOpenChange?: (open:boolean) => void;
}

export default function DialogModal({
  dialog,
  title,
  description,
  children,
  cancel_text,
  submit_text,
  onCancel,
  onSubmit,
  open,
  onOpenChange
}: IDialogComponent) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <ButtonComponent
          className="border-[#2B2C42] bg-[#6563FF] hover:bg-[#5453e6]"
          
        >
          {dialog}
        </ButtonComponent>
      </DialogTrigger>

      <DialogContent className="max-w-[340px] md:max-w-[500px] text-white bg-[#262332] border-[#2B2C42] rounded-lg">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        {children}

        <DialogFooter className="gap-3">
          <DialogClose asChild>
            <ButtonComponent  type="button" variant="default" onClick={() => {
              onCancel;
              if(onOpenChange) onOpenChange(false)
              
            }}>{cancel_text}</ButtonComponent>
          </DialogClose>
          <ButtonComponent className="border-[#2B2C42] bg-[#6563FF] hover:bg-[#5453e6]" type="submit"  onClick={onSubmit}>
            {submit_text}
          </ButtonComponent>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
