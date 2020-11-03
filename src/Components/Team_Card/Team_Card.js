import React, { Component, useState } from 'react';
import { Button } from "mdbreact";
import Creat_team from '../CreatNewTeam/CreateNewTeam';
import NewTask from '../Edit_newTask/createTask';

function Team_card() {
    
    const [modalShow, setModalShow] = React.useState(false);
    const [view, setModalShow_v] = React.useState(false);

    const [Teams] = useState([
        { "id": 1, "name": "GPMS", "field": "Web Dev." },
        { "id": 2, "name": "MedApp", "field": "AI" },
        { "id": 3, "name": "Market", "field": "Android" },
        { "id": 4, "name": "CSE", "field": "ML" },
        { "id": 5, "name": "PTUK", "field": "Web Dev." }
    ])

    const Style_div = { paddingLeft: "150px", paddingTop: "150px" };
    const H1S = { position: "center", textAlign: "center", fontFamily: "'Vidaloka', serif" };
    const Bu_s = { marginBottom: "10px" };

    const TeamsList = Teams.map(Value => {
        return (
            <div className="col-sm-4" >
                <div className="card" key={Value.id}>
                    <div className="card-body">
                        <h3 className="card-title">Team {Value.id}</h3>
                        <p className="card-text">{Value.name}</p>
                        <p className="card-text">{Value.field}</p>
                        <Button onClick={() => setModalShow(true)}> view <i class="fas fa-eye"></i></Button>

                    </div>
                </div>
            </div>
        )
    });

    return (

        <div>

            <div className="container" style={Style_div}>
                <h1 style={H1S}>Teams <i class="fas fa-users"></i></h1>
                <Button onClick={() => setModalShow_v(true)} style={Bu_s}> Create New Team <i class="fas fa-plus"></i></Button>
                <Creat_team show={view} onHide={() => setModalShow_v(false)} />
                <NewTask show={modalShow} onHide={() => setModalShow(false)} />
                <div className="row">
                    {TeamsList}
                </div>
            </div>
        </div>
    )
}


export default Team_card;