import React,{useState,useEffect} from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth"
import { login,logout } from './store/authSlice'
import { Footer } from './components'
import {Header} from './components'
import { Outlet } from 'react-router-dom'



function App() {

  const[loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() =>{//useeffect run whwne intial rendering of application
    authService.getCurrentuser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))//update status in slice
        //dispatch login ation in render
//If userData exists (user is logged in), it dispatches the login action.
// The login action is an action creator that updates the Redux store with the user data ({ userData }).
// This action triggers a state change in the global store, setting the auth state to reflect the logged-in user.
      }else{
        dispatch(logout())//update state as logout in slice
      }
    })
    .finally(setLoading(false))
  },[])

// console.log(import.meta.env.VITE_APPWRITE_URL);//Access envi varibles
    return ! loading ? (
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
        <Header/>
        <main>
        TODO:  <Outlet />
        </main>
        <Footer/>
        </div>
        </div>
    ) : null
}

export default App
