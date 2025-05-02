// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc-uk8A8tAvt28IuRYiqLGZTtviMSXtEs",
  authDomain: "private-route-auth-7078e.firebaseapp.com",
  projectId: "private-route-auth-7078e",
  storageBucket: "private-route-auth-7078e.firebasestorage.app",
  messagingSenderId: "918948757614",
  appId: "1:918948757614:web:12581b663d01eea148e67f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

