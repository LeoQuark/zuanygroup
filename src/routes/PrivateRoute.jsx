import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'

const PrivateRoute = () => {

    // useEffect(() => {
    //     const token = getTokenSessionStorage();

    //     if (!token) {
    //         history.push("/auth");
    //     }

    //     if (token) {
    //         const { nombre, correo, id_usuario } = getUsuarioSessionStorage();
    //         setUsuario({
    //             isLoged: true,
    //             nombre,
    //             correo,
    //             id_usuario,
    //         });
    //         history.push("/admin/dashboard");
    //     }
    // }, []);

    return (
        <div>sas</div>
    )
}

export default PrivateRoute