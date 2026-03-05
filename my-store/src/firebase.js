// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIoYQ8wH3TlYmf4Y1K73YiruRWeXwjrJc",
  authDomain: "fila-online-shop-2.firebaseapp.com",
  projectId: "fila-online-shop-2",
  storageBucket: "fila-online-shop-2.firebasestorage.app",
  messagingSenderId: "388116610701",
  appId: "1:388116610701:web:48a60772ec24bb2249acc4",
  measurementId: "G-PCLJJ31P5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
