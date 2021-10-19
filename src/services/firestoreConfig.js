import { initializeApp } from 'firebase/app';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDuac8n9QuncCdFI9-d4XPCBgkpYTSAxMM",
    authDomain: "find-my-goat.firebaseapp.com",
    projectId: "find-my-goat",
    storageBucket: "find-my-goat.appspot.com",
    messagingSenderId: "797262857063",
    appId: "1:797262857063:web:61650f75862b036bff25c2"
};

// Initialize Firebase
const firestoreConfig = initializeApp(firebaseConfig);
export default firestoreConfig;
