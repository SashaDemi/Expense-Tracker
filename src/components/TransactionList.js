import React, {useContext} from "react"
import {GlobalContext} from "../context/GlobalState";
import {Transaction} from "./Transaction";

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {/*transactionItem - function argument, this argument - is
                the value that will be passed to the function when it is called*/}
                {transactions.map(transactionItem =>
                    (<Transaction key={transactions.id} transactionItem={transactionItem}/>))}
            </ul>
        </div>
    )
}
