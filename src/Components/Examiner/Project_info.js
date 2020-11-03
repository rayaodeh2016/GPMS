import React from 'react';

function Project_info  () {
    const H6_S={ fontWeight: 'bold', paddingLeft: "15px" }
    return (
        <div>
            
            <div className="row mt-3" >
                <h6 style={H6_S}  >Projects Name: </h6>
                    <div className="col-md-6"> <span type="text"  ></span></div>
                </div>
                <div className="row mt-3" >
                    <h6 style={H6_S}  >  Supervisor Name: </h6>
                    <div className="col-md-6"> <span type="text"  ></span></div>
                </div>
                <div className="row mt-3" >
                    <h6 style={H6_S}>  Students Name: </h6>
                    <div className="col-md-6"> <span type="text"  ></span></div>
                </div>
                <div className="row mt-3" >
                    <h6 style={H6_S} >  Time: </h6>
                    <div className="col-md-6"> <span type="text"  ></span></div>
                </div>
                <div className="row mt-3" >
                    <h6 style={H6_S}  >  Place: </h6>
                    <div className="col-md-6"> <span type="text"  ></span></div>
                </div>
        </div>
    );
};

export default Project_info;