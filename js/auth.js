import {
createUserWithEmailAndPassword,
signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { auth, googleProvider } from "./firebase.js";

export async function signup(email,password){
  try{
    await createUserWithEmailAndPassword(auth,email,password);
    alert("Signup successful");
    window.location.href="dashboard.html";
  }catch(err){
    alert(err.message);
  }
}

export async function googleLogin(){
  try{
    await signInWithPopup(auth,googleProvider);
    window.location.href="index.html";
  }catch(err){
    alert(err.message);
  }
}
