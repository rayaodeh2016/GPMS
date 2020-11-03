import React from 'react';
import { } from './Modal.css';
import { Col, Image, Container, Row } from 'react-bootstrap';
import img1 from '../Modal/img/projet.svg';
import img2 from '../Modal/img/student.svg';
import img3 from '../Modal/img/team.svg';

export const ModalP = ({ show, close }) => {
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
        <p >Library Managment System</p>
        <span onClick={close} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content" style={Modal_con} >
        <div  >
        </div>
        <div className="modal-body">
          <Container>
            <Row>
              <Col xs={3} md={4}>
                <img className="img-fluid" src={img1} rounded />
              </Col>
              <Col xs={6} md={4}>
                <Image className="img-fluid" src={img2} rounded />
              </Col>
              <Col xs={6} md={4}>
                <Image className="img-fluid" src={img3} rounded />
              </Col>

            </Row>
          </Container>

          <div style={Div_s}>

            <Row> <p>Project Names :<span>LMS</span></p></Row>
            <Row>  <p>Supervisor Name :<span>DR.Yazeed</span></p> </Row>
            <Row>  <p>Students Names :<span>Hanaa , Azhar </span></p> </Row>
            <Row>  <p>Abstract :<span>هو مشروع لمساعدة الطلاب في استعارة الكتب</span></p> </Row>
          </div>

        </div>
        <div className="modal-footer">

          <button  >Request Thesis</button>
        </div>
      </div>
    </div>
  )
};