import React from "react";
import { Container , Logo, LogoutBtn } from "../index";
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Header(){
    const authStatus = useSelector(
        (state) => state.auth.status)//check user is loggied in or not

        const navigate = useNavigate()

        const navItems = [
            {
                name: 'Home',
                slug: "/",
                active: true
              }, 
              {
                name: "Login",
                slug: "/login",
                active: !authStatus,
            },
            {
                name: "Signup",
                slug: "/signup",
                active: !authStatus,
            },
            {
                name: "All Posts",
                slug: "/all-posts",
                active: authStatus,
            },
            {
                name: "Add Post",
                slug: "/add-post",
                active: authStatus,
            },
        ]

    return(
       <header className="py-3 shadow bg-gray-500">
        <Container>
            <nav className="flex">
                <div className="mr-4">
                    <Link to='/'>
                    <Logo width='70px' />
                    </Link>
                </div>
            <ul className="flex ml-auto">
                {/* //create list for navbar
                using map we displayed only active feilds in navbar list */}
            {navItems.map((item) => 
            item.active  ? (
                <li key={item.name}>
                    <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                    >{item.name}</button>
                </li>
            ) : null
            )}
            {authStatus && (
                <li>
                    <LogoutBtn />
                </li>
            // if auth status is true means user is logged in
            //so show him logout buttun

         )} 
            {/* {this part is true && this part is executed} */}


            </ul>
            </nav>
        </Container>
       </header>
    )
}

export default Header

// useSelector:--
// In React, useSelector is a hook provided by the react-redux library. It allows functional
// components to extract data from the Redux store state. Essentially, it is used to read state from the Redux store.

// How useSelector Works
// Selector Function: useSelector takes a selector function as its argument. This function 
//is called with the entire Redux store state,and it returns the part of the state that you want to use in your component.
// Re-Rendering: The component will re-render whenever the selected state changes.
