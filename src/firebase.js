import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAY2bBdDPdO0aDqDKV3lnt3NK_thQPFYGM",
  authDomain: "linkedinclone-5e6ac.firebaseapp.com",
  projectId: "linkedinclone-5e6ac",
  storageBucket: "linkedinclone-5e6ac.appspot.com",
  messagingSenderId: "83414059896",
  appId: "1:83414059896:web:077636edb257595b9c568d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };