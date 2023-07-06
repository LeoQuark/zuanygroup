import React, { useReducer } from "react";
import LanguageContext from "./LanguageContext.js";

const types = {
    CHANGE_EN: "CHANGE_EN",
    CHANGE_ES: "CHANGE_ES"
};

const LanguageReducer = (state, action) => {
    const { payload, type } = action;
    switch (type) {
        case types.CHANGE_EN:
            return {
                language: payload
            }
        case types.CHANGE_ES:
            return {
                language: payload
            }
        default:
            return state;
    }
}

//Creación del estado global Language, donde se hará uso de useContext y useReducer.
export const LanguageState = (props) => {
    const initialState = {
        language: 'en'
    };

    const [lang, dispatch] = useReducer(LanguageReducer, initialState);

    // cambiar a ingles
    const changeEn = () => {
        dispatch({
            type: types.CHANGE_EN,
            payload: 'en',
        });
    };

    // cambiar a español
    const changeEs = () => {
        dispatch({
            type: types.CHANGE_ES,
            payload: 'es',
        });
    };

    return (
        <LanguageContext.Provider
            value={{
                lang,
                changeEn,
                changeEs
            }}
        >
            {props.children}
        </LanguageContext.Provider>
    )
}

export default LanguageState;