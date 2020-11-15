
import React from 'react';
import { useState } from 'react';
import { MDBCol } from "mdbreact";
import { Button } from 'react-bootstrap';
import 'react-responsive-modal/styles.css';
import ModalP from '../../../Modal/ModalP';

function App() {
  const ColS = { marginLeft: " auto", marginRight: "auto", marginTop: 'auto' }

  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);

  const [Table_Value] = useState([
    /*هدول حيكونو من الداتا بيس  */
    { "id": 1, "name": "Library Managment System", "Supervisor": "DR.Yazeed.", "Students": "Raya odeh", "Year": "2018" },
    { "id": 2, "name": "GPMS", "Supervisor": "M.", "Students": "Azhar", "Year": "2202" },
    { "id": 3, "name": "ASDF", "Supervisor": "Sa.", "Students": "Raya odeh", "Year": "2020" },
    { "id": 4, "name": "XCS", "Supervisor": "lllla", "Students": "Hanna", "Year": "2019" },
    { "id": 5, "name": "rATALI", "Supervisor": "DR.Yazeed.", "Students": "Raya odeh", "Year": "2018" },
  ])


  function Search_Filter() {
    let filter = document.getElementById('myinput').value.toUpperCase();
    let myTable = document.getElementById('mytable');
    let tr = myTable.getElementsByTagName('tr');
    for (var i = 0; i < tr.length; i++) {
      let td = tr[i].getElementsByTagName('td')[0];
      let td1 = tr[i].getElementsByTagName('td')[1];

      if (td || td1) {
        let textvalue = td.textContent || td.innerHTML;
        let textvalue1 = td1.textContent || td1.innerHTML;
        if (textvalue.toUpperCase().indexOf(filter) > -1 || textvalue1.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }

      }

    }


  }

  const TableList = Table_Value.map(Value => {
    return (
      <tr key={Value.id}>
        <td>{Value.name}</td>
        <td>{Value.Supervisor}</td>
        <td>{Value.Students}</td>
        <td >{Value.Year}</td>
        <td><Button  onClick={() => setShow(true)} className="btn-openModal" ><i class="fas fa-file"> </i> </Button>
        </td>
        <td><Button  onClick={() => setShow(true)} className="btn-openModal"><i class="fas fa-hand-holding"></i> </Button>
        </td>
      </tr>
    )
  });
  return (
    <div style={{ paddingTop: "20px" }} id="x">
      <div className="col-lg-12" style={ColS}>
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover" id="mytable">
                <thead>
                  <MDBCol md="6">
                    <div className="active-pink-3 active-pink-4 mb-4">
                      <input className="form-control" type="text" placeholder="Search" aria-label="Search" id="myinput" onKeyUp={Search_Filter} />
                    </div>
                  </MDBCol>

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