import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Project from './components/Project'
import Contract from './components/Contract'

const App = () => {
  return (
    <div className='bg-primaryColor h-full w-full  antialiased selection:bg-cyan-300 selection:text-cyan-900  text-neutral-300'>
      <div className='px-12'>
        <Navbar />
        <Hero />
        <AboutMe />
        <Technologies />
        <Experience />
        <Project />
        <Contract />
      </div>
    </div>
  )
}

export default App