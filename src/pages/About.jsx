import React from 'react';
import styled from 'styled-components';

import { MainText } from './../styles/AppStyles';

import Footer from './../components/Footer';
import OurInfo from './../components/AboutUs/OurInfo';
import ButtonQuoteContainer from './../components/Delivery/ButtonQuoteContainer';

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

const InfoBox = styled.div`
  box-sizing: border-box;
  padding: 40px 60px 0 60px;
  background-color: white;
`;

const About = () => (
  <Layout>
    <Placeholder />
    <InfoBox> <OurInfo /> </InfoBox> 
    <ButtonQuoteContainer quote={text} />
    <Footer />
  </Layout>
);

export default About;