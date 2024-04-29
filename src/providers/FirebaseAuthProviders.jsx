/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  signOut,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

// social auth providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FirebaseAuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  //   console.log(user);

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // gitHub login
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  //sign out
  const logOut = () => {
    return signOut(auth);
  };

  // observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const allValues = {
    user,
    logOut,
    createUser,
    signInUser,
    googleLogin,
    githubLogin,
  };
  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProviders;
