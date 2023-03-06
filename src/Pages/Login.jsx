import React ,{useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {ctx} from '../Context/AuthContextProvider';




export default function Login() {
    const {setIsAuth} = useContext(ctx)
    const [state,setState] = useState({
        email:"",
        password:"",
    })
    let raman = useNavigate()
    let checkUser = async (e)=>{
     e.preventDefault();
     let url = `https://reqres.in/api/login`
     let obj = {
        method: "POST",
        body: JSON.stringify(
          state
          ),
          headers: {
            "Content-type": "application/json"
          }
     }

     try {
        let data = await fetch(url,obj)
        data = await data.json();
        console.log(data);
        setIsAuth(true)
        raman("/")

     } catch (error) {
        console.log(error);
     }
       
    }
    return (
        <div>
            <form className = "auth_form"  >
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "email"
                    className = "email"
                    placeholder = "Enter Email"
                    onChange={(e)=>{setState({
                      ...state,
                      email: e.target.value,  
                    })}}
                />
                <br />
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                    onChange={(e)=>{setState({
                      ...state,
                      password: e.target.value,  
                    })}}
                />
                <br />
                <input onClick={checkUser} className = "submit" type = "submit"/>

            </form>  
                          
        </div>
    )
}