export const AppReducer = (state, action) => {
    switch (action.type) {
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(transactionItem => transactionItem.id !==
                action.payload)
            }
        default:
            return state;
    }
}