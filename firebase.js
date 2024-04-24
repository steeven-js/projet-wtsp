// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUNp7SezFwd58KJiwqQiiSi517uTda4Xw",
  authDomain: "projet-wtsp.firebaseapp.com",
  projectId: "projet-wtsp",
  storageBucket: "projet-wtsp.appspot.com",
  messagingSenderId: "587016720515",
  appId: "1:587016720515:web:d6fb4b59c251d7f7a94bb6",
  measurementId: "G-45SHCQ2SP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }
