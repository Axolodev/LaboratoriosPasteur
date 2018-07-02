import React from 'react';
import styled from 'styled-components';

import ContactMethods from './ContactMethods';
import Message from './Message';
import Questions from './Questions';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 29% 17% 16.5% auto;
  grid-template-rows: 18% auto 15%;
  box-sizing: border-box;
  height: 380px;
  padding: 1.6em 4.5em 1em;
  background-color: ${props => props.theme.color.darkBlue};
  font-family: ${props => props.theme.fontFamily.main};
  color: white;

  h1 {
    font-size: 16px;
    padding: 0 0 2em 0.8em;
  }

  p, li {
    font-size: 12px;
  }
`

const Motto = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  padding: 13px 10px;

  p {
    font-size: 14px;
    font-family: ${props => props.theme.fontFamily.main};
  }
`

const Contacts = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`

const Schedule = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  box-sizing: border-box;
  padding: 0 0 0 2em;
`

const DirectMessage = styled.div`
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  box-sizing: border-box;
  padding: 0 0 0 0.4em;

`

const FAQ = styled.div`
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  padding: 0 0 0 1em;
`

const Rights = styled.div`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  display: flex;
  align-items: center;
`

const Website = styled.div`
  grid-column: 2 / 4;
  grid-row: 3 / 4;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
  }
`

const ContactInfo = () => (
  <Layout>
    <Motto>
      <p>Laboratorios Pasteur, 21 años cuidandonos juntos.</p>
      <p>Brindando certeza accesible en análisis clínicos.</p>
    </Motto>
    <Contacts>
      <h1>CONTACTO</h1>
      <ContactMethods />
    </Contacts>
    <Schedule>
      <h1>HORARIO</h1>
    </Schedule>
    <DirectMessage>
      <h1>MENSAJE DIRECTO</h1>
      <Message />
    </DirectMessage>
    <FAQ>
      <h1>PREGUNTAS FREQUENTES</h1>
      <Questions />
    </FAQ>
    <Rights>
      <p>Derechos Reservados a Laboratorios Pasteur 2018</p>
    </Rights>
    <Website>
      <p>www.laboratoriospasteur.mx</p>
    </Website>
  </Layout>
);

export default ContactInfo;
