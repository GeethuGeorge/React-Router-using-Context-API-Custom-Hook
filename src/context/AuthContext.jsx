import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

//create context
export const AuthContext = createContext();

//create provider

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false); //user not authenticated

    const logOut = () => {
        setAuth(false);
    };

    const logIn = () => {
        setAuth(true);
    };
    return <AuthContext.Provider value={{ auth, logOut, logIn }}>{children}</AuthContext.Provider>;
};

//CUSTOM HOOK
export const useAuth = () => {
    return useContext(AuthContext);
};
