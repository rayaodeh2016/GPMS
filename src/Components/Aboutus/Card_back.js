
import React, { Component, useEffect } from 'react';
import './About.css';

import 'aos/dist/aos.css';

class Back extends Component {
 
  render() {
  

  return (
 
    <div className="card__back">
    <div className="card card-01">
      <div className="card-body text-center">
        <p className="card-text">Web Developer</p>
        <span className="social-box">
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-google-plus"></i></a>

        </span>
      </div>
    </div>
 </div>


  );
}
}

export default Back;