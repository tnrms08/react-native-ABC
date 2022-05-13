// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGG0Ismjds32oK2LQ5kL3Rr1IHumlXy40",
  authDomain: "fir-auth-6e4a6.firebaseapp.com",
  projectId: "fir-auth-6e4a6",
  storageBucket: "fir-auth-6e4a6.appspot.com",
  messagingSenderId: "469001235337",
  appId: "1:469001235337:web:80bdaa92884fe725a08f58"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app()
  }
  
//const app = initializeApp(firebaseConfig);
const auth=firebase.auth()

export { auth };