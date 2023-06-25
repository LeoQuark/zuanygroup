//SESSION STORAGE
export const setUserSessionStorage = (token, user) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(user));
};

export const removeSessionStorage = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
};

export const getTokenSessionStorage = () => {
    const token = sessionStorage.getItem("token");
    if (!token) return null;
    return token;
};

export const getUserSessionStorage = () => {
    const usuario = sessionStorage.getItem("user");
    if (!usuario) return null;
    return JSON.parse(usuario);
};

//LOCAL STORAGE
export const setCartLocalStorage = (cart) => {
    localStorage.setItem("cart", cart);
};

export const getCartLocalStorage = () => {
    const venta = localStorage.getItem("cart");
    if (!venta) return null;
    return JSON.parse(venta);
};

export const removeCartLocalStorage = () => {
    localStorage.removeItem("cart");
};

//EXPORT
export default {
    // FUNCIONES PARA EL SESSION STORAGE
    setUserSessionStorage,
    removeSessionStorage,
    getTokenSessionStorage,
    getUserSessionStorage,
    //FUNCIONES PARA EL LOCAL STORAGE
    setCartLocalStorage,
    getCartLocalStorage,
    removeCartLocalStorage,
};