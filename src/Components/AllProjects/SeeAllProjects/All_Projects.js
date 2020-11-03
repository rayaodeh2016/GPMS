
import React from 'react';
import { useState } from 'react';
import Search from '../../Search/Search';
import { Button, Modal } from 'react-bootstrap';
import 'react-responsive-modal/styles.css';
import { ModalP } from '../../Modal/ModalP';

function App() {

  const Col_S = { marginLeft: " auto", marginRight: "auto", marginTop: 'auto' }
  const Table_S = { textAlign: 'center' }

  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);

  const [Table_Value, setitems] = useState([
    /*هدول حيكونو من الداتا بيس  */
    { "id": 1, "name": "Library Managment System", "Supervisor": "DR.Yazeed.", "Students": "Raya odeh", "Year": "2018" },
    { "id": 2, "name": "Library Managment System", "Supervisor": "DR.Yazeed.", "Students": "Raya odeh", "Year": "2018" },
    { "id": 3, "name": "Library Managment System", "Supervisor": "DR.Yazeed.", "Students": "Raya odeh", "Year": "2018" },
    { "id": 4, "name": "Library Managment System", "Supervisor": "DR.Yazeed.", "Students": "Raya odeh", "Year": "2018" },
    { "id": 5, "name": "Library Managment System", "Supervisor": "DR.Yazeed.", "Students": "Raya odeh", "Year": "2018" },
  ])

  const TableList = Table_Value.map(Value => {
    return (
      <tr key={Value.id}>
        <td>{Value.name}</td>
        <td>{Value.Supervisor}</td>
        <td>{Value.Students}</td>
        <td >{Value.Year}</td>
        <td>
          <Button className="btn " onClick={() => setShow(true)} className="btn-openModal" ><i class="fas fa-file"> </i> </Button>
        </td>
        <td>
          <Button className="btn" onClick={() => setShow(true)} className="btn-openModal"><i class="fas fa-hand-holding"></i> </Button>
        </td>
      </tr>
    )
  });
  return (
    <div style={{ paddingTop: "20px" }}>
      <div className="col-lg-12" style={Col_S}>
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover" style={Table_S}>
                <thead>
                  <Search />
                  <tr>
                    <th>Projects Names </th>
                    <th>Supervisor Name</th>
                    <th>Students Names</th>
                    <th>Year</th>
                    <th>Abstract</th>
                    <th>Request Theises</th>
                  </tr>
                </thead>
                <tbody>
                  {TableList}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ModalP show={show} close={closeModalHandler} center />
    </div>
  );
}

export default App;