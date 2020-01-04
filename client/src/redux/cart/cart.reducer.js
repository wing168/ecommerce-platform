import { cartActionTypes } from './cart.types';

import { addItemToCart, decreaseItemInCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};


const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART:
            return {
                ...state,
                hidden: !state.hidden
            }
         
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
            }
        
        case cartActionTypes.DECREASE_ITEM:
            return {
                ...state,
                cartItems: decreaseItemInCart(state.cartItems, action.payload)
            }

        default: 
            return state;    
    }
}

export default cartReducer;