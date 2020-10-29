import React, { Component, useEffect } from 'react';
import './About.css';
import axios from 'axios';
import 'aos/dist/aos.css';

/*تعديل  */
const pStyle = {
  textAlign: "center", fontSize: '2.4rem', fontFamily: 'Vidaloka', textTransform: "uppercase", paddingBottom: "20px"
}
const divStyle = {
  paddingLeft: '20px', paddingRight: '20px'
}


class About extends Component {
  state = {
    AboutUs: []
  }
  componentDidMount() {
    axios.get('js/Data.json').then(res => { this.setState({ AboutUs: res.data.AboutUs }) })
  }
  render() {
    const { AboutUs } = this.state;
    const AboutUsList = AboutUs.map((x) => {
      return (
        <div key={x.id}>
          <h4 class="card-title">{x.name}</h4>
        </div>
      )
    });


    return (

      <section id="our" >



        <div data-aos="fade-down-right" >

          <p style={pStyle}>About us </p>
        </div>
        <div className="row" style={divStyle} data-aos="zoom-in">
          <div className="col-md-3">

            <div className="card-flipper effect__hover" data-id="1">
              <div className="card__front">
                <div class="card card-01">
                  <div class="profile-box-01">
                    <img class="card-img-top" src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?h=350&auto=compress&cs=tinysrgb" />
                  </div>
                  <div class="card-body text-center">
                    <span class="badge-box"><i class="fas fa-code"></i></span>
                    <h4 class="card-title">Eng Farah Diab</h4>
                  </div>
                </div>
              </div>

              <div class="card__back">
                <div class="card card-01">
                  <div class="card-body text-center">
                    <h4 class="card-title">Eng Farah Diab</h4>
                    <p class="card-text">Web Developer</p>
                    <span class="social-box">
                      <a href="#"><i class="fa fa-facebook"></i></a>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                      <a href="#"><i class="fa fa-google-plus"></i></a>

                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">

            <div class="card-flipper effect__hover" data-id="1">
              <div class="card__front">
                <div class="card card-01">
                  <div class="profile-box-01">
                    <img class="card-img-top" src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?h=350&auto=compress&cs=tinysrgb" />
                  </div>
                  <div class="card-body text-center">
                    <span className="badge-box"><i class="fas fa-code"></i></span>
                    <h4 class="card-title">Eng Farah Diab</h4>
                    <p className="card-text"></p>

                  </div>
                </div>
              </div>

              <div class="card__back">
                <div class="card card-01">
                  <div class="card-body text-center">
                    <h4 class="card-title">Eng Farah Diab</h4>
                    <p class="card-text"></p>
                    <span class="social-box">
                      <a href="#"><i class="fa fa-facebook"></i></a>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                      <a href="#"><i class="fa fa-google-plus"></i></a>

                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">

            <div class="card-flipper effect__hover" data-id="1">
              <div class="card__front">
                <div class="card card-01">
                  <div class="profile-box-01">
                    <img class="card-img-top" src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?h=350&auto=compress&cs=tinysrgb" />
                  </div>
                  <div class="card-body text-center">
                    <span class="badge-box"><i class="fas fa-code"></i></span>
                    <h4 class="card-title">Eng Farah Diab</h4>
                    <p class="card-text"></p>

                  </div>
                </div>
              </div>

              <div class="card__back">
                <div class="card card-01">
                  <div class="card-body text-center">
                    <h4 class="card-title">Eng Farah Diab</h4>
                    <p class="card-text"></p>
                    <span class="social-box">
                      <a href="#"><i class="fa fa-facebook"></i></a>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                      <a href="#"><i class="fa fa-google-plus"></i></a>

                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">

            <div class="card-flipper effect__hover" data-id="1">
              <div class="card__front">
                <div class="card card-01">
                  <div class="profile-box-01">
                    <img class="card-img-top" src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?h=350&auto=compress&cs=tinysrgb" />
                  </div>
                  <div class="card-body text-center">
                    <span class="badge-box"><i class="fas fa-code"></i></span>
                    <h4 class="card-title">Eng Farah Diab</h4>
                    <p class="card-text"></p>

                  </div>
                </div>
              </div>

              <div class="card__back">
                <div class="card card-01">
                  <div class="card-body text-center">
                    <h4 class="card-title">Eng Farah Diab</h4>
                    <p class="card-text"></p>
                    <span class="social-box">
                      <a href="#"><i class="fa fa-facebook"></i></a>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                      <a href="#"><i class="fa fa-google-plus"></i></a>

                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


    );
  }
}

export default About;