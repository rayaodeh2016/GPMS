import React from 'react';
import { Modal, Button } from 'react-bootstrap';


import Table_Team from './Table';

function MyVerticallyCenteredModal(props) {
    const Button_see = { right: "50%", float: "right" }


    return (
        <Modal
            {...props}
            size="lg"
            centered

        >
            <Modal.Header closeButton style={{ backgroundColor: "rgba(7, 212, 212, 0.911)" }} >
                <h2>
                    New Task
          </h2>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#fff", height: " 80vh", overflowY: "auto" }}>
                <div className="row mt-3" >
                    <h6 style={{ fontWeight: 'bold', paddingLeft: "15px" }}  > <i class="far fa-lightbulb"></i>  Projects Name: </h6>
                    <div className="col-md-6"> <span type="text"  >GPMS</span></div>
                </div>
                <div className="row mt-3">
                    <h6 style={{ fontWeight: 'bold', paddingLeft: "15px" }}  >  <i class="fas fa-users"></i>  Students Names : </h6>
                    <div className="col-md-6"> <span ></span></div>

                    <div className="col-md-6"> <span type="text"  >Raya</span></div>
                    <div className="col-md-6"> <span type="text"  >Azhar</span></div>
                    <div className="col-md-6"> <span type="text"  >Farah</span></div>
                     <div className="col-md-6"> <span type="text"  >Hanaa</span></div>
                    <div className="col-md-6"> <span type="text"  >Hanaa2</span></div>
                </div>
                <Table_Team />
                <Button style={Button_see}> New Task </Button>
            </Modal.Body>

        </Modal>



    );
}
export default MyVerticallyCenteredModal;
