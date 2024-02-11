import React from 'react'
import './contact.css'
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// const register=''

function Contact() {
  useEffect(()=>{
    AOS.init({
      duration:2000
    },[])
  })
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submit= async(e)=>{
    // e.preventDefault()
    let {name,companyName,email,message}=formData

    // console.log(formData)
    // alert(`Press "Ok" to confirm`)
    let result=await fetch('https://backendwork-nfm7.onrender.com/api/portfolio/contact',{
      method:'post',
      body:JSON.stringify({name,companyName,email,message}),
      headers:{
        'Content-Type':'application/json',

      }
    })
    result=await result.json
    localStorage.setItem('user',JSON.stringify(result))




    
    

  }

    return (
    <div className='g'>
      <h6 className='g1'>Get In Touch</h6>
      <h3 className='g2'>Contact Me</h3>
      <p className='g3'></p>
      <form action="https://formspree.io/f/xeqyabvd" onSubmit={submit} data-aos="fade-up" method='POST' >
       
        <input type="text" name="name" id="g4" placeholder=' Your Name'  value={formData.name}
          onChange={handleChange} required/>
        <label htmlFor="" className='g4'>Name*</label><br /><br /><br />
        <input type="text" name="companyName" id="g4" placeholder=' Company Name' value={formData.companyName}
          onChange={handleChange} required/>
        <label htmlFor="" className='g4'>Company*</label><br /><br /><br />
        <input type="email" name="email" id="g4" placeholder=' abcd@mail'  value={formData.email}
          onChange={handleChange} required/>
        <label htmlFor="" className='g4'>Email*</label><br /><br /><br />
       <textarea name="message" id="g5" cols="50" rows="6"  value={formData.message}
          onChange={handleChange} required></textarea>
        <label htmlFor="" className='g4 nn'>Message*</label><br /><br />
        <button className='g6' >Send</button>

      </form>
      
    </div>
  )
}

export default Contact
