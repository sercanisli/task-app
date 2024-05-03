import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC0C5ky5yPHgEPn1lHN9m5dw74GuHBI-Qo",
    authDomain: "task-app-990d2.firebaseapp.com",
    projectId: "task-app-990d2",
    storageBucket: "task-app-990d2.appspot.com",
    messagingSenderId: "418761296422",
    appId: "1:418761296422:web:0f3a11038e81da9cdbf4e7"
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth ,projectFirestore, timestamp};