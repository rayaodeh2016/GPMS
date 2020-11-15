import React, {useEffect, useState} from 'react';
import Inputfield from './input-field/input-field';
import Axios from 'axios';

function Sign_up()
{
    const [InputField,setInputField] = useState([]);

    useEffect( () => {  
      Axios.get('js/Data.json').then(res => {setInputField(res.data.Login_Sign_Up)});
    },[])
  
    const Item = InputField.map( (item) => {
      return (
        <Inputfield key={item.id} Icon={item.icon} type={item.in_type} placeholder={item.in_placeholder}  />
      )
  })

   return (
    <form action="#" class="sign-up-form">
    <h2 className="title">Sign up</h2>
     
      {Item}
      
    <input type="submit" className="btn1" value="Sign up" />

  </form>
   );
}

export default Sign_up;