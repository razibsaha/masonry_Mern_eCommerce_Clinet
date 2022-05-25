// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE6Sl7Eu6eiyoVXaUjph3Mur-pJSJNIwc",
  authDomain: "masonry-commerce.firebaseapp.com",
  projectId: "masonry-commerce",
  storageBucket: "masonry-commerce.appspot.com",
  messagingSenderId: "235004856356",
  appId: "1:235004856356:web:bc4ffe2a4998ac34ac30b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;