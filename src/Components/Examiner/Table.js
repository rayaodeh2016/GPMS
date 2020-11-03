
import React, { Component } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'react-responsive-modal/styles.css';


function Table_Some() {

    const [show, setShow] = useState(false);
    const [Table_Value] = useState([
        { "id": 1, "FileName": "Homework", "Task_Att": "Type" },


    ])

    const TableList = Table_Value.map(Value => {
        return (
            <tr key={Value.id}>
                <td>{Value.FileName}</td>
                <td>{Value.Task_Att}</td>


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
                                        <th>File Name </th>
                                        <th>Type</th>

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