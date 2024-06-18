import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBJcaqTO2Oy_jyHs5ETsJVw0Hh3oWexgoc",
  authDomain: "mypotfolio-10c11.firebaseapp.com",
  projectId: "mypotfolio-10c11",
  storageBucket: "mypotfolio-10c11.appspot.com",
  messagingSenderId: "620528341842",
  appId: "1:620528341842:web:c229fceda94b9d0ebce08b",
  measurementId: "G-FHV8PQ39V4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {  db };