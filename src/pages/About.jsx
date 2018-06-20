import React from 'react';
import styled from 'styled-components';

import { MainText } from './../styles/AppStyles';

import OurInfo from './../components/AboutUs/OurInfo';
import DeliveryButton from './../components/Home/DeliveryButton';
import Quote from './../components/AboutUs/Quote';

const text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.";

const InfoCont = styled.div`
  display: flex;
  width: 100%;
  background-color: #${props => props.background};
  align-items: center;
  flex-direction: column;
`;

const Layout = MainText(styled.div`
  height: 135vh;
  background: #989898;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`);

const About = () => (
  <Layout>
    <InfoCont background={"ffffff"}>
      <OurInfo />  
      
      <DeliveryButton />
    </InfoCont>
    <InfoCont background={"989898"}>
      <Quote text={text}/>
    </InfoCont>
  </Layout>
);

export default About;