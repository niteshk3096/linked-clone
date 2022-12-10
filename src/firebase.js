import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVgvLMDeOEZwpg5eFMwTXfMxf8_r4HULE",
  authDomain: "linked-clone-fc9bd.firebaseapp.com",
  projectId: "linked-clone-fc9bd",
  storageBucket: "linked-clone-fc9bd.appspot.com",
  messagingSenderId: "1072519796516",
  appId: "1:1072519796516:web:405442eb4e036e8cc805b1",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
