import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA45W7D0_kToK8hYiyTYzbjWPGPykfpPz8",
  authDomain: "expenses-tracking-330a7.firebaseapp.com",
  projectId: "expenses-tracking-330a7",
  storageBucket: "expenses-tracking-330a7.firebasestorage.app",
  messagingSenderId: "929817945099",
  appId: "1:929817945099:web:5eb1881d28f690e6ff930e",
  measurementId: "G-K2BCFNNVE6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
