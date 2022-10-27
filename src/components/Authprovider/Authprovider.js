import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../components/firebase/firebase.confiq'
export const AuthContex = createContext();
const auth = getAuth(app);


const Authprovider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isLight,setLight]=useState(true)
    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)

    }
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);

    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }
    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const gitSign=(provider)=>{
        signInWithPopup(auth,provider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser == null || currentUser.emailVerified) {
                setUser(currentUser)
            }
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        gitSign,
        updateUserProfile,
        loading,
        providerLogin,
        logout,
        createUser,
        signin,
        verifyEmail,
        setLoading,
        isLight,
        setLight
    }
    return (
        <div>
             <AuthContex.Provider value={authInfo}>
                {children}
            </AuthContex.Provider>
        </div>
    );
};

export default Authprovider;