import {createContext, useReducer} from "react";
import {AppReducer} from "./AppReducer"

// Initial state.
const initialState = {
    transactions: [
        {id: 1, text: 'Flower', amount: -20},
        {id: 2, text: 'Salary', amount: 300},
        {id: 3, text: 'Book', amount: -10},
        {id: 4, text: 'Camera', amount: 150},
    ]
}

// Created context, this needed to pass data from parents to child without props.
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
    // AppReducer - this is reducer function
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // GlobalContext.Provider - specific syntax for provider
    return (<GlobalContext.Provider
        value={{transactions: state.transactions}}>
        {children}
    </GlobalContext.Provider>);
}