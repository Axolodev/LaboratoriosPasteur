import React from 'react';
import styled from 'styled-components';

import { MainText } from './../styles/AppStyles';

import OurInfo from './../components/AboutUs/OurInfo';

const InfoCont = styled.div`
  display: flex;
`;

const Delivery = styled.div`
  display: flex; 
  border: 1px solid blue;
  width: 100%;
`;

const Layout = MainText(styled.main`
  height: 100vh;
  background: darkgoldenrod;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`);

const Header = styled.h1`
  color: white;
  font-size: 4em;
`;


const About = () => (
  <Layout>
    {/*  
      - Container for parragraphs and image
      - Servicio a domicilio (buttom)
      - Quote about us
      - Footer
      */}
    <InfoCont>
      <OurInfo> Information </OurInfo>  
    </InfoCont>
    <Delivery> Delivery Button </Delivery>
    {/* <Header>About</Header> */}
  </Layout>
);

export default About;