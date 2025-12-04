'use client'
import { TransactionsService } from "@/services/transactions.service";
import { formatMoney } from "@/utils/formatMoney";
import { useQuery } from "@tanstack/react-query";
import {
  BanknoteArrowDownIcon,
  BanknoteArrowUpIcon,
  CircleAlertIcon,
  CircleDollarSignIcon,
} from "lucide-react";
import { useMemo } from "react";
import Card from "../Shadcn/Card";
import { ChartLineLinear } from "../Shadcn/ChartLineLinear";


export default function DashboardContent() {
  const service = new TransactionsService()
  const { data: transactions = [], isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: () => service.getAllTransactions(),
  });

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

  const chartConfig = {
    product_value: {
      label: "Dinheiro",
      color: "#6268DF",
    },
  };

  
  const chartData = [
    { month: "Junho", product_value: 18000 },
    { month: "Julho", product_value: 8020 },
    { month: "Agosto", product_value: 16000 },
    { month: "Setembro", product_value: 1122 },
    { month: "Outubro", product_value: 17000 },
    { month: "Novembro", product_value: 5454 },
  ];
  return (
    <div className="grid grid-cols-1 px-4 max-w-[1920px]  md:flex flex-col text-white ">
      <div className="">
        <h1 className="text-xl">Painel Financeiro</h1>
        <span className=" text-sm font-extralight">
          Informações de movimentações e métricas financeiras.
        </span>
        <div className="grid grid-cols-1 md:flex gap-10 mt-10">
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
      </div>
      <div className="mt-10">
        <h2 className="mb-3 text-md">Métricas financeiras</h2>
        <span className="text-sm">Movimentação dos últimos meses.</span>
      </div>
      <div className="mt-5">
        <ChartLineLinear
          title="Gráfico linear"
          description="Junho - Novembro 2025"
          chart_config={chartConfig}
          chart_data={chartData}
          text_footer="Exibindo a métrica dos últimos 6 meses."
        />
      </div>
    </div>
  );
}
