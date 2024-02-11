import React from 'react'
import './experi.css'
import Card from './card'
import e from './job'



function Exper() {
  
  return (
    <div className='d' id='exper' >
      <h6 className='d1'>Explore My</h6>
      <h4 className='d2'>Skills</h4>
      <p className='d3'></p>
      {e.map((job)=>{
        return(
        <Card key={job.id} 
        title={job.title}
       
        />
        )
      })}
     
    
      
      
     
      
    </div>
  )
}

export default Exper
