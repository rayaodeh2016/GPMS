import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import Table_G from './Table_G';

function View_Team(props) {
    const Button_see = { right: "50%", float: "right" }
    const H6_S = { fontWeight: 'bold', paddingLeft: "15px" }


    return (
        <Modal
            {...props}
            size="lg"
            centered

        >
            <Modal.Header closeButton style={{ backgroundColor: "rgba(7, 212, 212, 0.911)" }} >
                <h2>
                    Grade
          </h2>

            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#fff", height: " 80vh" }}>

                <Table_G />
                <Button style={Button_see}> Submit </Button>
            </Modal.Body>

        </Modal>



    );
}
export default View_Team;
