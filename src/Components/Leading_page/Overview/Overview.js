import React, { Component } from 'react';
import photo2 from '../../Image/img/photo2.svg';
import { AboutUs, Text, DivImg, Img, Textp, Titel } from './style.js';
import axios from 'axios';

class Overview extends Component {
  state = {
    Overview: []
  }
  componentDidMount() {
    axios.get('js/Data.json').then(res => { this.setState({ Overview: res.data.Overview }) })
  }
  render() {
    const { Overview } = this.state;
    const OverviewList = Overview.map((x) => {
      return (
        <div key={x.id}>
          <Titel >{x.head}</Titel>
          <Textp >{x.pa} </Textp>
        </div>

      )
    });
    return (
      <div >
        <AboutUs id="overview">
          <DivImg data-aos="fade-right">
            <Img src={photo2} alt="" />
          </DivImg>
          <Text data-aos="fade-up">
            {OverviewList}
          </Text>
        </AboutUs>

      </div>
    );
  }
}

export default Overview;