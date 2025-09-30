// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbohDC8RRSL0kY7K2vuGZLawknR2MMRXo",
  authDomain: "nodejs-cf0bf.firebaseapp.com",
  databaseURL: "https://nodejs-cf0bf-default-rtdb.firebaseio.com",
  projectId: "nodejs-cf0bf",
  storageBucket: "nodejs-cf0bf.firebasestorage.app",
  messagingSenderId: "951622214945",
  appId: "1:951622214945:web:88b0237f5591a753074a60",
  measurementId: "G-5MKEDJJXY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
