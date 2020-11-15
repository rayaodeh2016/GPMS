
import React  from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'react-responsive-modal/styles.css';
import ModalP from '../../Modal/ModalP';
import { MDBCol } from "mdbreact";

function Table_Some() {
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  const Crad_s = { marginLeft: " auto", marginRight: "auto", marginTop: 'auto' }
  const [Table_Value] = useState([
  { "id": 1, "name": "GPMS", "Supervisor": "DR.Yazeed.", "Year": "2018" },
  { "id": 2, "name": "GPMS", "Supervisor": "DR.Yazeed.", "Year": "2018" },
  { "id": 3, "name": "ASD", "Supervisor": "DR.Yazeed.", "Year": "2018" },
  { "id": 4, "name": "LMS", "Supervisor": "DR.Yazeed.", "Year": "2018" },
  { "id": 5, "name": "ML", "Supervisor": "DR.Yazeed.", "Year": "2018" },
  { "id": 6, "name": "AI", "Supervisor": "DR.Yazeed.", "Year": "2018" },
  ])
  
  function Search_Filter() {
    let filter = document.getElementById('myinput').value.toUpperCase();
    let myTable = document.getElementById('mytable');
    let tr =myTable.getElementsByTagName('tr');
    for (var i=0 ;i<tr.length;i++ ){
      let td=tr[i].getElementsByTagName('td')[0];
      if(td){
        let textvalue=td.textContent || td.innerHTML;
        if(textvalue.toUpperCase().indexOf(filter) >-1){
          tr[i].style.display="";
        }else{
          tr[i].style.display="none";
        }
      }

    }


  }
  const TableList = Table_Value.map(Value => {
    return (
      <tr key={Value.id}>
        <td>{Value.name}</td>
        <td>{Value.Supervisor}</td>
        <td >{Value.Year}</td>
        <td  >
          <Button onClick={() => setShow(true)} className="btn-openModal">
            <i className=" far fa-eye "></i>
          </Button>
        </td>
      </tr>
    )
  });

  return (
    <div>
      <div className="col-lg-11 grid-margin stretch-card" style={Crad_s}>
        <div className="card">
          <div className="card-body">
            <div className="table-responsive"  >
              <table className="table table-hover" id="mytable">
                <thead>

                  <MDBCol md="6">
                    <div className="active-pink-3 active-pink-4 mb-4">
                      <input className="form-control" type="text" placeholder="Search" aria-label="Search" id="myinput" onKeyUp={Search_Filter} />
                    </div>
                  </MDBCol>




                  <tr>
                    <th>Projects Names </th>
                    <th>Supervisor</th>
                    <th>Year</th>
                    <th>view</th>
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


export default Table_Some;