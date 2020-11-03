
import React, { Component } from 'react';
import { useState } from 'react';
import 'react-responsive-modal/styles.css';


function Table_Some() {
     

    const [Table_Value] = useState([
        { "id": 1, "user_id": "2000", "name": "GPMS", "Dep": "cse.", "Year": "2018", "Students": "raya a" },
        { "id": 2, "user_id": "2000", "name": "GPMS", "Dep": "cse.", "Year": "2018", "Students": "raya a" },
        { "id": 3, "user_id": "2000", "name": "GPMS", "Dep": "cse.", "Year": "2018", "Students": "raya a" },
        { "id": 4, "user_id": "2000", "name": "GPMS", "Dep": "cse.", "Year": "2018", "Students": "raya a" },

    ])

    const TableList = Table_Value.map(Value => {
        return (
            <tr key={Value.id}>
                <td>{Value.user_id}</td>
                <td>{Value.name}</td>
                <td  > {Value.Students}  </td>
                <td >{Value.Year}</td>
                <td> {Value.Dep} </td>
            </tr>
        )
    });

    return (
        <div>
            <div className="col-lg-11 grid-margin stretch-card" style={{ paddingTop: "20px" }}>
                <div className="card" >
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead>

                                    <tr>
                                        <th>ID </th>
                                        <th>Project Name</th>
                                        <th>Students</th>
                                        <th>Year </th>
                                        <th>Department </th>
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