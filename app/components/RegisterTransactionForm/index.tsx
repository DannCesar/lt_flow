import { useRegisterForm } from "@/app/hooks/useRegisterForm";

import { FormInput } from "../Shadcn/FormInput";
import { FormSelect } from "../Shadcn/FormSelect";
import { Form } from "../Shadcn/ui/form";
import ButtonComponent from "../Shadcn/Button";

export default function RegisterTransactionForm() {
  const { registerForm, submit, loading } = useRegisterForm();
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
    <Form {...registerForm}>
      <form
      onSubmit={registerForm.handleSubmit(submit)}
      className="grid md:grid-cols-2 gap-4"
    >
     <FormInput
     control={registerForm.control}
     name="cliente"
     label="Nome do cliente"
     placeholder="Digite o nome do cliente..."
     />
    <FormSelect
    control={registerForm.control}
    name="status"
    label="Status"
    options={payment_status}
    />
    <FormSelect
    control={registerForm.control}
    name="metodo_pagamento"
    label="Método de pagamento"
    options={payment_method}
    />
    <FormInput
    control={registerForm.control}
    name="valor"
    label="Valor"
    placeholder="Digite o valor da transação..."
    />
    <ButtonComponent type="submit">Registrar</ButtonComponent>
    </form>
    </Form>
  );
}
