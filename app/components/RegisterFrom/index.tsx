import InputComponent from "../Shadcn/InputComponent";
import SelectComponent from "../Shadcn/SelectComponent";


export default function RegisterForm() {
  const payment_status = [
    {
      label: "Pago",
      value: "Pago",
    },
    {
      label: "Pendente",
      value: "Pendente",
    },
  ];
  const payment_method = [
    {
      label: "Cartão de Crédito",
      value: "Cartão de Crédito",
    },
    {
      label: "Cartão de Débito",
      value: "Cartão de Débito",
    },
    {
      label: "Pix",
      value: "Pix",
    },
    {
      label: "Dinheiro",
      value: "Dinheiro",
    },
  ];
  return (
    <form className="grid md:grid-cols-2 gap-4">
      <InputComponent
        label="Nome do cliente"
        placeholder="Digite o nome do cliente..."
      />
      <SelectComponent
        label="Status"
       
        options={payment_status}
      />
      <SelectComponent
        label="Método de pagamento"
       
        options={payment_method}
      />
      <InputComponent label="Valor" placeholder="Digite o valor da transação..." />
    </form>
  );
}
