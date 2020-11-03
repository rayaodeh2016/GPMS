import React, { Component } from "react";
import './Style.css';
import img1 from './User.png';
import { SideBar_S, Imgestyle, Head_4, A_S } from './Styles.js';
import axios from 'axios';
/*ممكن وضعهم جيسون ؟
 */
class Side_links extends Component {
  state = {
    Side_student: []
  }
  componentDidMount() {
    axios.get('../js/SideData.json').then(res => { this.setState({ Side_student: res.data.Side_student }) })
  }

  render() {

    const {Side_student} = this.state;
    const SideList_S = Side_student.map((Item) => {
      return (
        <A_S key={Item.id} href={Item.href}><i className={Item.icon_name}></i><span> {Item.content}</span></A_S>
      )
    })

    return (

      <SideBar_S className="sidebar">
        <center>
          <Imgestyle src={img1} className="profile_image" alt="" />
          <Head_4>Raya odeh</Head_4>
        </center>
        {SideList_S}
      </SideBar_S>


    );
  }
}

export default Side_links;