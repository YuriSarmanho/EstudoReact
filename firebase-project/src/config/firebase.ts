// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgEnWcfvmPk8qV8rTf7rxOQAoiHuBJb-E",
  authDomain: "react-course-78ea4.firebaseapp.com",
  projectId: "react-course-78ea4",
  storageBucket: "react-course-78ea4.appspot.com",
  messagingSenderId: "106238572061",
  appId: "1:106238572061:web:905bd2585adbd4870b38f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
