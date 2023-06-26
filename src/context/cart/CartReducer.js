import { types } from "./types.js";

export default (state, action) => {
    const { payload, type } = action;
    const { id, name, description, category, amount } = payload
    console.log('PAYLOAD', [...state.shoppingCart.filter(product => product.id !== action.payload)])
    switch (type) {
        case types.ADD_TO_CART:
            return {
                shoppingCart: [...state.shoppingCart, action.payload]
                // id,
                // name,
                // description,
                // category,
                // amount,
            };
        case types.CLEAR_CART:
            return {
                shoppingCart: []
                // id: '',
                // name: '',
                // description: '',
                // category: '',
                // amount: '',
            };
        case type.REMOVE_ONE_FROM_CART:
            return {
                shoppingCart: [...state.shoppingCart.filter(product => product.id !== action.payload)]
            }
        default:
            return state;
    }
};