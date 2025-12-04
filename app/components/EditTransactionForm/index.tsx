"use client";

import { Form } from "../Shadcn/ui/form";
import { FormInput } from "../Shadcn/FormInput";
import { FormSelect } from "../Shadcn/FormSelect";

interface EditTransactionFormProps {
  editForm: any;
}

export default function EditTransactionForm({ editForm }: EditTransactionFormProps) {
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
    <Form {...editForm}>
      <form className="grid md:grid-cols-2 gap-4">
        <FormInput
          control={editForm.control}
          name="cliente"
          label="Nome do cliente"
        />
        
        <FormSelect
          control={editForm.control}
          name="status"
          label="Status"
          options={payment_status}
        />
        
        <FormSelect
          control={editForm.control}
          name="metodo_pagamento"
          label="Método de pagamento"
          options={payment_method}
        />
        
        <FormInput
          control={editForm.control}
          name="valor"
          label="Valor"
          type="number"
        />
      </form>
    </Form>
  );
}