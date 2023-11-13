import React from "react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import Container from "../layout/Container";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const { auth, logOut, logIn } = useAuth();
    console.log(auth);
    const navigate=useNavigate()
    return (
        <Container>
            <h1>This is Login Page</h1>
        
            <button onClick={() => {
              logIn(); 
              //- 1 go to previous page 
              // -2 previous previous page 
              navigate(-1)}
              }>Login</button>
        </Container>
    );
};

export default Login;
