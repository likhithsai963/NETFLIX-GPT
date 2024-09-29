// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVvLyN7Kr77vVWCHcSQflaOvDxx4WMdVo",
  authDomain: "netflixgpt-85b95.firebaseapp.com",
  projectId: "netflixgpt-85b95",
  storageBucket: "netflixgpt-85b95.appspot.com",
  messagingSenderId: "339865077392",
  appId: "1:339865077392:web:9d6ac68192688c922c7a15",
  measurementId: "G-FHEY85X9RQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();

export const provider = new GoogleAuthProvider();