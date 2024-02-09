import React from 'react'
import {Route,Navigate,Outlet} from "react-router-dom"
import { reactLocalStorage } from 'reactjs-localstorage'

function PrivateRoute() {
  return (
    reactLocalStorage.get("token") && reactLocalStorage.get("login_status") ?<Outlet/>:<Navigate to="/" />
  )
}

export default PrivateRoute