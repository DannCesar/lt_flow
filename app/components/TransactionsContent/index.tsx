//@disable React Compiler
"use client";

import { formatMoney } from "@/utils/formatMoney";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import {
  BanknoteArrowDownIcon,
  BanknoteArrowUpIcon,
  CircleAlertIcon,
  CircleDollarSignIcon,
  FilterIcon,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { transactionsColumns } from "../Columns/TransactionsColumns";
import Card from "../Shadcn/Card";
import { useRegisterForm } from "@/app/hooks/useRegisterForm";
import { TransactionsService } from "@/services/transactions.service";
import RegisterTransactionForm from "../RegisterTransactionForm";
import { DataTable } from "../Shadcn/DataTable";
import DialogModal from "../Shadcn/DialogModal";
import PopoverComponent from "../Shadcn/Popover";

const service = new TransactionsService();

type filterTransacitions = "Pago" | "Pendente" | "Todos";

export default function TransactionsContent() {
  const [transactions, setTransactions] = useState([]);
  const [statusFilter, setStatusFilter] =
    useState<filterTransacitions>("Todos");

  const { registerForm, submit, loading } = useRegisterForm();

  useEffect(() => {
    async function loadData() {
      const response = await service.getAllTransactions();
      setTransactions(response);
    }
    loadData();
  }, []);
  async function handleDeleteTransaction(id: number | string) {
    try {
      await service.deleteTransaction(id);
      setTransactions(
        transactions.filter((transaction) => transaction.id !== id)
      );
      alert("Transação excluida com sucesso");
    } catch (error) {
      alert("Erro ao excluir transação.");
    }
  }
  const memoizedTransactionsColumns = useMemo(
    () => transactionsColumns(handleDeleteTransaction),
    []
  );
  const total_entry = useMemo(() => {
    return transactions
      .filter((transaction: any) => transaction.status === "Pago")
      .reduce((acc: number, transaction: any) => acc + transaction.valor, 0);
  }, [transactions]);

  const total_pending = useMemo(() => {
    return transactions
      .filter((transaction: any) => transaction.status === "Pendente")
      .reduce((acc: number, transaction: any) => acc + transaction.valor, 0);
  }, [transactions]);
  const money_out = 0;
  const balance = total_entry - money_out;

  const filteredTransactions = useMemo(() => {
    const sorted = [...transactions].sort((a: any, b: any) => {
      return (
        new Date(b.data_transacao).getTime() -
        new Date(a.data_transacao).getTime()
      );
    });

    if (statusFilter === "Todos") return sorted;

    return sorted.filter(
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
          value={`${formatMoney(total_entry)}`}
          width={50}
        />
        <Card
          title="Saída"
          icon={BanknoteArrowDownIcon}
          value={`${formatMoney(money_out)}`}
          width={50}
        />
        <Card
          title="Saldo"
          icon={CircleDollarSignIcon}
          value={`${formatMoney(balance)}`}
          width={50}
        />
        <Card
          title="Pendente"
          icon={CircleAlertIcon}
          value={`${formatMoney(total_pending)} `}
          width={50}
        />
      </div>
      <div className="grid gap-5 md:flex justify-between mt-5 ">
        <PopoverComponent textButton="Filtrar" icon={FilterIcon}>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setStatusFilter("Todos")}
              className="text-left rounded-sm hover:bg-[#2B2C42]"
            >
              Todos
            </button>

            <button
              onClick={() => setStatusFilter("Pago")}
              className="text-left rounded-sm hover:bg-[#2B2C42]"
            >
              Pago
            </button>

            <button
              onClick={() => setStatusFilter("Pendente")}
              className="text-left rounded-sm hover:bg-[#2B2C42]"
            >
              Pendente
            </button>
          </div>
        </PopoverComponent>

        <DialogModal
          dialog="Registrar transação"
          title="Registrar transação"
          description="Preencha os campos para registrar uma nova transação."
          cancel_text="Cancelar"
          submit_text="Registrar"
          onSubmit={registerForm.handleSubmit(submit)}
          onCancel={() => registerForm.reset()}
        >
          <RegisterTransactionForm registerForm={registerForm} />
        </DialogModal>
      </div>
      <div className="text-white overflow-y-auto md:w-full max-h-96 mt-5">
        <DataTable
          table={table}
          onClick={() => {}}
          currentPage={1}
          totalPages={5}
          onPageChange={() => {}}
        />
      </div>
    </div>
  );
}
