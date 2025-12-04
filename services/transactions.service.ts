import { api } from "./api";

export interface IUpdateTransaction {
  id: string;
  cliente: string;
  data_transacao: string;
  status: "Pago" | "Pendente";
  metodo_pagamento: "Cartão de Crédito" | "Cartão de Débito" | "Dinheiro" | "Pix";
  valor: number;
}
export class TransactionsService {
  async getAllTransactions() {
    const { data } = await api.get("/transactions");
    return data;
  }
  async registerTransaction(transaction: any) {
    const { data } = await api.post("/transactions", transaction);
    return data;
  }
  async deleteTransaction(id:string){
    const {data} = await api.delete(`transactions/${id}`)
    return data
  }
  async updateTransaction(id:string, transactionData:Partial<IUpdateTransaction> ){
    const {data} = await api.patch(`transactions/${id}`,transactionData)
    return data
  }
}
