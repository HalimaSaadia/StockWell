"use client"
import { createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import auth from "@/firebase/firebase.config";




export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  let subtitle;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const loginWithEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    return signOut(auth);
  };



  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(user);
    //   if (currentUser) {
    //     axiosSecure.post("/jwt", { email: currentUser.email }).then((res) => {
    //       if (res.data.token) {
    //         localStorage.setItem("token", res.data.token);
    //       }
    //     });
    //     axiosSecure.patch(`/check-premiumTakenExpiration/${currentUser?.email}`).then(res =>console.log(res.data))
    //   } else {
    //     localStorage.removeItem("token");
    //   }
    });

    return () => unSubscribe();
  }, [user]);

  


  const value = {
    createUser,
    updateUserProfile,
    user,
    loginWithEmailAndPassword,
    loginWithGoogle,
    loading,
    logout,
    

    
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;