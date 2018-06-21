import React from 'react';
import styled from 'styled-components';

import { MainText } from './../styles/AppStyles';

import Footer from './../components/Footer';
import OurInfo from './../components/AboutUs/OurInfo';
import DeliveryButton from './../components/Home/DeliveryButton';
import Quote from './../components/AboutUs/Quote';

const text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.";

const Layout = MainText(styled.div`
  background: #989898;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`);


const Placeholder = styled.img`
  height: 200px;
`;

const Separator = styled.div`
  padding: 45px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
`;

const InfoBox = styled.div`
  box-sizing: border-box;
  padding: 40px 60px 0 60px;
  background-color: white;
`;

const About = () => (
  <Layout>
    <Placeholder />
    <InfoBox> <OurInfo /> </InfoBox> 
    <Separator>
      <DeliveryButton />
    </Separator>
    <Quote text={text}/>
    <Footer />
  </Layout>
);

export default About;