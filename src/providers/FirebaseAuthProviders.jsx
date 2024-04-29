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
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const FirebaseAuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userUpdated, setUserUpdated] = useState(false);
  // console.log(loading);

  // social auth providers
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // create user
  const createUser = (email, password) => {
    setLoading();
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUserProfile = (fullName, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: fullName,
      photoURL: photo,
    });
  };
  // sign in user
  const signInUser = (email, password) => {
    setLoading();
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
    setLoading(true);
    return signOut(auth);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // if (user) {
      //   setUser(user);
      //   setLoading(false);
      // }
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [userUpdated]);

  const allValues = {
    user,
    logOut,
    loading,
    createUser,
    signInUser,
    googleLogin,
    githubLogin,
    setUserUpdated,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProviders;
