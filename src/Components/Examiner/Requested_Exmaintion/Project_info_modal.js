import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import Project_info from '../Project_info';

function InofModal(props) {
  
    const Button_see = { right: "50%", float: "right" }
    


    return (
        <Modal
            {...props}
            size="small"
            centered

        >
            <Modal.Header closeButton style={{ backgroundColor: "rgba(7, 212, 212, 0.911)" }} >
                <h2>
                  Project Deatails 
          </h2>
          
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#fff", height: " 50vh" }}>
         
            <Project_info/>
           <center style={{paddingTop:"70px"}}> <Button variant="success"><i class="fas fa-check"></i></Button>   <Button variant="danger"> <i class="fas fa-times"></i></Button></center> 
        


               
            </Modal.Body>

        </Modal>



    );
}
export default InofModal;
