import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import TableG from './Table_G';

function Grade(props) {
    const Button_see = { right: "50%", float: "right" }
     return (
        <Modal  {...props}    size="lg"  centered  >
            <Modal.Header closeButton style={{ backgroundColor: "rgba(7, 212, 212, 0.911)" }} >
                <h2> Grade </h2>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#fff", height: " 80vh" }}>
                <TableG />
                <Button style={Button_see}> Submit </Button>
            </Modal.Body>
        </Modal>
    );
}
export default Grade;
