import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALgNknJdjlQ6kcYAQgBioZHSIkYe3N4-M",
  authDomain: "touristtrove-authentication.firebaseapp.com",
  projectId: "touristtrove-authentication",
  storageBucket: "touristtrove-authentication.appspot.com",
  messagingSenderId: "592099263875",
  appId: "1:592099263875:web:456678dc542b5f2373a2b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
