// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbCdF9D2fpYf19qqbkhvS-rxcHCxjZacs",
    authDomain: "test99-9932d.firebaseapp.com",
    databaseURL: "https://test99-9932d-default-rtdb.firebaseio.com",
    projectId: "test99-9932d",
    storageBucket: "test99-9932d.appspot.com",
    messagingSenderId: "91560845317",
    appId: "1:91560845317:web:3f6767f7182620d8047c6c",
    measurementId: "G-N5QLNVYJJF"
  };
  
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth()

export { auth };