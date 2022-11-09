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

    const provider = new GoogleAuthProvider()
    // register an user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // usersign in
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        return signOut(auth)
    }
    const googleSignIn = () =>{
        return signInWithPopup(auth,provider)
    }
    // updateUserProfile
    const updateUserProfile = (profile) => updateProfile(auth.currentUser,profile)
    // on auth change user state
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            console.log("current user",currentUser)
        })
        return () => unSubscribe()
    },[])
    // context
    const authInfo ={createUser,signIn,user,logOut,googleSignIn,updateUserProfile}
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}

export default UserContext