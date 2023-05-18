// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr2EtIZwMEyBPxg7VXJLECUWEPdnTpyyg",
  authDomain: "coachingtest-25f06.firebaseapp.com",
  projectId: "coachingtest-25f06",
  storageBucket: "coachingtest-25f06.appspot.com",
  messagingSenderId: "98834722599",
  appId: "1:98834722599:web:7f7f2f8d4abaaadea4c302"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()

