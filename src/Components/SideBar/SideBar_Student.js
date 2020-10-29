import React, { Component } from "react";
import './Style.css';
import Side_Header from './Header_sideBar';
import Sidebar_links from './Sidebar_links';

class SideNavPage extends Component {

  render() {
    return (
      <div  style={{position:"absolute"}}>
        <input type="checkbox" id="check" />
       <Side_Header/>
        <Sidebar_links />
      </div>
    );
  }
}

export default SideNavPage;