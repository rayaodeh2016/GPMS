import React, { Component, useState } from 'react';
import { Button } from "mdbreact";
function Team_card() {
    const Style_div = { paddingLeft: "150px", paddingTop: "150px" };
    const H1S = { position: "center", textAlign: "center", fontFamily: "'Vidaloka', serif" ,paddingBottom: "80px" };
    
    const [Teams] = useState([
        { "id": 1, "name": "Raya Odeh", "field": "Computer system Engineer" },
        { "id": 2, "name": "Hanaa sous", "field": "Computer system Eng." },
        { "id": 3, "name": "Farah Diab", "field": "Computer system Eng." },
    ])
       const TeamsList = Teams.map(Value => {
        return (
            <div className="col-sm-4" >
                <div className="card" key={Value.id}>
                    <div className="card-body">
                        <h4 className="card-text">{Value.name}</h4>
                        <h6 className="card-text">{Value.field}</h6>
                        <Button style={{bordarSize:'2px'}}> Contact </Button>
                        
                    </div>
                </div>
            </div>
        )
    });

    return (

        <div>

            <div className="container" style={Style_div}>
                <h1 style={H1S}>Our Group Team <i class="fas fa-users"></i></h1>
                <div className="row">
                {TeamsList}
                </div>
            </div>
        </div>
    )
}


export default Team_card;