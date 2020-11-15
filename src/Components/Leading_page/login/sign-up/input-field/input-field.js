import React from 'react';


function input_field({Icon, type, placeholder})
{
    return (
        <div class="input-field">
          <i class={Icon}></i>
          <input type={type} placeholder={placeholder} />
        </div>
    );
}

export default input_field;