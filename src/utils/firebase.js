// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOAE7uTmaZ5GZeUZCat5Zq44SyyPoG6ZQ",
  authDomain: "netflix-gpt-india-439e8.firebaseapp.com",
  projectId: "netflix-gpt-india-439e8",
  storageBucket: "netflix-gpt-india-439e8.firebasestorage.app",
  messagingSenderId: "979260043698",
  appId: "1:979260043698:web:f90c06bec8d0f3a7d874ab",
  measurementId: "G-3TD87QMJF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let analytics;

if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
  analytics = getAnalytics(app);
}

export { app, analytics };

export const auth = getAuth();