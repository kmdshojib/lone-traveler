import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from './../../context/userContext';
import { FcGoogle } from 'react-icons/fc';

import './login.css'

const Login = () => {

    const {signIn,googleSignIn } = useContext(AuthContext)
    // react router dom 
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const handleSubmitlogin = (e) =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        console.log(email, password)

        signIn(email,password)
        .then(result =>{
            const user  = result.user
           
            const currentUser = {
                email: user.email
            }
            console.log(currentUser)
            // get JWT
            fetch("http://localhost:5000/jwt",{
                method: "POST",
                headers:{
                    "content-type": "application/JSON",
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem("token", data.token)
                navigate(from, {replace: true});
            })
            .catch(err => console.error(err))
            form.reset()
        })
        .catch(err =>{
            console.log(err)
        })
        
    }
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result=>{
            const user = result.user.email
            const currentUser = {
                email: user
            }
            fetch("http://localhost:5000/jwt",{
                method: "POST",
                headers:{
                    "content-type": "application/JSON",
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem("token", data.token)
                navigate(from, {replace: true});
            })
            .catch(err => console.error(err))
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
  return (
    <div className="grid place-items-center mt-40">
         <div className="card login-card">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form onSubmit={handleSubmitlogin} action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block ">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" className="textarea textarea-bordered w-full px-4 py-3 rounded-md"  required/>
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="textarea textarea-bordered w-full px-4 py-3 rounded-md " required/>
                   
                </div>
                <button className="block w-full p-3 text-center rounded-sm btn btn-primary">Sign in</button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 "></div>
                <p className="px-3 text-sm ">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16 "></div>
            </div>
            <div className="flex justify-center space-x-4">
                <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
                    <FcGoogle className="icon-size"/>
                </button>
            </div>
            <p className="text-xs text-center sm:px-6 ">Don't have an account?
                <Link to="/register" className="underline font-bold">Sign up</Link>
            </p>
        </div>
    </div>
  )
}

export default Login