// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZDTcm4-DF_Iqc7MJcXTRjZ47XTNgXBfA",
  authDomain: "wtsp-com.firebaseapp.com",
  projectId: "wtsp-com",
  storageBucket: "wtsp-com.appspot.com",
  messagingSenderId: "937018812796",
  appId: "1:937018812796:web:34e55538be42e78fb25cf9",
  measurementId: "G-FGRY8KXMWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }
