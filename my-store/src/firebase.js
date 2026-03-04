// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6VFsO0d6kBzIYSdK7Kw__qshG2HOnCLA",
  authDomain: "shop-h-20.firebaseapp.com",
  projectId: "shop-h-20",
  storageBucket: "shop-h-20.firebasestorage.app",
  messagingSenderId: "204480435847",
  appId: "1:204480435847:web:19654160c9b7f9ab290a22",
  measurementId: "G-QV2DC92ZVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Optional: only used if you want analytics

// Initialize Firestore and export it for use in your app
export const db = getFirestore(app);