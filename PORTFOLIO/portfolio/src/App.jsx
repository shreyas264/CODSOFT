import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Certification from './components/Certification'
import Contact from './components/Contact'
import Footer from './components/Footer'
import "./App.css"

const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <About/>
        <Skills/>
        <Projects/>
        <Resume/>
        <Certification/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
