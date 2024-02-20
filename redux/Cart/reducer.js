import { CartActions } from './actions';
const initialeState = {
    items: [],
    totalAmount: 0,
    purchaseHistory: []
}
const cartReducer = (state = initialeState, action) => {
    switch (action.type) {
        case CartActions.ADD:
            const newItem = { ...action.payload, selected: true };
            const price = newItem.price;

            return {
                ...state,
                items: [...state.items, newItem],
                totalAmount: state.totalAmount + price,
                purchaseHistory: [...state.purchaseHistory, newItem] 
            }
        case CartActions.REMOVE:
          
            return {
                ...state,
                items: state.items.filter(item => item !== action.payload),
                totalAmount: state.totalAmount - action.payload.price
            }
        case CartActions.CLEAR:
            return {
                ...state,
                items: [],
                totalAmount: 0
            }
        default:
            return state;

    }
}
export default cartReducer;