import "./App.css";
import { Navbar } from "./Routes/Navbar";
import Home from "./Pages/Home";

import Login from "./Pages/Login";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import AllProducts from "./Pages/Products";
import {Route,Routes} from "react-router-dom";

import PrivateComp from "./Routes/PrivateRoute";


export default function App() {
  
 
  return (
    <div className="App">
   
    <Navbar />
 
    <Routes>
   
     
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/products" element={<PrivateComp > <AllProducts/></PrivateComp>}> </Route>
    </Routes>

    </div>
  );
}