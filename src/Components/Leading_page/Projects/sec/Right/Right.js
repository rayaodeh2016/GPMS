import React from 'react';
import { MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";
import { ImgF } from '../../style.js';
import { BrowserRouter as Router } from 'react-router-dom';



function Right({ src_right, h3_right }) {
  const Style_s = { paddingTop: "10px" }

  const Buton_S = { backgroundColor: " rgb(7, 212, 212)" }
  return (
    <MDBCol md="5" xl="4" style={Style_s}>
      <MDBView className="overlay rounded z-depth-2" waves data-aos="fade-left">
        <ImgF src={src_right} alt="" className="img-fluid" />
        <a href="#!">
          <MDBMask overlay="white-slight" />
        </a>
      </MDBView>
      <MDBCardBody className="pb-0">

        <h3 className="font-weight-bold mt-2 mb-3">
          <MDBIcon icon="eye" className="pr-2" />
          {h3_right}
        </h3>

        <Router>
          <MDBBtn rounded style={Buton_S} >
            See all
 </MDBBtn>

        </Router>




      </MDBCardBody>
    </MDBCol>
  );
}

export default Right;