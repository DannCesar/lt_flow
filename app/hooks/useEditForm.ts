// useEditForm.ts - Versão corrigida
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerTransactionSchema,
  RegisterTransactionSchema,
} from "../validations/registerTransactionSchema";
import { useState } from "react";
import { TransactionsService } from "@/services/transactions.service";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

interface IUseEditForm {
  onSuccess?: () => void;
}

export function useEditForm({ onSuccess }: IUseEditForm) {
  const [loading, setLoading] = useState(false);
  const query_client = useQueryClient();

  const editForm = useForm<RegisterTransactionSchema>({
    resolver: zodResolver(registerTransactionSchema),
    defaultValues: {
      cliente: "",
      status: "",
      metodo_pagamento: "",
      valor: "",
    },
  });

  const service = new TransactionsService();

  function setTransactionData(transactionData: {
    cliente: string;
    status: "Pago" | "Pendente";
    metodo_pagamento: "Cartão de Crédito" | "Cartão de Débito" | "Dinheiro" | "Pix";
    valor: number;
  }) {
    editForm.reset({
      cliente: transactionData.cliente,
      status: transactionData.status,
      metodo_pagamento: transactionData.metodo_pagamento,
      valor: transactionData.valor.toString(),
    });
  }

  async function submit(values: RegisterTransactionSchema, transactionId: string) {
    if (!transactionId) {
      toast.error("ID da transação não encontrado");
      return;
    }

    setLoading(true);
    try {
      await service.updateTransaction(transactionId, {
        ...values,
        valor: Number(values.valor),
      });
      toast.success("Transação atualizada com sucesso!");
      query_client.invalidateQueries({ queryKey: ["transactions"] });
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      toast.error(
        "Erro ao atualizar transação, tente novamente, se persistir, constate o suporte."
      );
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return { editForm, submit, loading, setTransactionData };
}