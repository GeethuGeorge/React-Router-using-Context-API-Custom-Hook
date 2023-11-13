import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../layout/Container";
const About = () => {
  const navigate=useNavigate();
    return (
        <Container>
            <h1>About Page</h1>
            <button onClick={()=>navigate("/")}>Go to Home Page</button>
            <button onClick={()=>navigate("/product")}>Go to Product</button>
            <button onClick={()=>navigate("/product/123")}>Go to Product with ID</button>
            <button onClick={()=>navigate("/product/?companyName=debug")}>Go to Product with Query params</button>
            <button onClick={()=>navigate("/product/123", {state: 
                {age:"1", 
                obj:{name:"debug"}}})} >Go to Product with with state</button>
        </Container>
    );
};

export default About;
