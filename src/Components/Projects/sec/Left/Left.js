import React from 'react';
import { MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView } from "mdbreact";

import { ImgF } from '../../style.js';

function Left({src_left, h3_left})
{

    const Buton_S = { backgroundColor: " rgb(7, 212, 212)" }

    return (
        <MDBCol md="5" xl="4" >
        <MDBView className="overlay rounded z-depth-2" waves data-aos="fade-right">
          
          <ImgF src={src_left} className="img-fluid" />
        </MDBView>
        <MDBCardBody className="pb-0">

          <h3 className="font-weight-bold mt-2 mb-3">
            <MDBIcon fas icon="chart-line" className="pr-2" />
                {h3_left}
              </h3>
          <MDBBtn rounded style={Buton_S}>
            See all
            </MDBBtn>
        </MDBCardBody>
      </MDBCol>
    );
}

export default Left;