import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import TechnicalProficiency from './sections/TechnicalProficiency'
import AbouteMe from './sections/AbouteMe'
import MyProjects from './sections/MyProjects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
const App = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <TechnicalProficiency />
      <AbouteMe />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
