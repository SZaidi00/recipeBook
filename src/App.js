import "./App.css";
import { Route,Routes } from "react-router-dom";



import LoginRegs from "./Login-Register/LoginRegs";


function App() {

  return (

  <Routes>
      <Route path="/" element={<LoginRegs/>} />
      {/* <Route path="/user/:name" component={UserComponent} /> */}
  </Routes>
    
  );
}

export default App;