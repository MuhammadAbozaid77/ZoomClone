

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdIeQSlcO3VwFF9ijAhUShqISWNVwKRVM",
  authDomain: "zoomclone-d1452.firebaseapp.com",
  projectId: "zoomclone-d1452",
  storageBucket: "zoomclone-d1452.appspot.com",
  messagingSenderId: "824354966636",
  appId: "1:824354966636:web:a21555ca6160aabe729c49",
  measurementId: "G-9FL5BG3N4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseFirestore = getFirestore(app);

