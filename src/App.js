import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./App.css";
import { auth } from "./firebase-config";


import LoginRegs from "./Login-Register/LoginRegs";

function App() {

  return (
    <LoginRegs/>
  );
}

export default App;