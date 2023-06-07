import React, { useReducer } from "react";
import UserContext from "./UserContext.js";
import UserReducer from "./UserReducer.js";
import { types } from "./types.js";

export const UserState = (props) => {
    const initialState = {
        id: '',
        name: '',
        email: ''
    };

    const [user, dispatch] = useReducer(UserReducer, initialState);

    const loginUserContext = (data) => {
        dispatch({
            type: types.ADD_TO_CART,
            payload: data,
        });
    };

    const logoutUserContext = (initialState) => {
        dispatch({
            type: types.CLEAR_CART,
            payload: initialState,
        });
    };

    return (
        <UserContext.Provider
            value={{
                userName: user,
                loginUserContext,
                logoutUserContext,
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;