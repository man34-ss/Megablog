import React from "react";
// Separate public and protected areas of your app.
// Manage user login/logout state throughout the application.
// Use libraries like React Router for protected routes.
// Consider external authentication providers for easier setup.
// Prioritize security best practices and accessibility
import { useState , useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({children , authentication = true}){


    const navigate = useNavigate()
    const [loader , setLoader] = useState()
    const authStatus = useSelector( state => state.auth.status)

    useEffect (() => {
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }

        

        setLoader(false)

    } ,[authStatus, navigate,authentication])//dependancy array
    return(
         loader ? <h1>Loading...</h1> : <>{children}</>
    )
}

// This `Protected` component ensures secure routing by checking the user's authentication status (`authStatus`)
//  from the Redux store. Based on the `authentication` prop, it either allows access to protected routes (`children`) or redirects the user to `/login` if not authenticated, or to 
// `/` if they shouldn't access public routes. The `loader` state shows a "Loading..." message during authentication checks, and the `useEffect` hook watches for changes in dependencies 
// (`authStatus`, `authentication`, `navigate`) to handle redirection dynamically.