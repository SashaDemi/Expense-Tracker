import React, {useState} from 'react'

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const handleAmountChange = (e) => {
        const value = parseFloat(e.target.value);
        setAmount(value);
    }

    return (
        <div>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text..." value={text}
                           onChange={(e) => setText(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br/>
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" placeholder="Enter amount..." value={amount}
                           onChange={handleAmountChange}/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}