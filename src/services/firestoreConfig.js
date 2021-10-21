import { initializeApp } from 'firebase/app';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "find-my-goat.firebaseapp.com",
    projectId: "find-my-goat",
    storageBucket: "find-my-goat.appspot.com",
    messagingSenderId: "797262857063",
    appId: "1:797262857063:web:61650f75862b036bff25c2",
    databaseURL: "https://find-my-goat-default-rtdb.firebaseio.com/"

};

// Initialize Firebase
const firestoreConfig = initializeApp(firebaseConfig);
export default firestoreConfig;
