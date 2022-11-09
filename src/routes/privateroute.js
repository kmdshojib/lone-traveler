import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/userContext'

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(loading)
    return (!user) ?  <Navigate to="/login" state={{from: location}} replace /> :  children
}

export default PrivateRoute