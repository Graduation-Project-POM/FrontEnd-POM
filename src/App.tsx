import "./App.css"
import Home from './pages/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resources from "./pages/resources";
import Exam1 from "./pages/Exam1";
import WinterCamp from "./pages/winterCamp";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/worksheets/all" element={<Exam1 />} />
        <Route path="/winterPath" element={<WinterCamp />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
