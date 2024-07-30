import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import menuicon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';
export default function Navbar() {
  let [stiky ,setstiky]=useState(false)
  let [mobilemenu ,setmobilemenu]=useState(true)
  
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>850?setstiky(true):setstiky(false)
     })
  })
  return (
    <nav className={`container ${stiky?'dark-nav':''}`} >
      <img src={logo} alt=''className='logo'></img>
      <ul className={mobilemenu? "h-mob-menu":""}>
        <li><Link to="Hero" smooth={true} offset={0} duration={500}>Home </Link> </li>
        <li> <Link to="programs" smooth={true} offset={-250} duration={500}>Program</Link></li>
        <li> <Link to="about" smooth={true} offset={-180} duration={500}>About us</Link></li>
        <li> <Link to="campus" smooth={true} offset={-250} duration={500}>Campus</Link></li>
        <li> <Link to="testimonial" smooth={true} offset={-200} duration={500}>Testimonials</Link></li>
        <li><button className='btn'><Link to="contact" smooth={true} offset={0} duration={500}>Contact us</Link></button></li>
      </ul>
      <img onClick={()=>setmobilemenu(!mobilemenu)} src={menuicon}alt='' className='menu-icon'></img>
    </nav>
  )
}
