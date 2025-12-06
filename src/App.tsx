import "./App.css"
import { Achievements } from "./components/homeComponents/Achievements/Achievements"
import { Navbar } from "./components/homeComponents/Navbar/Navbar"
import { Slider } from "./components/homeComponents/Slider/slider"
import { Footer } from "./components/homeComponents/Footer/footer"

function App() {

  return (
    <>
    <Navbar /> 
    <Slider />
    <Achievements />
    <Footer />
    </>
  )
}

export default App
