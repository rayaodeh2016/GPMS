import React, { Component } from 'react';
import { Button } from "mdbreact";
import { Card } from 'react-bootstrap';

class Team_card extends Component {
    state = {
        Teams: [
            { "id": 1, "name": "GPMS", "field": "Web Dev." },
            { "id": 2, "name": "MedApp", "field": "AI" },
            { "id": 3, "name": "Market", "field": "Android" },
            { "id": 4, "name": "CSE", "field": "ML" },
            { "id": 5, "name": "PTUK", "field": "Web Dev." }


        ]
    }



    render() {
        const { Teams } = this.state;
        const Style_div = { paddingLeft: "150px", paddingTop: "150px" };
        const H1S = { position: "center", textAlign: "center", fontFamily: "'Vidaloka', serif" };
        const Bu_s = { marginBottom: "10px" };
        const TeamsList = Teams.map(Team => {
            return (
                <div className="col-sm-4" >
                    <div className="card" key={Team.id}>
                        <div className="card-body">
                            <h3 className="card-title">Team {Team.id}</h3>
                            <p className="card-text">{Team.name}</p>
                            <p className="card-text">{Team.field}</p>
                            <Button href="#" >view <i class="fas fa-eye"></i></Button>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div>
                <div className="container" style={Style_div}>
                    <h1 style={H1S}>Teams <i class="fas fa-users"></i></h1>
                    <Button onClick="" style={Bu_s}>Create New Team <i class="fas fa-plus"></i></Button>
                    <div className="row">
                        {TeamsList}
                    </div>
                </div>
            </div>
            )
    }
}

export default Team_card;