import React, {useContext} from "react";
import {ctx} from "../Context/AuthContextProvider"
import {Navigate} from "react-router-dom";

const PrivateComp = (props) =>{
    const { isAuth , SetIsAuth } = useContext(ctx);
     if (isAuth){
        return props.children
     }else{
        return <Navigate to="/login" />
     }

}

export default PrivateComp