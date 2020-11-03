import React from 'react';

import X from '../Edit_Profile/User.png';

import { useEffect, useState } from 'react';
function Edit_Profile() {

    const L_Style = { fontSize: '18px', paddingTop: "8px", fontFamily: 'Vidaloka', fontWeight: "bold" }
    const [Personal_info, setitems] = useState([
        /*هدول حيكونو من الداتا بيس  */
        { "id": 1, "Name": "201610068", "lable": "User id" },
        { "id": 2, "Name": "CSE", "lable": "Department" },
        { "id": 3, "Name": "Engineering and technology", "lable": "College" },
        { "id": 4, "Name": "Kufurthulth", "lable": "Address " },
        { "id": 5, "Name": "0595793024", "lable": "Phone Number" },
        { "id": 6, "Name": "rayaodeh123@gmail.com", "lable": "Email" },
    ])

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
        <div style={{ paddingTop: "180px", paddingLeft: "20%" }}>
            <div className="container rounded " style={{ borderColor: ' rgb(7, 212, 212)', borderStyle: "solid", borderWidth: "5px" }} >
                <div className="row ">
                    <div className="col-md-6 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" src={X} width="120" />
                            <div style={{ fontSize: '18px', paddingTop: "4px", fontFamily: 'Vidaloka', fontWeight: "bold" }}> Raya Odeh</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="p-3 py-3">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h3 style={{ fontSize: '30px', paddingTop: "4px", fontFamily: 'Vidaloka', paddingLeft: "100px" }} >  User Profile <i class="fas fa-id-card"></i></h3>
                            </div>
                            {Personal_Info_Disable}

                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <button className="btn btn-primary profile-button" type="button" style={{float:"right"}}> Edit Profile </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Edit_Profile;