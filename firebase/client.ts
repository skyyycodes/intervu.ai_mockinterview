
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAD8G_XPs62vlVBMx6Qpn6OUXuxrcyy2A",
  authDomain: "intervuai-1b020.firebaseapp.com",
  projectId: "intervuai-1b020",
  storageBucket: "intervuai-1b020.firebasestorage.app",
  messagingSenderId: "558961871809",
  appId: "1:558961871809:web:c1b38bde806879b2753d40",
  measurementId: "G-D9TRK43YWJ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);