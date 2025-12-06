import "./App.css"
import { Navbar } from "./components/homeComponents/Navbar/Navbar"
import { Slider } from "./components/homeComponents/Slider/slider"
import Home from './pages/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <Navbar /> 
    <Slider />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
