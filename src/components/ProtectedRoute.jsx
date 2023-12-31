import React from "react";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
    const { auth } = useAuth();

    if (!auth) {
        return <Navigate to="/login" />;
    }
    return <Outlet />;
};

export default ProtectedRoute;
