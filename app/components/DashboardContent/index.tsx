import { ChartLineLinear } from "../ChartLineLinear";

export default function DashboardContent() {
  const chartConfig = {
    product_value: {
      label: "Dinheiro",
      color: "#6268DF",
    },
  };
  const chartData = [
    { month: "Junho", product_value: 123 },
    { month: "Julho", product_value: 111 },
    { month: "Agosto", product_value: 777 },
    { month: "Setembro", product_value: 1656523 },
    { month: "Outubro", product_value: 6565 },
    { month: "Novembro", product_value: 5454 },
  ];
  return (
    <div className="grid grid-cols-1 px-4 md:flex flex-col text-white  md:p-5">
        <div className="">
        <h1 className="text-2xl">Painel Financeiro</h1>
            <span className=" font-extralight">
                Informações de movimentações e métricas financeiras.
            </span>
        </div>
        <div className="mt-10">

        <h2 className="mb-3">Métricas financeiras</h2>
        <span className="">Movimentação dos últimos meses.</span>
        </div>
        <div className="mt-5 w-full">

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
