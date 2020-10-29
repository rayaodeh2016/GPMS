
import React, { Component, useEffect } from 'react';
import './About.css';
import axios from 'axios'
import 'aos/dist/aos.css';
import B from './Card_back';
class Frpnt extends Component {
 
  render() {
  

  return (


  <div className="card-flipper effect__hover" data-id="1">
  <div className="card__front">
    <div className="card card-01">
      <div className="profile-box-01">
        <img className="card-img-top"  />
      </div>
      <div className="card-body text-center">
        <span className="badge-box"><i class="fas fa-code"></i></span>
        <h4 className="card-title">Eng Farah Diab</h4>
      </div>
    </div>
    <B/>
  </div>
</div>
  );
}
}

export default Frpnt;