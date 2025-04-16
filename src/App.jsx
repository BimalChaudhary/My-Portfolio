import React from 'react'
import './App.css'
import Navbar from './Components/Navabar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div >
      <Navbar />
     <div className="main-content">
     <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
     </div>
    </div>
  )
}

export default App
