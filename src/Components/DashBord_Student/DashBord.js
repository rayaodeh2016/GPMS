import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Table_Dash from './Table';

function MyVerticallyCenteredModal(props) {
    const Button_see = { right: "50%", float: "right" }

    const L_Style = { fontSize: '18px', paddingTop: "8px", fontFamily: 'Vidaloka', fontWeight: "bold" }
    const [Personal_info, setitems] = useState([
        /*هدول حيكونو من الداتا بيس  */

        { "id": 1, "Name": "GPMS", "lable": "Projects Name" },
        { "id": 2, "Name": "File", "lable": "Sylibas" },
        { "id": 3, "Name": "File", "lable": "Abstract" },
        { "id": 4, "Name": "File", "lable": "Theises" },
    ]);
    const Personal_Info_Disable = Personal_info.map(Value => {
        return (
            <div class="row mt-3" key={Value.id}>
                <div className="col-md-3">
                    <div style={L_Style}>{Value.lable}</div> </div>
                <div className="col-md-6" ><input type="text" className="form-control" placeholder={Value.Name} disabled /></div>

            </div>
        )
    });
    return (
        <center style={{ paddingTop: "120px" ,paddingLeft:"120px"}}>
<h2 style={{ fontFamily: '"Rubik"'}}> Dashbord</h2>
            <div className="col-lg-6 grid-margin stretch-card" style={{ paddingTop: "20px" }}>
                {Personal_Info_Disable}

            </div>
            <Table_Dash />
        </center>


    );
}
export default MyVerticallyCenteredModal;
