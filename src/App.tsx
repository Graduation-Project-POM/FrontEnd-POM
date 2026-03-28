import "./App.css"
import Home from './pages/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resources from "./pages/resources";
import Exam1 from "./pages/Exam1";
import WinterCamp from "./pages/winterCamp";
import Credentials from "./pages/Credentials";
import Developers from "./pages/Developers";
import Login from "./Components/Credentials/Login/login";
import SignUp from "./Components/Credentials/signup/signup";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/worksheets/all" element={<Exam1 />} />
        <Route path="/winterPath" element={<WinterCamp />} />
        <Route path="/Developers" element={<Developers />} />
        <Route path="/credentials" element={<Credentials />} >
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
