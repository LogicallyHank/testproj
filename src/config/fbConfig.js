import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
// var firebaseConfig = {
// 	apiKey: "AIzaSyDzNYdV5Mg6XrPInUatm37_-yYcAyCi8n8",
// 	authDomain: "solofinalproject.firebaseapp.com",
// 	databaseURL: "https://solofinalproject.firebaseio.com",
// 	projectId: "solofinalproject",
// 	storageBucket: "solofinalproject.appspot.com",
// 	messagingSenderId: "657644988374",
// 	appId: "1:657644988374:web:ec48b678f7d45a81"
// };

var firebaseConfig = {
    apiKey: "AIzaSyCLucguX0eUvQn7pBt0Ur6Dsddiibg_Tj8",
    authDomain: "seat-10a7e.firebaseapp.com",
    databaseURL: "https://seat-10a7e.firebaseio.com",
    projectId: "seat-10a7e",
    storageBucket: "seat-10a7e.appspot.com",
    messagingSenderId: "100564173150",
    appId: "1:100564173150:web:a34d82089e025ac04a4fcf",
    measurementId: "G-1TQ18C3Q6Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots:true })


export default firebase;