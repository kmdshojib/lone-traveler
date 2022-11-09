import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/userContext'

const Spinner = () => (
    <div class="flex justify-center items-center">
        <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
)

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(loading)
    loading && <Spinner />
    return (!user) ?  <Navigate to="/login" state={{from: location}} replace /> :  children
}

export default PrivateRoute