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

interface IUseRegisterForm {
  onSuccess?: () => void;
}

export function useRegisterForm({ onSuccess }: IUseRegisterForm) {
  const [loading, setLoading] = useState(false);
  const query_client = useQueryClient();

  const registerForm = useForm<RegisterTransactionSchema>({
    resolver: zodResolver(registerTransactionSchema),
    defaultValues: {
      cliente: "",
      status: "",
      metodo_pagamento: "",
      valor: "",
    },
  });
  const service = new TransactionsService();
  async function submit(values: RegisterTransactionSchema) {
    setLoading(true);
    try {
      await service.registerTransaction({
        id: crypto.randomUUID(),
        ...values,
        valor: Number(values.valor),
        data_transacao: new Date().toISOString(),
      });
      toast.success("Transação registrada com sucesso!");
      registerForm.reset();
      query_client.invalidateQueries({ queryKey: ["transactions"] });
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      toast.error(
        "Erro ao registrar transação,tente novamente, se persistir, constate o suporte."
      );
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  return { registerForm, submit, loading };
}
