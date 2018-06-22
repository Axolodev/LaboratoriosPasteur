import React from 'react';
import styled from 'styled-components';

import OurInfo from '../OurInfo';
import ButtonQuoteContainer from '../Delivery/ButtonQuoteContainer';

const text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.";

const Layout = styled.div`
  background: #989898;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

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
    <InfoBox>
      <OurInfo />
    </InfoBox>
    <ButtonQuoteContainer quote={text} />
  </Layout>
);

export default About;