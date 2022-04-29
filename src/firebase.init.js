// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnWjkMEyWkJ1ljt92ezDZpwcmfZ2pyOjw",
  authDomain: "gym-trainer-2bba5.firebaseapp.com",
  projectId: "gym-trainer-2bba5",
  storageBucket: "gym-trainer-2bba5.appspot.com",
  messagingSenderId: "261809988751",
  appId: "1:261809988751:web:3deaa199e5df1bb0183cfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth