import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    // Your config values
    apiKey: "AIzaSyCznrQai42JZ1-kCLnQ-BmBltDMXvTfKS4",
    authDomain: "fir-login-nadia.firebaseapp.com",
    projectId: "fir-login-nadia",
    storageBucket: "fir-login-nadia.appspot.com",
    messagingSenderId: "498100703771",
    appId: "1:498100703771:web:9d54505a167aba93c55ebe",
    measurementId: "G-3716JKHZV5"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;