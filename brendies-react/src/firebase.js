import firebase, {auth, firestore, provider} from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyCMAthBT6LrFTKGe8u9XpV9GQxIRRvu0a4",
    authDomain: "extended-outliner-db.firebaseapp.com",
    databaseURL: "https://extended-outliner-db-default-rtdb.firebaseio.com",
    projectId: "extended-outliner-db",
    storageBucket: "extended-outliner-db.appspot.com",
    messagingSenderId: "390005552867",
    appId: "1:390005552867:web:696a319fc30ea3f89df7d6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const loginGoogleProvider = new firebase.auth.GoogleAuthProvider();
  export const loginAuth = firebase.auth();

  export default firebase;