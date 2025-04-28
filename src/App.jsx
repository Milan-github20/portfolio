import React from 'react'
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import About from "./Components/About/About.jsx";
import Sevices from "./Components/Services/Sevices.jsx";

const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Sevices />
    </div>
  )
}

export default App
