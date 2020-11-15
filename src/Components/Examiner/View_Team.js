import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import TableV from './Table';
import Grade from './Grade/Grade';
import ProjectInfo from './Project_info';

function View_Team(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const Button_see = { right: "50%", float: "right" }

    return (
        <Modal
            {...props}
            size="lg"
            centered

        >
            <Modal.Header closeButton style={{ backgroundColor: "rgba(7, 212, 212, 0.911)" }} >
                <h2>
                    Team Deatails
          </h2>
          
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#fff", height: " 80vh" }}>
            <Button style={Button_see} onClick={() => setModalShow(true)}> Grade </Button>
            <ProjectInfo/>
        
<TableV/>
<Grade show={modalShow} onHide={() => setModalShow(false)}/>

               
            </Modal.Body>

        </Modal>



    );
}
export default View_Team;
