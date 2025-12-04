"use client";

import { Button } from "../../Shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../Shadcn/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import DialogModal from "../../Shadcn/DialogModal";

import { useEditForm } from "@/app/hooks/useEditForm";
import { useQueryClient } from "@tanstack/react-query";

import EditTransactionForm from "../../EditTransactionForm";

export type TransactionStatus = "Pago" | "Pendente";
export type PaymentMethod =
  | "Cartão de Crédito"
  | "Cartão de Débito"
  | "Dinheiro"
  | "Pix";

export interface ITransaction {
  id: string;
  cliente: string;
  data_transacao: string;
  status: TransactionStatus;
  metodo_pagamento: PaymentMethod;
  valor: number;
}

function ActionsCell({ transaction, onDelete }: { 
  transaction: ITransaction; 
  onDelete?: (id: string) => void;
}) {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const queryClient = useQueryClient();

  const { editForm, submit: submitEdit, loading: editLoading } = useEditForm({
    onSuccess: () => {
      setEditModalOpen(false);
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
  });

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    
    editForm.reset({
      cliente: transaction.cliente,
      status: transaction.status,
      metodo_pagamento: transaction.metodo_pagamento,
      valor: transaction.valor.toString(),
    });
    setEditModalOpen(true);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    
    onDelete && onDelete(transaction.id);
  };

  const handleTriggerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            className="h-8 w-8 p-0"
            onClick={handleTriggerClick}
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          <DropdownMenuLabel>Ações</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem 
            onClick={handleEditClick}
            onSelect={(e) => e.preventDefault()}
          >
            Editar
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="text-red-500" 
            onClick={handleDeleteClick}
            onSelect={(e) => e.preventDefault()}
          >
            Excluir
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

     <div className="hidden">
       <DialogModal  
        dialog=""
        title="Editar transação"
        description="Edite os campos da transação selecionada."
        cancel_text="Cancelar"
        submit_text={editLoading ? "Atualizando..." : "Atualizar"}
        onSubmit={editForm.handleSubmit((data) => 
          submitEdit(data, transaction.id)
        )}
        onCancel={() => {
          editForm.reset();
          setEditModalOpen(false);
        }}
        open={editModalOpen}
        onOpenChange={setEditModalOpen}
      >
        <EditTransactionForm editForm={editForm} />
      </DialogModal>
     </div>
    </>
  );
}

export const transactionsColumns = (onDelete?: (id: string) => void): ColumnDef<ITransaction>[] => [
  {
    accessorKey: "cliente",
    header: "Cliente",
    cell: ({ row }) => {
      const client_name = row.original.cliente;
      return (
        <div className="min-w-32 flex items-center gap-2">{client_name}</div>
      );
    },
  },
  {
    accessorKey: "id",
    header: "ID da transação",
    cell: ({ row }) => {
      const transactions_id = row.original.id;
      return <div className="min-w-32">{transactions_id}</div>;
    },
  },
  {
    accessorKey: "data_transacao",
    header: "Data da transação",
    cell: ({ row }) => {
      const getDate = new Date(row.original.data_transacao);
      const formatedDate = getDate.toLocaleDateString("pt-BR");
      return <div className="min-w-36">{formatedDate}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <div className="min-w-20">
          <span>{status}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "metodo_pagamento",
    header: "Método de pagamento",
    cell: ({ row }) => {
      const payment_method = row.original.metodo_pagamento;
      return <div className="min-w-40">{payment_method}</div>;
    },
  },
  {
    accessorKey: "valor",
    header: () => <div className="text-right">Valor</div>,
    cell: ({ row }) => {
      const transaction_value = row.original.valor;
      const formatted_value = transaction_value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      return <div className="text-right font-medium">{formatted_value}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const transaction = row.original;
      return (
        <div onClick={(e) => e.stopPropagation()}>
          <ActionsCell transaction={transaction} onDelete={onDelete} />
        </div>
      );
    },
  },
];