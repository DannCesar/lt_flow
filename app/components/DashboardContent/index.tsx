import {
  BanknoteArrowDownIcon,
  BanknoteArrowUpIcon,
  CircleDollarSignIcon,
} from "lucide-react";
import Card from "../Card";
import { ChartLineLinear } from "../ChartLineLinear";

export default function DashboardContent() {
  const chartConfig = {
    product_value: {
      label: "Dinheiro",
      color: "#6268DF",
    },
  };
  const chartData = [
    { month: "Junho", product_value: 1800000 },
    { month: "Julho", product_value: 1112222222222223333333 },
    { month: "Agosto", product_value: 777 },
    { month: "Setembro", product_value: 1112222222222223333333 },
    { month: "Outubro", product_value: 6565 },
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
            value={`R$ 13.300,75`}
            width={50}
          />
          <Card
            title="Saída"
            icon={BanknoteArrowDownIcon}
            value={`R$ 13.300,75`}
            width={50}
          />
          <Card
            title="Saldo"
            icon={CircleDollarSignIcon}
            value={`R$ 13.300,75`}
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
