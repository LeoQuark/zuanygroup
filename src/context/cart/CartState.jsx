import React, { useReducer } from "react";
import CartContext from "./CartContext.js";
import CartReducer from "./CartReducer.js";
import { types } from "./types.js";


//Creación del estado global Carrito, donde se hará uso de useContext y useReducer.
export const CartState = (props) => {
    const initialState = {
        shoppingCart: []
    };

    // shoppingCart: 
    // id,
    // name,
    // description,
    // category,
    // amount,

    const [cart, dispatch] = useReducer(CartReducer, initialState);

    const addProduct = (data) => {
        dispatch({
            type: types.ADD_TO_CART,
            payload: data,
        });
    };

    const clearCart = (initialState) => {
        dispatch({
            type: types.CLEAR_CART,
            payload: initialState,
        });
    };

    //Se retorna el CarritoContext.Provider para que los hijos de este componente puedan acceder a los valores del state global carrito y sus metodos o funciones.
    return (
        <CartContext.Provider
            value={{
                cart,
                addProduct,
                clearCart,
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState;