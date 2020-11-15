
import React, {useState  } from 'react';

import 'react-responsive-modal/styles.css';


function Table_Some() {

    
    const [Table_Value] = useState([
        { "id": 1,"Student":"Raya" ,"Grade": "99", "feedback": "good" },


    ])

    const TableList = Table_Value.map(Value => {
        return (
            <tr key={Value.id}>
                <td>{Value.Student}</td>
                <td>{Value.Grade}</td>
                <td>{Value.feedback}</td>


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
                                        <th>Student Name </th>
                                        <th>Grade</th>
                                        <th>Feedback</th>

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