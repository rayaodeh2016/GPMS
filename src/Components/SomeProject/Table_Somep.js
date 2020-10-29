
import React, { Component } from 'react';
import {  useState } from 'react';
import Search from '../Search/Search';
import { Button } from 'react-bootstrap';
import 'react-responsive-modal/styles.css';
import { ModalP } from '../Modal/ModalP';

function Table_Some() {
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  const Crad_s = { marginLeft: " auto", marginRight: "auto", marginTop: 'auto' }
  const [Table_Value, setitems] = useState([{ "id": 1, "name": "GPMS", "Supervisor": "DR.Yazeed.", "Year": "2018" },
  { "id": 2, "name": "GPMS", "Supervisor": "DR.Yazeed.", "Year": "2018" },
  { "id": 3, "name": "GPMS", "Supervisor": "DR.Yazeed.", "Year": "2018" },
  { "id": 4, "name": "GPMS", "Supervisor": "DR.Yazeed.", "Year": "2018" },
  { "id": 5, "name": "GPMS", "Supervisor": "DR.Yazeed.", "Year": "2018" },
  { "id": 6, "name": "GPMS", "Supervisor": "DR.Yazeed.", "Year": "2018" },
  ])  

  const TableList = Table_Value.map(Value => {
    return (  
        <tr key={Value.id}>
          <td>{Value.name}</td>
          <td>{Value.Supervisor}</td>
          <td >{Value.Year}</td>
          <td  >
            <Button className="btn" onClick={() => setShow(true)} className="btn-openModal">
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
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <Search/>
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