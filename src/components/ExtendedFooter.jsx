import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const ServicioDomicilio = styled.div`
  display: grid;
  grid-template: 4fr 3fr / 3fr 1fr;
  grid-template-areas: 
    "title button"
    "subtitle button";
  background: white;
  height: 163px;
`;


const DomicilioMainText = styled.div`
  color: ${props => props.theme.secondaryHighlightColor};
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const Banner = styled.div`
  background: darkred;
  height: 200px;
`;

const ExtendedFooter = () => (
  <Layout>
    <ServicioDomicilio>
      <DomicilioMainText>Lorem ipsum dolor sit</DomicilioMainText>

    </ServicioDomicilio>
    <Banner></Banner>
  </Layout>
);

export default ExtendedFooter;