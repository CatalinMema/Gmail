import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD-spgsWw3AYLo016KDIPBwVOVTbJ29Jek",
    authDomain: "fir-cdaad.firebaseapp.com",
    projectId: "fir-cdaad",
    storageBucket: "fir-cdaad.appspot.com",
    messagingSenderId: "540365177064",
    appId: "1:540365177064:web:2b2c50bb03fe55b6c3895d"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};