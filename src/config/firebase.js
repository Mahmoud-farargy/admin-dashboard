import firebase from "firebase/app";
import { FBConfig } from "../config/info";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/database";
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(FBConfig);
firebase.analytics();
const db = firebaseApp.firestore();
const database = firebase.database();

export {
    db,
    firebase,
    database
}