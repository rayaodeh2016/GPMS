import React, { Component } from "react";
import '../Style.css';
import img1 from '../User.png';
import axios from 'axios';
import { Header_S, H3_S, Button_S, SideBar_S, Imgestyle, Head_4, A_S } from '../Styles.js';
import Side_Header from '../Header_sideBar';

class SideNavPage extends Component {

  state = {
    Side: []
  }
  componentDidMount() {
    axios.get('../js/SideData.json').then(res => { this.setState({ Side: res.data.Side }) })
  }

  render() {

    const { Side } = this.state;
    const SideList = Side.map((Item) => {
      return (
        <A_S key={Item.id} href={Item.href}><i className={Item.icon_name}></i><span> {Item.content}</span></A_S>
      )
    })



    return (
      <div  style={{position:"absolute"}}>
      <input type="checkbox" id="check" />
        <Side_Header />
        <SideBar_S className="sidebar">
          <center>
            <Imgestyle src={img1} className="profile_image" alt="" />
            <Head_4>Dr.Yazeed Saleet</Head_4>
          </center>
          {SideList}
        </SideBar_S>

      </div>
    );
  }
}

export default SideNavPage;