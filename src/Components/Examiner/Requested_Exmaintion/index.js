import React from 'react';
import { Modal, Button } from 'react-bootstrap';
 import Table_E from './Requested_Exmaintion';



function View_Team(props) {
    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <Modal.Header closeButton style={{ backgroundColor: "rgba(7, 212, 212, 0.911)" }} >
                <h2>
                    Requested Exmination
          </h2>

            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#fff", height: " 80vh" }}>

                <Table_E />



            </Modal.Body>

        </Modal>



    );
}
export default View_Team;
