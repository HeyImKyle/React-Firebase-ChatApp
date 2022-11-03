import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeG6MFA8u6gzP9IYQX5me4815rquj-Mzg",
  authDomain: "chat-79f40.firebaseapp.com",
  projectId: "chat-79f40",
  storageBucket: "chat-79f40.appspot.com",
  messagingSenderId: "612479565698",
  appId: "1:612479565698:web:22b77eb5e60d855df6999b",
  measurementId: "G-NMVFYZN45J",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
