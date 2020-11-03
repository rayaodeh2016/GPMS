
import React, { Component } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'react-responsive-modal/styles.css';


function Table_Some() {

    const [show, setShow] = useState(false);
 const [Table_Value] = useState([
        { "id": 1, "Task_Des": "Homework", "Task_Att": "GPMS", "Done": "yesحتكون ايقونة ملونة حسب الحالة", "Feedback": "9" },
        { "id": 2, "Task_Des": "Homework", "Task_Att": "GPMS", "Done": "yesحتكون ايقونة ملونة حسب الحالة", "Feedback": "9" },
        { "id": 3, "Task_Des": "Homework", "Task_Att": "GPMS", "Done": "yesحتكون ايقونة ملونة حسب الحالة", "Feedback": "9" },
        { "id": 4, "Task_Des": "Homework", "Task_Att": "GPMS", "Done": "yesحتكون ايقونة ملونة حسب الحالة", "Feedback": "9" },


    ])

    const TableList = Table_Value.map(Value => {
        return (
            <tr key={Value.id}>
                <td>{Value.Task_Des}</td>
                <td>{Value.Task_Att}</td>
                <td  > {Value.Done}    </td>
                <td >{Value.Feedback}</td>

                <td>
                    <Button className="btn " onClick={() => setShow(true)} className="btn-openModal" ><i class="far fa-edit"></i></Button>
                </td>

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
                                        <th>Task Descreption </th>
                                        <th>Task Att</th>
                                        <th>Done?</th>
                                        <th>Feedback</th>
                                        <th>Edit</th>
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