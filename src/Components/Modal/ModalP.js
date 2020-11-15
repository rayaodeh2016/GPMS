import React, { useState } from 'react';
import './Modal.css';
import { Col, Image, Container, Row, Button } from 'react-bootstrap';
import img1 from '../Modal/img/user_i.png';


export const ModalP = ({ show, close }) => {
  const [Proj_info] = useState([
    { "id": 1, "ProjectName": "GPMS", "Super_name": "Yazeed", "Student_name": "Raya,Hanaa", "abstract": "هو مشروع لمساعدة الطلاب في استعارة الكتب " },



  ]);
  const Proj_Info_t = Proj_info.map(Value => {
    return (
      <div>
        <Row>  <p>  Project Names : <span>{Value.ProjectName}</span></p></Row>
        <Row>  <p>  Supervisor Name :<span>{Value.Super_name}</span></p> </Row>
        <Row>  <p>  Students Names :<span>{Value.Student_name}</span></p> </Row>
        <Row>  <p>  Abstract :<span>{Value.abstract}</span> </p></Row>
      </div>




    )
  });



  const Modal_S = {
    transform: show ? 'translateY(0vh)' : 'translateY(-30vh)',
    opacity: show ? '1' : '0',
    position: " absolute",
    float: "left",
    left: "25%",
    right: "25%",
    top: "5%",
  }
  const ModalH = { alignItems: 'center' }
  const Modal_con = { height: " 80vh", overflowY: "auto" }
  const Div_s = { paddingTop: "20px" }

  return (
    <div className="modal-wrapper" style={Modal_S}    >
      <div className="modal-header" style={ModalH}>
        <h3 >Library Managment System</h3>
        <span onClick={close} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content" style={Modal_con} >
        <div>
        </div>
        <div className="modal-body">
          <Container>
            <Row>
              <Col >
                <Image className="img-fluid" src={img1} rounded />
              </Col>
              <Col>
                <Image className="img-fluid" src={img1} rounded />
              </Col>
              <Col >
                <Image className="img-fluid" src={img1} rounded />
              </Col>

            </Row>
          </Container>

          <div style={Div_s}>

            {Proj_Info_t}
          </div>

        </div>
        <div className="modal-footer">

          <Button>Request Thesis</Button>
        </div>
      </div>
    </div>
  )
};


export default ModalP;

