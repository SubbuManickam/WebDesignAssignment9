import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import AboutUs from "./Pages/AboutUs"
import Jobs from "./Pages/Jobs"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App