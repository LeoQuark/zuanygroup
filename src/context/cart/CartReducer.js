import { types } from "./types.js";

export default (state, action) => {
    const { payload, type } = action;
    console.log('payload: ', payload)
    switch (type) {
        case types.ADD_TO_CART:
            return {
                shoppingCart: [...state.shoppingCart, action.payload]
            };
        case types.CLEAR_CART:
            return {
                shoppingCart: []
            };
        case types.REMOVE_ONE_FROM_CART:
            return {
                shoppingCart: [...state.shoppingCart.filter(product => product.id !== action.payload)]
            }
        case types.ADD_FROM_LOCALSTORAGE:
            return {
                shoppingCart: action.payload
            }
        default:
            return state;
    }
};