

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqeP9M19bQatQEbRoOfk-osT0g7Ew2RNI",
  authDomain: "zoomapp-ff640.firebaseapp.com",
  projectId: "zoomapp-ff640",
  storageBucket: "zoomapp-ff640.appspot.com",
  messagingSenderId: "983475713528",
  appId: "1:983475713528:web:cb8b9a8575d05537ac920d",
  measurementId: "G-20PB1860C3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestoreDB = getFirestore(app);

export const userRef = collection(firestoreDB , "users");
