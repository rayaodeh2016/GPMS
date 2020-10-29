
import React from "react";
import { Input, InputSubmit, Lable,Textarea, Form} from './style.js';

const Form_co= () => {

  const Text_Areastyle = {height: "150px", width: "100%" }
  
  return (
 <Form action="/x">
             
              <Input type="text" id="email" name="Email" placeholder="Your Email.." />
              
              <Input type="text" id="name" name="Name" placeholder="Your Name.." />
              
              <Textarea id="subject" name="subject" placeholder="Write Your message ." style={Text_Areastyle}></Textarea>
              <InputSubmit type="submit" value="Submit" />
            </Form>

);
}

export default Form_co;