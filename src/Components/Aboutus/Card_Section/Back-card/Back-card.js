import React from 'react';
import Link from './Link/Links';

function Back({name , txt, href1, href2, href3})
{
    return (
        <div class="card__back">
        <div class="card card-01">
          <div class="card-body text-center">
            <h4 class="card-title">{name}</h4>
            <p class="card-text">{txt}</p>
             <Link href1={href1} href2={href2} href3={href3} />
          </div>
        </div>
      </div>
    );
}

export default Back;