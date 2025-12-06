import "./App.css"
import { Achievements } from "./components/homeComponents/Achievements/Achievements"
import { Navbar } from "./components/homeComponents/Navbar/Navbar"
import { Slider } from "./components/homeComponents/Slider/slider"
import { Footer } from "./components/homeComponents/Footer/footer"
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
    <Achievements />
    <Footer />
    </>
  )
}

export default App
