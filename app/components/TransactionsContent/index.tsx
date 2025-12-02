"use no memo"
"use client";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { DataTable } from "../DataTable";
import { transactionsColumns, Transaction, TransactionStatus, PaymentMethod } from "../TransactionsColumns";

export default function TransactionsContent() {
  const mockTransactions: Transaction[] = [
    {
      id: 1,
      cliente: "Daniel Silva",
      data_transacao: "2025-12-02T15:48:22.077Z",
      status: "Pago" as TransactionStatus,
      metodo_pagamento: "Pix" as PaymentMethod,
      value: 1200.75
    },
    {
      id: 2,
      cliente: "Ana Carolina",
      data_transacao: "2025-11-30T10:15:33.123Z",
      status: "Pendente" as TransactionStatus,
      metodo_pagamento: "Cartão de Crédito" as PaymentMethod,
      value: 899.90
    },
    {
      id: 3,
      cliente: "Roberto Santos",
      data_transacao: "2025-11-28T14:22:45.987Z",
      status: "Pago" as TransactionStatus,
      metodo_pagamento: "Cartão de Débito" as PaymentMethod,
      value: 2540.50
    },
    {
      id: 4,
      cliente: "Fernanda Lima",
      data_transacao: "2025-11-25T09:30:15.456Z",
      status: "Pago" as TransactionStatus,
      metodo_pagamento: "Pix" as PaymentMethod,
      value: 650.00
    },
    {
      id: 5,
      cliente: "Carlos Eduardo",
      data_transacao: "2025-11-22T16:45:12.789Z",
      status: "Pago" as TransactionStatus,
      metodo_pagamento: "Dinheiro" as PaymentMethod,
      value: 3200.00
    },
  ];


  const table = useReactTable({
    data: mockTransactions,
    columns: transactionsColumns,
    getCoreRowModel: getCoreRowModel(),
  });
    
  return (
    <div className=" grid grid-cols-1 px-4 max-w-[1920px]  md:flex flex-col text-white">
      <div>
        <h1 className="text-xl mb-4 text-white">Lista de transações</h1>
        <span className="text-sm font-extralight">
          Registro de todas as transações financeiras.
        </span>
      </div>
      <div className="text-white overflow-y-auto w-full max-h-96 mt-10">
        <DataTable
          table={table}
          onClick={() => {}}
          currentPage={1}
          totalPages={1}
          onPageChange={() => {}}
        />
      </div>
    </div>
  );
}