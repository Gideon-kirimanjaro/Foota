// Your web app's Firebase configuration

import firebase from "firebase/app";
import "firebase/database";

//Real Time DB
var firebaseConfig = {
  apiKey: "AIzaSyAddwyWpvRnzSRePjvDOcGKKfshinQ8EB4",
  authDomain: "gidi-epl.firebaseapp.com",
  databaseURL: "https://gidi-epl-default-rtdb.firebaseio.com",
  projectId: "gidi-epl",
  storageBucket: "gidi-epl.appspot.com",
  messagingSenderId: "753744787109",
  appId: "1:753744787109:web:659a24f89f47872d383f4c",
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

//-------------------------------What do you want form firebase?
//const db = firebase.database().ref("fixtures");
const db = firebase.database();

//-------------------------------Export the constant to use it
export default db;
