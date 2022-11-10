import React, { useContext } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/userContext'

const Register = () => {

    const {createUser,googleSignIn,updateUserProfile} = useContext(AuthContext)
    // React router Dom
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const handleRegister = (e) =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const displayName = form.name.value
        const photo = form.photo.value
        
        createUser(email, password)
        .then(result => {
            const user = result.user
            handleUserProflile(displayName,photo)
            navigate(from, {replace: true});
            form.reset()
            console.log(user)
        })
        .catch(error => {
            console.log(error.message)
        })

        // update a user
        const handleUserProflile = (name,photo) => {
            const profile = {
                displayName:name,
                photoURL:photo
            }
            updateUserProfile(profile)
            .then(data => console.log(data))
            .catch(err => console.log(err))
        }

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
            <form onSubmit={handleRegister} action="" className="space-y-6 ng-untouched ng-pristine ng-valid ">
                <div className="space-y-1 text-sm">
                    <label htmlFor="name" className="block ">Name</label>
                    <input type="text" name="name" id="name" placeholder="Please enter your Name" className="w-full px-4 py-3 rounded-md textarea textarea-bordered"  required/>
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block ">Email</label>
                    <input type="email" name="email" id="email" placeholder="Please enter your Email" className="w-full px-4 py-3 rounded-md textarea textarea-bordered"  required/>
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="photo" className="block ">Photo Url</label>
                    <input type="text" name="photo" id="photo" placeholder="Please enter your Name" className="w-full px-4 py-3 rounded-md textarea textarea-bordered"  required/>
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block">Password</label>
                    <input type="password" name="password" id="password" placeholder="Please enter your Password" className="w-full px-4 py-3 rounded-md textarea textarea-bordered" required/>
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
            <p className="text-xs text-center sm:px-6 ">Have an account? 
                <Link to="/login" className="underline font-bold"> Register</Link>
            </p>
        </div>
    </div>
  )
}

export default Register