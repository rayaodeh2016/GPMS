import React from 'react';

function Link({href1, href2, href3})
{
    return (
        <span class="social-box">
          <a href={href1}><i class="fa fa-facebook"></i></a>
          <a href={href2}><i class="fa fa-twitter"></i></a>
          <a href={href3}><i class="fa fa-google-plus"></i></a>
        </span>  
    );
}

export default Link;