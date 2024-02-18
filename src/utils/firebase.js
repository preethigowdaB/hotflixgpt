// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAG2LOmLkebyEnKZroWTgQ4lZ6LVl5fjzo",
  authDomain: "netflix-gpt-e142c.firebaseapp.com",
  projectId: "netflix-gpt-e142c",
  storageBucket: "netflix-gpt-e142c.appspot.com",
  messagingSenderId: "1008954536747",
  appId: "1:1008954536747:web:660eab7cb759140b648b6e",
  measurementId: "G-P93EE6CCER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()