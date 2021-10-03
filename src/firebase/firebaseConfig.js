//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbG_HzdynsMS95ro6i8u3V5k9oE5yysGU",
  authDomain: "fir-day-d648c.firebaseapp.com",
  projectId: "fir-day-d648c",
  storageBucket: "fir-day-d648c.appspot.com",
  messagingSenderId: "738376689151",
  appId: "1:738376689151:web:e802ccf09758f210eeb3ca",
  measurementId: "G-CLM1SX34HF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const github = new GithubAuthProvider();

export { app, google, facebook, github, db };
