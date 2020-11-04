import React ,{useHistory} from 'react';
import { MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";
import { ImgF } from '../../style.js';
import { BrowserRouter as Router ,Route ,Link} from 'react-router-dom';
import ALL_Project from '../../../AllProjects/SeeAllProjects/All_Projects';


function Right({src_right, h3_right})
{
  
  
    const Buton_S = { backgroundColor: " rgb(7, 212, 212)" }
    return (
        <MDBCol md="5" xl="4" >
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
                <MDBBtn rounded style={Buton_S}   >
 See all<Route exact path='/' component={ALL_Project} />
 </MDBBtn> 
    
</Router>     
 
 

         
        </MDBCardBody>
      </MDBCol>
    );
}

export default Right;