import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
  apiKey: "AIzaSyBkH9wUZGvEAMAM5Yw1hhj7Au_akJbhY_0",
  authDomain: "crwn-db-8ed60.firebaseapp.com",
  projectId: "crwn-db-8ed60",
  storageBucket: "crwn-db-8ed60.appspot.com",
  messagingSenderId: "41987714246",
  appId: "1:41987714246:web:cf391dbbae548b1ae5bbc7",
  measurementId: "G-7V91FV52HW"
};


firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore = firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider).catch(alert);

export default firebase;