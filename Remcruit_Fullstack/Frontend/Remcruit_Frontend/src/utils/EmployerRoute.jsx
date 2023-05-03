import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Navigate, Outlet, useLocation } from 'react-router'

function EmployerRoute() {
  let { user } = useContext(AuthContext)
  let { company } = useContext(AuthContext)
  const location = useLocation()
  return user && company ? <Outlet /> : <Navigate to='/home' />
}

export default EmployerRoute
