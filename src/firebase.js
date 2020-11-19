import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBQtVqBudrRAGvxYDoKqg-cOcGrvWZNm2A",
    authDomain: "amazo-dd46f.firebaseapp.com",
    databaseURL: "https://amazo-dd46f.firebaseio.com",
    projectId: "amazo-dd46f",
    storageBucket: "amazo-dd46f.appspot.com",
    messagingSenderId: "383830655777",
    appId: "1:383830655777:web:bfdbb3ad03347e5ff73460",
    measurementId: "G-NC8JJTR3F3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

