import React from 'react';
import { Button } from 'react-bootstrap';
import X from '../Edit_Profile/User.png';

import { useEffect, useState } from 'react';
function Edit_Profile() {
    const H3Style={ fontSize: '30px', paddingTop: "4px", fontFamily: 'Vidaloka', paddingLeft: "100px" }
    const Div_S={ fontSize: '18px', paddingTop: "4px", fontFamily: 'Vidaloka', fontWeight: "bold" }
    const Con_s={ borderColor: ' rgb(7, 212, 212)', borderStyle: "solid", borderWidth: "5px" }
    const Main_s={ paddingTop: "180px", paddingLeft: "20%" } 

    const L_Style = { fontSize: '18px', paddingTop: "8px", fontFamily: 'Vidaloka', fontWeight: "bold" }
    const [Personal_info] = useState([
        /*هدول حيكونو من الداتا بيس  */

        { "id": 1, "Name": "CSE", "lable": "Department" },
        { "id": 2, "Name": "Engineering and technology", "lable": "College" },
        { "id": 3, "Name": "Java , Web", "lable": "Feild" },

    ]);

    const [Teams] = useState([
        { "id": 1, "project": "GPMS", "name": "raya,Farah" },
        { "id": 2, "project": "LMS", "name": "Azhar,HANAA" },
        { "id": 3, "project": "ML", "name": "NOOR,SAID" },

    ])

    const TeamsList = Teams.map(Value => {
        return (
            <div className="col-sm-4" >
                <div className="card" key={Value.id}>
                    <div className="card-body">
                        <h3 className="card-title">Project {Value.id}</h3>
                        <p className="card-text">{Value.project}</p>
                        <p className="card-text">{Value.name}</p>
                        <p className="card-text">{Value.field}</p>
                        <Button  >Contact </Button>


                    </div>
                </div>
            </div>
        )
    });


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
        <div style={Main_s}>
            <div className="container rounded " style={Con_s} >
                <div className="row ">
                    <div className="col-md-6 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img class="rounded-circle mt-5" src={X} width="120" />
                            <div style={Div_S}> DR.Yazeed</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-3 py-3">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h3 style={H3Style} > 
                                Profile 
                                <i class="fas fa-id-card"></i>
                                </h3>
                            </div>
                            {Personal_Info_Disable}

                        </div>

                    </div>  {TeamsList}
                </div>

            </div>


        </div>

    );
};

export default Edit_Profile;