import React from 'react';
import ContactUs from '../Contactus/Contactus';
import { BrowserRouter as Router} from 'react-router-dom';
import Slider from '../Img_Slider/Slider';
import Overview from '../Overview/Overview';
import {  useEffect} from 'react';
import About from '../Aboutus/Aboutus';
import Footer from '../Footer/footer';
import Projects from '../Projects/Projects';
import '../Header/Navbar.css';
import AOS from 'aos';

const Main =() => {
  useEffect(()=>{
    AOS.init({  
duration: 600,
}) 
AOS.refresh();
  }, []);
   return (
    <Router>   
   <Slider />
   <Overview/>
   <About/>
   <Projects/>
   <ContactUs style={{paddingTop:"100px"}}/>
   <Footer/>
     </Router>

  );
}

export default Main;