// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDbohDC8RRSL0kY7K2vuGZLawknR2MMRXo",
  authDomain: "nodejs-cf0bf.firebaseapp.com",
  databaseURL: "https://nodejs-cf0bf-default-rtdb.firebaseio.com",
  projectId: "nodejs-cf0bf",
  storageBucket: "nodejs-cf0bf.firebasestorage.app",
  messagingSenderId: "951622214945",
  appId: "1:951622214945:web:470027144e271b02074a60",
  measurementId: "G-Y4XQ0WPE27"
};

// Evita reinicialização em hot-reload (nodemon)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getDatabase(app);