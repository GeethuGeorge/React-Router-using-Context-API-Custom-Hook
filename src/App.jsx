import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { Product } from "./pages/Product";
import Login from "./pages/Login";
import { useAuth } from "./context/AuthContext";
import ErrorPage from "./pages/ErrorPage";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  const {auth}=useAuth();
  console.log(auth)
    return (
        <div className="app">
            <Header />

            <Routes>
                <Route pa th="/" element={<Home/>} />
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route element={<ProtectedRoute/>}>
                <Route path="/product" element={<Product/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                </Route>

                <Route path="*" element={<ErrorPage/>}/>
                  {/*   we can pass id as :id */}{/* 
                <Route path="/product/?age=11&name=debug" element={<Product/>}/> */}
               {/*   we can pass a query params ?age=11&name=debug  , its not requred to set route for query params*/}
            </Routes>
        </div>
    );  
}

export default App;
