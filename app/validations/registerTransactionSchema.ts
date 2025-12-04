// schemas/register-transaction-schema.ts
import { z } from "zod";

export const registerTransactionSchema = z.object({
  cliente: z
    .string()
    .nonempty("O nome do cliente é obrigatório")
    .min(3, "Digite pelo menos 3 caracteres"),

  status: z
    .string()
    .nonempty("O status é obrigatório"),

  metodo_pagamento: z
    .string()
    .nonempty("O método de pagamento é obrigatório"),

  valor: z
    .string()
    .nonempty("O valor é obrigatório")
    .refine((v) => !isNaN(Number(v)), "Digite um número válido"),
});

export type RegisterTransactionSchema = z.infer<typeof registerTransactionSchema>;
