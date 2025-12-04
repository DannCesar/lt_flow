import { api } from "./api";

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
}
