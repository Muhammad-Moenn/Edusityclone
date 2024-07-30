import React, { useState } from 'react'
import Navbar from './compnents/Navbar/Navbar'
import Hero from './compnents/Hero/Hero'
import Programs from './compnents/Programs/programs'
import Title from './compnents/Title/Title'
import About from './compnents/About/About'
import Campus from './compnents/Campus/Campus'
import Testimonial from './compnents/Testimonial/Testimonial'
import Contact from './compnents/Contact/Contact'
import Footer from './compnents/Footer/Footer'
import Videoplay from './compnents/Videoplay/Videoplay'

export default function App() {
  let [videoplay,setVideoplay]=useState(false)
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subtitle='OUR PROGRAM' title='WHAT WE OFFER'/>
        <Programs/>
        <About setVideoplay={setVideoplay}/>
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subtitle='TESTEMONIAL' title='What the Student Says'/>
        <Testimonial/>
        <Title subtitle='Contact Us' title='Get in Touch'/>
        <Contact/>
      </div>
        <Footer/>
        <Videoplay videoplay={videoplay} setVideoplay={setVideoplay} />
    </div>
  )
}
