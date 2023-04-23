import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'
import JobSeekerContext from '../context/JobSeekerContext'
import CompanyContext from '../context/CompanyContext'


function PrivateRoute() {
    let  {user} = useContext(AuthContext)
    let {jobseeker} = useContext(JobSeekerContext)
    let {company} = useContext(CompanyContext)

  return user ? <Outlet/> : <Navigate to='/login'/> ;
}

export default PrivateRoute
