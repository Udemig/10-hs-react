// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// auth kurulumu için importlar
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhAkgQBRCoE_75DopC05FxtVGxRqF0m-M",
  authDomain: "hs-chat-6ca56.firebaseapp.com",
  projectId: "hs-chat-6ca56",
  storageBucket: "hs-chat-6ca56.appspot.com",
  messagingSenderId: "148188494848",
  appId: "1:148188494848:web:83e7bf5396cef33509ece5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// kimlik doğrulama hizmetinin refernasını al
export const auth = getAuth(app);

// google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider();

// veritbanının referansını al
export const db = getFirestore(app);
