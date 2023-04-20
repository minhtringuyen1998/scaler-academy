// Import the functions you need from the SDKs you need
import firebase ,  { initializeApp  } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { initializeFirestore, CACHE_SIZE_UNLIMITED } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvXfsovGSNrOVqMZk8hOgISOLkzi6T8rY",
  authDomain: "scaler-academy-2a06f.firebaseapp.com",
  projectId: "scaler-academy-2a06f",
  storageBucket: "scaler-academy-2a06f.appspot.com",
  messagingSenderId: "816018495330",
  appId: "1:816018495330:web:11c7029f8cbaeda168be3b",
  measurementId: "G-JXBLBR04QW"
};
export const app = initializeApp(firebaseConfig);
const firestoreDb =initializeFirestore(app , {
  cacheSizeBytes : CACHE_SIZE_UNLIMITED
})
export const db = getFirestore(app);
export const auth = getAuth(app);