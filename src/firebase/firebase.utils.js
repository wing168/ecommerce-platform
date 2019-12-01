import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB9WarXZ30W3AlyhUvltoPQRnobWixwmQg",
  authDomain: "crwn-db-c17a7.firebaseapp.com",
  databaseURL: "https://crwn-db-c17a7.firebaseio.com",
  projectId: "crwn-db-c17a7",
  storageBucket: "crwn-db-c17a7.appspot.com",
  messagingSenderId: "200504535371",
  appId: "1:200504535371:web:2686d95d155ee65b5260ce",
  measurementId: "G-WQMBKMZ4VG"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch (error){
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'}) /* Always trigger the Google pop up whenever we use the Google auth provider for sign in */
  export const SignInWithGoogle = () =>auth.signInWithPopup(provider);

  export default firebase;

  // apiKey: "AIzaSyBrNUB2MBbyve7WBz1bk5n8J199KE6lQGQ",
  //   authDomain: "crwn-clothing-9adfd.firebaseapp.com",
  //   databaseURL: "https://crwn-clothing-9adfd.firebaseio.com",
  //   projectId: "crwn-clothing-9adfd",
  //   storageBucket: "crwn-clothing-9adfd.appspot.com",
  //   messagingSenderId: "688909884473",
  //   appId: "1:688909884473:web:c8488b9b801443a43701e8",
  //   measurementId: "G-H7PQZNRCLV"