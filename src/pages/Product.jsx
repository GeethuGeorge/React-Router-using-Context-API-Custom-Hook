import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Product = () => {
  //to access  id
    const params = useParams();
    console.log(params);
     //to access  query params
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("companyName"));
    //to access the state 
  const location =useLocation()
  console.log(location)

  
    return <div>{params.id ? <h1>This is single Product Page</h1> : <h1>This is Multi Product Page</h1>}</div>;
};
