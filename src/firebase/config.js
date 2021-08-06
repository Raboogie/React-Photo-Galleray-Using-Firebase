import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBlRF3Bx0o77ANij4tppAAa5gS9h2XaxdQ",
    authDomain: "react-photo-gallery-d4259.firebaseapp.com",
    projectId: "react-photo-gallery-d4259",
    storageBucket: "react-photo-gallery-d4259.appspot.com",
    messagingSenderId: "80784379089",
    appId: "1:80784379089:web:63763f54b5cedc3ab649f0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp};