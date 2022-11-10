import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/userContext'

const Header = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(()=>{})
        .catch(err => console.log(err))
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/blog">Blog</NavLink>
                            {
                                (user && user?.uid) 
                                ?
                                <>
                                    <NavLink to="/myreviews">My Reviews</NavLink>
                                    <NavLink to="/addservice">Add Service</NavLink>
                                    <p onClick={handleLogOut}>Log Out</p>
                                </>
                                :
                                <>
                                <NavLink to="/login">Log In</NavLink>
                                <NavLink to="/register">Register</NavLink>
                                </> 
                            }
                    </li>
                </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost normal-case text-xl">Lone Traveller</NavLink>
            </div>
            <div className="navbar-end hidden lg:flex mr-2">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                        {
                            (user && user?.uid) 
                            ?
                            <>
                                <NavLink to="/myreviews">My Reviews</NavLink>
                                <NavLink to="/addservice">Add Service</NavLink>
                                <p onClick={handleLogOut}>Log Out</p>
                            </>
                            :
                            <>
                            <NavLink to="/login">Log In</NavLink>
                            <NavLink to="/register">Register</NavLink>
                            </> 
                        }
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default Header