import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB7ogwYB9HjYRbUlbMbEbSjK1lW4_1wcqE",
  authDomain: "crwn-clothing-db-6cae1.firebaseapp.com",
  projectId: "crwn-clothing-db-6cae1",
  storageBucket: "crwn-clothing-db-6cae1.appspot.com",
  messagingSenderId: "872637454909",
  appId: "1:872637454909:web:993ecd30f27932f78e2854",
  measurementId: "G-21SJPR5F5T",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signinWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
