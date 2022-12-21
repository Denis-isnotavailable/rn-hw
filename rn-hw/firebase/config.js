import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTe0vcaSAzV8X9YH-rfF_jGPw4a7RLyNI",
  authDomain: "reactnative-social-6c082.firebaseapp.com",
  projectId: "reactnative-social-6c082",
  storageBucket: "reactnative-social-6c082.appspot.com",
  messagingSenderId: "136284126730",
  appId: "1:136284126730:web:d86bf48d43e9055bb5e9f3",
  measurementId: "G-0KMFEHE97P"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);