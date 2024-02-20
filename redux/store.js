import { createStore, combineReducers } from 'redux';
import coursesReducer from './Course/reducer';
import cartReducer from './Cart/reducer';
import payementsReducer from './payement/reducer';

const store = createStore(combineReducers({
    course: coursesReducer,
    cart: cartReducer,
    payement: payementsReducer
}));    
export default store;