import React from 'react'
import './contact.css'
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const register='https://backendsucess.onrender.com'

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
    
    try{
    


      let {name,companyName,email,message}=formData
      let result=await fetch(`${register}/api/portfolio/contact`,{
        method:'POST',
        body:JSON.stringify({name,companyName,email,message}),
        headers:{
          'Content-Type':'application/json',
  
        }
      })
      result=await result.json
      localStorage.setItem('user',JSON.stringify(result))
    }
    catch(err){
      alert('error occurr')
    }
   
    

   
   




    
    

  }

    return (
    <div className='g'>
      <h6 className='g1'>Get In Touch</h6>
      <h3 className='g2'>Contact Me</h3>
      <p className='g3'></p>
      <form onSubmit={submit} data-aos="fade-up" action='https://formspree.io/f/xeqyabvd' method='POST'>
       
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
