import React, { useEffect, useState } from "react";

import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] =useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);

  };

  const logInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoading(true)
    return signOut(auth);
  };

  // onAuthStateChanged(auth, (currentUser)=>{
  //   if(currentUser){
  //       console.log("has current user", currentUser);
  //   }
  //   else{
  //       console.log('no current user', createUser);
  //   }
  // })

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setLoading(false)

        console.log('has current user', currentUser);
      }

      //   if(currentUser){
      //     console.log('has current user', currentUser);

      //   }
      //   else{
      //     console.log("no current user", currentUser);
      //   }
      // }
    );

    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    createUser,
    logInUser,
    user,
    signOutUser,
    loading
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
