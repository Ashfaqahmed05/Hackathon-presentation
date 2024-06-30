import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDzKRhNtet6VaYGtLgpmuvHB_wZpuBWX84",
  authDomain: "hackathon-task-8ee42.firebaseapp.com",
  projectId: "hackathon-task-8ee42",
  storageBucket: "hackathon-task-8ee42.appspot.com",
  messagingSenderId: "449559835746",
  appId: "1:449559835746:web:57bf72c0fe27f9d5184d3b",
  measurementId: "G-25WB1B5ZQH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const analytics = getAnalytics(app);

export { db, auth}
