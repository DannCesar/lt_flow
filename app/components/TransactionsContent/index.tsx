//@disable React Compiler
"use client";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { DataTable } from "../DataTable";
import { ITransaction, transactionsColumns } from "../TransactionsColumns";
import { useMemo } from "react";
const mockTransactions: ITransaction[] = [
  {
    id: 1,
    cliente: "Daniel Silva",
    data_transacao: "2025-12-02T15:48:22.077Z",
    status: "Pago",
    metodo_pagamento: "Pix",
    value: 1200.75,
  },
  {
    id: 2,
    cliente: "Ana Carolina",
    data_transacao: "2025-11-30T10:15:33.123Z",
    status: "Pendente",
    metodo_pagamento: "Cartão de Crédito",
    value: 899.9,
  },
  {
    id: 3,
    cliente: "Roberto Santos",
    data_transacao: "2025-11-28T14:22:45.987Z",
    status: "Pago",
    metodo_pagamento: "Cartão de Débito",
    value: 2540.5,
  },
  {
    id: 4,
    cliente: "Fernanda Lima",
    data_transacao: "2025-11-25T09:30:15.456Z",
    status: "Pago",
    metodo_pagamento: "Pix",
    value: 650.0,
  },
  {
    id: 5,
    cliente: "Carlos Eduardo",
    data_transacao: "2025-11-22T16:45:12.789Z",
    status: "Pago",
    metodo_pagamento: "Dinheiro",
    value: 3200.0,
  },
];

export default function TransactionsContent() {
  const memoizedMockTransactions = useMemo(() => mockTransactions, []);
  const memoizedTransactionsColumns = useMemo(() => transactionsColumns, []);

  const table = useReactTable({
    data: memoizedMockTransactions,
    columns: memoizedTransactionsColumns,
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
