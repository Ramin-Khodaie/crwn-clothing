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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = userRef.get();

  console.log(800, userRef.get());
  if (!snapShot.exists) {
    let { displayName, email } = userAuth;

    const createAt = new Date();

    try {
      if (displayName === null) {
        displayName = additionalData.name;
      }
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user: ", error);
    }
  }
  return userRef;
};

//function to add dummy data in to databse,it gives collection name and data to be added.
export const AddcollectionAndDocument = async (collectionkey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionkey);
  const batch = firestore.batch();

  try {
    objectToAdd.map((obj) => {
      const newCollectionRef = collectionRef.doc();

      batch.set(newCollectionRef, obj);
    });
  } catch (error) {
    console.log("error entering data", error);
  }

  return await batch.commit();
};
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signinWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
