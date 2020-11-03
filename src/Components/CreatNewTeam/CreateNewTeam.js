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
          Create New Team
          </h2>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#fff" }} >
        <div className="row mt-3">
          <div className="col-md-6"><input type="text" className="form-control" placeholder="Projects Name" /></div>

        </div>
        <div className="row mt-3">

          <div className="col-md-6"><input type="text" className="form-control" placeholder="Feild" /></div>

        </div>
        <div className="row mt-3">

          <div className="col-md-6"><input type="text" className="form-control" placeholder="Students Name" />
          </div>
          <Button><i className="fas fa-user-plus"></i></Button>

        </div>
        <div className="row mt-3">

          <div className="col-md-6"><input type="text" className="form-control" placeholder="Students Id" /></div>
          <Button><i class="fas fa-user-plus"></i></Button>
        </div>

        <Table_Team />
        <Button style={Button_see}> Save </Button>
      </Modal.Body>

    </Modal>
  );
}
export default MyVerticallyCenteredModal;
