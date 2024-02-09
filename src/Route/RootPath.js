import React from 'react'
import {Route,Navigate,Outlet} from "react-router-dom"
import { reactLocalStorage } from 'reactjs-localstorage'
import { useSelector } from 'react-redux'

function RootPath() {
   const {login_status} = useSelector((state)=>state.User)
 if(login_status){
  return  <Navigate to="/dashboard" />
   
 }
 return <Navigate to="/home"/>
 

}

export default RootPath