import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";

export const Balance = () => {
    const {transaction} = useContext(GlobalContext);

    const amounts = transaction.map(transactionItem => transactionItem.amount);
    // reduce method put two arguments, callback function(necessary) and initial accumulator
    // (acc += item) this mean acc = acc + item
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    console.log(amounts);
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </div>
    )
};
