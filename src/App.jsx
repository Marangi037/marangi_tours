import { Home } from "./Home.jsx";
import { Signup } from "./Signup.jsx";
import { Login } from "./Login.jsx";
import { Routes, Route } from "react-router-dom";

function App() {


  return (
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>    
  )
}

export default App
