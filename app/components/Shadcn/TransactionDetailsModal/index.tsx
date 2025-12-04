import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";

import ButtonComponent from "../Button";
import { formatMoney } from "@/utils/formatMoney";

interface ITransaction {
  id: string;
  cliente: string;
  metodo_pagamento: string;
  status: string;
  valor: number;
}

interface IDialogComponent {
  transaction: ITransaction | null;
  onCancel?: () => void;
  title: string;
  description?: string;
  cancel_text: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function TransactionDetailsModal({
  title,
  description,
  cancel_text,
  onCancel,
  open,
  onOpenChange,
  transaction,
}: IDialogComponent) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[340px] md:max-w-[400px] text-white bg-[#262332] border-[#2B2C42] rounded-lg">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && (
            <DialogDescription>Id #{transaction?.id}</DialogDescription>
          )}
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <div>
            <p className="text-sm font-semibold text-white">Nome do cliente</p>
            <p className="text-sm text-gray-300">{transaction?.cliente}</p>
            <hr className="border-[#4A4A64] mt-1" />
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              Método de pagamento
            </p>
            <p className="text-sm text-gray-300">
              {transaction?.metodo_pagamento}
            </p>
            <hr className="border-[#4A4A64] mt-1" />
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Status</p>
            <p className="text-sm text-gray-300">{transaction?.status}</p>
            <hr className="border-[#4A4A64] mt-1" />
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Valor</p>
            <p className="text-sm text-gray-300">
              {formatMoney(transaction?.valor)}
            </p>
            <hr className="border-[#4A4A64] mt-1" />
          </div>
        </div>

        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <ButtonComponent
              className="bg-[#6563FF] hover:bg-[#5453e6]"
              type="button"
              onClick={() => {
                if (onCancel) onCancel();
                if (onOpenChange) onOpenChange(false);
              }}
            >
              {cancel_text}
            </ButtonComponent>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
