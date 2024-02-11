import React from 'react'
import './resume.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Resume() {
  useEffect(()=>{
    AOS.init({
      duration:2000
    },[])
  })
  return (
    <div>
      
    </div>
  )
}

export default Resume
