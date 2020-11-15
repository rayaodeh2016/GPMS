import React from 'react';

function Front({src, name})
{
    return (
        <div className="card__front">
        <div className="card card-01">
          <div className="profile-box-01">
            <img alt="" className="card-img-top" src={src} />
          </div>
          <div className="card-body text-center">
            <span className="badge-box"><i class="fas fa-code"></i></span>
            <h4 className="card-title">{name}</h4>
          </div>
        </div>
      </div>
    );
}

export default Front;