import React from "react"

export const Transaction = ({transactionItem}) => {
    // if transactionItem.amount < 0 then '-' other '+'
    const sign = transactionItem.amount < 0 ? '-' : '+';

    return (
        <li className="minus">
            {transactionItem.text}
            {/*Math.abs - return absolut number (if -5 => 5)*/}
            <span>{sign} $ {Math.abs(transactionItem.amount)}</span>
            <button className="delete-btn">x</button>
        </li>
    )
}
