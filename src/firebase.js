import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzbZykcxywvAz1HEKYVuFzhvogFAqc4fk",
  authDomain: "chat-app-42f8d.firebaseapp.com",
  projectId: "chat-app-42f8d",
  storageBucket: "chat-app-42f8d.appspot.com",
  messagingSenderId: "65688415954",
  appId: "1:65688415954:web:5ac76b22c318f63c2fc70b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
