import React from "react";
import { MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask, Button } from "mdbreact";
import AI from '../img/AI.jpg';
import Android from '../img/Android.jpg';
import ML from '../img/ML.jpg';
import Web from '../img/Web.jpg';
import { ImgF} from './style.js';
import Img1 from './bg.jpg';


const ProjectsPage = () => {
  const Section_s = {paddingTop: '120px' ,backgroundImage:`url(${Img1})` , backgroundRepeat:" no-repeat",backgroundSize:'cover',paddingBottom: '120px'}
  const Buton_S = { backgroundColor: " rgb(7, 212, 212)" }
  const Button_see = {right: "28%", backgroundColor: " rgb(7, 212, 212)", transform: " translateY(-100%)",  }
  const Style_s = { paddingTop: "10px" }
  const Head_s = { textAlign: "center", fontSize: '2.4rem', fontFamily: 'Vidaloka', textTransform: "uppercase",paddingBottom:'90px'}

  return (
    <section className="text-center my-5" id="project" style={Section_s}  >
     <h2 className="h1-responsive " style={Head_s} data-aos="zoom-in">   projects     </h2>
      <Button style={Button_see} data-aos="fade-left"> See all Projects <i class="fas fa-search"></i> </Button>
      
      <MDBRow className="d-flex justify-content-center" >
        <MDBCol md="5" xl="4" >
          <MDBView className="overlay rounded z-depth-2" waves data-aos="fade-right">
            
            <ImgF src={Web} className="img-fluid" />
          </MDBView>
          <MDBCardBody className="pb-0">

            <h3 className="font-weight-bold mt-2 mb-3">
              <MDBIcon fas icon="chart-line" className="pr-2" />
                  WEB Projects
                </h3>
            <MDBBtn rounded style={Buton_S}>
              See all
              </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBCol md="5" xl="4" >
          <MDBView className="overlay rounded z-depth-2" waves data-aos="fade-left">
            <ImgF

              src={AI}
              alt=""
              className="img-fluid"

            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">

            <h3 className="font-weight-bold mt-2 mb-3">
              <MDBIcon icon="eye" className="pr-2" />
                  Artificial intelligence
                </h3>


            <MDBBtn rounded style={Buton_S}>
              See all
              </MDBBtn>
          </MDBCardBody>
        </MDBCol>
        <MDBRow className="d-flex justify-content-center" style={Style_s}>
          <MDBCol md="5" xl="4">
            <MDBView className="overlay rounded z-depth-2" waves data-aos="fade-right">
              <ImgF

                src={Android}
                alt=""
                className="img-fluid"

              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">

              <h3 className="font-weight-bold mt-2 mb-3">
                <MDBIcon icon="fab fa-android" className="pr-2" />
                  Android
                </h3>


              <MDBBtn rounded style={Buton_S}>
                See all
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="5" xl="4" >
            <MDBView className="overlay rounded z-depth-2" waves data-aos="fade-left">
              <ImgF

                src={ML}
                alt=""
                className="img-fluid"

              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">

              <h3 className="font-weight-bold mt-2 mb-3">
                <MDBIcon icon="laptop" className="pr-2" />
                  Image processing
                </h3>

              <MDBBtn rounded style={Buton_S}>
                See all
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBRow>

    </section>
  );
}

export default ProjectsPage;