// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqLl-uoFntjqxKEV8LxQ4NHryoQ4fo6J0",
  authDomain: "react-sports-shop.firebaseapp.com",
  projectId: "react-sports-shop",
  storageBucket: "react-sports-shop.appspot.com",
  messagingSenderId: "264537791878",
  appId: "1:264537791878:web:afc41a67e45cde2db1a007"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;