import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';


function MyVerticallyCenteredModal(props) {

  const L_Style = { fontSize: '18px', paddingTop: "8px", fontFamily: 'Vidaloka', fontWeight: "bold" }
  const [Task_info] = useState([
    /*هدول حيكونو من الداتا بيس  */

    { "id": 1, "lable": "Task Date", "Name": "2-11-2020" },
    { "id": 2, "lable": "Time", "Name": "12:35pm" },
    { "id": 3, "lable": "Deadline", "Name": "7-11-2020" },
    { "id": 4, "lable": "State ", "Name": "not submited" },
    { "id": 5, "lable": "Student_no ", "Name": "201610068" },
    { "id": 6, "lable": "Feedback", "Name": "" },

  ]);
  const Task_Info_Disable = Task_info.map(Value => {
    return (
      <div class="row mt-3" key={Value.id}>
        <div className="col-md-3">
          <div style={L_Style}>{Value.lable}</div> </div>
        <div className="col-md-6" ><input type="text" className="form-control" placeholder={Value.Name} disabled /></div>

      </div>
    )
  });



  return (
    <Modal
      {...props}
      size="lg"
      centered

    >
      <Modal.Header closeButton style={{ backgroundColor: "rgba(7, 212, 212, 0.911)" }} >
        <h2>
          Task Deatails
          </h2>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#fff" }} >
        {Task_Info_Disable}
       
          <div style={{
            display: "grid"
          }}>
            <Button style={{margin: "auto",marginTop:'10px'}}><i class="far fa-calendar-check"> Submit </i></Button>
          
        </div>
      </Modal.Body>

    </Modal>
  );
}
export default MyVerticallyCenteredModal;
