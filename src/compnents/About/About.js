import React from 'react'
import './About.css'
import aboutimg from '../../assets/about.png'
import playicon from '../../assets/play-icon.png'
function About({setVideoplay}) {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={aboutimg}alt='' className='aboutimg'></img>
        <img src={playicon}alt='' className='playicon' onClick={()=>setVideoplay(true)}></img>
      </div>
      <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorw's Leders Today</h2>
        <p>A university is a dynamic institution dedicated to the pursuit of knowledge, fostering an environment where students and scholars can explore, innovate, and grow. It offers a diverse range of academic programs, from humanities to sciences, providing a comprehensive education that equips individuals with the skills and critical thinking necessary to navigate and excel in an ever-changing world. </p>
        <p>Beyond academics, universities play a crucial role in shaping well-rounded individuals by promoting cultural awareness, ethical responsibility, and community engagement. They serve as a melting pot of ideas and cultures, where students from diverse backgrounds come together to share perspectives and challenge their viewpoints.</p>
      </div>
    </div>
  )
}

export default About
