// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB6NRPyL4G4thEXPZz0Xlx_S0o96t-rJsI",
    authDomain: "recipe-43fe4.firebaseapp.com",
    projectId: "recipe-43fe4",
    storageBucket: "recipe-43fe4.appspot.com",
    messagingSenderId: "661025872921",
    appId: "1:661025872921:web:a48753372169a4ce6f5e88",
    measurementId: "G-VK8GQMSY84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {
    auth, provider
}