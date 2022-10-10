import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from './Components/Login&Siginup/Login'

const ProtectedRoutes = ({isLoggedIn}) => {
  return isLoggedIn? <Outlet />:<Login/>
}

export default ProtectedRoutes
