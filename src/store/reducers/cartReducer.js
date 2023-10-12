import { ADD_TO_CART_FOR_CaLL, REMOVE_FROM_CART_FOR_CaLL } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = { 
    cartItems: cartItems,
    //cartItems=[{quantity:1, call:{callName: "deneme"}}];
};

export default function cartReducer(state= initialState, {type,payload}) {
    switch (type) {
        case ADD_TO_CART_FOR_CaLL : 
            let call = state.cartItems.find(c=>c.call.id===payload.id)
            if (call) {
                call.quantity++;
                return {
                    ...state
                }
            } else {
                return { 
                    ...state,
                    cartItems: [...state.cartItems, {quantity:1, call:payload}],
                };
            }
            
            case REMOVE_FROM_CART_FOR_CaLL: 
            return {
                ...state,
                cartItems: state.cartItems.filter(c=>c.call.id !==payload.id),
            };
         default:
            return state;
    }
}