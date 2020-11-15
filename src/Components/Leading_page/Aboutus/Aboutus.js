import React, {useState, useEffect } from 'react';
import './About.css';
import Axios from 'axios';
import Card from './Card_Section/Card_Section';

/*تعديل  */
const pStyle = {
  textAlign: "center", fontSize: '2.4rem', fontFamily: 'Vidaloka', textTransform: "uppercase", paddingBottom: "20px"
}
const divStyle = {
  paddingLeft: '20px', paddingRight: '20px'
}

function About() {
  const [About,setAbout] = useState([]);

    useEffect( () => {  
      Axios.get('js/data.json').then(res => {setAbout(res.data.AboutUs)});
    },[])

    const Item = About.map( (item) => {
      return (
        <Card key={item.id} src={item.src} name={item.name} txt={item.txt} href1={item.link_1} href2={item.link_2} href3={item.link_3} />
      )
  })

    return (

      <section id="our" >

        <div data-aos="fade-down-right" >
          <p style={pStyle}>About us </p>
        </div>
        
        <div className="row" style={divStyle} data-aos="zoom-in">
           {Item}
        </div>

      </section>
    );
  
}

export default About;