import React, { Fragment } from "react";

import Contact from '../img/contact.svg';
import Form_c from './Form_co';
import { Column_S, Row_s, Img, Container, H2, Form_S } from './style.js';

const ContactPage = () => {

  const Wstyle = {width: "100%"}
  return (
    <Form_S >
      <Container style={Wstyle}>
        <H2>Contact Us</H2>
        <Row_s data-aos="fade-up" id="contact">
          <Column_S>
            <Img src={Contact} style={Wstyle} />
          </Column_S>
          <Column_S>
            <Form_c />
          </Column_S>
        </Row_s>
      </Container>
    </Form_S>
  );
}

export default ContactPage;