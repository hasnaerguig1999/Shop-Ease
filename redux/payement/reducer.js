import { PayementActions } from './actions';
const initialeState = {
    payements: []
    
}
const payementReducer = (state = initialeState, action) => {
    switch (action.type) {
        case PayementActions.ADD:
           
            return {
                ...state,
                payements: [...state.payements, action.payload]
            }
        default:
            return state;
    }
}
export default payementReducer;