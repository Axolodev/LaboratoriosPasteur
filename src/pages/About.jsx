import React from 'react';
import styled from 'styled-components';

import { MainText } from './../styles/AppStyles';

const Layout = MainText(styled.div`
  height: 100vh;
  background: darkgoldenrod;
  display: flex;
  align-items: center;
  justify-content: center;
`);

const Header = styled.h1`
  color: white;
  font-size: 4em;
`;

const About = () => (
  <Layout>
    <Header>About</Header>
  </Layout>
);

export default About;