import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADgq3slNmf3NJqUILlIjbMhKwLu4dOY-o",
  authDomain: "dunes-twitter-clone-react.firebaseapp.com",
  projectId: "dunes-twitter-clone-react",
  storageBucket: "dunes-twitter-clone-react.appspot.com",
  messagingSenderId: "824196563268",
  appId: "1:824196563268:web:18e6d15f7a1bf1e15f5711",
  measurementId: "G-16L8LZLVV4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
