import React, { createContext, useState } from 'react'
import { app } from './../firebase/firebase';

import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth"
 
export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user,setUser] = useState([])

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // context
    const authInfo ={createUser,signIn,user}
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}

export default UserContext