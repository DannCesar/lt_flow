import { api } from "./api";

export class TransactionsService{
    async getAllTransactions(){
        const {data} = await api.get(`/transactions`)
        return data
        
    }
    
}