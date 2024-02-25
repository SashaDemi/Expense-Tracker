import React, {useContext} from "react"
import {GlobalContext} from "../context/GlobalState";
import {Transaction} from "./Transaction";

export const TransactionList = () => {
    const {transaction} = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {/*transactionItem - function argument, this argument - is
                the value that will be passed to the function when it is called*/}
                {transaction.map(transactionItem =>
                    (<Transaction key={transaction.id} transactionItem={transactionItem}/>))}
            </ul>
        </div>
    )
}
