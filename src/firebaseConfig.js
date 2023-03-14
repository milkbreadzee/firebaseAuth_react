import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDwE8ssWBElONwilHNAtdA0a7xfzH-0SsM",
    authDomain: "reactauth-7d7d2.firebaseapp.com",
    projectId: "reactauth-7d7d2",
    storageBucket: "reactauth-7d7d2.appspot.com",
    messagingSenderId: "354889261607",
    appId: "1:354889261607:web:d51126ed4b87c0f2fd2402",
    measurementId: "G-NDWVQG4B9G"
  };


  const app = initializeApp(firebaseConfig)

  export const auth = getAuth(app)