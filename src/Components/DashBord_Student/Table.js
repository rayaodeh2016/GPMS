
import React, { Component } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'react-responsive-modal/styles.css';
import Detail from './Modal';

function Table_Some() {
    
    

    const [show, setModalShow] = useState(false);
    const [Table_Value] = useState([
        { "id": 1, "Task_Des": "Homework", "State": "Done" },
        { "id": 2, "Task_Des": "Homework", "State": "pendding" },


    ])

    const TableList = Table_Value.map(Value => {
        return (
            <tr key={Value.id}>
                <td>{Value.id}</td>
                <td>{Value.Task_Att}</td>
                <td  > {Value.State}    </td>
                <td>
                    <Button className="btn "  onClick={() => setModalShow(true)}  className="btn-openModal" ><i class="far fa-eye"></i></Button>
                    <Detail show={show} onHide={() => setModalShow(false)} />
                </td>

            </tr>
        )
    });

    return (
        <div>
            <div className="col-lg-6 grid-margin stretch-card" style={{ paddingTop: "20px" }}>
                <div className="card"  >
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>

                                    <tr>
                                        <th>#</th>
                                        <th>Description</th>
                                        <th>State</th>
                                        <th>detailes</th>
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

        </div>
    );
}


export default Table_Some;