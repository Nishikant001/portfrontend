import React from 'react'
import img2 from './Images/PicsArt_01-02-07.39.29.jpg'
import './about.css'
import cv from './Nishikant Sahoo 1.docx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function About() {
  useEffect(()=>{
    AOS.init({
      duration:2000
    },[])
  })
  
  return (
    <div className='b' id='about'  >
      <img src={img2} alt=""  className='b1' />
      <h6 className='b2'>Discover</h6>
      <h3 className='b3'>About Me</h3>
      <p className='b4'></p>
      <p className='b5' data-aos="fade-up">
        My name is Nishikant Sahoo.As a passionate and driven Frontend Developer, I possess a solid foundation in front-end development acquired through coursework and hands-on projects during my education. Eager to apply my skills in creating intuitive user interfaces, I'm dedicated to staying updated with the latest trends and technologies in frontend development. My proactive approach, coupled with a strong desire to learn and contribute, positions me to collaborate effectively within a dynamic team environment, delivering high-quality and user-centric solutions.

      </p>
      <a href={cv}><button className='b6'><p>Download cv</p></button></a>
      {/* <input type="button" name="" id="" className='b6' download= /> */}
      
    </div>
  )
}

export default About
