import React from "react";

import Contact from '../../Image/img/contact.svg';
import Formc from './Form_co';
import { ColumnS, Rows, Img, Container, H2} from './style.js';

const ContactPage = () => {

  const Wstyle = {width: "100%"}
  return (
    <div >
      <Container style={Wstyle}>
        <H2>Contact Us</H2>
        <Rows data-aos="fade-up" id="contact">
          <ColumnS>
            <Img src={Contact} style={Wstyle} />
          </ColumnS>
          <ColumnS>
            <Formc />
          </ColumnS>
        </Rows>
      </Container>
    </div>
  );
}

export default ContactPage;