import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Navigate, Outlet, useLocation } from 'react-router'

function JobSeekerRoute() {
    let {user} = useContext(AuthContext)
    let {jobseeker} = useContext(AuthContext)
    const location = useLocation()

return  user&&jobseeker ? <Outlet/> : <Navigate to='/employer' state={{from:location}} replace/>
}

export default JobSeekerRoute
