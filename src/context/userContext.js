import React, { createContext, useEffect, useState } from 'react'
import { app } from './../firebase/firebase';

import {
    createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider,
    signOut,
    signInWithPopup,
    updateProfile
} from "firebase/auth"

 
export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user,setUser] = useState(null)
    const[loading , setLaoding] = useState(true)

    const provider = new GoogleAuthProvider()
    // register an user
    const createUser = (email, password) =>{
        setLaoding(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // usersign in
    const signIn = (email,password) => {
        setLaoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        return signOut(auth)
    }
    const googleSignIn = () =>{
        setLaoding(true)
        return signInWithPopup(auth,provider)
    }
    // updateUserProfile
    const updateUserProfile = (profile) => updateProfile(auth.currentUser,profile)
    // on auth change user state
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLaoding(false)
            console.log("current user",currentUser)
        })
        return () => unSubscribe()
    },[])
    // context
    const authInfo ={createUser,signIn,user,logOut,googleSignIn,updateUserProfile,loading}
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}

export default UserContext