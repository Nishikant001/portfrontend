import React from 'react'
import './card.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Card(props) {
  useEffect(()=>{
    AOS.init({
      duration:2000
    },[])
  })
  return (
    <div className='e' data-aos="fade">
      <h3 className='e1'>{props.title}</h3>
      
      
    </div>
  )
}

export default Card
