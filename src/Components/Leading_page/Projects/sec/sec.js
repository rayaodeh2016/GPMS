import React from 'react';
import Left from './Left/Left';
import Right from './Right/Right';
import { MDBRow } from "mdbreact";

function Sec({src_left, h3_left, src_right, h3_right})
{
    return (
        <MDBRow className="d-flex justify-content-center" >
           <Left  src_left={src_left} h3_left={h3_left} />
           <Right src_right={src_right}  h3_right={h3_right} />
        </MDBRow>
    );
}

export default Sec;