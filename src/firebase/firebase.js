// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn8Dt3mdcP-xA_loNezX9HJiqT7ltHK90",
  authDomain: "educare-f8ebd.firebaseapp.com",
  projectId: "educare-f8ebd",
  storageBucket: "educare-f8ebd.appspot.com",
  messagingSenderId: "205393961734",
  appId: "1:205393961734:web:af5f13787d2f81265cf487",
  measurementId: "G-ZSLQ9D78D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
