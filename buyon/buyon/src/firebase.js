import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCVoGWcQtsVshKdoXLUl_Or23uaOzkSxT8",
  authDomain: "buyon-1a7fd.firebaseapp.com",
  projectId: "buyon-1a7fd",
  storageBucket: "buyon-1a7fd.appspot.com",
  messagingSenderId: "974146637433",
  appId: "1:974146637433:web:ef0fe55d4cc682c6ffcea8",
  measurementId: "G-3F77X88TYJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };