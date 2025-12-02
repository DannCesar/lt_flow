import ContainerContent from "../components/ContainerContent";
import TransactionsContent from "../components/TransactionsContent";

export default function Transactions(){
    return (
        <div>
            <ContainerContent content={<TransactionsContent/>}/>
        </div>
    )
}