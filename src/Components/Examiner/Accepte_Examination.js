import React, { Component, useState } from 'react';
import { Button } from "mdbreact";
import View_Team from './View_Team';
import RequestEx from './Requested_Exmaintion/index';


function  Accepted_Eximination() {
    
    const [modalShow, setModalShow] = React.useState(false);
    const [view, setModalShow_v] = React.useState(false);
    const H2S = { position: "center", textAlign: "left", fontFamily: "'Vidaloka'" ,paddingBottom: "10px" };

    const [Teams] = useState([
        { "id": 1, "name": "GPMS", "Supervisor": "Yazeed" ,"Date":"2-1-2021","Time":"12:00 pm ","Place":"B216"},
        { "id": 2, "name": "LMS", "Supervisor": "Yazeed2" ,"Date":"2-1-2021","Time":"12:00 pm ","Place":"B216"},
    ])

    const Style_div = { paddingLeft: "150px", paddingTop: "150px" };
    const H1S = { position: "center", textAlign: "center", fontFamily: "'Vidaloka'" };
    const Bu_s = { marginBottom: "10px",textAlign:'right' };

    const TeamsList = Teams.map(Value => {
        return (
            <div className="col-sm-4" >
                 
                <div className="card" key={Value.id}>
                  
                    <div className="card-body">
                        <center>
                       
                        <h3 className="card-text">{Value.name}</h3>
                        <h5 className="card-text">{Value.Supervisor}</h5>
                        <h5 className="card-text">{Value.Date}</h5>
                        <h5 className="card-text">{Value.Time}</h5>
                        <h5 className="card-text">{Value.Place}</h5>
                        <Button onClick={() => setModalShow(true)}> view <i class="fas fa-eye"></i></Button>
                        </center>
                    </div>
                </div>
            </div>
        )
    });

    return (

        <div>

            <div className="container" style={Style_div}>
                <h1 style={H1S}>Examination </h1>
                <h2 style={H2S}>Accepted Eximination</h2>
                <Button onClick={() =>setModalShow_v(true)}  style={Bu_s}> Requested Examination <i class="fas fa-plus"></i></Button>
                <RequestEx show={view} onHide={() => setModalShow_v(false)}/>
                <View_Team show={modalShow} onHide={() => setModalShow(false)} />
             
                <div className="row">
                    {TeamsList}
                </div>
            </div>
        </div>
    )
}


export default Accepted_Eximination;