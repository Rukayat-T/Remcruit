import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import JobSeekerContext from '../context/JobSeekerContext'
import CompanyContext from '../context/CompanyContext'


function PrivateRoute({allowedRoles}) {
    let  {user} = useContext(AuthContext)
    let {jobseeker} = useContext(JobSeekerContext)
    let {company} = useContext(CompanyContext)
    const location = useLocation()

  return user ? <Outlet/> : <Navigate to='/login' state={{from:location}} replace/> ;
}

export default PrivateRoute
