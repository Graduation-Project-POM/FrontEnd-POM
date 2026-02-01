import "./App.css"
import Home from './pages/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resources from "./pages/resources";
import Exam1 from "./pages/Exam1";
import WinterCamp from "./pages/winterCamp";
import SignUp from "./pages/signup";
import Login from "./pages/login";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/worksheets/all" element={<Exam1 />} />
        <Route path="/winterPath" element={<WinterCamp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
