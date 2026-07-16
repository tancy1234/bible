// firebase.js

import { initializeApp } 
from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import { 
    getFirestore 
} 
from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

import {
    getAuth,
    signInAnonymously
}
from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyDWwqVJaW8yzQ3k8jLg44EMF74m4bBe8pw",
  authDomain: "nfc-bible-4d179.firebaseapp.com",
  projectId: "nfc-bible-4d179",
  storageBucket: "nfc-bible-4d179.firebasestorage.app",
  messagingSenderId: "902999288077",
  appId: "1:902999288077:web:fa3b79e13217b188c9a844"
};


const app = initializeApp(firebaseConfig);


// Database
export const db = getFirestore(app);


// Authentication
export const auth = getAuth(app);


// Anonymous login
export async function loginUser(){

    if(!auth.currentUser){

        await signInAnonymously(auth);

    }

    return auth.currentUser;

}