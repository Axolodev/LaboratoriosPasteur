import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 29% 17% 16.5% auto;
  grid-template-rows: 18% auto 15%;
  box-sizing: border-box;
  height: 380px;
  padding: 1.6em 4.5em 1em;
  background-color: ${props => props.theme.secondaryHighlightColor};
  font-family: ${props => props.theme.mainTextFontFamily};
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
  }
`

const Contacts = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`

const ContactList = styled.ul`
  list-style-type: none;
  margin: 0;
  line-height: 0.9em;
`

const ContactItem = styled.div`
  display: flex;
  height: 1.8em;
  padding: 0 0 0 0.8em;
  align-items: center;

  > p:first-child {
    flex: 1;
  }

  > p:last-child {
    flex: 2;
  }
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

  p {
    padding: 0.2em 0 0.5em 2.3em;
  }

  textarea {
    height: 2.2em;
    width: 95%;
    margin: 0 0 1em 0;
    resize: none;
  }

  textarea[name='Mensaje'] {
    height: 4em;
  }

  input {
    width: 50%;
    float: right;
  }
`

const FAQ = styled.div`
  grid-column: 4 / 5;
  grid-row: 2 / 3;
  padding: 0 0 0 1em;

  h2 {
    font-size: 12px;
    font-style: italic;
    color: #989897;
    padding: 0 0 0.8em 0.3em;
  }

  ul {
    padding: 0 0 1.2em 1.9em;
    line-height: 1.1;
  }
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
      <ContactList>
        <ContactItem>
          <p>Dirección</p>
          <p>Av. Chapultepec 1922-A<br/>
          Col. Buenos Aires, Monterrey, Nuevo León</p>
        </ContactItem>
        <hr/>
        <ContactItem>
          <p>Teléfono</p>
          <p>01 (81) 8354 8491<br/>
          8358 3957</p>
        </ContactItem>
        <hr/>
        <ContactItem>
          <p>Email</p>
          <p>pastuer.laboratorio@yahoo.com.mx</p>
        </ContactItem>
        <hr/>
        <ContactItem>
          <p>Redes Sociales</p>
          <p>@laboratoriospasteuranalisisclinicos</p>
        </ContactItem>
      </ContactList>
    </Contacts>
    <Schedule>
      <h1>HORARIO</h1>
    </Schedule>
    <DirectMessage>
      <h1>MENSAJE DIRECTO</h1>
      <p>Email</p>
      <textarea name='Email'/>
      <p>Mensaje</p>
      <textarea name='Mensaje'/>
      <input type='submit' value='Enviar'/>
    </DirectMessage>
    <FAQ>
      <h1>PREGUNTAS FREQUENTES</h1>
      <h2>Aut fore senserit arbitror ex nisi probant et coniunctione. Appellat est dolor possumus, do iis quis senserit.</h2>
      <ul>
        <li>- Doctrina veniam labore iis fugiat et cupidatat sed tempor incididunt.</li>
        <li>- Quae eruditionem nescius dolor nescius te in et illum admodum.</li>
      </ul>
      <h2>Senserit a duis non dolore deserunt se quem veniam.</h2>
      <ul>
        <li>- Amet vidisse ingeniis ad amet qui e tempor incurreret.</li>
      </ul>
      <h2>Si ne tempor fugiat multos, nostrud ut voluptate.</h2>
      <ul>
        <li>- Esse litteris voluptate, quamquam e ipsum mentitum.</li>
      </ul>
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
