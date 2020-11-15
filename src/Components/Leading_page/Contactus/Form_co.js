
import React from "react";
import { Input, InputSubmit, Textarea, Form } from './style.js';



const Form_co = () => {

  const Text_Areastyle = { height: "150px", width: "100%" }

  return (
    <Form  name ="form" action="/ajax/email" method="POST" onSubmit="">

      <Input type="text" id="email" name="email" placeholder="Your Email.." required />
      <Input type="text" id="name" name="name" placeholder="Your Name.." required />
      <Textarea id="message" name="message" placeholder="Write Your message ." style={Text_Areastyle} required ></Textarea>
      <InputSubmit type="submit" value="Submit" />
    </Form>

  );
}

export default Form_co;