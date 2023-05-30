import React from 'react';

const Auth = ({ children }) => {

    const isAuthenticated = true

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children
}


export default Auth