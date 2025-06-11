import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWx1CyMnHKPZ6wM9VKkAe6P1gSOD43nr0",
  authDomain: "household-services-4914f.firebaseapp.com",
  projectId: "household-services-4914f",
  storageBucket: "household-services-4914f.firebasestorage.app",
  messagingSenderId: "247120301898",
  appId: "1:247120301898:web:8238c649adb457a02fbbb3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);