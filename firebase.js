import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
//import "firebase/database";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQXNe4JE3QsyTlA-Th739qyvL-3xqKFDA",
  authDomain: "signal-f4114.firebaseapp.com",
  projectId: "signal-f4114",
  storageBucket: "signal-f4114.appspot.com",
  messagingSenderId: "136825464609",
  appId: "1:136825464609:web:35ac9051d3708474f84060"
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
