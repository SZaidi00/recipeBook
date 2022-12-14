import React from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import "./loginRegs.css";
import {auth} from "../firebase-config";
import {Navigate} from 'react-router-dom'

function LoginRegs(){
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }

  };

  const logout = async () => {
    await signOut(auth);
  };

    
    return (
        <div className="App">
        <div align ="center ">
          <h3 className="sign" align="center"> Register User </h3>
          <input
            class="email " type="text" align="center" placeholder="Email"
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          <input
             class="pass" type="password" align="center" placeholder="Password"
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
          <br/>
          <button className = "submit"  onClick={register}> Create User</button>
        </div>
  
        <div align ="center">
          <h3 className="sign" align="center"> Login </h3>
          <input
            class="email " type="text" align="center" placeholder="Email"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
             class="pass" type="password" align ="center" placeholder="Password"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
          <br />
          <button className ="submit" onClick={login}> Login</button>
          <br/>
        </div>
  
        <h4 className="sign"> User Logged In: </h4>
        {user?.email}
  
        {/* <button onClick={logout}> Sign Out </button> */}
      </div>
    );
}


export default LoginRegs;