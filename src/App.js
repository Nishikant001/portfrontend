// import logo from './logo.svg';
// import './App.css';

import About from './components/About';
import Contact from './components/Contact';
import Exper from './components/Exper';

import Nav from './components/Nav';
import Project from './components/Project';
import Resume from './components/Resume';
import Service from './components/Service';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function App() {
  useEffect(()=>{
    AOS.init({
      duration:2000
    },[])
  })

  return (
    <div className="App">
      
        <Nav />
        <About />
        <Project />
        <Service/>
        <Exper data-aos="fade-down"/>
        
        {/* <Resume/> */}
        <Contact/>
        

        
       
    
    </div>
  );
}

export default App;
