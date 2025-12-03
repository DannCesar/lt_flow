import InputComponent from "../InputComponent";
import SelectComponent from "../SelectComponent";

export default function RegisterForm() {
  return (
    <form className="grid md:grid-cols-2 gap-4">
      <InputComponent label="Nome do cliente" />
      <InputComponent label="Status" />
      <SelectComponent label="Método de pagamento" placeholder="Selecione..." options={[{label: "Oi", value:"oi"}]}/>
      <InputComponent label="Valor" />
    </form>
  );
}
