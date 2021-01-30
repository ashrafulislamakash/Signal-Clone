import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
//import "firebase/database";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAA6GSD6W6zlr-EQ1Ppt8xGyHYXvCTS0Ro",
  authDomain: "soaicl.firebaseapp.com",
  projectId: "soaicl",
  storageBucket: "soaicl.appspot.com",
  messagingSenderId: "198210270797",
  appId: "1:198210270797:web:d5d5eee347394f660ece04",
  measurementId: "G-9S7F0RQBW6"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
