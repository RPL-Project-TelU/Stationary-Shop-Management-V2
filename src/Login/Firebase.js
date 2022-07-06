// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//By Afif
const firebaseConfig = {
  apiKey: "AIzaSyBursWc5i1L_bheB9iYSSh3ODNO2VUa3ZE",
  authDomain: "tubes-kpl-master-files.firebaseapp.com",
  projectId: "tubes-kpl-master-files",
  storageBucket: "tubes-kpl-master-files.appspot.com",
  messagingSenderId: "242703624275",
  appId: "1:242703624275:web:5b64e02de7fe28eba17ea6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};