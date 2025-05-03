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

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
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
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
