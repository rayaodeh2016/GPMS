import React from 'react';

function Front({src, name})
{
    return (
        <div className="card__front">
        <div class="card card-01">
          <div class="profile-box-01">
            <img class="card-img-top" src={src} />
          </div>
          <div class="card-body text-center">
            <span class="badge-box"><i class="fas fa-code"></i></span>
            <h4 class="card-title">{name}</h4>
          </div>
        </div>
      </div>
    );
}

export default Front;