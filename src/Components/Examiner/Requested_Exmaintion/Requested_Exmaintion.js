
import React, { Component } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'react-responsive-modal/styles.css';
import Modal_info from './Project_info_modal';


function Table_Some() {

    const [modalShow, setModalShow] = React.useState(false);

    const [Table_Value] = useState([
        { "id": 1,"project_Name":"GPMS" ,"SuperVisor": "Yazeed" },


    ])

    const TableList = Table_Value.map(Value => {
        return (
            <tr key={Value.id}  onClick={() => setModalShow(true)}>
                <td>{Value.project_Name}</td>
                <td>{Value.SuperVisor}</td>
              <td>  <Button variant="success"><i class="fas fa-check"></i></Button>   <Button variant="danger"> <i class="fas fa-times"></i> </Button></td>


            </tr>
        )
    });

    return (
        <div>
            <div className="col-lg-11 grid-margin stretch-card" style={{ paddingTop: "20px" }}>
                <div className="card"  >
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>

                                    <tr>
                                        <th>Project Name </th>
                                        <th>Supervisor</th>
                                        <th>State</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {TableList}
                                    <Modal_info  show={modalShow} onHide={() => setModalShow(false)}/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default Table_Some;