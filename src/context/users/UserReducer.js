import { types } from "./types.js";

export default (state, action) => {
    const { payload, type } = action;
    const { id, name, email } = payload;
    switch (type) {
        case types.LOGIN_USER:
            return {
                id,
                name,
                email
            };
        case types.LOGOUT_USER:
            return payload.initialState;
        default:
            return state;
    }
};