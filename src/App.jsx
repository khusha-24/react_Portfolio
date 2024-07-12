import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init()
  }, [])
  
  return (
    <>
    <Navbar />
    <div className="container">
    <Home />
    <Education />
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
    </>
  )
}

export default App;