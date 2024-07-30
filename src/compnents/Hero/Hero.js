import React from 'react'
import './Hero.css'
import darkarrow from '../../assets/dark-arrow.png';
function Hero() {
  return (
    <div className='Hero container'id='Hero'>
      <div className='text-hero'>
        <h1>We Ensure a Better Education For a Better World</h1>
        <p>Our vision of a better world is one where education is a universal right, a powerful tool for social change, and a beacon of hope for future generations. </p>
        <butter className='btn'>Explore more <img src={darkarrow} alt=''></img></butter>
      </div>
      
    </div>
  )
}

export default Hero
