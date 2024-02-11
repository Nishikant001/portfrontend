import React from 'react'
import './service.css'
import { SiFlatpak } from "react-icons/si";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { RiUserHeartLine } from "react-icons/ri";
import a from './nishi'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Service(props) {
  useEffect(()=>{
    AOS.init({
      duration:2000
    },[])
  })
  
  return (
    <div className='c' id='service'  >
      <h6 className='c1'>What I Do</h6>
      <h4 className='c2'>My Services</h4>
      <p className='c3'></p>

      <div className='c4' data-aos="fade-up">
        <div className='c5'>
        <SiFlatpak className='c6' size={27}/>
        <h5 className='c7 qq'>{a[0].heading}</h5>
        <p className='c8 qq1'>{a[0].text}

        </p>

        </div>
        <div className='c5 wow1'>
        <MdOutlineScreenSearchDesktop className='c9' size={27}/>
          <h5 className="c7">{a[1].heading}</h5>
          <p className='c8'>{a[1].text}</p>
        </div>
        <div className='c5 wow'>
           <RiUserHeartLine  className='c10' size={27}/>
          <h5 className="c7">{a[2].heading}</h5>
          <p className="c8">{a[2].text}</p>
        </div>
      </div>
      
      
    </div>
  )
}

export default Service
