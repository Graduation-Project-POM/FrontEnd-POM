import "./App.css"
import Home from './pages/index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Resources from "./pages/resources";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resource" element={<Resources/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
