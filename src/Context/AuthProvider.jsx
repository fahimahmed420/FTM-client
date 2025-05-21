import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,GoogleAuthProvider,signInWithPopup  } from 'firebase/auth';
import { auth } from '../firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword (auth,email,password);
    };

    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword (auth,email,password);
    };
    const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
};

    const signOutUser=()=>{
        return signOut(auth);
    }
   
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setUser(currentUser);
            }
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const userInfo={
        user,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle
    };

  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
);
};

export default AuthProvider;