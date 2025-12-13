import React, { createContext, useContext, useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';


export const UserContext = createContext();

const firebaseConfig = {
  apiKey: "",
  authDomain: "e-commerce-app-1feb8.firebaseapp.com",
  projectId: "e-commerce-app-1feb8",
  storageBucket: "e-commerce-app-1feb8.firebasestorage.app",
  messagingSenderId: "335238259522",
  appId: "1:335238259522:web:fff81410d7cc2b6e8e5edb"

};


export const useFirebase = ()=> useContext(UserContext)

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp)

const AuthContext = ({children}) => {

    const [user, setUser] = useState(null)
    const [isRegistered, setIsRegistered] = useState(false)
    const [notRegistered, setNotRegistered] = useState(true)

   useEffect(()=>{
    onAuthStateChanged(firebaseAuth, (user)=>{
        if(user) setUser(user);
        else setUser(null)
        
    });
   },[])

    const signupUserWithEmailAndPassword = (email,password)=>{
        createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then((value)=>setIsRegistered(false))
        .catch((err)=>setIsRegistered(true))
        
    }
        

    const signinUserWithEmailAndPass = (email, password)=>{
        signInWithEmailAndPassword(firebaseAuth, email, password)
        .then((value)=>setNotRegistered(true))
        .catch((err)=> setNotRegistered(false))
    }

    const signOutUser=()=>{
        signOut(firebaseAuth)
    }

    const isLoggedIn = user? true : false;

  return (
    <div>
      <UserContext.Provider value={{signupUserWithEmailAndPassword, signinUserWithEmailAndPass, isLoggedIn, user, signOutUser,isRegistered, setIsRegistered, notRegistered, setNotRegistered }}>
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default AuthContext
