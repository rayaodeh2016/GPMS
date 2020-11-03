import React from 'react';
import './Style.css';
import X from './User.png';

import { useEffect, useState } from 'react';
function Edit_Profile() {

    const Icon_Style = { fontSize: '1.8rem', color: ' rgb(7, 212, 212)' }
    const [Personal_info, setitems] = useState([
        /*هدول حيكونو من الداتا بيس  */
        { "id": 1, "Name": "Raya Azmi odeh", "Icon": "fas fa-user" },
        { "id": 2, "Name": "CSE", "Icon": "far fa-building" },
        { "id": 3, "Name": "Engineering and technology", "Icon": "fas fa-university" },
    ])

    const Personal_Info_Disable = Personal_info.map(Value => {
        return (
            <div class="row mt-3" key={Value.id}>
                <i class={Value.Icon} style={Icon_Style}></i> <div className="col-md-6"><input type="text" className="form-control" placeholder={Value.Name} disabled /></div>

            </div>
        )
    });


    return (
        <div style={{ paddingTop: "180px", paddingLeft: "20%" }}>
            <div className="container rounded " style={{ borderColor: ' rgb(7, 212, 212)', borderStyle: "solid", borderWidth: "5px" }} >
                <div className="row ">
                    <div className="col-md-6 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" src={X} width="120" />
                            <span className="font-weight-bold"> Raya Odeh</span>
                            <span className="text-black-50">Rayaodeh123@gmail.com</span></div>

                    </div>
                    <div className="col-md-6" style={{ textAlign: 'center' }}>
                        <div className="p-3 py-3">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h3 className="text-black-50" style={{ textAlign: 'center' }}>Edit Profile <i class="fas fa-user-edit"></i></h3>
                            </div>
                            {Personal_Info_Disable}
                            <div className="row mt-3">
                                <i className="fas fa-phone" style={Icon_Style}></i>
                                <div className="col-md-6"><input type="text" className="form-control" placeholder="Phone Number" /></div>

                            </div>
                            <div className="row mt-3">
                                <i class="far fa-envelope" style={Icon_Style}></i>
                                <div className="col-md-6"><input type="text" className="form-control" placeholder="Email" /></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6"><button className="btn btn-primary profile-button" type="button"> Save Edit <i class="fas fa-check fa-lg"></i></button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edit_Profile;