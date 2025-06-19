// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAql5RHp9dDTarvfdT_KWu12o6Sm0UG5S0",
  authDomain: "netflixgpt-1b46b.firebaseapp.com",
  projectId: "netflixgpt-1b46b",
  storageBucket: "netflixgpt-1b46b.firebasestorage.app",
  messagingSenderId: "133371092555",
  appId: "1:133371092555:web:3e69c5724ab8e41d1737ce",
  measurementId: "G-5CRXDJ8ST1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();