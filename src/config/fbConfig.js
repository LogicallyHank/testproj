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
  apiKey: "AIzaSyC3JzqTLiMjHD5W0I79sKsUUiR0j1JAppw",
  authDomain: "applab-seat.firebaseapp.com",
  databaseURL: "https://applab-seat.firebaseio.com",
  projectId: "applab-seat",
  storageBucket: "applab-seat.appspot.com",
  messagingSenderId: "438616734108",
  appId: "1:438616734108:web:9d740e8cb479a67fd63059",
  measurementId: "G-6MK0GKM3RE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots:true })


export default firebase;