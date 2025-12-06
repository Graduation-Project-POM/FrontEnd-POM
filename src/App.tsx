import "./App.css"
import { Achievements } from "./components/homeComponents/Achievements/Achievements"
import { Navbar } from "./components/homeComponents/Navbar/Navbar"
import { Slider } from "./components/homeComponents/Slider/slider"

function App() {

  return (
    <>
    <Navbar /> 
    <Slider />
    <Achievements />
    </>
  )
}

export default App
