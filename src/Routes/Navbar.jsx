import React from "react"
import { Link } from "react-router-dom";
import {ctx} from "../Context/AuthContextProvider";
import { useContext } from "react";
function Navbar() {

  const {isAuth, setIsAuth} = useContext(ctx);
    var divStyle = {
        padding: "20px",
        backgroundColor: "black",
        textAlign: "right",
      };
      var aStyle = {
        color: "black",
        marginRight: "50px",
        textDecoration: "none",
      }

    return(
      <div className = "navbar" >
     <Link style={aStyle} to={isAuth ? "/" : "/login"}>
     Login
      </Link>
      <Link style={aStyle} to="/">
      Home
      </Link>
      <Link style={aStyle} to="/about">
      About
      </Link>
      <Link style={aStyle} to="/contact">
        Contact
      </Link>
      <Link style={aStyle} to="/products">
        Products
      </Link>

       
    
        </div>
    )
}

export { Navbar }