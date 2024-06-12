// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzjvRbngFIpXziMCrySJNPyzSYI0ZQMMw",
  authDomain: "hs-twitter-22c2d.firebaseapp.com",
  projectId: "hs-twitter-22c2d",
  storageBucket: "hs-twitter-22c2d.appspot.com",
  messagingSenderId: "428062537783",
  appId: "1:428062537783:web:0d4dec637000adf2be67b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// kimlik doğrulama yapısının referansını al
export const auth = getAuth(app);

// google provider kurulumu
export const provider = new GoogleAuthProvider();
