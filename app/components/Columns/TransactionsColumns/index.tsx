"use client";

import { Button } from "../../Shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../Shadcn/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

export type TransactionStatus = "Pago" | "Pendente";
export type PaymentMethod =
  | "Cartão de Crédito"
  | "Cartão de Débito"
  | "Dinheiro"
  | "Pix";

export interface ITransaction {
  id: number;
  cliente: string;
  data_transacao: string;
  status: TransactionStatus;
  metodo_pagamento: PaymentMethod;
  value: number;
}

export const transactionsColumns: ColumnDef<ITransaction>[] = [
  {
    accessorKey: "cliente",
    header: "Cliente",
    cell: ({ row }) => {
      const client_name = row.original.cliente;
      return (
        <div className=" min-w-32 flex items-center gap-2">{client_name}</div>
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
    accessorKey: "value",
    header: () => <div className="text-right">Valor</div>,
    cell: ({ row }) => {
      const transaction_value = row.original.value;
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(String(transaction.id))
              }
            >
              Copiar ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
            <DropdownMenuItem>Editar</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">
              Excluir
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
