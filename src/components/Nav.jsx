import React from 'react'
import './nav.css'
import img1 from './Images/img1.jpg'


function Nav() {
 
  return (
    <div className='a' >
        <h5>P<span>ortfolio</span></h5>
        <ul type='none'>
            
            <a href="#about"><li>About</li></a>
            <a href="#projects"><li>Projects</li></a>
            <a href="#service"><li>Services</li></a>
            <a href="#exper"><li>Experience</li></a>
            
            <a href="#contact"><li className='li1'>Contact</li></a>
        </ul>
        <img src={img1} alt="" className='a2' />
        <h2>Nishikant Sahoo</h2>
        <h6> FullStack Web Developer | Front-end Developer</h6>

        <h6 className='a1'>Scroll Down | </h6>
  
    
  </div>

  )
}

export default Nav
