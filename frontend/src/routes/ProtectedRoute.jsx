import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        return <Navigate to="/user-login"/>
    }
  
    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/" />
    }

    return children;
}

export default ProtectedRoute