import React, { Component } from "react";
import './Style.css';
import { Header_S, H3_S, Button_S } from './Styles.js';


class Side_Header extends Component {

  render() {
    return (
            <Header_S style={{zIndex:"3"}}>
          <label for="check">
            <i className="fas fa-bars" id="sidebar_btn"></i>
          </label>
          <H3_S class="left_area">
            <H3_S> GPMS  <i class="fas fa-graduation-cap" ></i></H3_S>
          </H3_S>
          <div className="right_area">
            <Button_S href="#" ><i class="fas fa-sign-out-alt" ></i></Button_S>
          </div>
        </Header_S>
       
     
    );
  }
}

export default Side_Header;