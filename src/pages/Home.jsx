import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../layout/Container";
const Home = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <h1>Home Page </h1>
            <button onClick={() => navigate("/about")}>Go to About page</button>
            <button onClick={() => navigate("/login")}>Go to Login Page</button>
        </Container>
    );
};

export default Home;
