import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Project from './Project'
import Skill from './Skill'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'

const Main = () => {
  return (
    <div className='bg-white'>
            <Navbar/>
            <Hero/>
            <Project/>
            <Skill/>
            <About/>
            <Services/>
            <Contact/>
        <Footer/>
    </div>
  )
}

export default Main