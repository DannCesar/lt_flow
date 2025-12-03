//@disable React Compiler
"use client";

import { TransactionsService } from "@/services/transactions.service";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import {
  BanknoteArrowDownIcon,
  BanknoteArrowUpIcon,
  CircleAlertIcon,
  CircleDollarSignIcon,
  FilterIcon,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import ButtonComponent from "../Button";
import Card from "../Card";
import { transactionsColumns } from "../Columns/TransactionsColumns";
import { DataTable } from "../DataTable";
import PopoverComponent from "../Popover";

const service = new TransactionsService();

type filterTransacitions = "Pago" | "Pendente" | "Todos";

export default function TransactionsContent() {
  const [transactions, setTransactions] = useState([]);
  const [statusFilter, setStatusFilter] =
    useState<filterTransacitions>("Todos");
  const memoizedTransactionsColumns = useMemo(() => transactionsColumns, []);

  useEffect(() => {
    async function loadData() {
      const response = await service.getAllTransactions();
      setTransactions(response);
    }
    loadData();
  }, []);

  const filteredTransactions = useMemo(() => {
    if (statusFilter === "Todos") return transactions;
    return transactions.filter(
      (transaction: any) => transaction.status === statusFilter
    );
  }, [transactions, statusFilter]);

  const table = useReactTable({
    data: filteredTransactions,
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
      <div className="grid grid-cols-1 md:flex gap-10 mt-5">
        <Card
          title="Entrada"
          icon={BanknoteArrowUpIcon}
          value={`R$  `}
          width={50}
        />
        <Card
          title="Saída"
          icon={BanknoteArrowDownIcon}
          value={`R$ `}
          width={50}
        />
        <Card
          title="Saldo"
          icon={CircleDollarSignIcon}
          value={`R$ `}
          width={50}
        />
        <Card
          title="Pendente"
          icon={CircleAlertIcon}
          value={`R$ `}
          width={50}
        />
      </div>
      <div className="flex justify-between mt-5 ">
     <PopoverComponent textButton="Filtrar" icon={FilterIcon}><div className="flex flex-col gap-2">
      <button
        onClick={() => setStatusFilter("Todos")}
        className="text-left hover:opacity-80"
      >
        Todos
      </button>

      <button
        onClick={() => setStatusFilter("Pago")}
        className="text-left hover:opacity-80"
      >
        Pago
      </button>

      <button
        onClick={() => setStatusFilter("Pendente")}
        className="text-left hover:opacity-80"
      >
        Pendente
      </button>
    </div></PopoverComponent>

    

        <ButtonComponent variant="primary">Registrar transação</ButtonComponent>
      </div>
      <div className="text-white overflow-y-auto w-full max-h-96 mt-5">
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
