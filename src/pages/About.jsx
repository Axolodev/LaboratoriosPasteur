import React from 'react';
import styled from 'styled-components';

import { MainText } from './../styles/AppStyles';

import OurInfo from './../components/AboutUs/OurInfo';
import DeliveryButton from './../components/Home/DeliveryButton';

const InfoCont = styled.div`
  display: flex;
`;

const Delivery = styled.div`
  display: flex; 
`;

const Layout = MainText(styled.div`
  height: 100vh;
  background: darkgoldenrod;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`);

const About = () => (
  <Layout>
    <InfoCont>
      <OurInfo />  
    </InfoCont>
    <Delivery>

    </Delivery>
      <DeliveryButton />
  </Layout>
);

export default About;