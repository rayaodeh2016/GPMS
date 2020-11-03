import React from 'react';
import Front from './Front-card/Front-card';
import Back from './Back-card/Back-card';

function Card({src, name, txt, href1, href2, href3})
{
    return (
        <div className="col-md-3">

            <div className="card-flipper effect__hover" data-id="1">
                   <Front src={src} name={name} />
                   <Back name={name} txt={txt} href1={href1} href2={href2} href3={href3} />
            </div>
            
          </div>
    );
}

export default Card;