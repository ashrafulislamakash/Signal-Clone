import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
//import "firebase/database";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDJK8ETSj-10q6Q_RTTMR4RBTEMRQ8UzTk",
  authDomain: "damsonbook-e4723.firebaseapp.com",
  projectId: "damsonbook-e4723",
  storageBucket: "damsonbook-e4723.appspot.com",
  messagingSenderId: "117513090727",
  appId: "1:117513090727:web:9d53bd01b9d6eabfdbcd82",
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
