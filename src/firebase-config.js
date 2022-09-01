import firebase, { initializeApp } from "firebase/app"
import {getAuth} from "firebase/auth"


// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// }

const firebaseConfig = {
  apiKey: "AIzaSyAQfrovuTBiVowkxunqUSmMW3AFpMGf7So",
  authDomain: "recipebook-cb863.firebaseapp.com",
  projectId: "recipebook-cb863",
  storageBucket: "recipebook-cb863.appspot.com",
  messagingSenderId: "220674524847",
  appId: "1:220674524847:web:13f845d09dfc97f702365a"
};



const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

