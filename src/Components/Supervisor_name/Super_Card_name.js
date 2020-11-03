

import './Style.css';
import React, { useState } from 'react';


function Super_Card_name() {

    const [Teams] = useState([
        { "id": 1, "field": "Web Dev.", "name": "DR.Yazeed", "image": "url(https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)" },
        { "id": 2, "field": "Web Dev.", "name": "DR.Mohammad", "image": "url(https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)" },
        { "id": 3, "field": "Web Dev.", "name": "DR.Anas", "image": "url(https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)" },
        { "id": 4, "field": "Web Dev.", "name": "DR.Motaz", "image": "url(https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)" },
        { "id": 5, "field": "Web Dev.", "name": "DR.Thaear", "image": "url(https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)" },
        { "id": 6, "field": "Web Dev.", "name": "DR.Yazeed", "image": "url(https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)" },
        { "id": 7, "field": "Web Dev.", "name": "DR.Yazeed", "image": "url(https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)" },
        { "id": 8, "field": "Web Dev.", "name": "DR.Yazeed", "image": "url(https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)" },


    ])


    const DoctorList = Teams.map(Value => {
        return (

            <div className="card1" key={Value.id} style={{ backgroundImage: `${Value.image}` }}>
                <div className="content1"  >
                    <h2 className="title1" >{Value.name}</h2>
                    <p className="copy1">{Value.field}</p>
                    <button className="btn1"> View Profile </button>
                </div>
            </div>

        )
    });

    return (
        <div><h2 style={{ textAlign: 'center', paddingTop: '120px', fontFamily: '"Rubik"',paddingLeft:'110px' }}>Computer Engineering Department supervisors <i class="fas fa-user-tie"></i> </h2>
            <main className="page-content1">

                {DoctorList}
            </main>
        </div>
    );
};


export default Super_Card_name;