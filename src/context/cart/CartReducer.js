import { types } from "./types.js";

export default (state, action) => {
    const { payload, type } = action;
    const { id, name, description, category, amount } = payload;
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
        default:
            return state;
    }
};